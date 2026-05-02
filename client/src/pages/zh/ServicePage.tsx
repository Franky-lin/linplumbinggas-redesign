/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This Chinese service page template keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { AlertTriangle, CheckCircle2, Clock3, Droplets, Flame, Gauge, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, REAL_PHOTOS } from "@/lib/linAssets";
import {
  CallButtons,
  ContactSection,
  PageShell,
  SectionHeading,
  SeoHead,
  TrustBar,
  breadcrumbSchema,
  chineseServiceLinks,
  localBusinessSchema,
  priorityAreas,
  type SeoMeta,
} from "@/pages/zh/ChineseSeoLayout";

type ServicePageConfig = {
  meta: SeoMeta;
  eyebrow: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  icon: typeof Wrench;
  trust: string[];
  symptoms: string[];
  process: { title: string; text: string }[];
  serviceTypes: string[];
  faq: { question: string; answer: string }[];
  serviceHint: string;
  relatedImage: string;
  relatedAlt: string;
  urgentTitle: string;
  urgentCopy: string;
};

export const serviceConfigs = {
  blockedDrains: {
    meta: {
      title: "悉尼通渠 | 排水管维修、屋顶雨水系统改造与 CCTV 管道检测 | Lin Plumbing & Gas",
      description: "Lin Plumbing & Gas 提供悉尼通渠、排水管维修、下水道疏通、屋顶雨水系统改造、雨水排水系统和 CCTV 管道检测服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，堵塞或返水可立即致电。",
      path: "/zh/blocked-drains",
      keywords: ["悉尼通渠", "悉尼下水道疏通", "blocked drains Sydney 中文", "CCTV 管道检测", "Eastwood 通渠", "Chatswood 通渠", "Hurstville 通渠", "不通不收费"],
    },
    eyebrow: "悉尼通渠",
    h1: "悉尼通渠｜排水管维修、屋顶雨水系统改造与 CCTV 管道检测",
    lead: "厨房、浴室、地漏、马桶、户外排水或屋顶雨水系统出现下水慢、返水、异味或雨天倒灌时，需要先判断堵塞位置和原因。Lin Plumbing & Gas 提供中文沟通的通渠、排水管维修、下水道疏通、雨水排水和 CCTV 管道检测服务。",
    heroImage: REAL_PHOTOS.cctvDrainInspection,
    heroAlt: "悉尼通渠 CCTV 管道检测设备",
    icon: Droplets,
    trust: ["持牌水管服务", "CCTV 辅助判断", "24小时紧急通渠", "中文沟通"],
    symptoms: ["马桶、地漏、厨房水槽下水慢", "排水口返水或有异味", "雨天户外排水不畅或倒灌", "排水管维修或雨水管维修", "屋顶雨水系统改造咨询", "需要确认管道堵点或是否有破损"],
    process: [
      { title: "先确认现场症状", text: "电话沟通时可说明哪个排水口堵塞、是否返水、是否多处同时堵塞、是否雨天加重，以及所在 suburb。" },
      { title: "现场排查堵塞位置", text: "根据现场情况判断是局部堵塞、主管道问题、stormwater system 问题还是需要进一步 CCTV 管道检测。" },
      { title: "说明处理方式", text: "在施工前说明可能的处理方向，包括通渠、清理、检测或后续维修建议，避免客户不了解下一步。" },
      { title: "保留维护建议", text: "处理后可根据管道情况说明后续维护、树根、油污、塌陷或老旧管道风险。" },
    ],
    serviceTypes: ["悉尼通渠", "排水管维修", "下水道疏通", "排水堵塞", "屋顶雨水系统改造", "CCTV 管道检测", "Stormwater system", "雨水排水系统", "Drain cleaning"],
    faq: [
      { question: "你们可以做悉尼通渠、排水管维修和屋顶雨水系统吗？", answer: "可以。服务范围包括通渠、排水管维修、下水道疏通、排水堵塞、雨水排水系统、屋顶雨水系统改造和 CCTV 管道检测辅助判断。紧急堵塞或雨天倒灌建议直接电话联系。" },
      { question: "下水道堵塞一定需要 CCTV 吗？", answer: "不一定。CCTV 通常适用于反复堵塞、疑似树根、管道塌陷、购买房产前检查或需要确认堵点位置的情况。" },
      { question: "不通不收费是什么意思？", answer: "客户可以电话咨询适用条件。不同现场、管道结构、堵塞原因和可进入性会影响是否适用，建议先说明现场情况。" },
      { question: "哪些区域可以安排通渠？", answer: "服务重点覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼更多区域。" },
    ],
    serviceHint: "通渠、排水管维修、下水道堵塞、地漏返水、屋顶雨水系统、CCTV 检测...",
    relatedImage: REAL_PHOTOS.stormwaterDrainage,
    relatedAlt: "悉尼雨水排水系统现场",
    urgentTitle: "排水返水或马桶堵塞？",
    urgentCopy: "请优先电话联系，并说明是否多处排水点同时堵塞、是否正在返水。",
  },
  hotWater: {
    meta: {
      title: "悉尼热水器维修 | 热水炉安装与没有热水处理 | Lin Plumbing & Gas",
      description: "Lin Plumbing & Gas 提供悉尼热水器维修、热水炉安装、没有热水处理、热水器漏水和住宅热水系统管路服务。中文沟通，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，紧急没有热水可立即致电。",
      path: "/zh/hot-water",
      keywords: ["悉尼热水器维修", "悉尼热水炉维修", "热水器安装 Sydney", "没有热水", "热水器漏水", "Eastwood 热水器维修", "Chatswood 热水器维修"],
    },
    eyebrow: "热水器维修",
    h1: "悉尼热水器维修｜热水炉安装、没有热水与热水系统管路",
    lead: "没有热水、热水忽冷忽热、热水器漏水或需要更换热水系统时，中文沟通可以更快说明品牌、位置、燃气或电力情况和紧急程度。Lin Plumbing & Gas 支持住宅热水器安装维修、管路连接和更换建议。",
    heroImage: REAL_PHOTOS.residentialHotWaterInstall,
    heroAlt: "悉尼住宅 Rinnai 热水器安装",
    icon: Gauge,
    trust: ["持牌水管与燃气", "住宅热水系统", "紧急没有热水", "中文沟通"],
    symptoms: ["家里突然没有热水", "热水器或管路漏水", "热水忽冷忽热", "热水系统老旧需要更换建议", "燃气热水器连接或管路问题", "新建或翻修需要热水系统安装"],
    process: [
      { title: "确认热水器类型", text: "联系时可说明品牌、型号、燃气/电力、安装位置、是否漏水以及是否完全没有热水。" },
      { title: "判断是否紧急", text: "如果热水器大量漏水、影响电气或燃气安全，应优先电话说明现场情况。" },
      { title: "现场检查管路与设备", text: "根据现场情况检查热水系统、阀门、管路连接和可见故障，再说明维修或更换方向。" },
      { title: "给出后续建议", text: "如设备老旧或维修不经济，可说明更换、安装位置和管路调整方面的建议。" },
    ],
    serviceTypes: ["悉尼热水器维修", "热水炉维修", "热水器安装", "没有热水", "热水器漏水", "Hot water installation", "Hot water repairs"],
    faq: [
      { question: "没有热水可以紧急联系吗？", answer: "可以。请电话说明是全屋没有热水还是部分位置没有热水、热水器品牌和是否有漏水。" },
      { question: "可以安装新的热水器吗？", answer: "可以联系咨询。服务范围包括住宅热水器安装、管路连接、更换建议和相关水管/燃气配合。" },
      { question: "热水器漏水应该怎么做？", answer: "如果漏水明显或影响电气/燃气安全，应优先电话联系，并在安全前提下关闭相关阀门或电源。" },
      { question: "覆盖哪些悉尼华人区？", answer: "重点覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼更多区域。" },
    ],
    serviceHint: "没有热水、热水器漏水、热水炉维修、热水器安装...",
    relatedImage: REAL_PHOTOS.hotWaterPlantRoom,
    relatedAlt: "悉尼热水系统设备间管路",
    urgentTitle: "突然没有热水？",
    urgentCopy: "请准备热水器品牌、型号、照片、是否漏水和所在区域，直接电话联系更快。",
  },
  gas: {
    meta: {
      title: "悉尼煤气工 | 持牌燃气安装、煤气维修与 LPG/GAS 连接 | Lin Plumbing & Gas",
      description: "Lin Plumbing & Gas 提供悉尼煤气工、持牌燃气安装、煤气维修、LPG/GAS 连接、燃气表和燃气管线相关服务。中文沟通，服务住宅、商铺与餐馆，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，燃气问题可立即致电咨询。",
      path: "/zh/gas",
      keywords: ["悉尼煤气工", "悉尼持牌煤气工", "燃气安装 Sydney", "煤气维修", "LPG GAS 连接", "gas fitter Sydney 中文", "Eastwood 煤气工"],
    },
    eyebrow: "悉尼煤气工",
    h1: "悉尼煤气工｜持牌燃气安装、煤气维修与 LPG/GAS 连接",
    lead: "燃气服务需要持牌、谨慎和清晰沟通。Lin Plumbing & Gas 提供中文可沟通的燃气安装、煤气维修、燃气表相关检查、LPG/GAS 连接和管线施工服务，适合住宅、商铺和餐馆客户咨询。",
    heroImage: REAL_PHOTOS.gasMeterTest,
    heroAlt: "悉尼持牌煤气工燃气表检测",
    icon: Flame,
    trust: ["持牌煤气工", "住宅与商业燃气", "合规导向施工", "中文沟通"],
    symptoms: ["需要安装或更换燃气设备", "燃气管线、燃气表或连接处需要检查", "餐馆或商铺燃气改动咨询", "LPG/GAS 连接和管路施工", "燃气热水器相关管路问题", "闻到疑似煤气味需要紧急处理"],
    process: [
      { title: "先确认燃气场景", text: "电话沟通时说明是住宅、商铺还是餐馆，涉及燃气表、设备、管线或 LPG/GAS 连接。" },
      { title: "强调安全优先", text: "如果闻到明显煤气味或怀疑泄漏，应立即远离风险区域并按安全程序处理，再联系专业人员。" },
      { title: "现场检查与说明", text: "根据现场条件检查可见管线、连接和设备情况，说明可处理范围、施工方式和合规注意点。" },
      { title: "安排后续施工", text: "如涉及新装、改管或商业场景，会根据现场条件说明所需材料、时间和协调事项。" },
    ],
    serviceTypes: ["悉尼煤气工", "持牌煤气工", "燃气安装", "煤气维修", "LPG/GAS 连接", "Gas fitting", "Gas repairs"],
    faq: [
      { question: "你们是持牌煤气工吗？", answer: `Lin Plumbing & Gas 的执照信息为 ${BUSINESS.license}，可联系咨询燃气安装、煤气维修、燃气表和管线相关服务。` },
      { question: "餐馆或商铺燃气可以咨询吗？", answer: "可以。可说明店铺类型、燃气设备、现有管线和需要改动的内容，再判断是否适合安排现场查看。" },
      { question: "闻到煤气味怎么办？", answer: "应先以安全为先，避免明火和电气开关操作，远离风险区域并按当地安全建议处理。之后再联系专业燃气人员。" },
      { question: "可以做 LPG/GAS 连接吗？", answer: "可以联系咨询。服务范围包括 LPG/GAS 连接、燃气管线和燃气设备相关施工说明。" },
    ],
    serviceHint: "燃气安装、煤气维修、LPG/GAS 连接、燃气表或管线...",
    relatedImage: REAL_PHOTOS.gasToolsSite,
    relatedAlt: "悉尼煤气工现场工具",
    urgentTitle: "疑似燃气问题？",
    urgentCopy: "请以安全为先；如需专业燃气服务，请电话说明现场情况。",
  },
  leakRepair: {
    meta: {
      title: "悉尼漏水维修 | 水管爆裂、紧急水管工与浴室厨房水管 | Lin Plumbing & Gas",
      description: "Lin Plumbing & Gas 提供悉尼漏水维修、水管爆裂、浴室厨房水管、水龙头马桶维修和 24 小时紧急水管服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，漏水可立即致电。",
      path: "/zh/leak-repair",
      keywords: ["悉尼漏水维修", "悉尼水管爆裂", "悉尼紧急水管工", "浴室漏水维修", "厨房水管维修", "Eastwood 漏水维修", "Chatswood 漏水维修"],
    },
    eyebrow: "漏水维修",
    h1: "悉尼漏水维修｜水管爆裂、浴室厨房水管与紧急水管工",
    lead: "水管爆裂、墙面或天花渗水、马桶水龙头漏水、浴室厨房管路问题，往往需要快速判断并减少二次损害。Lin Plumbing & Gas 提供中文沟通的悉尼漏水维修和紧急水管服务。",
    heroImage: REAL_PHOTOS.heritagePipeRepair,
    heroAlt: "悉尼漏水维修和管道修复现场",
    icon: Wrench,
    trust: ["持牌水管工", "24小时紧急漏水", "住宅商业维修", "中文沟通"],
    symptoms: ["水管爆裂或持续喷水", "墙面、天花或地面出现渗水", "浴室、厨房、洗衣房管路漏水", "马桶、水龙头、阀门漏水", "热水器或热水管路漏水", "老旧管道需要维修或更换建议"],
    process: [
      { title: "先减少损害", text: "如果安全可行，先关闭相关阀门或总水阀，并拍照记录漏水位置和范围。" },
      { title: "电话判断紧急程度", text: "说明是否持续喷水、是否影响电气、是否在墙内或天花、所在 suburb 和可进入时间。" },
      { title: "现场定位与维修", text: "根据可见症状和现场条件判断漏点、管材、阀门、接头或设备相关问题，再说明维修方式。" },
      { title: "后续维护建议", text: "维修后可说明是否存在老旧管道、压力、热水系统或其他潜在风险。" },
    ],
    serviceTypes: ["悉尼漏水维修", "水管爆裂", "紧急水管工", "浴室漏水", "厨房水管", "Leak repairs", "Emergency plumber"],
    faq: [
      { question: "水管爆裂应该先做什么？", answer: "如果安全可行，先关闭总水阀或相关阀门，远离可能受影响的电气区域，然后直接电话联系。" },
      { question: "墙内或天花漏水可以处理吗？", answer: "可以联系咨询。请说明渗水位置、是否持续扩大、是否楼上有浴室或热水设备，并尽量准备照片。" },
      { question: "水龙头、马桶、浴室厨房水管也可以修吗？", answer: "可以。服务范围包括常见住宅与商业物业水管维护、漏水维修、水龙头、马桶和浴室厨房管路问题。" },
      { question: "晚上漏水可以联系吗？", answer: "我们提供 24/7 紧急响应。紧急漏水建议直接拨打 0430 731 989。" },
    ],
    serviceHint: "漏水维修、水管爆裂、墙面渗水、马桶水龙头漏水...",
    relatedImage: REAL_PHOTOS.finishedBathroom,
    relatedAlt: "悉尼浴室水管与装修后现场",
    urgentTitle: "水管爆裂或正在漏水？",
    urgentCopy: "先尽量关闭水阀并直接电话联系，说明所在区域和是否影响电气安全。",
  },
} satisfies Record<string, ServicePageConfig>;

