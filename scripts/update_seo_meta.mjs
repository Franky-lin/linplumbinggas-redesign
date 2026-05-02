import fs from 'node:fs';

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [from, to] of replacements) {
    if (!content.includes(from)) {
      throw new Error(`Missing expected text in ${file}: ${from}`);
    }
    content = content.replace(from, to);
  }
  fs.writeFileSync(file, content);
}

replaceInFile('client/src/pages/ZhHome.tsx', [
  [
    'description: "Lin Plumbing & Gas 提供悉尼华人水管工、中文水管工、持牌煤气工、通渠、热水器维修、漏水维修与24小时紧急服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼全区。",',
    'description: "Lin Plumbing & Gas 提供悉尼华人水管工、中文水管工、通渠、热水器维修、漏水维修、排水管维修与持牌煤气服务。覆盖 Eastwood、Chatswood、Hurstville、Burwood、Epping、Ryde 及悉尼全区，紧急情况可立即致电。",'
  ],
]);

replaceInFile('client/src/pages/zh/ServicePage.tsx', [
  [
    'description: "Lin Plumbing & Gas 提供悉尼通渠、排水管维修、下水道疏通、屋顶雨水系统改造、雨水排水系统和 CCTV 管道检测服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区。",',
    'description: "Lin Plumbing & Gas 提供悉尼通渠、排水管维修、下水道疏通、屋顶雨水系统改造、雨水排水系统和 CCTV 管道检测服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，堵塞或返水可立即致电。",'
  ],
  [
    'description: "悉尼热水器维修、热水炉安装、没有热水、热水器漏水和住宅热水系统管路服务。Lin Plumbing & Gas 提供中文沟通、持牌水管与燃气服务，覆盖悉尼华人社区。",',
    'description: "Lin Plumbing & Gas 提供悉尼热水器维修、热水炉安装、没有热水处理、热水器漏水和住宅热水系统管路服务。中文沟通，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，紧急没有热水可立即致电。",'
  ],
  [
    'title: "悉尼煤气工 | 持牌燃气安装、煤气维修与 LPG/GAS 连接",',
    'title: "悉尼煤气工 | 持牌燃气安装、煤气维修与 LPG/GAS 连接 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Lin Plumbing & Gas 提供悉尼煤气工、持牌燃气安装、煤气维修、LPG/GAS 连接、燃气表和燃气管线相关服务。中文沟通，覆盖悉尼华人社区与全区客户。",',
    'description: "Lin Plumbing & Gas 提供悉尼煤气工、持牌燃气安装、煤气维修、LPG/GAS 连接、燃气表和燃气管线相关服务。中文沟通，服务住宅、商铺与餐馆，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，燃气问题可电话咨询。",'
  ],
  [
    'title: "悉尼漏水维修 | 水管爆裂、浴室厨房水管与紧急水管工",',
    'title: "悉尼漏水维修 | 水管爆裂、紧急水管工与浴室厨房水管 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Lin Plumbing & Gas 提供悉尼漏水维修、水管爆裂、浴室厨房水管、水龙头马桶维修和24小时紧急水管服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区。",',
    'description: "Lin Plumbing & Gas 提供悉尼漏水维修、水管爆裂、浴室厨房水管、水龙头马桶维修和 24 小时紧急水管服务。中文沟通，持牌服务，覆盖 Eastwood、Chatswood、Hurstville、Burwood 及悉尼全区，漏水可立即致电。",'
  ],
]);

replaceInFile('client/src/pages/zh/AreaPage.tsx', [
  [
    'title: "Eastwood 水管工 | 悉尼华人水管工、通渠、排水管维修与热水器维修",',
    'title: "Eastwood 水管工 | 华人水管工、通渠与热水器维修 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Eastwood 水管工与悉尼华人水管工服务：通渠、排水管维修、屋顶雨水系统改造、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与24小时紧急服务。覆盖 Eastwood、Epping、Ryde、Carlingford 及周边华人区。",',
    'description: "Eastwood 水管工与悉尼华人水管工服务：通渠、排水管维修、屋顶雨水系统改造、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Eastwood、Epping、Ryde、Carlingford 及周边华人区，紧急情况可立即致电。",'
  ],
  [
    'title: "Chatswood 水管工 | 中文通渠、热水器维修与煤气工",',
    'title: "Chatswood 水管工 | 中文通渠、热水器维修与煤气工 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Chatswood 中文水管工服务：通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与紧急水管服务。Lin Plumbing & Gas 覆盖 Chatswood、Willoughby、Lane Cove、Artarmon 及悉尼周边。",',
    'description: "Chatswood 中文水管工服务：通渠、下水道疏通、热水器维修、漏水维修、持牌煤气工与紧急水管服务。Lin Plumbing & Gas 覆盖 Chatswood、Willoughby、Lane Cove、Artarmon 及北岸周边，紧急情况可立即致电。",'
  ],
  [
    'title: "Hurstville 水管工 | 华人区中文水管、通渠与热水器维修",',
    'title: "Hurstville 水管工 | 华人区通渠、热水器维修与煤气工 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Hurstville 华人水管工中文服务：通渠、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与24小时紧急服务。覆盖 Hurstville、Kogarah、Allawah、Beverly Hills 及周边。",',
    'description: "Hurstville 华人水管工中文服务：通渠、热水器维修、漏水维修、持牌煤气工、餐馆商铺水管与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Hurstville、Kogarah、Allawah、Beverly Hills 及南区周边，紧急情况可立即致电。",'
  ],
  [
    'title: "Burwood 水管工 | 中文通渠、漏水维修、热水器与煤气工",',
    'title: "Burwood 水管工 | 中文通渠、漏水维修、热水器与煤气工 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Burwood 中文水管工服务：通渠、漏水维修、热水器维修、持牌煤气工、商业水管维护与24小时紧急服务。覆盖 Burwood、Strathfield、Ashfield、Auburn 及周边区域。",',
    'description: "Burwood 中文水管工服务：通渠、漏水维修、热水器维修、持牌煤气工、商业水管维护与 24 小时紧急服务。Lin Plumbing & Gas 覆盖 Burwood、Strathfield、Ashfield、Auburn 及内西区周边，紧急情况可立即致电。",'
  ],
  [
    'title: "Epping Ryde 水管工 | 中文水管、通渠、热水器与煤气服务",',
    'title: "Epping Ryde 水管工 | 中文通渠、热水器维修与煤气服务 | Lin Plumbing & Gas",'
  ],
  [
    'description: "Epping/Ryde 中文水管工服务：通渠、热水器维修、漏水维修、持牌煤气工、雨水排水系统与24小时紧急水管服务。覆盖 Epping、Ryde、Eastwood、Macquarie Park 及周边。",',
    'description: "Epping/Ryde 中文水管工服务：通渠、热水器维修、漏水维修、持牌煤气工、雨水排水系统与 24 小时紧急水管服务。Lin Plumbing & Gas 覆盖 Epping、Ryde、Eastwood、Macquarie Park 及周边，紧急情况可立即致电。",'
  ],
]);

console.log('SEO meta updates applied.');
