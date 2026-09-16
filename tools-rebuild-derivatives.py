"""Rebuild the sm/ and md/ tiers from the full file. The full files are never
touched: this only replaces the derivatives the site hands to phones and small
tiles, which were written at quality 72 and added a second, visible generation
of loss on top of the studio's own compression.

Quality 92 is the target. The one guard is that a derivative has to be worth
fetching: if the 800px copy weighs as much as the 1600px file it came from, the
browser is better off taking the original, so quality steps down until the copy
is comfortably lighter. It never steps below 82, which is still well clear of
the 72 that caused the problem."""
import os, glob, math
from PIL import Image
import numpy as np

QUALITIES = [92, 90, 88, 86, 84, 82]
SHARE     = 0.75          # a derivative may weigh at most this much of its source
METHOD    = 6

def psnr(a, b):
    A=np.asarray(a.convert('RGB'),dtype=np.float32); B=np.asarray(b.convert('RGB'),dtype=np.float32)
    m=float(((A-B)**2).mean()); return 99.0 if m==0 else 10*math.log10(255*255/m)

def build(full, out, box):
    im = Image.open(full).convert('RGB')
    w, h = im.size
    tgt = (w, h) if w <= box else (box, max(1, round(h * box / float(w))))
    ref = im.resize(tgt, Image.LANCZOS) if tgt != (w, h) else im
    budget = os.path.getsize(full) * SHARE
    os.makedirs(os.path.dirname(out), exist_ok=True)
    for q in QUALITIES:
        ref.save(out, 'WEBP', quality=q, method=METHOD)
        if os.path.getsize(out) <= budget or q == QUALITIES[-1]:
            return psnr(Image.open(out), ref), os.path.getsize(out), q

rows, befores, afters = [], 0, 0
for full in sorted(glob.glob('assets/projects/*/[0-9]*.webp')):
    d, base = os.path.dirname(full), os.path.basename(full)
    for tier, box in (('sm', 800), ('md', 1600)):
        out = os.path.join(d, tier, base)
        if tier == 'md' and not os.path.exists(out):
            continue                       # md exists only where the opening needs it
        before = os.path.getsize(out) if os.path.exists(out) else 0
        db, after, q = build(full, out, box)
        befores += before; afters += after
        rows.append((db, q, out))

print("rebuilt %d derivative files" % len(rows))
print("weight %.1fMB -> %.1fMB" % (befores/1e6, afters/1e6))
p = sorted(r[0] for r in rows)
print("PSNR against the resampled original: min %.1f  median %.1f  max %.1f dB" % (p[0], p[len(p)//2], p[-1]))
from collections import Counter
print("quality used:", dict(sorted(Counter(r[1] for r in rows).items(), reverse=True)))
