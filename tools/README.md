# GrammarHub tools

Run before every push:

    npm i --prefix tools/fonts @fontsource-variable/bricolage-grotesque @fontsource-variable/newsreader @fontsource-variable/dm-sans   # once
    pip install playwright && playwright install chromium                                                                            # once
    python3 tools/validate.py --render          # all 126 files
    python3 tools/validate.py b1/foo_*.html     # just a new topic

`validate.py` checks JS syntax, tag balance, exercise data (5 items each, one gap per Fill sentence,
string answers, Word Order bank = answer, 4 segments and a matching letter in Find the Mistake),
hints (every slide gap has one and it names any never / already / just / not the answer needs),
the 12-slide order, stale teacher notes and British spellings. It also solves every activity
headlessly (answers must score 5/5, curly apostrophes included) and, with `--render`, renders every
slide with the real fonts: no student-facing text under 28px and nothing past the 1920×1080 canvas,
before and after answers are revealed.

`ghlib.py` holds the editing helpers: `R()` exact-count replace, `get()/put()` for the FILL /
MISTAKE / ORDER arrays, and `regen(deck)` which rebuilds slide 9 from MISTAKE items 1–3
(each needs `fix` and `note`).
