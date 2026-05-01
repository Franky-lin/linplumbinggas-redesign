/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This page uses deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography and only real user-provided photos from Lin Plumbing & Gas.
*/

import { ArrowRight, BadgeCheck, Building2, Clock3, Droplets, Flame, Gauge, HardHat, Mail, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, REAL_PHOTOS } from "@/lib/linAssets";

const navItems = [
  ["#services", "Services 服务"],
  ["#gas", "Gas 燃气"],
  ["#projects", "Real Work 案例"],
  ["#contact", "Contact 联系"],
];

const trustItems = [
  { icon: ShieldCheck, title: "Licensed", zh: "持牌服务", detail: BUSINESS.license },
  { icon: MapPin, title: "Sydney-wide", zh: "覆盖悉尼", detail: "Local plumbing & gas response" },
  { icon: Clock3, title: "24/7 Emergency", zh: "全天候紧急响应", detail: "Urgent leaks, gas and drains" },
  { icon: BadgeCheck, title: "Real Work Photos", zh: "真实施工照片", detail: "No stock or AI images" },
];

const services = [
  { icon: Wrench, title: "General Plumbing", zh: "日常水管维修", text: "Leak repairs, pipework, bathroom plumbing, maintenance and practical troubleshooting for Sydney homes and businesses.", zhText: "处理漏水、管道、浴室水管、维护与现场排查。", image: REAL_PHOTOS.finishedBathroom },
  { icon: Flame, title: "Gas Fitting & Repairs", zh: "燃气安装与维修", text: "Gas fitting, gas repairs, meter-side checks and compliance-minded work by a licensed local trade team.", zhText: "提供燃气安装、维修、燃气表相关检查及合规导向施工。", image: REAL_PHOTOS.gasMeterTest },
  { icon: Droplets, title: "Blocked Drains", zh: "堵塞排水处理", text: "Blocked drains, stormwater issues and CCTV pipe inspections supported by real on-site diagnostic equipment.", zhText: "处理排水堵塞、雨水管问题，并可通过 CCTV 管道检测辅助判断。", image: REAL_PHOTOS.cctvDrainInspection },
  { icon: Gauge, title: "Hot Water Systems", zh: "热水系统", text: "Support for hot water plant rooms, pipework connections, maintenance and service coordination.", zhText: "支持热水系统、设备间管路连接、维护与现场服务协调。", image: REAL_PHOTOS.hotWaterPlantRoom },
  { icon: HardHat, title: "New Builds & Renovations", zh: "新建与翻修管道", text: "Under-slab pipework, renovation plumbing and rough-in support for builders and property owners.", zhText: "为新建、翻修、地下管线和 rough-in 阶段提供水管施工支持。", image: REAL_PHOTOS.underSlabPipework },
  { icon: Building2, title: "Commercial Pipework", zh: "商业与复杂管道", text: "Complex exposed pipework, roof runs and plant-room plumbing for commercial and maintenance contexts.", zhText: "处理复杂明管、屋顶管线、设备间和商业维护场景。", image: REAL_PHOTOS.commercialPlantPipework },
];

const projectPhotos = [
  { src: REAL_PHOTOS.gasPipeWall, label: "Gas pipework", zh: "燃气管线" },
  { src: REAL_PHOTOS.stormwaterDrainage, label: "Stormwater drainage", zh: "雨水排水" },
  { src: REAL_PHOTOS.excavationNewBuild, label: "New build excavation", zh: "新建开挖" },
  { src: REAL_PHOTOS.heritagePipeRepair, label: "Pipe repair work", zh: "管道维修" },
  { src: REAL_PHOTOS.roofCopperPipework, label: "Roof copper pipework", zh: "屋顶铜管" },
  { src: REAL_PHOTOS.complexPipework, label: "Complex pipework", zh: "复杂管道" },
];

