from pathlib import Path
from PIL import Image, ImageChops, ImageFilter

src = Path('/home/ubuntu/webdev-static-assets/linplumbing-web/logo.jpg')
out_dir = Path('/home/ubuntu/webdev-static-assets/linplumbing-web')
out_dir.mkdir(parents=True, exist_ok=True)
transparent_white = out_dir / 'logo_white_transparent.png'
transparent_dark = out_dir / 'logo_dark_transparent.png'

img = Image.open(src).convert('RGBA')
# Remove large white background while preserving antialiased logo/text edges.
r, g, b, a = img.split()
# Whiteness score: lower alpha for near-white pixels, full alpha for dark ink.
# Use distance from white to create a smooth mask.
mask = ImageChops.difference(img.convert('RGB'), Image.new('RGB', img.size, (255, 255, 255))).convert('L')
mask = mask.point(lambda p: 0 if p < 10 else min(255, int((p - 10) * 2.2)))
mask = mask.filter(ImageFilter.GaussianBlur(0.35))
bbox = mask.point(lambda p: 255 if p > 20 else 0).getbbox()
if not bbox:
    raise RuntimeError('No logo content detected')
left, top, right, bottom = bbox
pad_x = max(18, int((right - left) * 0.08))
pad_y = max(14, int((bottom - top) * 0.20))
box = (max(0, left - pad_x), max(0, top - pad_y), min(img.width, right + pad_x), min(img.height, bottom + pad_y))
mask_crop = mask.crop(box)

white_layer = Image.new('RGBA', mask_crop.size, (255, 255, 255, 0))
white_layer.putalpha(mask_crop)
white_layer.save(transparent_white)

dark_layer = Image.new('RGBA', mask_crop.size, (33, 35, 38, 0))
dark_layer.putalpha(mask_crop)
dark_layer.save(transparent_dark)

print(transparent_white)
print(transparent_dark)
