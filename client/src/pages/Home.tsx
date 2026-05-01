/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This page keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  Globe2,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, REAL_PHOTOS } from "@/lib/linAssets";

type Lang = "en" | "zh";

const copy = {
  en: {
    topBar: "24/7 Emergency Plumbing & Gas Response",
    brandSub: "Sydney · Licensed Trade",
    nav: [
      ["#services", "Services"],
      ["#gas", "Gas"],
      ["#projects", "Work"],
      ["#terms", "Terms"],
      ["#contact", "Contact"],
    ],
    callNow: "Call Now",
    quote: "Request Quote",
    langButton: "中文",
    langHint: "Switch to Chinese",
    heroBadge: "24/7 Emergency · Licensed Sydney Plumbing & Gas",
    heroTitle: "Plumbing & Gas Work, Done Properly Across Sydney",
    heroLead: "Call Lin Plumbing & Gas for emergency leaks, gas fitting, blocked drains, hot water, pipework installation and maintenance across Sydney.",
    heroPanelTitle: "Fast contact matters in an emergency.",
    heroPanelText: "For urgent leaks, gas issues or blocked drains, calling is the quickest way to start.",
    trust: [
      { title: "Licensed", detail: BUSINESS.license, icon: ShieldCheck },
      { title: "Sydney-wide", detail: "Local plumbing & gas response", icon: MapPin },
      { title: "24/7 Emergency", detail: "Urgent leaks, gas and drains", icon: Clock3 },
      { title: "Clear service", detail: "Practical advice before work starts", icon: CheckCircle2 },
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Plumbing & Gas Services",
    servicesCopy: "Clear service categories help customers find the right help quickly across emergency plumbing, gas fitting, blocked drains, hot water and pipework jobs.",
    services: [
      { icon: Wrench, title: "General Plumbing", text: "Leak repairs, pipework, bathroom plumbing, maintenance and practical troubleshooting for Sydney homes and businesses.", image: REAL_PHOTOS.finishedBathroom },
      { icon: Flame, title: "Gas Fitting & Repairs", text: "Gas fitting, gas repairs, meter-side checks and compliance-minded work by a licensed local trade team.", image: REAL_PHOTOS.gasMeterTest },
      { icon: Droplets, title: "Blocked Drains", text: "Blocked drains, stormwater issues and CCTV pipe inspections supported by on-site diagnostic equipment.", image: REAL_PHOTOS.cctvDrainInspection },
      { icon: Gauge, title: "Hot Water Systems", text: "Support for hot water plant rooms, pipework connections, maintenance and service coordination.", image: REAL_PHOTOS.hotWaterPlantRoom },
      { icon: HardHat, title: "New Builds & Renovations", text: "Under-slab pipework, renovation plumbing and rough-in support for builders and property owners.", image: REAL_PHOTOS.underSlabPipework },
      { icon: Building2, title: "Commercial Pipework", text: "Complex exposed pipework, roof runs and plant-room plumbing for commercial and maintenance contexts.", image: REAL_PHOTOS.commercialPlantPipework },
    ],
    gasEyebrow: "Gas Services",
    gasTitle: "Gas Fitting, Gas Repairs & Compliance-Minded Work",
    gasCopy: "Gas service is a core part of the business. The page highlights gas meters, tools and pipework so customers can quickly understand the kind of work handled.",
    emergencyTitle: "24/7 Emergency Response",
    emergencyCopy: "For urgent leaks, gas or drain problems, please call first.",
    drainsEyebrow: "Blocked Drains",
    drainsTitle: "Blocked Drains & CCTV Pipe Inspections",
    drainsCopy: "Blocked drains need clear diagnosis, not guesswork. CCTV inspection and stormwater photos show the practical tools used for drain and pipe issues.",
    projectsEyebrow: "Work Gallery",
    projectsTitle: "Recent Plumbing & Gas Jobs",
    projectsCopy: "A practical gallery covering gas, drainage, new build, repair, roof and complex pipework.",
    projectLabels: ["Gas pipework", "Stormwater drainage", "New build excavation", "Pipe repair work", "Roof copper pipework", "Complex pipework"],
    areasEyebrow: "Service Areas",
    areasTitle: "Sydney-wide Service Areas",
    areasCopy: "The website currently uses Sydney-wide wording for customer clarity. Priority suburb pages can be added once target service areas are confirmed.",
    areaTags: ["Emergency plumbing", "Gas fitting", "Blocked drains", "Hot water"],
    termsEyebrow: "Terms",
    termsTitle: "Terms and Conditions of Plumbing Services",
    termsIntro: "These service terms are carried across from the original website so important business conditions remain available to customers.",
    contactEyebrow: "Contact",
    contactTitle: "Call, Email or Request a Quote",
    form: {
      name: "Name",
      phone: "Phone",
      service: "Service Needed",
      message: "Message",
      namePlaceholder: "Your name",
      phonePlaceholder: "Best contact number",
      servicePlaceholder: "Emergency leak, gas, blocked drain, hot water...",
      messagePlaceholder: "Tell us the issue, suburb and urgency.",
      note: "For urgent jobs, calling is recommended.",
      submit: "Send Quote Request",
    },
    footerLine: "Licensed Plumbing & Gas Services Across Sydney",
    mobileCall: "Call Now",
  },
  zh: {
    topBar: "悉尼全天候紧急水管与燃气服务",
    brandSub: "悉尼 · 持牌水管与燃气服务",
    nav: [
      ["#services", "服务"],
      ["#gas", "燃气"],
      ["#projects", "案例"],
      ["#terms", "条款"],
      ["#contact", "联系"],
    ],
    callNow: "立即致电",
    quote: "获取报价",
    langButton: "English",
    langHint: "切换到英文",
    heroBadge: "24/7 紧急服务 · 悉尼持牌水管与燃气服务",
    heroTitle: "悉尼水管与燃气服务",
    heroLead: "施工认真，响应及时。Lin Plumbing & Gas 为悉尼客户提供紧急漏水、燃气安装维修、排水堵塞、热水系统、管道安装与日常维护服务。",
    heroPanelTitle: "紧急情况，联系速度很重要。",
    heroPanelText: "遇到漏水、燃气问题或排水堵塞时，建议优先电话联系，便于更快确认情况。",
    trust: [
      { title: "持牌服务", detail: BUSINESS.license, icon: ShieldCheck },
      { title: "覆盖悉尼", detail: "本地水管与燃气响应", icon: MapPin },
      { title: "24/7 紧急服务", detail: "漏水、燃气与排水问题", icon: Clock3 },
      { title: "沟通清晰", detail: "施工前先说明处理方式", icon: CheckCircle2 },
    ],
    servicesEyebrow: "服务项目",
    servicesTitle: "水管与燃气服务",
    servicesCopy: "清晰的服务分类可以帮助客户快速找到合适服务，覆盖紧急水管、燃气、堵塞排水、热水系统和管道工程。",
    services: [
      { icon: Wrench, title: "日常水管维修", text: "处理漏水、管道、浴室水管、维护与现场排查，适用于悉尼住宅与商业物业。", image: REAL_PHOTOS.finishedBathroom },
      { icon: Flame, title: "燃气安装与维修", text: "提供燃气安装、维修、燃气表相关检查及合规导向施工。", image: REAL_PHOTOS.gasMeterTest },
      { icon: Droplets, title: "堵塞排水处理", text: "处理排水堵塞、雨水管问题，并可通过 CCTV 管道检测辅助判断。", image: REAL_PHOTOS.cctvDrainInspection },
      { icon: Gauge, title: "热水系统", text: "支持热水系统、设备间管路连接、维护与现场服务协调。", image: REAL_PHOTOS.hotWaterPlantRoom },
      { icon: HardHat, title: "新建与翻修管道", text: "为新建、翻修、地下管线和 rough-in 阶段提供水管施工支持。", image: REAL_PHOTOS.underSlabPipework },
      { icon: Building2, title: "商业与复杂管道", text: "处理复杂明管、屋顶管线、设备间和商业维护场景。", image: REAL_PHOTOS.commercialPlantPipework },
    ],
    gasEyebrow: "燃气服务",
    gasTitle: "燃气安装、维修与合规导向施工",
    gasCopy: "燃气相关服务属于重点业务，页面展示燃气表、工具和管线，让客户更直观了解可处理的现场类型。",
    emergencyTitle: "24/7 紧急响应",
    emergencyCopy: "紧急漏水、燃气或排水问题，请优先电话联系。",
    drainsEyebrow: "排水堵塞",
    drainsTitle: "堵塞排水与 CCTV 管道检查",
    drainsCopy: "堵塞排水需要准确判断，而不是猜测。CCTV 检测与雨水管照片展示了排水和管道问题常用的现场工具。",
    projectsEyebrow: "施工案例",
    projectsTitle: "近期水管与燃气工程",
    projectsCopy: "案例覆盖燃气、排水、新建、维修、屋顶管线与复杂管道场景。",
    projectLabels: ["燃气管线", "雨水排水", "新建开挖", "管道维修", "屋顶铜管", "复杂管道"],
    areasEyebrow: "服务区域",
    areasTitle: "服务悉尼各区",
    areasCopy: "目前网站以 Sydney-wide 覆盖范围进行说明。确认重点服务区域后，可以继续增加具体城区页面。",
    areaTags: ["紧急水管", "燃气服务", "堵塞排水", "热水系统"],
    termsEyebrow: "服务条款",
    termsTitle: "Terms and Conditions of Plumbing Services",
    termsIntro: "以下服务条款沿用原网站内容，确保重要业务条件继续保留并可供客户查看。",
    contactEyebrow: "联系",
    contactTitle: "电话、邮件或发送询价信息",
    form: {
      name: "姓名",
      phone: "电话",
      service: "需要的服务",
      message: "信息",
      namePlaceholder: "请输入姓名",
      phonePlaceholder: "最佳联系电话",
      servicePlaceholder: "紧急漏水、燃气、堵塞排水、热水系统...",
      messagePlaceholder: "请说明问题、所在区域和紧急程度。",
      note: "紧急情况建议直接电话联系。",
      submit: "发送询价",
    },
    footerLine: "悉尼持牌水管与燃气服务",
    mobileCall: "立即致电",
  },
} as const;

const projectImages = [
  REAL_PHOTOS.gasPipeWall,
  REAL_PHOTOS.stormwaterDrainage,
  REAL_PHOTOS.excavationNewBuild,
  REAL_PHOTOS.heritagePipeRepair,
  REAL_PHOTOS.roofCopperPipework,
  REAL_PHOTOS.complexPipework,
];

const terms = [
  {
    title: "1. Definitions & Technical Standards",
    body: [
      '"The Company": Refers to Lin Plumbing & Gas and its authorized licensed technicians.',
      '"The Client": Refers to the individual, owner, or legal entity requesting services or named on the invoice.',
      '"Compliance": All work shall be strictly performed in accordance with current Australian Standards, including but not limited to AS/NZS 3500 (Plumbing and Drainage) and AS/NZS 5601.1 (Gas Installations).',
      '"Defect": Refers specifically to a failure in workmanship that explicitly contravenes the technical requirements of the applicable AS/NZS standards. Minor aesthetic variations within the allowable tolerances of these standards do not constitute a defect.',
    ],
  },
  {
    title: "2. Retention of Title (Ownership of Materials)",
    body: [
      "Title and legal ownership of all Materials and equipment supplied by the Company shall remain with the Company until the Invoice is paid in full.",
      "Until such payment is cleared, the Client holds the Materials as a bailee only.",
      "In the event of a payment default, the Company reserves the absolute right to enter the premises (where access is legally permitted) to reclaim and remove any Materials, fixtures, or appliances supplied by us, even if already partially installed.",
    ],
  },
  {
    title: "3. Warranty and Mandatory Inspection Procedure",
    body: [
      "12-Month Limited Warranty: The Company provides a 12-month warranty on labor (Workmanship) from the date of completion.",
      "Notification Requirement: If a potential issue arises, the Client must notify the Company in writing immediately.",
      "First Right of Inspection: The Client must grant the Company the first opportunity to inspect and, if necessary, rectify the Work before engaging any third-party contractors. Any unauthorized interference with the Company’s Work by the Client or a third party will void this warranty immediately.",
      "Inspection Outcomes: If the issue is determined to be a result of our workmanship, it will be repaired at no cost. If the issue is not related to our workmanship (e.g., external damage, product fault, or failure of the Client’s pre-existing infrastructure), a new quote will be provided.",
      "Call-out Fees: A standard call-out fee applies to all site visits, including warranty inspections. This fee will only be waived if the fault is proven to be a direct result of our workmanship.",
    ],
  },
  {
    title: "4. Payment Terms, Late Fees, and Interest",
    body: [
      "Due Date: All invoices are strictly due within 7 days of issuance.",
      "Administrative Late Fee: A fixed administrative fee of $25.00 will be applied to any invoice not paid by the due date to cover processing costs.",
      "Interest: Overdue balances will accrue interest at a rate of 10% per annum, calculated daily from the due date until the debt is cleared.",
      "Recovery Costs: The Client is liable for all legal and debt collection costs incurred by the Company in recovering unpaid funds.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    body: [
      "The Company is not liable for the failure of pre-existing, aged, or substandard pipes/fixtures (e.g., corroded galvanized lines) encountered during the Work.",
      "Product warranties (e.g., hot water units) are provided by the manufacturer. Our liability is limited to the labor within our specific scope of work.",
    ],
  },
  {
    title: "6. Final Interpretation",
    body: [
      "The Company reserves the sole and absolute right to interpret all terms, conditions, technical specifications, and the scope of work within this agreement.",
      "In any technical dispute, the Company’s professional determination—based on licensed expertise and interpretation of the relevant AS/NZS standards—shall be final and binding upon the Client.",
    ],
  },
];

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-4" aria-label="Lin Plumbing and Gas home">
      <span className={`${compact ? "h-12 w-52" : "h-16 w-64 md:h-20 md:w-80"} flex shrink-0 items-center justify-start overflow-visible`}>
        <img src={REAL_PHOTOS.logo} alt="Lin Plumbing & Gas Pty Ltd" className="h-full w-full object-contain object-left drop-shadow-[0_6px_18px_rgba(0,0,0,0.24)]" />
      </span>
      <span className="sr-only">LIN PLUMBING & GAS PTY LTD · Sydney Licensed Trade</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl copper-line pl-5">
      <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold leading-[0.95] text-[#173557] md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#4d5d6e]">{copy}</p>
    </div>
  );
}

