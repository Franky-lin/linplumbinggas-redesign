from pathlib import Path

home = Path('/home/ubuntu/linplumbinggas-redesign/client/src/pages/Home.tsx')
assets = Path('/home/ubuntu/linplumbinggas-redesign/client/src/lib/linAssets.ts')
index = Path('/home/ubuntu/linplumbinggas-redesign/client/index.html')

# Update asset constant with user-provided residential hot water photo.
asset_text = assets.read_text()
asset_text = asset_text.replace(
    '  hotWaterPlantRoom: "/manus-storage/hot_water_plant_room_a78a6433.jpg",\n',
    '  hotWaterPlantRoom: "/manus-storage/hot_water_plant_room_a78a6433.jpg",\n  residentialHotWaterInstall: "/manus-storage/residential-rinnai-hot-water-install_e25c0ada.jpeg",\n'
)
assets.write_text(asset_text)

text = home.read_text()

# English customer-facing copy and new service coverage.
text = text.replace(
    'heroLead: "Call Lin Plumbing & Gas for emergency leaks, gas fitting, blocked drains, drain cleaning, hot water repairs, pipework installation and maintenance across Sydney.",',
    'heroLead: "Call Lin Plumbing & Gas for emergency leaks, gas fitting, blocked drains, stormwater systems, pump systems, drain cleaning, hot water repairs, pipework installation and maintenance across Sydney.",'
)
text = text.replace(
    'servicesCopy: "Clear service categories help customers find the right help quickly across emergency plumbing, gas fitting, blocked drains, drain cleaning, hot water repairs and pipework jobs.",',
    'servicesCopy: "Clear service categories help customers find the right help quickly across emergency plumbing, gas fitting, blocked drains, stormwater systems, pump systems, hot water repairs and pipework jobs.",'
)
text = text.replace(
    '      { icon: Droplets, title: "Blocked Drains", text: "Blocked drains, stormwater issues and CCTV pipe inspections supported by on-site diagnostic equipment.", image: REAL_PHOTOS.cctvDrainInspection },\n      { icon: Gauge, title: "Hot Water Systems", text: "Support for hot water plant rooms, pipework connections, maintenance and service coordination.", image: REAL_PHOTOS.hotWaterPlantRoom },',
    '      { icon: Droplets, title: "Blocked Drains", text: "Blocked drains, drain cleaning and CCTV pipe inspections supported by on-site diagnostic equipment.", image: REAL_PHOTOS.cctvDrainInspection },\n      { icon: Gauge, title: "Hot Water Systems", text: "Residential hot water installation, repairs, replacement advice, pipework connections and maintenance support.", image: REAL_PHOTOS.residentialHotWaterInstall },\n      { icon: Droplets, title: "Stormwater Systems", text: "Stormwater drainage, surface water issues, outdoor pipework and practical drainage solutions for Sydney properties.", image: REAL_PHOTOS.stormwaterDrainage },\n      { icon: Gauge, title: "Pump Systems", text: "Pump system pipework, basic fault checks, replacement coordination and practical support for water movement needs.", image: REAL_PHOTOS.hotWaterPlantRoom },'
)
text = text.replace(
    'drainsTitle: "Blocked Drains & CCTV Pipe Inspections",\n    drainsCopy: "Blocked drains need clear diagnosis, not guesswork. CCTV inspection and stormwater photos show the practical tools used for drain and pipe issues.",',
    'drainsTitle: "Blocked Drains, Stormwater Systems & Pump Support",\n    drainsCopy: "Blocked drains, stormwater systems and pump-related issues need clear diagnosis, not guesswork. CCTV inspection, drainage photos and practical site checks help identify the right next step.",'
)
text = text.replace(
    'areaTags: ["Emergency plumbing", "Gas fitting", "Blocked drains", "Hot water", "Drain cleaning", "Leak repairs", "Pipework installation"],',
    'areaTags: ["Emergency plumbing", "Gas fitting", "Blocked drains", "Stormwater systems", "Pump systems", "Hot water", "Drain cleaning", "Leak repairs", "Pipework installation"],'
)
text = text.replace(
    'seoEyebrow: "Local Search Services",\n    seoTitle: "What Customers Search For When They Need a Sydney Plumber",\n    seoCopy: "For urgent problems, customers often search by the exact issue: blocked drains, drain cleaning, leaking taps, burst pipes, hot water repairs, gas fitting or emergency plumber near them. This page keeps those service terms clear while still focusing on practical, licensed trade work.",\n    seoPoints: [\n      { title: "Blocked drains and drain cleaning", text: "CCTV pipe inspections, stormwater issues and blocked drain diagnosis for residential and commercial sites." },\n      { title: "Hot water repairs and plumbing maintenance", text: "Support for hot water systems, leaking fixtures, pipework connections and scheduled maintenance." },\n      { title: "Gas fitting and gas repairs", text: "Gas meter, gas pipework and compliance-minded service for Sydney customers." },\n    ],\n    faqEyebrow: "Search FAQ",\n    faqTitle: "Sydney Plumbing Questions Customers Ask Before Calling",\n    faqCopy: "Short, plain-language answers help customers understand when to call a licensed plumber or gas fitter, while giving search engines clearer context about the services Lin Plumbing & Gas provides.",',
    'seoEyebrow: "Service Guide",\n    seoTitle: "Plumbing, Drainage, Gas and Pump Services for Sydney Properties",\n    seoCopy: "Whether the issue is inside the home, outside in the drainage line, or connected to gas and hot water, Lin Plumbing & Gas keeps the service scope clear so customers can contact the right trade support quickly.",\n    seoPoints: [\n      { title: "Blocked drains and stormwater", text: "CCTV pipe inspections, drain cleaning, stormwater drainage and blocked drain diagnosis for residential and commercial sites." },\n      { title: "Hot water repairs and installation", text: "Support for residential hot water systems, leaking fixtures, pipework connections, replacement advice and scheduled maintenance." },\n      { title: "Pump systems and pipework", text: "Practical support for pump system pipework, basic fault checks, replacement coordination and water movement issues." },\n      { title: "Gas fitting and gas repairs", text: "Gas meter, gas pipework and compliance-minded service for Sydney customers." },\n    ],\n    faqEyebrow: "Common Questions",\n    faqTitle: "Common Plumbing Questions Before Booking",\n    faqCopy: "These answers help Sydney customers understand whether Lin Plumbing & Gas may be suitable for their plumbing, drainage, gas, hot water, stormwater or pump system issue.",'
)
text = text.replace(
    '      { question: "Can you help with blocked drains and CCTV pipe inspections?", answer: "Yes. The service coverage includes blocked drains, drain cleaning, stormwater issues and CCTV pipe inspection support to help identify likely pipe or drainage problems on site." },\n      { question: "Do you handle gas fitting and hot water repairs?", answer: "Yes. The business highlights gas fitting, gas repairs, LPG/GAS connections, gas meter-related work and hot water system repair or maintenance support." },',
    '      { question: "Can you help with blocked drains, stormwater and CCTV pipe inspections?", answer: "Yes. The service coverage includes blocked drains, drain cleaning, stormwater systems and CCTV pipe inspection support to help identify likely pipe or drainage problems on site." },\n      { question: "Do you handle pump systems?", answer: "Yes. Pump system support can be discussed for pump pipework, basic fault checks, replacement coordination and related water movement issues. Calling first is recommended so the site context can be confirmed." },\n      { question: "Do you handle gas fitting and hot water repairs?", answer: "Yes. The business highlights gas fitting, gas repairs, LPG/GAS connections, gas meter-related work and residential hot water system installation, repair or maintenance support." },'
)

