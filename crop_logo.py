from pathlib import Path
from PIL import Image, ImageChops

src = Path('/home/ubuntu/webdev-static-assets/linplumbing-web/logo.jpg')
out = Path('/home/ubuntu/webdev-static-assets/linplumbing-web/logo_cropped.png')
img = Image.open(src).convert('RGB')
# Detect non-white content by comparing against a white background.
bg = Image.new('RGB', img.size, (255, 255, 255))
diff = ImageChops.difference(img, bg).convert('L')
# Threshold faint compression noise away.
mask = diff.point(lambda p: 255 if p > 18 else 0)
bbox = mask.getbbox()
if bbox is None:
    raise RuntimeError('No logo content detected')
left, top, right, bottom = bbox
pad_x = int((right - left) * 0.08)
pad_y = int((bottom - top) * 0.18)
box = (
    max(0, left - pad_x),
    max(0, top - pad_y),
    min(img.width, right + pad_x),
    min(img.height, bottom + pad_y),
)
cropped = img.crop(box)
cropped.save(out)
print(out)