function CallButtons({ dark = false, t }: { dark?: boolean; t: (typeof copy)[Lang] }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className="h-13 rounded-none bg-[#f5a623] px-7 text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">
        <a href={BUSINESS.phoneHref}><Phone className="mr-2 h-5 w-5" /> {t.callNow} {BUSINESS.phone}</a>
      </Button>
      <Button asChild size="lg" variant="outline" className={`h-13 rounded-none border-2 border-[#f5a623] px-7 text-base font-bold ${dark ? "bg-white/10 text-white hover:bg-[#f5a623] hover:text-[#142f4d]" : "bg-transparent text-[#173557] hover:bg-[#f5a623] hover:text-[#142f4d]"}`}>
        <a href="#contact">{t.quote} <ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

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
        <div className="bg-[#f5a623] text-[#142f4d]">
          <div className="container flex items-center justify-between py-2 text-sm font-bold">
            <span>{t.topBar}</span>
            <a href={BUSINESS.phoneHref} className="hidden items-center gap-2 sm:flex"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
          </div>
        </div>
        <nav className="container flex items-center justify-between gap-5 py-4">
          <BrandLockup />
          <div className="hidden items-center gap-6 lg:flex">
            {t.nav.map(([href, label]) => <a key={href} href={href} className="text-sm font-semibold text-white/78 transition hover:text-[#f5a623]">{label}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" aria-label={t.langHint} onClick={() => setLang(lang === "en" ? "zh" : "en")} className="rounded-none border-white/30 bg-white/5 px-3 font-bold text-white hover:bg-white hover:text-[#173557]">
              <Globe2 className="mr-2 h-4 w-4" /> {t.langButton}
            </Button>
            <Button asChild className="hidden rounded-none bg-[#f5a623] font-extrabold text-[#142f4d] hover:bg-[#ffc14d] md:inline-flex"><a href={BUSINESS.phoneHref}><Phone className="mr-2 h-4 w-4" /> {t.callNow}</a></Button>
            <Menu className="h-6 w-6 text-white/60 lg:hidden" />
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[760px] overflow-hidden bg-[#102941] text-white">
          <img src={REAL_PHOTOS.heroVehicleTools} alt="Lin Plumbing and Gas work vehicle and tools in Sydney" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="photo-overlay-dark absolute inset-0 -z-10" />
          <div className="absolute bottom-0 right-0 h-44 w-2/5 diagonal-rule opacity-60" />
          <div className="container grid min-h-[760px] items-center gap-10 py-20 lg:grid-cols-[1.08fr_0.72fr]">
            <div className="max-w-4xl animate-slow-rise">
              <div className="mb-6 inline-flex border border-[#f5a623]/70 bg-[#f5a623]/15 px-4 py-2 text-sm font-bold text-[#ffd37a] backdrop-blur">{t.heroBadge}</div>
              <h1 className={`font-display font-bold tracking-tight ${lang === "zh" ? "max-w-4xl text-5xl leading-[1.02] md:text-7xl lg:text-8xl" : "text-6xl leading-[0.88] md:text-8xl lg:text-9xl"}`}>{t.heroTitle}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">{t.heroLead}</p>
              <div className="mt-9"><CallButtons dark t={t} /></div>
            </div>
            <aside className="trade-card hidden bg-[#faf8f5]/95 p-6 text-[#173557] shadow-2xl lg:block">
              <p className="font-display text-3xl font-bold leading-none">{t.heroPanelTitle}</p>
              <p className="mt-3 text-lg font-semibold text-[#526476]">{t.heroPanelText}</p>
              <div className="mt-6 space-y-4">
                {t.trust.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title} className="flex gap-4 border-l-4 border-[#f5a623] bg-white p-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-[#b86f3c]" /><div><p className="font-display text-xl font-bold">{item.title}</p><p className="text-sm font-semibold text-[#627386]">{item.detail}</p></div></div>;
                })}
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-[#173557]/10 bg-[#173557] py-8 text-white">
          <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.trust.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="flex gap-4 border border-white/10 bg-white/[0.04] p-5"><Icon className="h-7 w-7 shrink-0 text-[#f5a623]" /><div><p className="font-display text-2xl font-bold leading-none">{item.title}</p><p className="mt-2 text-sm text-white/65">{item.detail}</p></div></div>;
            })}
          </div>
        </section>

        <section id="services" className="engineering-paper scroll-mt-32 py-24">
          <div className="container">
            <SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} copy={t.servicesCopy} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {t.services.map((service, index) => {
                const Icon = service.icon;
                return <article key={service.title} className="group trade-card overflow-hidden bg-white"><div className="relative h-64 overflow-hidden bg-[#173557]"><img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071526]/82 via-[#071526]/25 to-transparent" /><div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-6 w-6" /></div><span className="absolute right-4 top-4 bg-white/92 px-3 py-1 font-display text-sm font-bold text-[#173557]">0{index + 1}</span></div><div className="p-6"><h3 className="font-display text-3xl font-bold leading-none text-[#173557]">{service.title}</h3><p className="mt-4 text-base leading-7 text-[#526476]">{service.text}</p></div></article>;
              })}
            </div>
          </div>
        </section>

        <section id="gas" className="scroll-mt-32 bg-[#102941] py-24 text-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2"><img src={REAL_PHOTOS.gasToolsSite} alt="Gas service tools" className="h-72 w-full object-cover" /><img src={REAL_PHOTOS.gasMeterTest} alt="Gas meter work" className="h-72 w-full object-cover sm:mt-12" /><img src={REAL_PHOTOS.gasPipeWall} alt="Gas pipework" className="h-56 w-full object-cover sm:col-span-2" /></div>
            <div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">{t.gasEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">{t.gasTitle}</h2><p className="mt-6 text-lg leading-8 text-white/78">{t.gasCopy}</p><div className="mt-8"><CallButtons dark t={t} /></div></div>
          </div>
        </section>

        <section className="bg-[#f5a623] py-14 text-[#142f4d]"><div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center"><div><p className="font-display text-5xl font-bold leading-none">{t.emergencyTitle}</p><p className="mt-2 text-2xl font-semibold">{t.emergencyCopy}</p></div><Button asChild size="lg" className="h-14 rounded-none bg-[#142f4d] px-8 text-lg font-extrabold text-white hover:bg-[#24496f]"><a href={BUSINESS.phoneHref}><Phone className="mr-2 h-5 w-5" /> {t.callNow} {BUSINESS.phone}</a></Button></div></section>

        <section className="py-24"><div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"><div><SectionHeading eyebrow={t.drainsEyebrow} title={t.drainsTitle} copy={t.drainsCopy} /><div className="mt-8"><CallButtons t={t} /></div></div><div className="grid gap-4 sm:grid-cols-2"><img src={REAL_PHOTOS.cctvDrainInspection} alt="CCTV pipe inspection equipment" className="h-80 w-full object-cover" /><img src={REAL_PHOTOS.stormwaterDrainage} alt="Stormwater drainage" className="h-80 w-full object-cover sm:mt-10" /></div></div></section>

        <section id="projects" className="scroll-mt-32 bg-[#173557] py-24 text-white"><div className="container"><div className="max-w-3xl"><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">{t.projectsEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">{t.projectsTitle}</h2><p className="mt-5 text-lg leading-8 text-white/72">{t.projectsCopy}</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projectImages.map((src, index) => <figure key={src} className="group relative h-80 overflow-hidden bg-[#071526]"><img src={src} alt={t.projectLabels[index]} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071526] to-transparent p-5"><p className="font-display text-2xl font-bold">{t.projectLabels[index]}</p></figcaption></figure>)}</div></div></section>

        <section className="engineering-paper py-24"><div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><img src={REAL_PHOTOS.teamVehicleTrust} alt="Lin Plumbing and Gas service vehicle" className="h-[520px] w-full object-cover shadow-2xl" /><div><SectionHeading eyebrow={t.areasEyebrow} title={t.areasTitle} copy={t.areasCopy} /><div className="mt-8 grid gap-3 sm:grid-cols-2">{t.areaTags.map((tag) => <p key={tag} className="border-l-4 border-[#f5a623] bg-white p-4 font-bold">{tag}</p>)}</div></div></div></section>

        <section id="terms" className="scroll-mt-32 bg-[#faf8f5] py-24"><div className="container"><SectionHeading eyebrow={t.termsEyebrow} title={t.termsTitle} copy={t.termsIntro} /><div className="mt-12 grid gap-5 lg:grid-cols-2">{terms.map((term) => <article key={term.title} className="trade-card bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{term.title}</h3><div className="mt-4 space-y-3 text-sm leading-7 text-[#526476]">{term.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</div></div></section>

        <section id="contact" className="scroll-mt-32 bg-[#102941] py-24 text-white"><div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">{t.contactEyebrow}</p><h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">{t.contactTitle}</h2><div className="mt-8 space-y-4 text-lg"><a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Phone className="h-5 w-5" /> {BUSINESS.phone}</a><a href={BUSINESS.emailHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Mail className="h-5 w-5" /> {BUSINESS.email}</a><p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> {BUSINESS.serviceArea}</p><p>{BUSINESS.license} · {BUSINESS.abn}</p></div></div><form action={BUSINESS.emailHref} method="post" encType="text/plain" className="trade-card bg-[#faf8f5] p-6 text-[#173557]"><div className="grid gap-4 sm:grid-cols-2"><label className="font-bold">{t.form.name}<input name="name" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder={t.form.namePlaceholder} /></label><label className="font-bold">{t.form.phone}<input name="phone" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder={t.form.phonePlaceholder} /></label></div><label className="mt-4 block font-bold">{t.form.service}<input name="service" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder={t.form.servicePlaceholder} /></label><label className="mt-4 block font-bold">{t.form.message}<textarea name="message" rows={5} className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder={t.form.messagePlaceholder} /></label><p className="mt-4 text-sm text-[#637083]">{t.form.note}</p><Button type="submit" className="mt-5 h-13 w-full rounded-none bg-[#f5a623] text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">{t.form.submit}</Button></form></div></section>
      </main>

      <footer className="bg-[#071526] pb-24 pt-12 text-white md:pb-12"><div className="container flex flex-col justify-between gap-8 md:flex-row"><div><BrandLockup compact /><p className="mt-4 max-w-xl text-white/65">{t.footerLine}</p></div><div className="text-white/75"><p>{BUSINESS.license}</p><p>{BUSINESS.abn}</p><p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p><p><a href={BUSINESS.emailHref}>{BUSINESS.email}</a></p><p className="mt-3"><a href="#terms" className="font-bold text-[#f5a623] hover:text-white">Terms & Conditions</a></p></div></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#f5a623]/50 bg-[#f5a623] p-3 text-[#142f4d] shadow-2xl md:hidden"><a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 font-display text-xl font-bold"><Phone className="h-5 w-5" /> {t.mobileCall} {BUSINESS.phone}</a></div>
    </div>
  );
}
