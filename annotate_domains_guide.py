from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

src = Path('/home/ubuntu/upload/pasted_file_vCEjhs_image.png')
out = Path('/home/ubuntu/linplumbinggas-redesign/domain_settings_guide_annotated.png')
img = Image.open(src).convert('RGB')
draw = ImageDraw.Draw(img)
w, h = img.size

try:
    font_big = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 34)
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 24)
    font_small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 20)
except Exception:
    font_big = font = font_small = None

red = (220, 38, 38)
yellow = (255, 196, 0)
blue = (30, 64, 175)
white = (255, 255, 255)
black = (20, 20, 20)

# Top-right management / panel icon area visible in screenshot
box1 = (w-95, 36, w-12, 92)
draw.rounded_rectangle(box1, radius=8, outline=red, width=6)
# Arrow from label to icon
label1 = (w-640, 105, w-115, 185)
draw.rounded_rectangle(label1, radius=12, fill=yellow, outline=black, width=2)
draw.text((label1[0]+18, label1[1]+12), '1. 先试点右上角这个小面板/窗口图标', fill=black, font=font)
draw.text((label1[0]+18, label1[1]+45), '它通常会打开右侧项目管理面板', fill=black, font=font_small)
draw.line((label1[2]-20, label1[1]+35, box1[0]+10, box1[3]), fill=red, width=6)
draw.polygon([(box1[0]+10, box1[3]), (box1[0]+24, box1[3]+4), (box1[0]+18, box1[3]-12)], fill=red)

# Left current task row
box2 = (0, 310, 245, 356)
draw.rounded_rectangle(box2, radius=8, outline=blue, width=5)
label2 = (270, 318, 760, 390)
draw.rounded_rectangle(label2, radius=12, fill=white, outline=blue, width=3)
draw.text((label2[0]+16, label2[1]+10), '2. 如果右上角打不开，点左边这个项目/任务', fill=black, font=font_small)
draw.text((label2[0]+16, label2[1]+38), '再在聊天记录里找网站 checkpoint 卡片的 View / Dashboard', fill=black, font=font_small)
draw.line((box2[2], box2[1]+20, label2[0], label2[1]+34), fill=blue, width=5)

# Scroll hint in chat area
label3 = (610, h-185, 1235, h-105)
draw.rounded_rectangle(label3, radius=12, fill=(239,246,255), outline=blue, width=3)
draw.text((label3[0]+16, label3[1]+12), '3. 也可以在中间聊天记录向上滚动，找到最新 checkpoint 卡片', fill=black, font=font_small)
draw.text((label3[0]+16, label3[1]+42), '点击卡片上的 View 或 Dashboard 后，再进 Settings → Domains', fill=black, font=font_small)

img.save(out, quality=95)
print(out)
