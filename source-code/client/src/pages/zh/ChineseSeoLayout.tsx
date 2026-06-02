/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This shared Chinese SEO layout keeps the practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { ReactNode, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, REAL_PHOTOS } from "@/lib/linAssets";

const SITE_URL = "https://linplumbinggas.com";

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export type Crumb = {
  name: string;
  path: string;
};

function setNamedMeta(selector: string, attrName: "name" | "property", attrValue: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel=\"${rel}\"][hreflang=\"${hreflang}\"]` : `link[rel=\"${rel}\"]`;
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function pairedEnglishHref(path: string) {
  return path === "/zh" ? `${SITE_URL}/` : `${SITE_URL}/`;
}

export function SeoHead({ meta, schema }: { meta: SeoMeta; schema?: Record<string, unknown> | Record<string, unknown>[] }) {
  const canonical = `${SITE_URL}${meta.path}`;
  const englishHref = pairedEnglishHref(meta.path);

  useEffect(() => {
    document.documentElement.lang = "zh-Hans";
    document.title = meta.title;
    setNamedMeta('meta[name="description"]', "name", "description", meta.description);
    setNamedMeta('meta[name="keywords"]', "name", "keywords", meta.keywords.join(", "));
    setNamedMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    setNamedMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    setNamedMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setNamedMeta('meta[property="og:locale"]', "property", "og:locale", "zh_CN");
    setNamedMeta('meta[property="og:locale:alternate"]', "property", "og:locale:alternate", "en_AU");
    setNamedMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    setNamedMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    setLink("canonical", canonical);
    setLink("alternate", englishHref, "en");
    setLink("alternate", englishHref, "en-AU");
    setLink("alternate", canonical, "zh");
    setLink("alternate", canonical, "zh-Hans");
    setLink("alternate", canonical, "zh-Hans-AU");
    setLink("alternate", englishHref, "x-default");
  }, [canonical, englishHref, meta.description, meta.keywords, meta.title]);

  return schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null;
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-4" aria-label="Lin Plumbing and Gas home">
      <span className={`${compact ? "h-12" : "h-14 sm:h-16"} shrink-0 block`} style={{lineHeight:0}}>
        <img src={REAL_PHOTOS.logo} alt="Lin Plumbing & Gas Pty Ltd" style={{height:'100%', width:'auto'}} className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.24)]" />
      </span>
      <span className="sr-only">LIN PLUMBING & GAS PTY LTD · 悉尼持牌水管与燃气服务</span>
    </a>
  );
}