function SectionHeading({ eyebrow, title, zh, copy }: { eyebrow: string; title: string; zh: string; copy: string }) {
  return (
    <div className="max-w-3xl copper-line pl-5">
      <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold leading-[0.95] text-[#173557] md:text-6xl">{title}</h2>
      <p className="mt-2 text-xl font-semibold text-[#42566f] md:text-2xl">{zh}</p>
      <p className="mt-5 text-lg leading-8 text-[#4d5d6e]">{copy}</p>
    </div>
  );
}

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className="h-13 rounded-none bg-[#f5a623] px-7 text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">
        <a href={BUSINESS.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {BUSINESS.phone}</a>
      </Button>
      <Button asChild size="lg" variant="outline" className={`h-13 rounded-none border-2 border-[#f5a623] px-7 text-base font-bold ${dark ? "bg-white/10 text-white hover:bg-[#f5a623] hover:text-[#142f4d]" : "bg-transparent text-[#173557] hover:bg-[#f5a623] hover:text-[#142f4d]"}`}>
        <a href="#contact">Request Quote 获取报价 <ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    areaServed: "Sydney, NSW, Australia",
    openingHours: "Mo-Su 00:00-23:59",
    description: "Licensed plumbing and gas services across Sydney, including 24/7 emergency response, gas fitting, blocked drains, hot water and pipework. English and Chinese service available.",
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#173557]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sticky top-0 z-50 border-b border-white/15 bg-[#173557]/95 text-white backdrop-blur-xl">
        <div className="bg-[#f5a623] text-[#142f4d]"><div className="container flex items-center justify-between py-2 text-sm font-bold"><span>24/7 Emergency Plumbing & Gas Response · 悉尼全天候紧急水管与燃气服务</span><a href={BUSINESS.phoneHref} className="hidden items-center gap-2 sm:flex"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a></div></div>
        <nav className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Lin Plumbing and Gas home"><img src={REAL_PHOTOS.logo} alt="Lin Plumbing & Gas logo" className="h-12 w-12 border border-white/20 bg-white object-contain" /><div><p className="font-display text-xl font-bold leading-none">LIN PLUMBING & GAS</p><p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Sydney · Licensed Trade</p></div></a>
          <div className="hidden items-center gap-6 lg:flex">{navItems.map(([href, label]) => <a key={href} href={href} className="text-sm font-semibold text-white/78 transition hover:text-[#f5a623]">{label}</a>)}</div>
          <Button asChild className="hidden rounded-none bg-[#f5a623] font-extrabold text-[#142f4d] hover:bg-[#ffc14d] md:inline-flex"><a href={BUSINESS.phoneHref}><Phone className="mr-2 h-4 w-4" /> Call Now</a></Button>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[760px] overflow-hidden bg-[#102941] text-white">
          <img src={REAL_PHOTOS.heroVehicleTools} alt="Lin Plumbing and Gas real work vehicle and tools in Sydney" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="photo-overlay-dark absolute inset-0 -z-10" />
          <div className="absolute bottom-0 right-0 h-44 w-2/5 diagonal-rule opacity-60" />
          <div className="container grid min-h-[760px] items-center gap-10 py-20 lg:grid-cols-[1.08fr_0.72fr]">
            <div className="max-w-4xl animate-slow-rise"><div className="mb-6 inline-flex border border-[#f5a623]/70 bg-[#f5a623]/15 px-4 py-2 text-sm font-bold text-[#ffd37a] backdrop-blur">24/7 Emergency · Licensed Sydney Plumbing & Gas · 中英双语服务</div><h1 className="font-display text-6xl font-bold leading-[0.88] tracking-tight md:text-8xl lg:text-9xl">Real Plumbing & Gas Work, Done Properly Across Sydney</h1><p className="mt-5 text-2xl font-semibold text-[#f7dfb5] md:text-3xl">真实施工，服务悉尼。持牌水管与燃气服务。</p><p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">Call Lin Plumbing & Gas for emergency leaks, gas fitting, blocked drains, hot water, pipework installation and maintenance across Sydney. Every photo on this website is from real supplied work imagery.</p><p className="mt-3 max-w-2xl text-base leading-7 text-white/70">悉尼范围内提供紧急漏水、燃气、堵塞排水、热水系统、管道安装与维护服务。本网站仅使用真实施工照片。</p><div className="mt-9"><CallButtons dark /></div></div>
            <aside className="trade-card hidden bg-[#faf8f5]/95 p-6 text-[#173557] shadow-2xl lg:block"><p className="font-display text-3xl font-bold leading-none">Fast contact matters in an emergency.</p><p className="mt-3 text-lg font-semibold text-[#526476]">紧急情况，先电话联系更快。</p><div className="mt-6 space-y-4">{trustItems.slice(0, 3).map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-4 border-l-4 border-[#f5a623] bg-white p-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-[#b86f3c]" /><div><p className="font-display text-xl font-bold">{item.title} · {item.zh}</p><p className="text-sm font-semibold text-[#627386]">{item.detail}</p></div></div>; })}</div></aside>
          </div>
        </section>

        <section className="border-b border-[#173557]/10 bg-[#173557] py-8 text-white"><div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">{trustItems.map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-4 border border-white/10 bg-white/[0.04] p-5"><Icon className="h-7 w-7 shrink-0 text-[#f5a623]" /><div><p className="font-display text-2xl font-bold leading-none">{item.title}</p><p className="mt-1 font-semibold text-[#f7dfb5]">{item.zh}</p><p className="mt-2 text-sm text-white/65">{item.detail}</p></div></div>; })}</div></section>

        <section id="services" className="engineering-paper py-24"><div className="container"><SectionHeading eyebrow="Services / 服务" title="Plumbing & Gas Services" zh="水管与燃气服务" copy="Clear service categories help customers find the right help quickly while strengthening Sydney local SEO for emergency plumbing, gas fitting, blocked drains and hot water work." /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className="group trade-card overflow-hidden bg-white"><div className="relative h-64 overflow-hidden bg-[#173557]"><img src={service.image} alt={`${service.title} real work photo by Lin Plumbing and Gas`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071526]/82 via-[#071526]/25 to-transparent" /><div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-6 w-6" /></div><span className="absolute right-4 top-4 bg-white/92 px-3 py-1 font-display text-sm font-bold text-[#173557]">0{index + 1}</span></div><div className="p-6"><h3 className="font-display text-3xl font-bold leading-none text-[#173557]">{service.title}</h3><p className="mt-1 text-lg font-semibold text-[#b86f3c]">{service.zh}</p><p className="mt-4 text-base leading-7 text-[#526476]">{service.text}</p><p className="mt-2 text-sm leading-6 text-[#6b7887]">{service.zhText}</p></div></article>; })}</div></div></section>

        <section id="gas" className="bg-[#102941] py-24 text-white"><div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div className="grid gap-4 sm:grid-cols-2"><img src={REAL_PHOTOS.gasToolsSite} alt="Gas service tools on a Lin Plumbing and Gas job site" className="h-72 w-full object-cover" /><img src={REAL_PHOTOS.gasMeterTest} alt="Gas meter testing real work photo" className="h-72 w-full object-cover sm:mt-12" /><img src={REAL_PHOTOS.gasPipeWall} alt="Gas pipework on wall real work photo" className="h-56 w-full object-cover sm:col-span-2" /></div><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">Gas Services / 燃气服务</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">Gas Fitting, Gas Repairs & Compliance-Minded Work</h2><p className="mt-4 text-2xl font-semibold text-[#f7dfb5]">燃气安装、维修与合规导向施工</p><p className="mt-6 text-lg leading-8 text-white/78">Gas service is a core part of the business. The page highlights real gas meters, tools and pipework so customers can see practical experience rather than generic claims.</p><p className="mt-3 leading-7 text-white/68">燃气相关服务属于重点业务，页面使用真实燃气表、工具和管线照片建立信任。</p><div className="mt-8"><CallButtons dark /></div></div></div></section>

        <section className="bg-[#f5a623] py-14 text-[#142f4d]"><div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center"><div><p className="font-display text-5xl font-bold leading-none">24/7 Emergency Response</p><p className="mt-2 text-2xl font-semibold">紧急漏水、燃气或排水问题，请优先电话联系。</p></div><Button asChild size="lg" className="h-14 rounded-none bg-[#142f4d] px-8 text-lg font-extrabold text-white hover:bg-[#24496f]"><a href={BUSINESS.phoneHref}><Phone className="mr-2 h-5 w-5" /> Call {BUSINESS.phone}</a></Button></div></section>

        <section className="py-24"><div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"><div><SectionHeading eyebrow="Blocked Drains / 排水" title="Blocked Drains & CCTV Pipe Inspections" zh="堵塞排水与 CCTV 管道检查" copy="Blocked drains need clear diagnosis, not guesswork. Real CCTV and stormwater photos show the practical tools used for drain and pipe issues." /><div className="mt-8"><CallButtons /></div></div><div className="grid gap-4 sm:grid-cols-2"><img src={REAL_PHOTOS.cctvDrainInspection} alt="CCTV pipe inspection equipment real photo" className="h-80 w-full object-cover" /><img src={REAL_PHOTOS.stormwaterDrainage} alt="Stormwater drainage real work photo" className="h-80 w-full object-cover sm:mt-10" /></div></div></section>

        <section id="projects" className="bg-[#173557] py-24 text-white"><div className="container"><div className="max-w-3xl"><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">Real Work / 真实案例</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">Real Work From Recent Jobs</h2><p className="mt-5 text-lg leading-8 text-white/72">A practical gallery using only supplied Lin Plumbing & Gas photos: gas, drainage, new build, repair, roof and complex pipework.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projectPhotos.map((photo) => <figure key={photo.src} className="group relative h-80 overflow-hidden bg-[#071526]"><img src={photo.src} alt={`${photo.label} real Lin Plumbing and Gas work photo`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071526] to-transparent p-5"><p className="font-display text-2xl font-bold">{photo.label}</p><p className="font-semibold text-[#f7dfb5]">{photo.zh}</p></figcaption></figure>)}</div></div></section>

        <section className="engineering-paper py-24"><div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><img src={REAL_PHOTOS.teamVehicleTrust} alt="Lin Plumbing and Gas local team and vehicle real photo" className="h-[520px] w-full object-cover shadow-2xl" /><div><SectionHeading eyebrow="Service Areas / 服务区域" title="Sydney-wide Service Areas" zh="服务悉尼各区" copy="The website currently uses Sydney-wide wording for local SEO and customer clarity. Future suburb pages can be added for priority areas once the business confirms target suburbs." /><div className="mt-8 grid gap-3 sm:grid-cols-2"><p className="border-l-4 border-[#f5a623] bg-white p-4 font-bold">Emergency plumbing · 紧急水管</p><p className="border-l-4 border-[#f5a623] bg-white p-4 font-bold">Gas fitting · 燃气服务</p><p className="border-l-4 border-[#f5a623] bg-white p-4 font-bold">Blocked drains · 堵塞排水</p><p className="border-l-4 border-[#f5a623] bg-white p-4 font-bold">Hot water · 热水系统</p></div></div></div></section>

        <section id="contact" className="bg-[#102941] py-24 text-white"><div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">Contact / 联系</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">Call, Email or Request a Quote</h2><p className="mt-4 text-2xl font-semibold text-[#f7dfb5]">电话、邮件或发送询价信息</p><div className="mt-8 space-y-4 text-lg"><a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Phone className="h-5 w-5" /> {BUSINESS.phone}</a><a href={BUSINESS.emailHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Mail className="h-5 w-5" /> {BUSINESS.email}</a><p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Sydney-wide · 服务悉尼各区</p><p>{BUSINESS.license} · {BUSINESS.abn}</p></div></div><form action={BUSINESS.emailHref} method="post" encType="text/plain" className="trade-card bg-[#faf8f5] p-6 text-[#173557]"><div className="grid gap-4 sm:grid-cols-2"><label className="font-bold">Name 姓名<input name="name" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="Your name" /></label><label className="font-bold">Phone 电话<input name="phone" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="Best contact number" /></label></div><label className="mt-4 block font-bold">Service Needed 需要的服务<input name="service" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="Emergency leak, gas, blocked drain, hot water..." /></label><label className="mt-4 block font-bold">Message 信息<textarea name="message" rows={5} className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="Tell us the issue, suburb and urgency." /></label><p className="mt-4 text-sm text-[#637083]">For urgent jobs, calling is recommended. 紧急情况建议直接电话联系。</p><Button type="submit" className="mt-5 h-13 w-full rounded-none bg-[#f5a623] text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">Send Quote Request 发送询价</Button></form></div></section>
      </main>

      <footer className="bg-[#071526] pb-24 pt-12 text-white md:pb-12"><div className="container flex flex-col justify-between gap-8 md:flex-row"><div><div className="flex items-center gap-3"><img src={REAL_PHOTOS.logo} alt="Lin Plumbing & Gas logo" className="h-12 w-12 bg-white object-contain" /><p className="font-display text-2xl font-bold">LIN PLUMBING & GAS</p></div><p className="mt-4 max-w-xl text-white/65">Licensed Plumbing & Gas Services Across Sydney · 悉尼持牌水管与燃气服务</p></div><div className="text-white/75"><p>{BUSINESS.license}</p><p>{BUSINESS.abn}</p><p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p><p><a href={BUSINESS.emailHref}>{BUSINESS.email}</a></p></div></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#f5a623]/50 bg-[#f5a623] p-3 text-[#142f4d] shadow-2xl md:hidden"><a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 font-display text-xl font-bold"><Phone className="h-5 w-5" /> Call Now · 立即致电 {BUSINESS.phone}</a></div>
    </div>
  );
}
