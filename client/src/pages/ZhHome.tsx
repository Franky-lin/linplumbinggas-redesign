/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This Chinese homepage keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { Building2, CheckCircle2, Clock3, Droplets, Flame, Gauge, HardHat, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { BUSINESS, REAL_PHOTOS } from "@/lib/linAssets";
import { Button } from "@/components/ui/button";
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
} from "@/pages/zh/ChineseSeoLayout";

const meta = {
  title: "悉尼华人水管工 | 中文水管工与持牌煤气工 | Lin Plumbing & Gas",
  description: "Lin Plumbing & Gas 提供悉尼华人水管工、中文水管工、持牌煤气工、通渠、热水器维修、漏水维修与24小时紧急服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼全区。",
  path: "/zh",
  keywords: ["悉尼华人水管工", "悉尼中文水管工", "悉尼水管工", "悉尼煤气工", "悉尼通渠", "悉尼热水器维修", "Eastwood 水管工", "Chatswood 水管工", "Hurstville 水管工"],
};

const services = [
  { icon: Wrench, title: "悉尼水管工｜漏水维修", text: "处理漏水、水管爆裂、马桶、水龙头、浴室和厨房水管问题，适合住宅、商铺、餐馆与物业维护。", image: REAL_PHOTOS.finishedBathroom, href: "/zh/leak-repair" },
  { icon: Droplets, title: "通渠｜下水道疏通", text: "针对下水慢、排水堵塞、地漏返水、马桶堵塞、雨水排水问题，可结合 CCTV 管道检测判断。", image: REAL_PHOTOS.cctvDrainInspection, href: "/zh/blocked-drains" },
  { icon: Gauge, title: "热水器维修与安装", text: "处理没有热水、热水器漏水、热水系统更换建议、住宅热水器安装与管路连接。", image: REAL_PHOTOS.residentialHotWaterInstall, href: "/zh/hot-water" },
  { icon: Flame, title: "持牌煤气工｜燃气安装", text: "提供燃气安装、煤气维修、LPG/GAS 连接、燃气表相关检查与合规导向施工。", image: REAL_PHOTOS.gasMeterTest, href: "/zh/gas" },
  { icon: Droplets, title: "雨水排水系统", text: "处理 stormwater system、雨水管、地面排水、户外排水管路和疑似雨水倒灌问题。", image: REAL_PHOTOS.stormwaterDrainage, href: "/zh/blocked-drains" },
  { icon: Gauge, title: "泵系统｜Pump System", text: "可咨询泵系统管路、排污泵、增压泵、基础故障检查和更换协调。", image: REAL_PHOTOS.hotWaterPlantRoom, href: "/zh/hot-water" },
  { icon: HardHat, title: "新建与翻修管道", text: "支持新建、翻修、地下管线、rough-in 阶段和建筑现场水管施工。", image: REAL_PHOTOS.underSlabPipework, href: "/zh#contact" },
  { icon: Building2, title: "商业与复杂管道", text: "处理复杂明管、屋顶铜管、设备间管线和商业维护场景。", image: REAL_PHOTOS.commercialPlantPipework, href: "/zh#contact" },
];

const faqs = [
  { question: "你们是悉尼华人水管工吗？", answer: "Lin Plumbing & Gas 面向悉尼华人和本地客户提供持牌水管与燃气服务。中文和英文均可沟通，紧急情况建议直接电话联系。" },
  { question: "是否提供 24 小时紧急水管服务？", answer: "我们提供 24/7 紧急水管与燃气响应。遇到水管爆裂、排水返水、没有热水或疑似燃气问题时，建议优先致电 0430 731 989。" },
  { question: "可以做通渠和 CCTV 管道检测吗？", answer: "可以。服务范围包括通渠、下水道疏通、排水堵塞、stormwater system、雨水管问题和 CCTV 管道检测辅助判断。" },
  { question: "可以处理热水器和煤气问题吗？", answer: "可以联系咨询。服务范围包括热水器安装维修、持牌煤气工、燃气安装、煤气维修和 LPG/GAS 连接等。" },
  { question: "服务哪些华人区？", answer: "重点覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde，也服务 Parramatta、Strathfield、Bankstown、Ashfield、Auburn、Carlingford 及悉尼更多区域。" },
];