# Chinese customer-facing copy and new service coverage.
text = text.replace(
    'heroLead: "Lin Plumbing & Gas 为悉尼客户提供悉尼水工、悉尼水管工、持牌煤气工、紧急漏水维修、通渠、下水道疏通、热水器维修、燃气安装维修、管道安装与日常维护服务。",',
    'heroLead: "Lin Plumbing & Gas 为悉尼客户提供悉尼水工、悉尼水管工、持牌煤气工、紧急漏水维修、通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修、燃气安装维修、管道安装与日常维护服务。",'
)
text = text.replace(
    'servicesTitle: "悉尼水管工、煤气工、通渠与热水器维修",\n    servicesCopy: "清晰的服务分类可以帮助客户快速找到合适服务，覆盖悉尼水工、紧急水管维修、煤气工、通渠、下水道疏通、热水器维修和管道工程。",',
    'servicesTitle: "悉尼水管工、煤气工、排水系统、泵系统与热水器维修",\n    servicesCopy: "清晰的服务分类可以帮助客户快速找到合适服务，覆盖悉尼水工、紧急水管维修、煤气工、通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修和管道工程。",'
)
text = text.replace(
    '      { icon: Droplets, title: "通渠｜下水道疏通", text: "处理下水道堵塞、排水堵塞、雨水管问题，并可通过 CCTV 管道检测辅助判断。", image: REAL_PHOTOS.cctvDrainInspection },\n      { icon: Gauge, title: "热水器维修与安装", text: "支持热水系统、热水器维修、设备间管路连接、维护与现场服务协调。", image: REAL_PHOTOS.hotWaterPlantRoom },',
    '      { icon: Droplets, title: "通渠｜下水道疏通", text: "处理下水道堵塞、排水堵塞，并可通过 CCTV 管道检测辅助判断。", image: REAL_PHOTOS.cctvDrainInspection },\n      { icon: Gauge, title: "热水器安装与维修", text: "支持住宅热水器安装、热水器维修、更换建议、管路连接、维护与现场服务协调。", image: REAL_PHOTOS.residentialHotWaterInstall },\n      { icon: Droplets, title: "雨水排水系统", text: "处理 stormwater system、雨水管、地面排水、户外排水管路及相关排水问题。", image: REAL_PHOTOS.stormwaterDrainage },\n      { icon: Gauge, title: "泵系统｜Pump System", text: "支持泵系统管路、基础故障检查、更换协调、排污泵或增压泵相关咨询。", image: REAL_PHOTOS.hotWaterPlantRoom },'
)
text = text.replace(
    'drainsTitle: "悉尼通渠、下水道疏通与 CCTV 管道检查",\n    drainsCopy: "下水道堵塞、排水堵塞和雨水管问题需要准确判断，而不是猜测。CCTV 检测与雨水管照片展示了悉尼通渠、下水道疏通和管道问题常用的现场工具。",',
    'drainsTitle: "悉尼通渠、雨水排水系统、泵系统与 CCTV 管道检查",\n    drainsCopy: "下水道堵塞、排水堵塞、stormwater system 和 pump system 问题需要准确判断，而不是猜测。CCTV 检测、排水照片和现场检查可以帮助判断下一步处理方式。",'
)
text = text.replace(
    'areaTags: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "热水器维修", "漏水维修", "LPG/GAS 连接", "Eastwood", "Chatswood", "Hurstville", "Burwood"],',
    'areaTags: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "雨水排水系统", "泵系统", "热水器安装", "热水器维修", "漏水维修", "LPG/GAS 连接", "Eastwood", "Chatswood", "Hurstville", "Burwood"],'
)
text = text.replace(
    'seoEyebrow: "中文搜索服务",\n    seoTitle: "客户搜索悉尼水工时，通常真正需要什么？",\n    seoCopy: "许多客户不会先搜索公司名，而是直接搜索问题本身，例如悉尼水工、悉尼水管工、通渠、下水道疏通、热水器维修、漏水维修、煤气工或 LPG/GAS 连接。本页面保留这些高意图关键词，同时以清晰的施工范围和电话入口帮助客户快速判断是否适合联系。",\n    seoPoints: [\n      { title: "通渠与下水道疏通", text: "针对下水慢、排水堵塞、雨水管问题和疑似管道内部堵点，可结合 CCTV 管道检测进行判断。" },\n      { title: "热水器维修与漏水维修", text: "覆盖热水系统、设备间管路、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见需求。" },\n      { title: "持牌煤气工与 LPG/GAS 连接", text: "面向悉尼住宅、商铺和餐馆客户，提供燃气安装、煤气维修、燃气表和管线相关服务说明。" },\n    ],\n    faqEyebrow: "常见搜索问题",\n    faqTitle: "悉尼华人客户搜索水工前常问的问题",\n    faqCopy: "用自然中文回答高意图问题，比单纯重复关键词更稳妥。以下内容覆盖悉尼水工、悉尼水管工、通渠、热水器维修、漏水维修、持牌煤气工与 LPG/GAS 连接等真实需求。",',
    'seoEyebrow: "服务说明",\n    seoTitle: "悉尼住宅与商业物业的水管、排水、燃气和泵系统服务",\n    seoCopy: "无论问题发生在室内水管、户外排水、热水器、燃气管线，还是雨水排水系统与泵系统，Lin Plumbing & Gas 都会尽量先了解现场情况，再说明适合的处理方向。",\n    seoPoints: [\n      { title: "通渠、下水道疏通与雨水排水", text: "针对下水慢、排水堵塞、雨水管问题和疑似管道内部堵点，可结合 CCTV 管道检测进行判断。" },\n      { title: "热水器安装、维修与漏水维修", text: "覆盖住宅热水器、设备间管路、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见需求。" },\n      { title: "泵系统与相关管路", text: "可咨询 pump system、排污泵、增压泵、泵系统管路、基础故障检查和更换协调等相关问题。" },\n      { title: "持牌煤气工与 LPG/GAS 连接", text: "面向悉尼住宅、商铺和餐馆客户，提供燃气安装、煤气维修、燃气表和管线相关服务说明。" },\n    ],\n    faqEyebrow: "常见问题",\n    faqTitle: "预约水管、排水或燃气服务前的常见问题",\n    faqCopy: "以下内容帮助客户判断 Lin Plumbing & Gas 是否适合处理当前的水管、排水、燃气、热水器、雨水排水系统或泵系统问题。",'
)
text = text.replace(
    '      { question: "可以处理通渠、下水道疏通和排水堵塞吗？", answer: "可以。服务内容包括通渠、下水道疏通、排水堵塞、雨水管问题和 CCTV 管道检测辅助判断，适用于住宅与商业现场。" },\n      { question: "热水器维修、漏水维修和水管爆裂可以联系吗？", answer: "可以。页面服务范围覆盖热水器维修、热水系统、漏水维修、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见问题。" },',
    '      { question: "可以处理通渠、下水道疏通、雨水排水系统和排水堵塞吗？", answer: "可以。服务内容包括通渠、下水道疏通、排水堵塞、stormwater system、雨水管问题和 CCTV 管道检测辅助判断，适用于住宅与商业现场。" },\n      { question: "可以处理 pump system、排污泵或增压泵相关问题吗？", answer: "可以先联系咨询。服务范围可包括泵系统管路、基础故障检查、更换协调、排污泵或增压泵相关问题。建议电话说明现场情况，方便判断是否适合安排。" },\n      { question: "热水器安装、热水器维修、漏水维修和水管爆裂可以联系吗？", answer: "可以。页面服务范围覆盖住宅热水器安装、热水器维修、热水系统、漏水维修、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见问题。" },'
)

