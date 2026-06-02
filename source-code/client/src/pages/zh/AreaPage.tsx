/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This Chinese suburb area page template keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { CheckCircle2, ChevronDown, ChevronUp, Clock3, Droplets, Flame, Gauge, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { useState } from "react";
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

type FaqItem = { question: string; answer: string };

type AreaConfig = {
  meta: SeoMeta;
  suburb: string;
  h1: string;
  lead: string;
  /** 区域特色详细介绍段落（≥200字，用于 SEO 正文） */
  areaIntro: string;
  heroImage: string;
  heroAlt: string;
  nearby: string[];
  commonNeeds: string[];
  areaServed: string[];
  faqs: FaqItem[];
};

export const areaConfigs = {
  eastwood: {
    meta: {
      title: "Eastwood 水管工 | 华人水管工、通渠与热水器维修 | Lin Plumbing & Gas",
      description: "Eastwood 水管工与悉尼华人水管工服务：通渠、排水管维修、屋顶雨水系统改造、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Eastwood、Epping、Ryde、Carlingford 及周边华人区，紧急情况可立即致电。",
      path: "/zh/areas/eastwood",
      keywords: ["Eastwood 水管工", "Eastwood 中文水管工", "悉尼华人水管工", "Eastwood 通渠", "Eastwood 排水管维修", "Eastwood 屋顶雨水系统改造", "Eastwood 热水器维修", "Eastwood 煤气工", "Eastwood 漏水维修"],
    },
    suburb: "Eastwood",
    h1: "Eastwood 水管工｜悉尼华人水管工、通渠与热水器维修",
    lead: "Eastwood 是悉尼华人最密集的区域之一，老旧公寓和独立屋比例高，通渠堵塞和热水器故障是最常见的水管问题。Lin Plumbing & Gas 提供中文/英文沟通的悉尼持牌水管与煤气服务，覆盖 Eastwood、Epping、Ryde 及周边区域。",
    areaIntro: `Eastwood 位于悉尼北区，是悉尼华人社区最为集中的区域之一，也是许多华人家庭、餐馆和商铺的聚集地。该区域住宅以建造年代较早的独立屋和老旧公寓为主，排水管道和热水系统普遍存在老化问题，通渠堵塞、热水器故障和漏水维修是本地客户最常见的三类需求。

在排水方面，Eastwood 的老旧公寓和独立屋常出现下水慢、地漏返水、马桶堵塞和排水管老化等问题，部分住宅的屋顶雨水系统也需要定期检查和改造，以应对悉尼雨季的强降水。Lin Plumbing & Gas 可提供 CCTV 管道检测辅助判断，帮助客户在不破坏墙体的情况下找到堵塞或破损位置。

热水器方面，Eastwood 许多住宅使用的是安装年限较长的储热式热水器，出现没有热水、热水器漏水或加热效率下降时，通常需要维修或更换。Lin Plumbing & Gas 提供热水器维修、热水系统安装和紧急热水服务，中文沟通无障碍，可快速安排上门。

对于 Eastwood 的餐馆和商铺业主，厨房排水堵塞和燃气管线维护是日常运营中不可忽视的问题。Lin Plumbing & Gas 持有 NSW 持牌水管工与煤气工资质，可处理商业厨房通渠、燃气安装和紧急维修，确保符合澳洲安全标准。如果你在 Eastwood 或周边区域遇到水管、排水、热水或燃气问题，欢迎直接电话说明情况，我们会根据紧急程度安排上门。`,
    heroImage: REAL_PHOTOS.teamVehicleTrust,
    heroAlt: "Lin Plumbing and Gas Eastwood 水管工服务车辆",
    nearby: ["Epping", "Ryde", "Carlingford", "Marsfield", "Denistone", "West Ryde"],
    commonNeeds: ["Eastwood 通渠与下水道疏通", "Eastwood 排水管维修与雨水管问题", "Eastwood 屋顶雨水系统改造", "Eastwood 热水器维修和安装", "Eastwood 漏水维修与水管爆裂", "Eastwood 持牌煤气工"],
    areaServed: ["Eastwood", "Epping", "Ryde", "Carlingford", "Marsfield", "Denistone", "West Ryde"],
    faqs: [
      {
        question: "你们是 Eastwood 的华人水管工吗？中文可以沟通吗？",
        answer: "Lin Plumbing & Gas 面向 Eastwood 及周边华人和本地客户提供持牌水管与燃气服务。中文和英文均可沟通，紧急情况建议直接电话联系，方便快速判断问题和安排上门时间。",
      },
      {
        question: "Eastwood 的老旧公寓通渠堵塞，可以上门处理吗？",
        answer: "可以。Eastwood 老旧公寓的排水管道老化是常见问题，我们可以处理下水慢、地漏返水、马桶堵塞和排水管维修。如果堵塞位置不明确，可以结合 CCTV 管道检测辅助判断，减少不必要的破墙施工。",
      },
      {
        question: "Eastwood 热水器坏了，可以当天上门维修或更换吗？",
        answer: "紧急热水问题我们会优先安排。如果热水器出现没有热水、热水器漏水或加热异常，请直接电话说明情况和所在 suburb，我们会根据实际情况尽快安排上门维修或更换热水系统。",
      },
    ],
  },
  chatswood: {
    meta: {
      title: "Chatswood 水管工 | 中文通渠、热水器维修与煤气工 | Lin Plumbing & Gas",
      description: "Chatswood 中文水管工服务：通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与紧急水管服务。Lin Plumbing & Gas 覆盖 Chatswood、Willoughby、Lane Cove、Artarmon 及北岸周边，紧急情况可立即致电。",
      path: "/zh/areas/chatswood",
      keywords: ["Chatswood 水管工", "Chatswood 中文水管工", "Chatswood 通渠", "Chatswood 热水器维修", "Chatswood 煤气工", "Chatswood 漏水维修"],
    },
    suburb: "Chatswood",
    h1: "Chatswood 中文水管工｜通渠、热水器、漏水维修与煤气工",
    lead: "Chatswood 是悉尼北岸重要的商业与住宅混合区，餐馆厨房通渠和商业煤气安装需求突出，公寓漏水和热水系统维修也是常见问题。Lin Plumbing & Gas 为 Chatswood 及北岸周边提供中文可沟通的持牌水管与燃气服务。",
    areaIntro: `Chatswood 是悉尼北岸最重要的商业中心之一，同时也是大量华人家庭和商铺聚集的区域。该区域高层公寓、商业楼宇和餐馆密集，对水管和燃气服务的需求涵盖住宅维修和商业维护两大方向。

在商业方面，Chatswood 的餐馆和食品商铺对厨房排水系统的依赖程度极高。油脂积累导致的厨房下水堵塞、商业煤气管线安装和定期维护是本地商业客户最常见的需求。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理商业厨房燃气安装、煤气管线维修和紧急燃气问题，确保符合澳洲安全法规。

在住宅方面，Chatswood 的高层公寓常出现楼层间漏水、浴室防水失效和热水系统故障等问题。公寓漏水如果处理不及时，可能影响楼下邻居，建议尽早联系持牌水管工进行检查和维修。热水器方面，Chatswood 许多公寓使用的是即热式或储热式热水系统，出现没有热水或热水器漏水时需要专业判断。

Lin Plumbing & Gas 覆盖 Chatswood、Willoughby、Lane Cove、Artarmon、Roseville、North Ryde 和 North Sydney，可快速响应住宅和商业水管需求。中文沟通无障碍，报价说明清晰，紧急情况可直接电话联系。`,
    heroImage: REAL_PHOTOS.commercialPlantPipework,
    heroAlt: "Chatswood 商业水管与复杂管道服务",
    nearby: ["Willoughby", "Lane Cove", "Artarmon", "Roseville", "North Ryde", "North Sydney"],
    commonNeeds: ["Chatswood 公寓漏水维修", "Chatswood 通渠与排水堵塞", "Chatswood 热水系统维修", "Chatswood 燃气安装与煤气维修", "商业物业和餐馆维护", "紧急水管服务"],
    areaServed: ["Chatswood", "Willoughby", "Lane Cove", "Artarmon", "Roseville", "North Ryde", "North Sydney"],
    faqs: [
      {
        question: "Chatswood 的餐馆厨房排水堵塞，可以处理商业通渠吗？",
        answer: "可以。商业厨房的油脂积累是导致排水堵塞的主要原因，我们可以处理商业厨房通渠、下水道疏通和排水管维修。如果需要定期维护，也可以根据实际情况安排。",
      },
      {
        question: "Chatswood 公寓漏水影响到楼下，需要怎么处理？",
        answer: "公寓楼层间漏水通常涉及浴室防水、管道接口或热水系统问题，需要持牌水管工上门检查确认漏水来源。建议尽早联系，避免问题扩大影响更多楼层。我们可以中文沟通，说明检查过程和维修方案。",
      },
      {
        question: "Chatswood 商业煤气安装需要持牌资质吗？",
        answer: "是的，澳洲法规要求所有燃气安装和维修必须由持牌煤气工（Licensed Gas Fitter）完成。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理商业和住宅的燃气安装、煤气管线维修和紧急燃气问题，确保符合安全标准。",
      },
    ],
  },
  hurstville: {
    meta: {
      title: "Hurstville 水管工 | 华人区通渠、热水器维修与煤气工 | Lin Plumbing & Gas",
      description: "Hurstville 华人水管工中文服务：通渠、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Hurstville、Kogarah、Allawah、Beverly Hills 及南区周边，紧急情况可立即致电。",
      path: "/zh/areas/hurstville",
      keywords: ["Hurstville 水管工", "Hurstville 华人水管工", "Hurstville 通渠", "Hurstville 热水器维修", "Hurstville 煤气工", "悉尼中文水管工"],
    },
    suburb: "Hurstville",
    h1: "Hurstville 华人水管工｜中文通渠、热水器与煤气服务",
    lead: "Hurstville 是悉尼南区最重要的华人聚居区之一，旧房漏水和排水系统老化问题常见，热水器故障和燃气维修需求也较为集中。Lin Plumbing & Gas 提供中文沟通与持牌服务，覆盖 Hurstville 及南区周边。",
    areaIntro: `Hurstville 位于悉尼南区，是悉尼华人社区最为集中的区域之一，也是南区重要的商业和住宅混合区。该区域住宅以建造年代较早的独立屋和老旧公寓为主，排水系统老化、漏水和热水器故障是本地客户最常见的三类水管问题。

在漏水维修方面，Hurstville 的旧房屋由于建造年代较早，水管接口老化、浴室防水失效和屋顶雨水管破损是常见问题。漏水如果不及时处理，可能导致墙体受潮、发霉甚至结构损坏。Lin Plumbing & Gas 可上门检查漏水来源，提供专业维修方案，中文说明清晰，避免沟通误解。

在排水方面，Hurstville 老旧住宅的排水管道普遍存在老化和堵塞问题，地漏返水、马桶堵塞和下水慢是常见症状。对于不确定堵塞位置的情况，可以结合 CCTV 管道检测辅助判断，减少不必要的破墙施工。

Hurstville 的餐馆和商铺数量众多，厨房排水堵塞和燃气管线维护是商业客户的主要需求。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理商业厨房燃气安装、煤气管线维修和紧急燃气问题。如果你在 Hurstville、Kogarah、Allawah、Beverly Hills 或南区周边遇到水管、排水、热水或燃气问题，欢迎直接电话说明情况。`,
    heroImage: REAL_PHOTOS.cctvDrainInspection,
    heroAlt: "Hurstville 通渠与 CCTV 管道检测",
    nearby: ["Kogarah", "Allawah", "Beverly Hills", "Carlton", "Penshurst", "Rockdale"],
    commonNeeds: ["Hurstville 通渠与地漏返水", "Hurstville 热水器维修", "Hurstville 漏水维修", "Hurstville 持牌煤气工", "餐馆厨房排水与燃气咨询", "24小时紧急水管服务"],
    areaServed: ["Hurstville", "Kogarah", "Allawah", "Beverly Hills", "Carlton", "Penshurst", "Rockdale"],
    faqs: [
      {
        question: "Hurstville 旧房漏水，可以上门检查漏水来源吗？",
        answer: "可以。旧房漏水通常涉及水管接口老化、浴室防水失效或屋顶雨水管破损，需要上门检查确认漏水来源后再制定维修方案。我们可以中文沟通，说明检查过程和维修建议，避免不必要的破墙施工。",
      },
      {
        question: "Hurstville 排水系统老化，地漏经常返水，怎么处理？",
        answer: "地漏返水通常是排水管堵塞或排水系统老化导致的。我们可以上门疏通，如果堵塞位置不明确，可以结合 CCTV 管道检测辅助判断，找到根本原因后再决定是疏通还是更换管道。",
      },
      {
        question: "Hurstville 餐馆厨房燃气安装，需要持牌资质吗？",
        answer: "是的，澳洲法规要求所有燃气安装必须由持牌煤气工完成。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理餐馆厨房燃气安装、煤气管线维修和紧急燃气问题，确保符合澳洲安全标准。",
      },
    ],
  },
  burwood: {
    meta: {
      title: "Burwood 水管工 | 中文通渠、漏水维修、热水器与煤气工 | Lin Plumbing & Gas",
      description: "Burwood 中文水管工服务：通渠、漏水维修、热水器维修、持牌煤气工、商业水管维护与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Burwood、Strathfield、Ashfield、Auburn 及内西区周边，紧急情况可立即致电。",
      path: "/zh/areas/burwood",
      keywords: ["Burwood 水管工", "Burwood 中文水管工", "Burwood 通渠", "Burwood 漏水维修", "Burwood 热水器维修", "Burwood 煤气工"],
    },
    suburb: "Burwood",
    h1: "Burwood 中文水管工｜通渠、漏水维修、热水器与煤气工",
    lead: "Burwood 是悉尼内西区华人家庭密集的区域，热水器安装和煤气连接需求高，公寓漏水和商铺排水堵塞也是常见问题。Lin Plumbing & Gas 提供中文沟通和悉尼持牌水管与燃气服务。",
    areaIntro: `Burwood 位于悉尼内西区，是华人家庭和商铺密集的区域之一，周边包括 Strathfield、Ashfield、Auburn、Homebush 等华人聚居区。该区域住宅以公寓和独立屋为主，热水器安装和煤气连接需求较为集中，同时公寓漏水和商铺排水堵塞也是常见问题。

在热水系统方面，Burwood 许多华人家庭在购置新房或装修时需要安装或更换热水器，包括储热式热水器、即热式热水系统和太阳能热水系统。Lin Plumbing & Gas 可提供热水器安装、热水系统更换和紧急热水维修服务，中文沟通无障碍，可根据房屋情况推荐合适的热水系统方案。

在燃气方面，Burwood 及周边区域许多华人家庭偏好使用天然气灶具和燃气热水器，煤气连接和燃气管线安装需求较高。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理住宅和商业的燃气安装、LPG 连接和煤气管线维修，确保符合澳洲安全法规。

在漏水维修方面，Burwood 的公寓楼层间漏水和商铺排水堵塞是常见问题。漏水如果不及时处理，可能导致墙体受潮和结构损坏。我们可以上门检查漏水来源，提供专业维修方案。如果你在 Burwood、Strathfield、Ashfield 或内西区周边遇到水管、排水、热水或燃气问题，欢迎直接电话说明情况。`,
    heroImage: REAL_PHOTOS.heritagePipeRepair,
    heroAlt: "Burwood 漏水维修与管道修复",
    nearby: ["Strathfield", "Ashfield", "Auburn", "Homebush", "Croydon", "Five Dock"],
    commonNeeds: ["Burwood 漏水维修与水管爆裂", "Burwood 通渠与排水堵塞", "Burwood 热水器维修", "Burwood 持牌煤气工", "商铺和公寓水管维护", "紧急水管工"],
    areaServed: ["Burwood", "Strathfield", "Ashfield", "Auburn", "Homebush", "Croydon", "Five Dock"],
    faqs: [
      {
        question: "Burwood 新房装修需要安装热水器，可以帮忙推荐和安装吗？",
        answer: "可以。我们可以根据房屋情况、用水需求和预算推荐合适的热水系统，包括储热式热水器、即热式热水系统和燃气热水器。安装完成后会提供相关文件，确保符合澳洲标准。",
      },
      {
        question: "Burwood 需要连接天然气灶具，需要持牌煤气工吗？",
        answer: "是的，澳洲法规要求所有燃气连接和安装必须由持牌煤气工完成。Lin Plumbing & Gas 持有 NSW 持牌煤气工资质，可处理天然气灶具连接、LPG 连接和燃气管线安装，确保安全合规。",
      },
      {
        question: "Burwood 公寓漏水，物业要求提供持牌水管工证明，你们有吗？",
        answer: "有的。Lin Plumbing & Gas 持有 NSW 持牌水管工资质，可提供相关证明文件。公寓漏水维修完成后，我们会提供维修记录，方便你向物业或保险公司提交。",
      },
    ],
  },
  eppingRyde: {
    meta: {
      title: "Epping Ryde 水管工 | 中文通渠、热水器维修与煤气服务 | Lin Plumbing & Gas",
      description: "Epping/Ryde 中文水管工服务：通渠、热水器维修、漏水维修、持牌煤气工、雨水排水系统与 24 小时紧急水管服务。Lin Plumbing & Gas 覆盖 Epping、Ryde、Eastwood、Macquarie Park 及周边，紧急情况可立即致电。",
      path: "/zh/areas/epping-ryde",
      keywords: ["Epping 水管工", "Ryde 水管工", "Epping 中文水管工", "Ryde 通渠", "Ryde 热水器维修", "Epping 煤气工"],
    },
    suburb: "Epping / Ryde",
    h1: "Epping / Ryde 中文水管工｜通渠、热水器、漏水与煤气服务",
    lead: "Epping 和 Ryde 是悉尼新旧住宅混合的区域，新建房管道 rough-in 和现有房屋维修需求并存。Lin Plumbing & Gas 提供中文可沟通的水管、通渠、热水器和燃气服务，覆盖 Epping、Ryde 及周边。",
    areaIntro: `Epping 和 Ryde 位于悉尼北区，是新旧住宅混合的典型区域。该区域既有建造年代较早的独立屋和老旧公寓，也有近年新建的高密度公寓和联排别墅，水管和燃气服务需求涵盖新建工程和现有房屋维修两大方向。

在新建工程方面，Epping 和 Ryde 近年新建住宅项目较多，新建房屋的水管 rough-in（管道预埋）、热水系统安装和燃气连接是常见需求。Lin Plumbing & Gas 可参与新建住宅的水管工程，提供管道预埋、热水器安装和燃气管线安装服务，确保符合澳洲建筑法规和标准。

在现有房屋维修方面，Epping 和 Ryde 的老旧住宅常出现排水管老化、屋顶雨水系统堵塞和热水器故障等问题。该区域地势起伏，部分住宅的雨水排水系统在强降水时容易出现倒灌问题，需要专业检查和改造。Lin Plumbing & Gas 可提供 CCTV 管道检测、雨水排水系统改造和屋顶雨水管维修服务。

在通渠方面，Epping 和 Ryde 的公寓和独立屋均有排水堵塞的常见需求，包括下水慢、地漏返水和马桶堵塞。我们可以快速响应，上门疏通或维修。如果你在 Epping、Ryde、Macquarie Park、West Ryde 或周边区域遇到水管、排水、热水或燃气问题，欢迎直接电话说明情况和所在 suburb。`,
    heroImage: REAL_PHOTOS.stormwaterDrainage,
    heroAlt: "Epping Ryde 雨水排水与管道服务",
    nearby: ["Eastwood", "Macquarie Park", "West Ryde", "Meadowbank", "Denistone", "Marsfield"],
    commonNeeds: ["Epping/Ryde 通渠和雨水排水", "Epping/Ryde 热水器维修", "Epping/Ryde 漏水维修", "Epping/Ryde 持牌煤气工", "公寓和商铺水管维护", "紧急水管服务"],
    areaServed: ["Epping", "Ryde", "Eastwood", "Macquarie Park", "West Ryde", "Meadowbank", "Denistone", "Marsfield"],
    faqs: [
      {
        question: "Epping 新建住宅需要水管 rough-in，可以承接新建工程吗？",
        answer: "可以。Lin Plumbing & Gas 可参与新建住宅的水管工程，包括管道预埋（rough-in）、热水器安装和燃气管线安装。我们持有 NSW 持牌水管工与煤气工资质，确保工程符合澳洲建筑法规。",
      },
      {
        question: "Ryde 的雨水排水系统在下大雨时会倒灌，怎么处理？",
        answer: "雨水倒灌通常是雨水排水系统设计不足或管道堵塞导致的。我们可以上门检查雨水排水系统，判断是否需要疏通、改造或增加排水容量，提供具体的解决方案。",
      },
      {
        question: "Epping / Ryde 区域的老旧公寓热水器坏了，可以更换吗？",
        answer: "可以。我们可以上门检查热水器故障原因，判断是维修还是更换更合适。如果需要更换，可以根据房屋情况推荐合适的热水系统，安装完成后提供相关文件。紧急没有热水的情况请直接电话联系。",
      },
    ],
  },
} satisfies Record<string, AreaConfig>;

function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-[#173557]/10">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            className="flex w-full items-start justify-between gap-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <h3 className="font-display text-xl font-bold text-[#173557]">{faq.question}</h3>
            {openIndex === i ? <ChevronUp className="mt-1 h-5 w-5 shrink-0 text-[#8a4e20]" /> : <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#8a4e20]" />}
          </button>
          {openIndex === i && (
            <p className="mt-4 text-base leading-8 text-[#526476]">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

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

      {/* Hero */}
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
            <MapPin className="h-10 w-10 text-[#8a4e20]" />
            <p className="mt-5 font-display text-3xl font-bold leading-none">{config.suburb} 及周边区域</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {config.nearby.map((area) => <span key={area} className="border border-[#173557]/15 bg-white px-3 py-2 text-sm font-bold">{area}</span>)}
            </div>
            <p className="mt-5 text-base leading-7 text-[#526476]">如果不确定是否覆盖您的地址，可以直接电话说明 suburb 和问题类型。</p>
          </aside>
        </div>
      </section>

      <TrustBar items={["持牌服务", "中文沟通", "悉尼全区", "24小时紧急"]} />

      {/* Area intro — rich SEO text */}
      <section className="bg-white py-20">
        <div className="container max-w-4xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#8a4e20]">关于 {config.suburb}</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-[#173557] md:text-5xl">{config.suburb} 水管工服务介绍</h2>
          <div className="mt-8 space-y-5 text-base leading-9 text-[#526476]">
            {config.areaIntro.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {config.meta.keywords.map((kw) => (
              <span key={kw} className="border border-[#173557]/15 bg-[#faf8f5] px-3 py-2 text-sm font-bold text-[#173557]">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Common needs */}
      <section className="engineering-paper py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading eyebrow="本地常见需求" title={`${config.suburb} 客户常见水管、排水与燃气问题`} copy="下面整理了本地区客户常见的水管、通渠、排水管维修、屋顶雨水系统、热水器和煤气服务需求，方便你在联系前先判断问题类型。" />
            <div className="mt-8"><CallButtons /></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.commonNeeds.map((need, index) => {
              const Icon = [Droplets, Gauge, Wrench, Flame, CheckCircle2, Clock3][index] ?? CheckCircle2;
              return <article key={need} className="trade-card border-l-4 border-[#f5a623] bg-white p-5 shadow-sm"><div className="flex gap-3"><Icon className="mt-1 h-5 w-5 shrink-0 text-[#8a4e20]" /><p className="font-bold leading-7 text-[#173557]">{need}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      {/* Services + images */}
      <section className="bg-[#102941] py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={REAL_PHOTOS.cctvDrainInspection} alt={`${config.suburb} 通渠服务`} className="h-72 w-full object-cover object-center" loading="lazy" decoding="async" />
            <img src={REAL_PHOTOS.residentialHotWaterInstall} alt={`${config.suburb} 热水器维修`} className="h-72 w-full object-cover object-center" loading="lazy" decoding="async" />
            <img src={REAL_PHOTOS.gasMeterTest} alt={`${config.suburb} 煤气工`} className="h-56 w-full object-cover object-center sm:col-span-2" loading="lazy" decoding="async" />
          </div>
          <div>
            <SectionHeading dark eyebrow="可协助项目" title="本地区常见水管、排水管维修、热水器与煤气服务" copy="不同现场问题可能涉及通渠、排水管维修、屋顶雨水系统、热水器、煤气或漏水维修。你可以先查看对应服务内容，也可以直接电话说明所在区域、问题位置和紧急程度。" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chineseServiceLinks.map((link) => <a key={link.href} href={link.href} className="border border-white/10 bg-white/[0.04] p-4 font-bold text-white transition hover:border-[#f5a623] hover:text-[#f5a623]">{link.title}</a>)}
            </div>
            <div className="mt-6">
              <a href="/zh" className="inline-flex items-center gap-2 border border-[#f5a623]/50 px-4 py-3 text-sm font-bold text-[#ffd37a] transition hover:border-[#f5a623] hover:text-[#f5a623]">← 返回中文首页</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f5] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#8a4e20]">常见问题</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-6xl">{config.suburb}<br />FAQ</h2>
            <p className="mt-6 text-base leading-8 text-[#526476]">以下是 {config.suburb} 客户常见的问题和解答。如果你的情况不在列表中，欢迎直接电话说明。</p>
          </div>
          <FaqAccordion faqs={config.faqs} />
        </div>
      </section>

      {/* Booking tips */}
      <section className="bg-white py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-[#8a4e20]">预约建议</p>
            <h2 className="mt-3 font-display text-5xl font-bold leading-none text-[#173557] md:text-7xl">联系前准备这些信息</h2>
            <p className="mt-6 text-lg leading-8 text-[#526476]">中文沟通会更顺畅，但现场判断仍需要基本信息。准备照片、地址 suburb 和问题症状，可以帮助更快安排。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["所在 suburb 与街区", "问题类型：漏水、通渠、热水、燃气", "是否紧急或正在返水/喷水", "照片、视频、设备品牌或位置"].map((item) => <article key={item} className="trade-card bg-[#faf8f5] p-6 shadow-sm"><ShieldCheck className="h-6 w-6 text-[#8a4e20]" /><p className="mt-4 font-display text-2xl font-bold leading-tight text-[#173557]">{item}</p></article>)}
          </div>
        </div>
      </section>

      {/* CTA */}
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
