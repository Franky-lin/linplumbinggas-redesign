from pathlib import Path

home = Path('/home/ubuntu/linplumbinggas-redesign/client/src/pages/Home.tsx')
index = Path('/home/ubuntu/linplumbinggas-redesign/client/index.html')

s = home.read_text()

s = s.replace(
'''    seoPoints: [
      { title: "Blocked drains and drain cleaning", text: "CCTV pipe inspections, stormwater issues and blocked drain diagnosis for residential and commercial sites." },
      { title: "Hot water repairs and plumbing maintenance", text: "Support for hot water systems, leaking fixtures, pipework connections and scheduled maintenance." },
      { title: "Gas fitting and gas repairs", text: "Gas meter, gas pipework and compliance-minded service for Sydney customers." },
    ],
    termsEyebrow: "Terms",''',
'''    seoPoints: [
      { title: "Blocked drains and drain cleaning", text: "CCTV pipe inspections, stormwater issues and blocked drain diagnosis for residential and commercial sites." },
      { title: "Hot water repairs and plumbing maintenance", text: "Support for hot water systems, leaking fixtures, pipework connections and scheduled maintenance." },
      { title: "Gas fitting and gas repairs", text: "Gas meter, gas pipework and compliance-minded service for Sydney customers." },
    ],
    faqEyebrow: "Search FAQ",
    faqTitle: "Sydney Plumbing Questions Customers Ask Before Calling",
    faqCopy: "Short, plain-language answers help customers understand when to call a licensed plumber or gas fitter, while giving search engines clearer context about the services Lin Plumbing & Gas provides.",
    faqs: [
      { question: "Do you provide emergency plumber service across Sydney?", answer: "Yes. Lin Plumbing & Gas presents 24/7 emergency plumbing and gas response for urgent leaks, blocked drains, hot water issues and gas concerns across Sydney. Calling is recommended for urgent jobs." },
      { question: "Can you help with blocked drains and CCTV pipe inspections?", answer: "Yes. The service coverage includes blocked drains, drain cleaning, stormwater issues and CCTV pipe inspection support to help identify likely pipe or drainage problems on site." },
      { question: "Do you handle gas fitting and hot water repairs?", answer: "Yes. The business highlights gas fitting, gas repairs, LPG/GAS connections, gas meter-related work and hot water system repair or maintenance support." },
    ],
    termsEyebrow: "Terms",''')

s = s.replace(
'''    seoPoints: [
      { title: "通渠与下水道疏通", text: "针对下水慢、排水堵塞、雨水管问题和疑似管道内部堵点，可结合 CCTV 管道检测进行判断。" },
      { title: "热水器维修与漏水维修", text: "覆盖热水系统、设备间管路、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见需求。" },
      { title: "持牌煤气工与 LPG/GAS 连接", text: "面向悉尼住宅、商铺和餐馆客户，提供燃气安装、煤气维修、燃气表和管线相关服务说明。" },
    ],
    termsEyebrow: "服务条款",''',
'''    seoPoints: [
      { title: "通渠与下水道疏通", text: "针对下水慢、排水堵塞、雨水管问题和疑似管道内部堵点，可结合 CCTV 管道检测进行判断。" },
      { title: "热水器维修与漏水维修", text: "覆盖热水系统、设备间管路、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见需求。" },
      { title: "持牌煤气工与 LPG/GAS 连接", text: "面向悉尼住宅、商铺和餐馆客户，提供燃气安装、煤气维修、燃气表和管线相关服务说明。" },
    ],
    faqEyebrow: "常见搜索问题",
    faqTitle: "悉尼华人客户搜索水工前常问的问题",
    faqCopy: "用自然中文回答高意图问题，比单纯重复关键词更稳妥。以下内容覆盖悉尼水工、悉尼水管工、通渠、热水器维修、漏水维修、持牌煤气工与 LPG/GAS 连接等真实需求。",
    faqs: [
      { question: "你们是悉尼水工或悉尼水管工吗？", answer: "Lin Plumbing & Gas 面向悉尼住宅、商铺、餐馆、物业和建筑客户提供持牌水管与燃气服务，中文和英文均可沟通。紧急情况建议直接电话联系。" },
      { question: "可以处理通渠、下水道疏通和排水堵塞吗？", answer: "可以。服务内容包括通渠、下水道疏通、排水堵塞、雨水管问题和 CCTV 管道检测辅助判断，适用于住宅与商业现场。" },
      { question: "热水器维修、漏水维修和水管爆裂可以联系吗？", answer: "可以。页面服务范围覆盖热水器维修、热水系统、漏水维修、水龙头、马桶、浴室水管、水管爆裂和日常维护等常见问题。" },
      { question: "你们提供持牌煤气工、燃气安装或 LPG/GAS 连接服务吗？", answer: "可以联系咨询。网站展示的燃气服务包括持牌煤气工、燃气安装、煤气维修、LPG/GAS 连接、燃气表和相关管线施工说明。" },
      { question: "服务哪些悉尼华人区？", answer: "网站重点说明覆盖 Eastwood、Chatswood、Hurstville、Burwood、Ryde、Epping、Parramatta、Strathfield、Bankstown、Ashfield、Auburn、Carlingford 以及悉尼周边区域。" },
    ],
    termsEyebrow: "服务条款",''')