# JSON-LD service types and description.
text = text.replace(
    'serviceType: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "热水器维修", "漏水维修", "水管爆裂", "燃气安装", "LPG/GAS 连接", "Gas fitting", "Blocked drains", "Hot water repairs"],',
    'serviceType: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "雨水排水系统", "泵系统", "排污泵", "增压泵", "热水器安装", "热水器维修", "漏水维修", "水管爆裂", "燃气安装", "LPG/GAS 连接", "Gas fitting", "Blocked drains", "Stormwater systems", "Pump systems", "Hot water installation", "Hot water repairs"],'
)
text = text.replace(
    'description: "Licensed plumbing and gas services across Sydney, including 24/7 emergency response, gas fitting, blocked drains, drain cleaning, hot water repairs and pipework. English and Chinese service available. 中文服务包括悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接。",',
    'description: "Licensed plumbing and gas services across Sydney, including 24/7 emergency response, gas fitting, blocked drains, stormwater systems, pump systems, hot water installation, hot water repairs and pipework. English and Chinese service available. 中文服务包括悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接。",'
)

# Render service images in service cards so the new residential hot water image is visible.
text = text.replace(
    'return <article key={service.title} className="trade-card bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-7 w-7" /></div><span className="font-display text-sm font-bold text-[#b86f3c]">0{index + 1}</span></div><h3 className="mt-7 font-display text-3xl font-bold leading-none text-[#173557]">{service.title}</h3><p className="mt-4 text-base leading-7 text-[#526476]">{service.text}</p></article>;',
    'return <article key={service.title} className="trade-card overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><img src={service.image} alt={service.title} className="h-44 w-full object-cover object-center" /><div className="p-6"><div className="flex items-start justify-between gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-7 w-7" /></div><span className="font-display text-sm font-bold text-[#b86f3c]">0{index + 1}</span></div><h3 className="mt-7 font-display text-3xl font-bold leading-none text-[#173557]">{service.title}</h3><p className="mt-4 text-base leading-7 text-[#526476]">{service.text}</p></div></article>;'
)
text = text.replace(
    '<div className="grid gap-4 md:grid-cols-3">{t.seoPoints.map((point) =>',
    '<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{t.seoPoints.map((point) =>'
)

