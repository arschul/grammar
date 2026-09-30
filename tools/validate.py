#!/usr/bin/env python3
"""GrammarHub validator.  Usage: python3 validate.py [--render] [files...]
Checks: JS syntax, tag balance, exercise data lint, hint lint, deck shape, American English,
headless solve test (always), type floor + overflow (--render)."""
import sys, os, re, glob, json, subprocess, html as ih, tempfile
REPO = os.environ.get('REPO', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
args = [a for a in sys.argv[1:] if not a.startswith('--')]
RENDER = '--render' in sys.argv
os.chdir(REPO)
files = args or sorted(glob.glob('*/*_activities.html') + glob.glob('*/*_slides.html'))
P = []  # problems
def bad(f, m): P.append(f'{f}: {m}')

BRE = [r'\bflat\b', r'\bflats\b', r'\bholiday', r'\bgot lost\b(?!)', r'\bwould have got\b', r'\bhave got\b', r'\bhas got\b', r'\bmum\b', r'\bqueues?\b',
       r'\bcolour', r'\bdefences?\b', r'\brumours?\b', r'criticis(?:e|ed|es|ing)\b', r'apologis(?:e|ed|es|ing)\b', r'organis(?:e|ed|es|ing|ation)\b', r'realis(?:e|ed|es|ing)\b', r'recognis(?:e|ed|es|ing)\b', r'practis(?:e|ed|es|ing)\b',
       r'travell', r'cancelled', r'neighbour', r'\bgrey\b', r'\bper cent\b', r'at weekends', r'\bcar park\b', r'\bresit\b', r'\bin hospital\b',
       r'\bdefence\b', r'favourite', r'\bcentre\b', r'\bdo your family\b', r'\bmaths\b', r'\bfootball pitch\b', r'\bautumn\b']
BRE = [b for b in BRE if 'got lost' not in b]
TAGS = 'tag-questions'
EXEMPT = {'tag-questions': {'not', "n't"}, 'future-possibility-certainty': {'probably', 'definitely', 'not', "n't"}, 'modals-of-deduction': {"n't", 'not'}}
def exempt(f, w): return any(k in f and w in v for k, v in EXEMPT.items())
HINT_WORDS = ['never', 'already', 'just', 'ever', 'yet', 'probably', 'definitely', 'still', 'not', "n't"]

def text(s): return re.sub(r'\s+', ' ', ih.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()

def js_blocks(h): return re.findall(r'<script>(.*?)</script>', h, re.S)

def data(h, name):
    js = '\n'.join(js_blocks(h))
    m = re.search(r'(?:const|let|var)\s+' + name + r'\s*=\s*\[', js)
    if not m: return None
    i = m.end() - 1; d = 0; q = None; esc = False
    for j in range(i, len(js)):
        c = js[j]
        if q:
            if esc: esc = False
            elif c == '\\': esc = True
            elif c == q: q = None
            continue
        if c in '"\'`': q = c; continue
        if c == '[': d += 1
        elif c == ']':
            d -= 1
            if d == 0: break
    r = subprocess.run(['node', '-e', 'process.stdout.write(JSON.stringify(eval(require("fs").readFileSync(0,"utf8"))))'],
                       input='(' + js[i:j+1] + ')', capture_output=True, text=True)
    return json.loads(r.stdout) if r.returncode == 0 else 'ERR'

for f in files:
    h = open(f, encoding='utf-8').read()
    for n, js in enumerate(js_blocks(h)):
        with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as t: t.write(js)
        r = subprocess.run(['node', '--check', t.name], capture_output=True, text=True)
        if r.returncode: bad(f, f'script #{n+1} syntax: {r.stderr.strip().splitlines()[-1]}')
    for tag in ('div', 'section', 'button', 'span'):
        o = len(re.findall(r'<%s[\s>]' % tag, h)); c = h.count('</%s>' % tag)
        if o != c: bad(f, f'<{tag}> {o} open vs {c} close')
    body = h.split('</style>', 1)[-1]
    if len(re.findall(r'class="[^"]*\b(?:theme-toggle|theme-btn)\b', body)) > 1: bad(f, 'more than one .theme-toggle/.theme-btn (leaf.v1.js paints them all as theme buttons)')
    visible = re.sub(r'<script>.*?</script>', '', body, flags=re.S)
    for b in BRE:
        for m in re.finditer(b, text(visible) + ' ' + ' '.join(js_blocks(h)), re.I):
            bad(f, f'British form "{m.group(0)}"')
    if f.endswith('_activities.html'):
        FILL, MIS, ORD = data(h, 'FILL'), data(h, 'MISTAKE'), data(h, 'ORDER')
        for nm, d in (('FILL', FILL), ('MISTAKE', MIS), ('ORDER', ORD)):
            if not isinstance(d, list) or len(d) != 5: bad(f, f'{nm} must have 5 items')
        for i, it in enumerate(FILL or []):
            if not isinstance(it.get('answer'), str): bad(f, f'FILL #{i+1} answer not a string')
            if it.get('sentence', '').count('_____') != 1: bad(f, f'FILL #{i+1} needs exactly one _____')
            ans = str(it.get('answer', '')).lower(); cue = (str(it.get('hint', '')) + ' ' + it.get('sentence', '')).lower()
            for w in HINT_WORDS:
                if exempt(f, w): continue
                if (w in ans.split() or (w == "n't" and "n't" in ans)) and w not in cue and not (w == "n't" and 'not' in cue) and not (w == 'not' and "n't" in cue):
                    bad(f, f'FILL #{i+1} answer needs "{w}" but no cue gives it')
        for i, it in enumerate(MIS or []):
            parts = re.findall(r'\[([^\]]+)\]', it['sentence'])
            if len(parts) != 4: bad(f, f'MISTAKE #{i+1} has {len(parts)} segments')
            m = re.match(r'\(([A-D])\)', text(it['explanation']))
            if not m or 'ABCD'.index(m.group(1)) != it['correct']: bad(f, f'MISTAKE #{i+1} explanation letter does not match key')
            if i < 3 and not (it.get('fix') and it.get('note')): bad(f, f'MISTAKE #{i+1} (on slide 9) lacks fix/note')
        if isinstance(MIS, list) and len({it['correct'] for it in MIS}) < 4: bad(f, 'MISTAKE error positions do not cover A–D')
        for i, it in enumerate(ORD or []):
            tok = lambda s: sorted(s.split())
            if tok(' '.join(it['words'])) != tok(it['answer']): bad(f, f'ORDER #{i+1} bank does not match answer')
            if not 4 <= len(it['words']) <= 12: bad(f, f'ORDER #{i+1} has {len(it["words"])} words')
    else:
        secs = re.findall(r'<section([^>]*)>(.*?)</section>', body, re.S)
        if len(secs) != 12: bad(f, f'{len(secs)} slides, expected 12')
        order = ['', '', '', '', '', 'mistake-static', 'giant', 'gap-list', 'toefl-list', 'complete-list', 'prompt-list', 'recap-grid']
        for k, cls in enumerate(order):
            if cls and k < len(secs) and cls not in secs[k][1]: bad(f, f'slide {k+1} should contain .{cls}')
        for attr, sb in secs:
            note = ih.unescape((re.search(r'data-note="([^"]*)"', attr) or [None, ''])[1])
            if not note: bad(f, 'slide without data-note')
            if 'toefl-row' in sb and re.search(r'\bcards?\b|red sentence', note, re.I): bad(f, f'slide-9 note describes cards: {note[:60]}')
            if 'mistake-static' in sb and sb.count('class="mistake-static"') == 4 and re.search(r'\b(three|two)\s+(\w+\s+)?(errors|mistakes)|top (three|two)\b', note, re.I) and not re.search(r'\bfour\b', note, re.I):
                bad(f, f'slide-6 note count mismatch: {note[:60]}')
        gl = re.search(r'<div class="gap-list">(.*?)</section>', body, re.S)
        for r in re.split(r'<div class="gap-row"', gl.group(1) if gl else '')[1:]:
            a = re.search(r'data-answer="([^"]*)"', r); hnt = re.search(r'class="verb-hint">(.*?)</span>', r)
            if not hnt: bad(f, f'gap row without hint: {text(r)[:50]}'); continue
            ans = ih.unescape(a.group(1)).lower() if a else ''; cue = text(hnt.group(1)).lower() + ' ' + text(r).lower().replace(ans, '')
            for w in HINT_WORDS:
                if exempt(f, w): continue
                if (w in ans.split() or (w == "n't" and "n't" in ans)) and w not in cue and not (w == "n't" and 'not' in cue) and not (w == 'not' and "n't" in cue):
                    bad(f, f'gap "{ans}" needs "{w}" but no cue gives it')
        if body.count('class="toefl-row"') != 3: bad(f, 'slide 9 must have 3 TOEFL rows')

# headless solve test + optional render checks
acts = [f for f in files if f.endswith('_activities.html')]
decks = [f for f in files if f.endswith('_slides.html')]
if acts or (RENDER and decks):
    from playwright.sync_api import sync_playwright
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import fontroute
    SOLVE = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'solve.js')).read()
    FLOOR = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'floor.js')).read()
    with sync_playwright() as p:
        b = p.chromium.launch(); ctx = b.new_context(); fontroute.install(ctx)
        for f in acts:
            pg = ctx.new_page(); errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.goto('file://' + os.path.abspath(f)); pg.wait_for_timeout(120)
            r = pg.evaluate(SOLVE)
            for k in ('fill', 'fillCurly', 'mistake', 'order'):
                if not r.get(k, '').startswith('OK'): bad(f, f'solve test {k}: {r.get(k)}')
            if r.get('done') != '12345': bad(f, f'rail completion {r.get("done")}')
            for e in errs: bad(f, f'page error: {e}')
            pg.close()
        if RENDER:
            pg = ctx.new_page(); pg.set_viewport_size({'width': 1920, 'height': 1080})
            for f in decks:
                pg.goto('file://' + os.path.abspath(f)); pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(150)
                n = pg.evaluate("document.querySelectorAll('.slide').length")
                for i in range(n):
                    pg.evaluate("i=>document.querySelectorAll('.slide').forEach((s,j)=>s.classList.toggle('active',j===i))", i)
                    pg.wait_for_timeout(30)
                    r = pg.evaluate(FLOOR, i)
                    if r['min'] < 28: bad(f, f'slide {i+1}: text at {r["min"]:.0f}px "{r["minText"]}"')
                    if r['over']: bad(f, f'slide {i+1}: content past canvas at {r["over"]}px')
                    pg.evaluate("()=>document.querySelectorAll('.slide.active .toefl-row,.slide.active .mistake-card,.slide.active .gap-btn,.slide.active .complete-row').forEach(e=>e.click())")
                    r2 = pg.evaluate(FLOOR, i)
                    if r2['over']: bad(f, f'slide {i+1} (revealed): content past canvas at {r2["over"]}px')
        b.close()

print(f'{len(files)} files checked, {len(P)} problems')
for x in P: print(' -', x)
sys.exit(1 if P else 0)
