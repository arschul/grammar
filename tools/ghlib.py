"""GrammarHub helpers: exact-match edits, exercise-data get/put, slide 9 regeneration."""
import json, re, subprocess, os
REPO = os.environ.get('REPO', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def rd(p):
    return open(os.path.join(REPO, p), encoding='utf-8').read()

def wr(p, s):
    open(os.path.join(REPO, p), 'w', encoding='utf-8').write(s)

def R(p, old, new, n=1):
    """Replace exactly n occurrences of old in file p."""
    s = rd(p)
    c = s.count(old)
    if c != n:
        raise SystemExit(f'{p}: expected {n} of {old[:80]!r}, found {c}')
    wr(p, s.replace(old, new))

def RX(p, pat, new, n=1, flags=re.S):
    s = rd(p)
    s2, c = re.subn(pat, new, s, flags=flags)
    if c != n:
        raise SystemExit(f'{p}: regex expected {n} of {pat[:80]!r}, found {c}')
    wr(p, s2)

def _span(s, name):
    m = re.search(r'(?:const|let|var)\s+' + name + r'\s*=\s*\[', s)
    if not m:
        raise SystemExit('no ' + name)
    i = m.end() - 1
    d = 0; q = None; esc = False
    for j in range(i, len(s)):
        c = s[j]
        if q:
            if esc: esc = False; continue
            if c == '\\': esc = True; continue
            if c == q: q = None
            continue
        if c in '"\'`': q = c; continue
        if c == '[': d += 1
        elif c == ']':
            d -= 1
            if d == 0:
                return m.start(), i, j + 1
    raise SystemExit('unbalanced ' + name)

def get(p, name):
    s = rd(p)
    _, i, j = _span(s, name)
    out = subprocess.run(['node', '-e', 'process.stdout.write(JSON.stringify(eval(require("fs").readFileSync(0,"utf8"))))'],
                         input='(' + s[i:j] + ')', capture_output=True, text=True)
    if out.returncode:
        raise SystemExit(out.stderr)
    return json.loads(out.stdout)

def render(items):
    return '[\n' + ',\n'.join('  ' + json.dumps(it, ensure_ascii=False) for it in items) + '\n]'

def put(p, name, items):
    s = rd(p)
    _, i, j = _span(s, name)
    wr(p, s[:i] + render(items) + s[j:])

import html as ih
L = 'ABCD'
def norm(s): return re.sub(r'\s+', ' ', ih.unescape(re.sub(r'<[^>]+>', '', s))).strip()

def slide_rows(deck):
    s = rd(deck); out = {}
    for row in re.findall(r'<div class="toefl-row">(.*?)</div>\s*</div>', s, re.S):
        sent = re.search(r'<p class="tsent">(.*?)</p>', row, re.S).group(1)
        b = re.sub(r'<span class="tp(?: bad)?">(.*?)<i>[A-D]</i></span>', r'[\1]', sent)
        fix = re.search(r'&rarr;\s*<span class="tok">(.*?)</span>', row, re.S).group(1)
        note = re.search(r'<p class="tnote">&#10003;\s*(.*?)</p>', row, re.S).group(1)
        out[norm(b)] = (ih.unescape(fix), ih.unescape(note))
    return out

def row_html(it):
    k = [-1]; bad = it['correct']
    def sub(m):
        k[0] += 1
        return '<span class="%s">%s<i>%s</i></span>' % ('tp bad' if k[0] == bad else 'tp', m.group(1), L[k[0]])
    sent = re.sub(r'\[([^\]]+)\]', sub, ih.escape(it['sentence']))
    parts = re.findall(r'\[([^\]]+)\]', it['sentence'])
    return ('    <div class="toefl-row">\n      <p class="tsent">%s</p>\n'
            '      <div class="tanswer"><p class="tfix"><b>%s</b>%s &rarr; <span class="tok">%s</span></p>'
            '<p class="tnote">&#10003; %s</p></div>\n    </div>\n') % (sent, L[bad], ih.escape(parts[bad]), ih.escape(it['fix']), ih.escape(it['note']))

def regen(deck):
    a = deck.replace('_slides', '_activities')
    M = get(a, 'MISTAKE')[:3]
    for it in M:
        assert 'fix' in it and 'note' in it, (deck, it['sentence'])
    s = rd(deck)
    m = re.search(r'( *)<div class="toefl-list">\n', s)
    start = m.start()
    # find end of toefl-list div by depth
    d = 0
    for mm in re.finditer(r'<div\b|</div>', s[start:]):
        d += 1 if mm.group(0) != '</div>' else -1
        if d == 0: end = start + mm.end(); break
    new = m.group(1) + '<div class="toefl-list">\n' + ''.join(row_html(it) for it in M) + m.group(1) + '</div>'
    wr(deck, s[:start] + new + s[end:])