export function ChineseHeader() {
  const nav = [
    ["/zh", "中文首页"],
    ["/zh/blocked-drains", "通渠"],
    ["/zh/hot-water", "热水器"],
    ["/zh/gas", "煤气工"],
    ["/zh/leak-repair", "漏水维修"],
    ["/zh#areas", "服务区域"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#173557]/95 text-white backdrop-blur-xl">
      <div className="bg-[#f5a623] text-[#142f4d]">
        <div className="container flex items-center justify-between py-2 text-sm font-bold">
          <span>悉尼华人水管工 · 持牌煤气工 · 24小时紧急服务</span>
          <a href={BUSINESS.phoneHref} className="hidden items-center gap-2 sm:flex"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
        </div>
      </div>
      <nav className="container flex items-center justify-between gap-5 py-4">
        <BrandLockup />
        <div className="hidden items-center gap-5 xl:flex">
          {nav.map(([href, label]) => <a key={href} href={href} className="text-sm font-semibold text-white/78 transition hover:text-[#f5a623]">{label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="rounded-none border-white/30 bg-white/5 px-3 font-bold text-white hover:bg-white hover:text-[#173557]">
            <a href="/"><Globe2 className="mr-2 h-4 w-4" /> English</a>
          </Button>
          <Button asChild className="hidden rounded-none bg-[#f5a623] font-extrabold text-[#142f4d] hover:bg-[#ffc14d] md:inline-flex"><a href={BUSINESS.phoneHref}><Phone className="mr-2 h-4 w-4" /> 立即致电</a></Button>
          <Menu className="h-6 w-6 text-white/60 xl:hidden" aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}

export function CallButtons({ dark = false, quoteHref = "#contact" }: { dark?: boolean; quoteHref?: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className="h-13 rounded-none bg-[#f5a623] px-7 text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">
        <a href={BUSINESS.phoneHref}><Phone className="mr-2 h-5 w-5" /> 立即致电 {BUSINESS.phone}</a>
      </Button>
      <Button asChild size="lg" variant="outline" className={`h-13 rounded-none border-2 border-[#f5a623] px-7 text-base font-bold ${dark ? "bg-white/10 text-white hover:bg-[#f5a623] hover:text-[#142f4d]" : "bg-transparent text-[#173557] hover:bg-[#f5a623] hover:text-[#142f4d]"}`}>
        <a href={quoteHref}>发送询价 <ArrowRight className="ml-2 h-5 w-5" /></a>
      </Button>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl copper-line pl-5">
      <p className={`font-display text-sm font-bold uppercase tracking-[0.24em] ${dark ? "text-[#f5a623]" : "text-[#8a4e20]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl font-bold leading-[0.98] md:text-6xl ${dark ? "text-white" : "text-[#173557]"}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/76" : "text-[#4d5d6e]"}`}>{copy}</p>
    </div>
  );
}

export function TrustBar({ items }: { items?: string[] }) {
  const trustItems = items ?? ["持牌服务", "20年经验", "24小时紧急服务", "中文沟通"];
  const icons = [ShieldCheck, CheckCircle2, Clock3, Wrench];

  return (
    <section className="border-b border-[#173557]/10 bg-[#173557] py-8 text-white">
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((title, index) => {
          const Icon = icons[index] ?? CheckCircle2;
          return (
            <div key={title} className="flex gap-4 border border-white/10 bg-white/[0.04] p-5">
              <Icon className="h-7 w-7 shrink-0 text-[#f5a623]" />
              <div>
                <p className="font-display text-2xl font-bold leading-none">{title}</p>
                <p className="mt-2 text-sm text-white/65">{index === 0 ? BUSINESS.license : index === 1 ? "本地经验与现场判断" : index === 2 ? "紧急漏水、通渠、燃气" : "普通话/中文服务说明"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ContactSection({ serviceHint = "紧急漏水、通渠、热水器、煤气、所在区域..." }: { serviceHint?: string }) {
  return (
    <section id="contact" className="scroll-mt-32 bg-[#102941] py-24 text-white">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#f5a623]">联系</p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">电话、邮件或发送询价信息</h2>
          <p className="mt-6 text-lg leading-8 text-white/74">如果是水管爆裂、排水倒灌、疑似燃气问题或没有热水，请优先电话联系。普通预约可以留下姓名、电话、区域和问题描述。</p>
          <div className="mt-8 space-y-4 text-lg">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Phone className="h-5 w-5" /> {BUSINESS.phone}</a>
            <a href={BUSINESS.emailHref} className="flex items-center gap-3 hover:text-[#f5a623]"><Mail className="h-5 w-5" /> {BUSINESS.email}</a>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> 悉尼全区服务</p>
            <p>{BUSINESS.license} · {BUSINESS.abn}</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); const subject = encodeURIComponent('询价 - ' + (data.get('service') || '水管服务')); const body = encodeURIComponent(`姓名: ${data.get('name')}\n电话: ${data.get('phone')}\n服务: ${data.get('service')}\n信息: ${data.get('message')}`); window.location.href = BUSINESS.emailHref + '?subject=' + subject + '&body=' + body; }} className="trade-card bg-[#faf8f5] p-6 text-[#173557]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="font-bold">姓名<input name="name" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="请输入姓名" /></label>
            <label className="font-bold">电话<input name="phone" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="最佳联系电话" /></label>
          </div>
          <label className="mt-4 block font-bold">需要的服务<input name="service" className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder={serviceHint} /></label>
          <label className="mt-4 block font-bold">信息<textarea name="message" rows={5} className="mt-2 w-full border border-[#173557]/20 bg-white p-3 font-normal" placeholder="请说明问题、所在 suburb、是否紧急、是否有照片或视频。" /></label>
          <p className="mt-4 text-sm text-[#637083]">紧急情况建议直接电话联系，以便更快确认是否可以安排。</p>
          <Button type="submit" className="mt-5 h-13 w-full rounded-none bg-[#f5a623] text-base font-extrabold text-[#142f4d] hover:bg-[#ffc14d]">发送询价</Button>
        </form>
      </div>
    </section>
  );
}

export function ChineseFooter() {
  return (
    <footer className="bg-[#071526] pb-24 pt-12 text-white md:pb-12">
      <div className="container flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <BrandLockup compact />
          <p className="mt-4 max-w-xl text-white/65">悉尼持牌水管与燃气服务。中文/英文沟通，覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼更多区域。</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-[#f5a623]">
            <a href="/zh">中文首页</a>
            <a href="/zh/blocked-drains">悉尼通渠</a>
            <a href="/zh/hot-water">热水器维修</a>
            <a href="/zh/gas">悉尼煤气工</a>
            <a href="/zh/leak-repair">漏水维修</a>
          </div>
        </div>
        <div className="text-white/75">
          <p>{BUSINESS.license}</p>
          <p>{BUSINESS.abn}</p>
          <p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
          <p><a href={BUSINESS.emailHref}>{BUSINESS.email}</a></p>
          <p className="mt-3"><a href="/" className="font-bold text-[#f5a623] hover:text-white">English Website</a></p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#173557]">
      <ChineseHeader />
      <main>{children}</main>
      <ChineseFooter />
      <a href={BUSINESS.phoneHref} className="fixed inset-x-4 bottom-4 z-[70] flex h-14 items-center justify-center bg-[#f5a623] text-base font-extrabold text-[#142f4d] shadow-2xl md:hidden"><Phone className="mr-2 h-5 w-5" /> 立即致电 {BUSINESS.phone}</a>
    </div>
  );
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function localBusinessSchema(extra: { name?: string; description: string; path: string; serviceType: string[]; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: extra.name ?? BUSINESS.name,
    url: `${SITE_URL}${extra.path}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    areaServed: extra.areaServed ?? ["Sydney", "Eastwood", "Chatswood", "Hurstville", "Burwood", "Epping", "Ryde"],
    openingHours: "Mo-Su 00:00-23:59",
    serviceType: extra.serviceType,
    description: extra.description,
  };
}

export const chineseServiceLinks = [
  { title: "悉尼通渠 / 下水道疏通", href: "/zh/blocked-drains", image: REAL_PHOTOS.cctvDrainInspection, text: "排水堵塞、下水慢、马桶或地漏返水、CCTV 管道检测。" },
  { title: "悉尼热水器维修", href: "/zh/hot-water", image: REAL_PHOTOS.residentialHotWaterInstall, text: "没有热水、热水器漏水、住宅热水系统安装和更换建议。" },
  { title: "悉尼煤气工", href: "/zh/gas", image: REAL_PHOTOS.gasMeterTest, text: "持牌煤气工、燃气安装、煤气维修、LPG/GAS 连接。" },
  { title: "悉尼漏水维修", href: "/zh/leak-repair", image: REAL_PHOTOS.heritagePipeRepair, text: "漏水排查、水管爆裂、浴室厨房水管、紧急维修。" },
];

export const priorityAreas = [
  { name: "Eastwood", href: "/zh/areas/eastwood", label: "Eastwood 水管工" },
  { name: "Chatswood", href: "/zh/areas/chatswood", label: "Chatswood 中文水管工" },
  { name: "Hurstville", href: "/zh/areas/hurstville", label: "Hurstville 华人水管工" },
  { name: "Burwood", href: "/zh/areas/burwood", label: "Burwood 通渠与煤气工" },
  { name: "Epping / Ryde", href: "/zh/areas/epping-ryde", label: "Epping / Ryde 水管工" },
];