s = s.replace(
'''  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    areaServed: ["Sydney, NSW, Australia", "Eastwood", "Chatswood", "Hurstville", "Burwood", "Ryde", "Epping", "Parramatta", "Strathfield"],
    openingHours: "Mo-Su 00:00-23:59",
    serviceType: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "热水器维修", "漏水维修", "Gas fitting", "Blocked drains", "Hot water repairs"],
    description: "Licensed plumbing and gas services across Sydney, including 24/7 emergency response, gas fitting, blocked drains, drain cleaning, hot water repairs and pipework. English and Chinese service available. 中文服务包括悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修和漏水维修。",
  };''',
'''  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    url: "https://linplumbinggas.com/",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    areaServed: ["Sydney, NSW, Australia", "Eastwood", "Chatswood", "Hurstville", "Burwood", "Ryde", "Epping", "Parramatta", "Strathfield", "Bankstown", "Ashfield", "Auburn", "Carlingford"],
    openingHours: "Mo-Su 00:00-23:59",
    serviceType: ["悉尼水工", "悉尼水管工", "持牌煤气工", "通渠", "下水道疏通", "热水器维修", "漏水维修", "水管爆裂", "燃气安装", "LPG/GAS 连接", "Gas fitting", "Blocked drains", "Hot water repairs"],
    description: "Licensed plumbing and gas services across Sydney, including 24/7 emergency response, gas fitting, blocked drains, drain cleaning, hot water repairs and pipework. English and Chinese service available. 中文服务包括悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接。",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };''')

s = s.replace(
'''      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />''',
'''      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />''')

s = s.replace(
'''        <section className="bg-[#faf8f5] py-24"><div className="container"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">{t.seoEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">{t.seoTitle}</h2><p className="mt-6 text-lg leading-8 text-[#526476]">{t.seoCopy}</p></div><div className="grid gap-4 md:grid-cols-3">{t.seoPoints.map((point) => <article key={point.title} className="trade-card border-t-4 border-[#f5a623] bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{point.title}</h3><p className="mt-4 text-base leading-7 text-[#526476]">{point.text}</p></article>)}</div></div></div></section>''',
'''        <section className="bg-[#faf8f5] py-24"><div className="container"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">{t.seoEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">{t.seoTitle}</h2><p className="mt-6 text-lg leading-8 text-[#526476]">{t.seoCopy}</p></div><div className="grid gap-4 md:grid-cols-3">{t.seoPoints.map((point) => <article key={point.title} className="trade-card border-t-4 border-[#f5a623] bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{point.title}</h3><p className="mt-4 text-base leading-7 text-[#526476]">{point.text}</p></article>)}</div></div></div></section>

        <section className="engineering-paper py-24"><div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]"><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">{t.faqEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">{t.faqTitle}</h2><p className="mt-6 text-lg leading-8 text-[#526476]">{t.faqCopy}</p></div><div className="space-y-4">{t.faqs.map((faq) => <article key={faq.question} className="trade-card bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{faq.question}</h3><p className="mt-3 text-base leading-7 text-[#526476]">{faq.answer}</p></article>)}</div></div></section>''')

home.write_text(s)

html = index.read_text()
html = html.replace(
'''<html lang="en-AU">''',
'''<html lang="zh-Hans-AU">''')
html = html.replace(
'''    <title>悉尼水工 | Sydney Plumber & Gas Fitter | Lin Plumbing & Gas</title>''',
'''    <title>悉尼水工｜悉尼水管工｜持牌煤气工｜Lin Plumbing & Gas</title>''')
html = html.replace(
'''      content="Lin Plumbing & Gas 提供悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修、漏水维修与 24/7 紧急 plumbing and gas services across Sydney. 中英双语服务。" />''',
'''      content="Lin Plumbing & Gas 提供悉尼水工、悉尼水管工、持牌煤气工、通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装与 LPG/GAS 连接服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼各区。" />''')
html = html.replace(
'''    <meta property="og:title" content="悉尼水工 | Sydney Plumber & Gas Fitter | Lin Plumbing & Gas" />
    <meta property="og:description" content="Sydney-wide licensed plumbing, gas fitting, blocked drains, hot water and emergency service. 中文关键词覆盖：悉尼水工、悉尼水管工、通渠、下水道疏通、煤气工、热水器维修。" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_AU" />
    <meta property="og:locale:alternate" content="zh_CN" />''',
'''    <link rel="canonical" href="https://linplumbinggas.com/" />
    <meta name="keywords" content="悉尼水工,悉尼水管工,悉尼通渠,悉尼下水道疏通,悉尼热水器维修,悉尼漏水维修,悉尼煤气工,持牌煤气工,LPG GAS 连接,Eastwood 水管工,Chatswood 水管工,Hurstville 水管工" />
    <meta property="og:title" content="悉尼水工｜悉尼水管工｜持牌煤气工｜Lin Plumbing & Gas" />
    <meta property="og:description" content="悉尼持牌水管与燃气服务，覆盖通渠、下水道疏通、热水器维修、漏水维修、水管爆裂、燃气安装、煤气维修与 LPG/GAS 连接。中英双语服务。" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://linplumbinggas.com/" />
    <meta property="og:locale" content="zh_CN" />
    <meta property="og:locale:alternate" content="en_AU" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="悉尼水工｜悉尼水管工｜持牌煤气工｜Lin Plumbing & Gas" />
    <meta name="twitter:description" content="悉尼通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与 LPG/GAS 连接服务。" />''')
index.write_text(html)