export function ChineseServicePage({ config }: { config: ServicePageConfig }) {
  const Icon = config.icon;
  const schema = [
    localBusinessSchema({
      path: config.meta.path,
      description: config.meta.description,
      serviceType: config.serviceTypes,
    }),
    breadcrumbSchema([{ name: "中文首页", path: "/zh" }, { name: config.eyebrow, path: config.meta.path }]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <PageShell>
      <SeoHead meta={config.meta} schema={schema} />

      <section className="relative isolate overflow-hidden bg-[#102941] text-white">
        <img src={config.heroImage} alt={config.heroAlt} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="photo-overlay-dark absolute inset-0 -z-10" />
        <div className="container grid min-h-[690px] items-center gap-10 py-20 lg:grid-cols-[1.08fr_0.72fr]">
          <div className="max-w-4xl animate-slow-rise">
            <div className="mb-6 inline-flex border border-[#f5a623]/70 bg-[#f5a623]/15 px-4 py-2 text-sm font-bold text-[#ffd37a] backdrop-blur">{config.eyebrow} · 中文沟通 · {BUSINESS.license}</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">{config.h1}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">{config.lead}</p>
            <div className="mt-9"><CallButtons dark /></div>
          </div>
          <aside className="trade-card hidden bg-[#faf8f5]/95 p-6 text-[#173557] shadow-2xl lg:block">
            <div className="flex h-16 w-16 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-8 w-8" /></div>
            <p className="mt-6 font-display text-3xl font-bold leading-none">{config.urgentTitle}</p>
            <p className="mt-3 text-lg font-semibold text-[#526476]">{config.urgentCopy}</p>
            <div className="mt-6 space-y-3">
              {config.trust.map((item, index) => {
                const TrustIcon = [ShieldCheck, Clock3, CheckCircle2, MapPin][index] ?? CheckCircle2;
                return <div key={item} className="flex gap-3 border-l-4 border-[#f5a623] bg-white p-4"><TrustIcon className="mt-1 h-5 w-5 shrink-0 text-[#b86f3c]" /><p className="font-bold">{item}</p></div>;
              })}
            </div>
          </aside>
        </div>
      </section>

      <TrustBar items={config.trust} />

      <section className="engineering-paper py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="适合联系的情况" title="哪些问题适合联系 Lin Plumbing & Gas？" copy="以下是客户经常遇到的现场情况。紧急问题建议直接电话说明位置、症状和所在区域。" />
            <div className="mt-8"><CallButtons /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.symptoms.map((symptom) => <article key={symptom} className="trade-card border-l-4 border-[#f5a623] bg-white p-5 shadow-sm"><div className="flex gap-3"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#b86f3c]" /><p className="font-bold leading-7 text-[#173557]">{symptom}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#102941] py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={config.relatedImage} alt={config.relatedAlt} className="h-80 w-full object-cover object-center" />
            <img src={REAL_PHOTOS.teamVehicleTrust} alt="Lin Plumbing and Gas 悉尼服务车辆" className="h-80 w-full object-cover object-center" />
          </div>
          <div>
            <SectionHeading dark eyebrow="处理流程" title="先了解现场，再说明处理方向" copy="我们会先了解症状、区域和紧急程度，再根据现场情况说明可能的处理方式。" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {config.process.map((step, index) => <article key={step.title} className="border border-white/10 bg-white/[0.04] p-5"><p className="font-display text-sm font-bold text-[#f5a623]">0{index + 1}</p><h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{step.title}</h3><p className="mt-3 leading-7 text-white/70">{step.text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">服务区域</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">覆盖悉尼华人常见区域</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">Lin Plumbing & Gas 服务悉尼多个区域。你可以查看所在区域的服务内容，或直接电话确认是否可以安排。</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {priorityAreas.map((area) => <a key={area.href} href={area.href} className="border-l-4 border-[#f5a623] bg-white p-4 font-bold transition hover:bg-[#173557] hover:text-white">{area.label}</a>)}
          </div>
        </div>
      </section>

      <section className="engineering-paper py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">相关中文服务</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">从当前问题延伸到相邻服务</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">很多现场问题会同时涉及排水、热水、燃气或漏水。下面列出相关服务，方便你快速找到更接近现场情况的说明。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {chineseServiceLinks.filter((link) => link.href !== config.meta.path).map((link) => <a key={link.href} href={link.href} className="trade-card overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={link.image} alt={link.title} className="h-44 w-full object-cover object-center" /><div className="p-5"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{link.title}</h3><p className="mt-3 leading-7 text-[#526476]">{link.text}</p></div></a>)}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">常见问题</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">预约前常见问题</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">这些回答帮助中文客户快速判断当前问题是否适合联系。</p>
          </div>
          <div className="space-y-4">
            {config.faq.map((faq) => <article key={faq.question} className="trade-card bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{faq.question}</h3><p className="mt-3 text-base leading-7 text-[#526476]">{faq.answer}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5a623] py-14 text-[#142f4d]">
        <div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div><p className="font-display text-5xl font-bold leading-none">{config.urgentTitle}</p><p className="mt-2 text-2xl font-semibold">{config.urgentCopy}</p></div>
          <Button asChild size="lg" className="h-14 rounded-none bg-[#142f4d] px-8 text-lg font-extrabold text-white hover:bg-[#24496f]"><a href={BUSINESS.phoneHref}>立即致电 {BUSINESS.phone}</a></Button>
        </div>
      </section>

      <ContactSection serviceHint={config.serviceHint} />
    </PageShell>
  );
}
