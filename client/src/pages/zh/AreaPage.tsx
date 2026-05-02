/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This Chinese suburb area page template keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { CheckCircle2, Clock3, Droplets, Flame, Gauge, MapPin, ShieldCheck, Wrench } from "lucide-react";
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
  type SeoMeta,
} from "@/pages/zh/ChineseSeoLayout";

type AreaConfig = {
  meta: SeoMeta;
  suburb: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  nearby: string[];
  commonNeeds: string[];
  areaServed: string[];
};

export const areaConfigs = {
  eastwood: {
    meta: {
      title: "Eastwood 水管工 | 悉尼华人水管工、通渠、排水管维修与热水器维修",
      description: "Eastwood 水管工与悉尼华人水管工服务：通渠、排水管维修、屋顶雨水系统改造、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与24小时紧急服务。覆盖 Eastwood、Epping、Ryde、Carlingford 及周边华人区。",
      path: "/zh/areas/eastwood",
      keywords: ["Eastwood 水管工", "Eastwood 中文水管工", "悉尼华人水管工", "Eastwood 通渠", "Eastwood 排水管维修", "Eastwood 屋顶雨水系统改造", "Eastwood 热水器维修", "Eastwood 煤气工", "Eastwood 漏水维修"],
    },
    suburb: "Eastwood",
    h1: "Eastwood 水管工｜悉尼华人水管工、通渠与热水器维修",
    lead: "Eastwood 及周边华人家庭、商铺和餐馆常见需求包括通渠、排水管维修、屋顶雨水系统改造、热水器维修、漏水维修和燃气服务。Lin Plumbing & Gas 提供中文/英文沟通的悉尼持牌水管与煤气服务。",
    heroImage: REAL_PHOTOS.teamVehicleTrust,
    heroAlt: "Lin Plumbing and Gas Eastwood 水管工服务车辆",
    nearby: ["Epping", "Ryde", "Carlingford", "Marsfield", "Denistone", "West Ryde"],
    commonNeeds: ["Eastwood 通渠与下水道疏通", "Eastwood 排水管维修与雨水管问题", "Eastwood 屋顶雨水系统改造", "Eastwood 热水器维修和安装", "Eastwood 漏水维修与水管爆裂", "Eastwood 持牌煤气工"],
    areaServed: ["Eastwood", "Epping", "Ryde", "Carlingford", "Marsfield", "Denistone", "West Ryde"],
  },
  chatswood: {
    meta: {
      title: "Chatswood 水管工 | 中文通渠、热水器维修与煤气工",
      description: "Chatswood 中文水管工服务：通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与紧急水管服务。Lin Plumbing & Gas 覆盖 Chatswood、Willoughby、Lane Cove、Artarmon 及悉尼周边。",
      path: "/zh/areas/chatswood",
      keywords: ["Chatswood 水管工", "Chatswood 中文水管工", "Chatswood 通渠", "Chatswood 热水器维修", "Chatswood 煤气工", "Chatswood 漏水维修"],
    },
    suburb: "Chatswood",
    h1: "Chatswood 中文水管工｜通渠、热水器、漏水维修与煤气工",
    lead: "Chatswood 住宅、公寓、商铺和餐馆对快速沟通和明确报价说明有较高需求。Lin Plumbing & Gas 为 Chatswood 及北岸周边提供中文可沟通的水管、排水、热水和燃气服务。",
    heroImage: REAL_PHOTOS.commercialPlantPipework,
    heroAlt: "Chatswood 商业水管与复杂管道服务",
    nearby: ["Willoughby", "Lane Cove", "Artarmon", "Roseville", "North Ryde", "North Sydney"],
    commonNeeds: ["Chatswood 公寓漏水维修", "Chatswood 通渠与排水堵塞", "Chatswood 热水系统维修", "Chatswood 燃气安装与煤气维修", "商业物业和餐馆维护", "紧急水管服务"],
    areaServed: ["Chatswood", "Willoughby", "Lane Cove", "Artarmon", "Roseville", "North Ryde", "North Sydney"],
  },
  hurstville: {
    meta: {
      title: "Hurstville 水管工 | 华人区中文水管、通渠与热水器维修",
      description: "Hurstville 华人水管工中文服务：通渠、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与24小时紧急服务。覆盖 Hurstville、Kogarah、Allawah、Beverly Hills 及周边。",
      path: "/zh/areas/hurstville",
      keywords: ["Hurstville 水管工", "Hurstville 华人水管工", "Hurstville 通渠", "Hurstville 热水器维修", "Hurstville 煤气工", "悉尼中文水管工"],
    },
    suburb: "Hurstville",
    h1: "Hurstville 华人水管工｜中文通渠、热水器与煤气服务",
    lead: "Hurstville 及南区周边华人客户常见需求包括排水堵塞、热水器故障、漏水维修、燃气管线和餐馆商铺维护。Lin Plumbing & Gas 提供中文沟通与持牌服务。",
    heroImage: REAL_PHOTOS.cctvDrainInspection,
    heroAlt: "Hurstville 通渠与 CCTV 管道检测",
    nearby: ["Kogarah", "Allawah", "Beverly Hills", "Carlton", "Penshurst", "Rockdale"],
    commonNeeds: ["Hurstville 通渠与地漏返水", "Hurstville 热水器维修", "Hurstville 漏水维修", "Hurstville 持牌煤气工", "餐馆厨房排水与燃气咨询", "24小时紧急水管服务"],
    areaServed: ["Hurstville", "Kogarah", "Allawah", "Beverly Hills", "Carlton", "Penshurst", "Rockdale"],
  },
  burwood: {
    meta: {
      title: "Burwood 水管工 | 中文通渠、漏水维修、热水器与煤气工",
      description: "Burwood 中文水管工服务：通渠、漏水维修、热水器维修、持牌煤气工、商业水管维护与24小时紧急服务。覆盖 Burwood、Strathfield、Ashfield、Auburn 及周边区域。",
      path: "/zh/areas/burwood",
      keywords: ["Burwood 水管工", "Burwood 中文水管工", "Burwood 通渠", "Burwood 漏水维修", "Burwood 热水器维修", "Burwood 煤气工"],
    },
    suburb: "Burwood",
    h1: "Burwood 中文水管工｜通渠、漏水维修、热水器与煤气工",
    lead: "Burwood、Strathfield、Ashfield 等内西区客户常见需求包括公寓漏水、商铺排水、热水器维修和燃气服务。Lin Plumbing & Gas 提供中文沟通和悉尼持牌水管与燃气服务。",
    heroImage: REAL_PHOTOS.heritagePipeRepair,
    heroAlt: "Burwood 漏水维修与管道修复",
    nearby: ["Strathfield", "Ashfield", "Auburn", "Homebush", "Croydon", "Five Dock"],
    commonNeeds: ["Burwood 漏水维修与水管爆裂", "Burwood 通渠与排水堵塞", "Burwood 热水器维修", "Burwood 持牌煤气工", "商铺和公寓水管维护", "紧急水管工"],
    areaServed: ["Burwood", "Strathfield", "Ashfield", "Auburn", "Homebush", "Croydon", "Five Dock"],
  },
  eppingRyde: {
    meta: {
      title: "Epping Ryde 水管工 | 中文水管、通渠、热水器与煤气服务",
      description: "Epping/Ryde 中文水管工服务：通渠、热水器维修、漏水维修、持牌煤气工、雨水排水系统与24小时紧急水管服务。覆盖 Epping、Ryde、Eastwood、Macquarie Park 及周边。",
      path: "/zh/areas/epping-ryde",
      keywords: ["Epping 水管工", "Ryde 水管工", "Epping 中文水管工", "Ryde 通渠", "Ryde 热水器维修", "Epping 煤气工"],
    },
    suburb: "Epping / Ryde",
    h1: "Epping / Ryde 中文水管工｜通渠、热水器、漏水与煤气服务",
    lead: "Epping、Ryde、Macquarie Park 和周边区域既有住宅、公寓，也有商铺和商业物业。Lin Plumbing & Gas 提供中文可沟通的水管、通渠、热水器和燃气服务。",
    heroImage: REAL_PHOTOS.stormwaterDrainage,
    heroAlt: "Epping Ryde 雨水排水与管道服务",
    nearby: ["Eastwood", "Macquarie Park", "West Ryde", "Meadowbank", "Denistone", "Marsfield"],
    commonNeeds: ["Epping/Ryde 通渠和雨水排水", "Epping/Ryde 热水器维修", "Epping/Ryde 漏水维修", "Epping/Ryde 持牌煤气工", "公寓和商铺水管维护", "紧急水管服务"],
    areaServed: ["Epping", "Ryde", "Eastwood", "Macquarie Park", "West Ryde", "Meadowbank", "Denistone", "Marsfield"],
  },
} satisfies Record<string, AreaConfig>;

