Cover images for the press features.

One folder per feature, named with the entry's `id` from assets/js/press.js.
For example:

  assets/press/ratio-ad-india/cover.webp

Then in press.js set that entry's:

  dir:   "assets/press/ratio-ad-india",
  image: ["cover.webp", 1400, 933]

The two numbers are the file's pixel width and height. They reserve the right
space before the image loads, so the card never jumps. Read them with:

  python3 -c "from PIL import Image; im=Image.open('assets/press/<id>/cover.webp'); print(im.size)"

Until an entry has both dir and image it shows a set masthead of the
publication instead, which is deliberate rather than a missing image.
