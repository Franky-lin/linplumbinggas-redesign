import csv
import time
import urllib.parse
import subprocess
import json

seeds = [
    "悉尼 水管工",
    "悉尼 水管",
    "悉尼 通渠",
    "悉尼 煤气工",
    "悉尼 热水器",
    "华人 水管工",
    "中文 水管工",
    "Eastwood 水管工",
    "Chatswood 水管工",
    "Hurstville 水管工",
    "Burwood 水管工",
    "Rhodes 水管工",
    "Epping 水管工",
    "plumber 中文",
    "Chinese plumber Sydney",
    "Sydney plumber Chinese",
    "plumber Eastwood",
    "blocked drain Sydney",
    "gas fitter Sydney",
    "hot water repair Sydney",
]

rows = []
for seed in seeds:
    for hl in ["zh-CN", "en-AU"]:
        params = urllib.parse.urlencode({
            "client": "firefox",
            "gl": "AU",
            "hl": hl,
            "q": seed,
        })
        url = "https://suggestqueries.google.com/complete/search?" + params
        try:
            completed = subprocess.run(
                ["curl", "-L", "--max-time", "6", "-A", "Mozilla/5.0", "-s", url],
                capture_output=True,
                text=True,
                timeout=8,
                check=False,
            )
            if completed.returncode != 0:
                raise RuntimeError((completed.stderr or completed.stdout or f"curl exit {completed.returncode}")[:300])
            data = json.loads(completed.stdout)
            suggestions = data[1] if len(data) > 1 else []
            if not suggestions:
                rows.append({"seed": seed, "hl": hl, "rank": 0, "suggestion": ""})
            for rank, s in enumerate(suggestions, start=1):
                rows.append({"seed": seed, "hl": hl, "rank": rank, "suggestion": s})
        except Exception as e:
            rows.append({"seed": seed, "hl": hl, "rank": "ERROR", "suggestion": str(e)})
        time.sleep(0.05)

out_csv = "/home/ubuntu/linplumbinggas-redesign/google_autocomplete_au_plumbing_2026-05-02.csv"
with open(out_csv, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["seed", "hl", "rank", "suggestion"])
    writer.writeheader()
    writer.writerows(rows)

unique = []
seen = set()
for row in rows:
    s = row["suggestion"].strip()
    if row["rank"] != "ERROR" and s and s not in seen:
        seen.add(s)
        unique.append(s)

out_md = "/home/ubuntu/linplumbinggas-redesign/google_autocomplete_au_plumbing_2026-05-02.md"
with open(out_md, "w", encoding="utf-8") as f:
    f.write("# Google Autocomplete 澳洲地区水管相关建议词\n\n")
    f.write("采集参数：client=firefox, gl=AU, hl=zh-CN/en-AU。Autocomplete 建议不等同于搜索量，但可反映 Google 中存在的查询组合与用户输入习惯。\n\n")
    f.write("## 去重建议词\n\n")
    for s in unique:
        f.write(f"- {s}\n")

print(f"Wrote {len(rows)} rows to {out_csv}")
print(f"Wrote {len(unique)} unique suggestions to {out_md}")
