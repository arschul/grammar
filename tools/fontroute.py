import os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fonts/node_modules/@fontsource-variable')
# setup once: npm i --prefix tools/fonts @fontsource-variable/bricolage-grotesque @fontsource-variable/newsreader @fontsource-variable/dm-sans
FACES = [('Bricolage Grotesque', 'normal', 'bricolage-grotesque/files/bricolage-grotesque-latin-standard-normal.woff2'),
         ('Newsreader', 'normal', 'newsreader/files/newsreader-latin-standard-normal.woff2'),
         ('Newsreader', 'italic', 'newsreader/files/newsreader-latin-standard-italic.woff2'),
         ('DM Sans', 'normal', 'dm-sans/files/dm-sans-latin-standard-normal.woff2'),
         ('DM Sans', 'italic', 'dm-sans/files/dm-sans-latin-standard-italic.woff2')]
CSS = ''.join("@font-face{font-family:'%s';font-style:%s;font-weight:100 900;src:url(https://fonts.gstatic.com/local/%d.woff2) format('woff2');}\n" % (f, s, i) for i, (f, s, _) in enumerate(FACES))
def install(ctx):
    ctx.route('**/fonts.googleapis.com/**', lambda r: r.fulfill(status=200, content_type='text/css', body=CSS))
    def gs(r):
        n = int(r.request.url.rsplit('/', 1)[1].split('.')[0])
        r.fulfill(status=200, content_type='font/woff2', body=open(os.path.join(D, FACES[n][2]), 'rb').read())
    ctx.route('**/fonts.gstatic.com/local/**', gs)
