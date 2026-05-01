from pathlib import Path
from PIL import Image, ImageOps

src_dir = Path('/home/ubuntu/webdev-static-assets/linplumbing-real')
out_dir = Path('/home/ubuntu/webdev-static-assets/linplumbing-web')
out_dir.mkdir(parents=True, exist_ok=True)

assets = {
    '98.jpg': ('logo', 900),
    '91.jpg': ('hero_vehicle_tools', 1800),
    '97.jpeg': ('team_vehicle_trust', 1400),
    '89.jpeg': ('finished_bathroom', 1400),
    '90.jpeg': ('gas_meter_test', 1400),
    '92.jpeg': ('gas_tools_site', 1400),
    '103.jpg': ('gas_pipe_wall', 1600),
    '99.jpeg': ('cctv_drain_inspection', 1400),
    '102.jpeg': ('stormwater_drainage', 1400),
    '93.jpeg': ('excavation_new_build', 1400),
    '94.jpeg': ('under_slab_pipework', 1400),
    '95.jpeg': ('heritage_pipe_repair', 1400),
    '96.jpeg': ('hot_water_plant_room', 1400),
    '100.jpeg': ('roof_copper_pipework', 1400),
    '101.jpeg': ('commercial_plant_pipework', 1400),
    '105.jpeg': ('complex_pipework', 1400),
}

manifest_rows = []
for filename, (slug, max_side) in assets.items():
    src = src_dir / filename
    if not src.exists():
        continue
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert('RGB')
        original = im.size
        w, h = im.size
        scale = min(1.0, max_side / max(w, h))
        if scale < 1:
            im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        out = out_dir / f'{slug}.jpg'
        im.save(out, format='JPEG', quality=82, optimize=True, progressive=True)
        manifest_rows.append((filename, out.name, original, im.size, out.stat().st_size))

manifest = ['# Optimized Web Asset Manifest', '', '| Source | Output | Original Size | Web Size | Bytes |', '|---|---|---:|---:|---:|']
for source, output, original, web_size, size in manifest_rows:
    manifest.append(f'| {source} | {output} | {original[0]}×{original[1]} | {web_size[0]}×{web_size[1]} | {size} |')

(Path('/home/ubuntu/linplumbinggas-redesign/optimized_asset_manifest.md')).write_text('\n'.join(manifest) + '\n', encoding='utf-8')
print('\n'.join(manifest))