export function ChineseAreaPage({ config }: { config: AreaConfig }) {
  const schema = [
    localBusinessSchema({
      path: config.meta.path,
      description: config.meta.description,
      serviceType: [`${config.suburb} 水管工`, `${config.suburb} 通渠`, `${config.suburb} 排水管维修`, `${config.suburb} 屋顶雨水系统改造`, `${config.suburb} 热水器维修`, `${config.suburb} 煤气工`, "悉尼水管工", "悉尼华人水管工", "中文水管服务"],
      areaServed: config.areaServed,
    }),
    breadcrumbSchema([{ name: "中文首页", path: "/zh" }, { name: `${config.suburb} 水管工`, path: config.meta.path }]),
  ];

  return (
    <PageShell>
      <SeoHead meta={config.meta} schema={schema} />

      <section className="relative isolate overflow-hidden bg-[#102941] text-white">
        <img src={config.heroImage} alt={config.heroAlt} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="photo-overlay-dark absolute inset-0 -z-10" />
        <div className="container grid min-h-[650px] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="max-w-4xl animate-slow-rise">
            <div className="mb-6 inline-flex border border-[#f5a623]/70 bg-[#f5a623]/15 px-4 py-2 text-sm font-bold text-[#ffd37a] backdrop-blur">{config.suburb} · 中文沟通 · 持牌水管与煤气服务</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">{config.h1}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">{config.lead}</p>
            <div className="mt-9"><CallButtons dark /></div>
          </div>
          <aside className="trade-card hidden bg-[#faf8f5]/95 p-6 text-[#173557] shadow-2xl lg:block">
            <MapPin className="h-10 w-10 text-[#b86f3c]" />
            <p className="mt-5 font-display text-3xl font-bold leading-none">{config.suburb} 及周边区域</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {config.nearby.map((area) => <span key={area} className="border border-[#173557]/15 bg-white px-3 py-2 text-sm font-bold">{area}</span>)}
            </div>
            <p className="mt-5 text-base leading-7 text-[#526476]">如果不确定是否覆盖您的地址，可以直接电话说明 suburb 和问题类型。</p>
          </aside>
        </div>
      </section>

      <TrustBar items={["持牌服务", "中文沟通", "悉尼全区", "24小时紧急"]} />

      <section className="engineering-paper py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading eyebrow="本地常见需求" title={`${config.suburb} 客户常见水管、排水与燃气问题`} copy="下面整理了本地区客户常见的水管、通渠、排水管维修、屋顶雨水系统、热水器和煤气服务需求，方便你在联系前先判断问题类型。" />
            <div className="mt-8"><CallButtons /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.commonNeeds.map((need, index) => {
              const Icon = [Droplets, Gauge, Wrench, Flame, CheckCircle2, Clock3][index] ?? CheckCircle2;
              return <article key={need} className="trade-card border-l-4 border-[#f5a623] bg-white p-5 shadow-sm"><div className="flex gap-3"><Icon className="mt-1 h-5 w-5 shrink-0 text-[#b86f3c]" /><p className="font-bold leading-7 text-[#173557]">{need}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#102941] py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={REAL_PHOTOS.cctvDrainInspection} alt={`${config.suburb} 通渠服务`} className="h-72 w-full object-cover object-center" />
            <img src={REAL_PHOTOS.residentialHotWaterInstall} alt={`${config.suburb} 热水器维修`} className="h-72 w-full object-cover object-center" />
            <img src={REAL_PHOTOS.gasMeterTest} alt={`${config.suburb} 煤气工`} className="h-56 w-full object-cover object-center sm:col-span-2" />
          </div>
          <div>
            <SectionHeading dark eyebrow="可协助项目" title="本地区常见水管、排水管维修、热水器与煤气服务" copy="不同现场问题可能涉及通渠、排水管维修、屋顶雨水系统、热水器、煤气或漏水维修。你可以先查看对应服务内容，也可以直接电话说明所在区域、问题位置和紧急程度。" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chineseServiceLinks.map((link) => <a key={link.href} href={link.href} className="border border-white/10 bg-white/[0.04] p-4 font-bold text-white transition hover:border-[#f5a623] hover:text-[#f5a623]">{link.title}</a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">预约建议</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">联系前准备这些信息</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">中文沟通会更顺畅，但现场判断仍需要基本信息。准备照片、地址 suburb 和问题症状，可以帮助更快安排。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["所在 suburb 与街区", "问题类型：漏水、通渠、热水、燃气", "是否紧急或正在返水/喷水", "照片、视频、设备品牌或位置"].map((item) => <article key={item} className="trade-card bg-white p-6 shadow-sm"><ShieldCheck className="h-6 w-6 text-[#b86f3c]" /><p className="mt-4 font-display text-2xl font-bold leading-tight text-[#173557]">{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5a623] py-14 text-[#142f4d]">
        <div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div><p className="font-display text-5xl font-bold leading-none">需要 {config.suburb} 水管工？</p><p className="mt-2 text-2xl font-semibold">请直接电话说明 suburb、服务类型和紧急程度。</p></div>
          <Button asChild size="lg" className="h-14 rounded-none bg-[#142f4d] px-8 text-lg font-extrabold text-white hover:bg-[#24496f]"><a href={BUSINESS.phoneHref}>立即致电 {BUSINESS.phone}</a></Button>
        </div>
      </section>

      <ContactSection serviceHint={`${config.suburb} 通渠、热水器、漏水、煤气或紧急水管...`} />
    </PageShell>
  );
}
