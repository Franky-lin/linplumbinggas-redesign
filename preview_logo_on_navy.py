from pathlib import Path
from PIL import Image

logo = Image.open('/home/ubuntu/webdev-static-assets/linplumbing-web/logo_white_transparent.png').convert('RGBA')
scale = min(720 / logo.width, 160 / logo.height)
logo = logo.resize((int(logo.width * scale), int(logo.height * scale)), Image.Resampling.LANCZOS)
canvas = Image.new('RGBA', (820, 220), (29, 67, 105, 255))
x = (canvas.width - logo.width) // 2
y = (canvas.height - logo.height) // 2
canvas.alpha_composite(logo, (x, y))
canvas.convert('RGB').save('/home/ubuntu/webdev-static-assets/linplumbing-web/logo_white_on_navy_preview.jpg', quality=92)
print('/home/ubuntu/webdev-static-assets/linplumbing-web/logo_white_on_navy_preview.jpg')
