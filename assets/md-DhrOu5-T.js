import{_ as d}from"./Item.vue_vue_type_script_setup_true_lang-n0uE9nQp.js";import{a as p,b as f,o as m,w as n,g as t,e as r,z as o,v as B,x as E,C as e}from"./modules/vue-BEyp6dsv.js";import{I as w}from"./slidev/default-pWrU8LmC.js";import{u as g,f as I}from"./slidev/context-lZOTv1LQ.js";import"./index-Dbsqq0tO.js";import"./modules/shiki-DIiSGZXA.js";const b={href:"https://zh.wikipedia.org/zh-hans/%E7%B5%B1%E4%B8%80%E5%8F%AF%E5%BB%B6%E4%BC%B8%E9%9F%8C%E9%AB%94%E4%BB%8B%E9%9D%A2",target:"_blank"},k={href:"https://en.wikipedia.org/wiki/UEFI#CSM_booting",target:"_blank"},M={__name:"slides.md__slidev_6",setup(U){const{$clicksContext:s,$frontmatter:u}=g();return s.setup(),(C,l)=>{const i=p("font"),a=d;return m(),f(w,B(E(e(I)(e(u),5))),{default:n(()=>[l[15]||(l[15]=t("h1",null,"GPT",-1)),t("ul",null,[t("li",null,[r(i,{color:"red"},{default:n(()=>l[0]||(l[0]=[t("b",null,"GUID 分区表",-1)])),_:1}),l[13]||(l[13]=o("，即 GPT (GUID Partition Table)")),t("ul",null,[t("li",null,[l[2]||(l[2]=o("是对 MBR 的拓展和延伸 📏，同时作为 ")),t("a",b,[r(i,{color:"blue"},{default:n(()=>l[1]||(l[1]=[t("b",null,"UEFI",-1)])),_:1})]),l[3]||(l[3]=o(" 标准的一部分"))]),l[11]||(l[11]=t("li",null,"与 UEFI 启动方式搭配使用",-1)),l[12]||(l[12]=t("li",null,[o("摒弃了 MBR 的一些不良设计 "),t("ul",null,[t("li",null,"不再区分主分区和拓展分区，所有分区都可以启动操作系统 (但具体流程和 MBR + Legacy 有较大区别)"),t("li",null,[o("不再限制分区数量 (严格意义上说仍有限制，"),t("a",{href:"https://learn.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/windows-and-gpt-faq?view=windows-11#gpt-----------",target:"_blank"},"Windows 对 GPT 最大的分区个数限制为 128 个"),o(")")])])],-1)),t("li",null,[l[5]||(l[5]=o("兼容了部分 MBR 功能 (即 ")),t("a",k,[r(i,{color:"blue"},{default:n(()=>l[4]||(l[4]=[t("em",null,"CSM",-1)])),_:1})]),l[6]||(l[6]=o(")；通常情况下 GPT 分区表只负责分区，不负责启动相关"))]),t("li",null,[r(i,{color:"red"},{default:n(()=>l[7]||(l[7]=[t("b",null,"为每一个分区都分配了一个独一无二 👍 的 UUID",-1)])),_:1}),l[8]||(l[8]=t("ul",null,[t("li",null,[o("在理想情况下，全球范围内的电脑上都不会存在两个 "),t("a",{href:"https://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6",target:"_blank"},"UUID"),o(" 相同的磁盘分区")]),t("li",null,"离线算法，无需联网 🌐")],-1))]),t("li",null,[l[10]||(l[10]=o("一个")),r(i,{color:"blue"},{default:n(()=>l[9]||(l[9]=[t("a",{href:"https://www.guidgenerator.com"},"在线 GUID 生成器",-1)])),_:1})])])])]),r(a,{title:"思考"},{default:n(()=>l[14]||(l[14]=[o(" 什么是 BIOS？什么又是 UEFI？MBR 真的只能和 Legacy (BIOS) 一起使用吗？GPT 和 UEFI 呢？ ")])),_:1})]),_:1},16)}}};export{M as default};