home.write_text(text)

# Update HTML meta tags.
html = index.read_text()
html = html.replace(
    'content="Lin Plumbing & Gas 提供悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼各区。"',
    'content="Lin Plumbing & Gas 提供悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼各区。"'
)
html = html.replace(
    'content="悉尼水工,悉尼水管工,悉尼通渠,悉尼下水道疏通,悉尼热水器维修,悉尼漏水维修,悉尼煤气工,持牌煤气工,LPG GAS 连接,Eastwood 水管工,Chatswood 水管工,Hurstville 水管工"',
    'content="悉尼水工,悉尼水管工,悉尼通渠,悉尼下水道疏通,悉尼雨水排水系统,悉尼泵系统,悉尼排污泵,悉尼增压泵,悉尼热水器安装,悉尼热水器维修,悉尼漏水维修,悉尼煤气工,持牌煤气工,LPG GAS 连接,Eastwood 水管工,Chatswood 水管工,Hurstville 水管工"'
)
html = html.replace(
    'content="悉尼持牌水管与燃气服务，覆盖通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装、煤气维修与 LPG/GAS 连接。中英双语服务。"',
    'content="悉尼持牌水管与燃气服务，覆盖通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修、漏水维修、水管爆裂、燃气安装、煤气维修与 LPG/GAS 连接。中英双语服务。"'
)
html = html.replace(
    'content="悉尼通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与 LPG/GAS 连接服务。"',
    'content="悉尼通渠、下水道疏通、雨水排水系统、泵系统、热水器安装维修、漏水维修、持牌煤气工与 LPG/GAS 连接服务。"'
)
index.write_text(html)

print('Applied stormwater, pump system, residential hot water image, and customer-facing tone updates.')