export default function ZhHome() {
  const schema = [
    localBusinessSchema({
      path: meta.path,
      description: meta.description,
      serviceType: ["悉尼华人水管工", "悉尼中文水管工", "悉尼水管工", "悉尼煤气工", "通渠", "下水道疏通", "热水器维修", "漏水维修", "24小时紧急水管服务"],
    }),
    breadcrumbSchema([{ name: "中文首页", path: "/zh" }]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <PageShell>
      <SeoHead meta={meta} schema={schema} />

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#102941] text-white">
        <img src={REAL_PHOTOS.heroVehicleTools} alt="Lin Plumbing and Gas 悉尼华人水管工车辆与工具" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="photo-overlay-dark absolute inset-0 -z-10" />
        <div className="absolute bottom-0 right-0 h-44 w-2/5 diagonal-rule opacity-60" />
        <div className="container grid min-h-[760px] items-center gap-10 py-20 lg:grid-cols-[1.08fr_0.72fr]">
          <div className="max-w-4xl animate-slow-rise">
            <div className="mb-6 inline-flex border border-[#f5a623]/70 bg-[#f5a623]/15 px-4 py-2 text-sm font-bold text-[#ffd37a] backdrop-blur">悉尼华人水管工 · 中文沟通 · 持牌煤气工 · 24小时紧急服务</div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">悉尼华人水管工｜中文水管工与持牌煤气工</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">Lin Plumbing & Gas 为悉尼华人和本地客户提供水管、通渠、热水器维修、煤气安装、漏水维修、雨水排水系统和泵系统服务。中文/英文可沟通，覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼全区。</p>
            <div className="mt-9"><CallButtons dark /></div>
          </div>
          <aside className="trade-card hidden bg-[#faf8f5]/95 p-6 text-[#173557] shadow-2xl lg:block">
            <p className="font-display text-3xl font-bold leading-none">紧急情况，请优先电话联系。</p>
            <p className="mt-3 text-lg font-semibold text-[#526476]">遇到水管爆裂、排水返水、疑似燃气问题或突然没有热水，直接致电可以更快确认现场情况。</p>
            <div className="mt-6 space-y-4">
              {["持牌服务", "中文沟通", "悉尼全区", "24小时紧急"].map((item, index) => {
                const Icon = [ShieldCheck, CheckCircle2, MapPin, Clock3][index];
                return <div key={item} className="flex gap-4 border-l-4 border-[#f5a623] bg-white p-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-[#b86f3c]" /><div><p className="font-display text-xl font-bold">{item}</p><p className="text-sm font-semibold text-[#627386]">{index === 0 ? BUSINESS.license : index === 1 ? "普通话/中文说明服务范围" : index === 2 ? "Sydney-wide service" : "紧急水管、排水、燃气"}</p></div></div>;
              })}
            </div>
          </aside>
        </div>
      </section>

      <TrustBar />

      <section className="bg-[#faf8f5] py-14">
        <div className="container grid gap-8 border-l-8 border-[#f5a623] bg-white p-6 shadow-sm lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:p-8">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">中文客户服务</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-none text-[#173557] md:text-6xl">中文沟通清楚说明服务范围与现场情况</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#526476]">如果你需要找悉尼水管工、悉尼煤气工、通渠、热水器维修或本地区水管服务，本页会直接说明 Lin Plumbing & Gas 可以协助的项目、服务区域和紧急联系方法，方便你在预约前先了解情况。</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["悉尼水管工", "悉尼煤气工", "悉尼热水器维修", "悉尼通渠", "中文服务", "不通不收费可咨询"].map((tag) => <span key={tag} className="border border-[#173557]/15 bg-[#faf8f5] px-3 py-2 text-sm font-bold text-[#173557]">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="engineering-paper scroll-mt-32 py-24">
        <div className="container">
          <SectionHeading eyebrow="服务项目" title="悉尼水管、通渠、煤气、热水器与漏水维修" copy="下面按常见问题整理服务范围。你可以先选择需要的项目，再通过电话或询价信息说明现场情况、所在区域和是否紧急。" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="trade-card overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img src={service.image} alt={service.title} className="h-44 w-full object-cover object-center" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a623] text-[#142f4d]"><Icon className="h-7 w-7" /></div><span className="font-display text-sm font-bold text-[#b86f3c]">0{index + 1}</span></div>
                    <h3 className="mt-7 font-display text-3xl font-bold leading-none text-[#173557]">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#526476]">{service.text}</p>
                    <a href={service.href} className="mt-5 inline-flex font-bold text-[#b86f3c] hover:text-[#173557]">查看服务详情 →</a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#102941] py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={REAL_PHOTOS.gasToolsSite} alt="悉尼煤气工工具" className="h-72 w-full object-cover object-center" />
            <img src={REAL_PHOTOS.cctvDrainInspection} alt="悉尼通渠 CCTV 管道检测" className="h-72 w-full object-cover object-center" />
            <img src={REAL_PHOTOS.residentialHotWaterInstall} alt="悉尼热水器安装维修" className="h-56 w-full object-cover object-center sm:col-span-2" />
          </div>
          <div>
            <SectionHeading dark eyebrow="详细服务" title="按问题类型查看更详细的中文服务说明" copy="通渠、热水器、煤气和漏水维修等常见问题都有更详细的中文说明，方便你判断是否需要尽快联系、现场可能需要检查哪些位置，以及可以提前准备哪些信息。" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chineseServiceLinks.map((link) => <a key={link.href} href={link.href} className="border border-white/10 bg-white/[0.04] p-4 font-bold text-white transition hover:border-[#f5a623] hover:text-[#f5a623]">{link.title}</a>)}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="engineering-paper scroll-mt-32 py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <img src={REAL_PHOTOS.teamVehicleTrust} alt="Lin Plumbing and Gas 悉尼服务车辆" className="h-[520px] w-full object-cover object-center shadow-2xl" />
          <div>
            <SectionHeading eyebrow="服务区域" title="悉尼常见华人社区与服务区域" copy="Lin Plumbing & Gas 服务悉尼多个区域，包括 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及周边 suburb。你可以查看所在区域的服务说明，或直接电话确认是否可安排。" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {priorityAreas.map((area) => <a key={area.href} href={area.href} className="border-l-4 border-[#f5a623] bg-white p-4 font-bold transition hover:bg-[#173557] hover:text-white">{area.label}</a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#b86f3c]">常见问题</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">预约前先了解服务范围</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">以下内容帮助中文客户判断是否适合直接联系 Lin Plumbing & Gas。</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => <article key={faq.question} className="trade-card bg-white p-6 shadow-sm"><h3 className="font-display text-2xl font-bold leading-tight text-[#173557]">{faq.question}</h3><p className="mt-3 text-base leading-7 text-[#526476]">{faq.answer}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5a623] py-14 text-[#142f4d]">
        <div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div><p className="font-display text-5xl font-bold leading-none">24小时紧急响应</p><p className="mt-2 text-2xl font-semibold">漏水、通渠、燃气或热水器紧急问题，请优先电话联系。</p></div>
          <Button asChild size="lg" className="h-14 rounded-none bg-[#142f4d] px-8 text-lg font-extrabold text-white hover:bg-[#24496f]"><a href={BUSINESS.phoneHref}>立即致电 {BUSINESS.phone}</a></Button>
        </div>
      </section>

      <ContactSection />
    </PageShell>
  );
}
