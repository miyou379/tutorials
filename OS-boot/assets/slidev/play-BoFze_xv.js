const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-gMzo9Bzl.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-B3bK91wB.js","assets/modules/vue-BEyp6dsv.js","assets/modules/shiki-DIiSGZXA.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-Bn9pmbGK.js","assets/index-ZeHoGo77.js","assets/index-CAyxiT8e.css","assets/slidev/context-CYPRcZL3.js","assets/slidev/Link.vue_vue_type_script_setup_true_lang-CyXpFRyP.js","assets/SlideWrapper-B4bs8Nmt.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-D8xOJ0zh.js","assets/slidev/shortcuts-C9LonGet.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-YnSGBSzq.js","assets/modules/unplugin-icons-Dcd4nncj.js","assets/shortcuts-CQk9w-43.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{A as b,I as L,a0 as O,a1 as B,d as h,M as R,b as f,o as a,a2 as H,f as g,i as d,C as e,g as i,j as A,n as E,$ as D,w as M,z as F,T as x,F as N,e as v,k as U,r as W}from"../modules/vue-BEyp6dsv.js";import{u as G,b as j}from"./SlideWrapper-Bn9pmbGK.js";import{E as K,G as V,u as P,I as J,J as C,K as $,s as S,y as k,L as X,M as c,N as w,O as Y}from"../index-ZeHoGo77.js";import{c as q,G as Q,d as Z,u as ee,r as te,a as oe,o as se,b as ae,S as le}from"./shortcuts-C9LonGet.js";import{b as ne}from"../modules/unplugin-icons-Dcd4nncj.js";import"./context-CYPRcZL3.js";import"./Link.vue_vue_type_script_setup_true_lang-CyXpFRyP.js";import"../modules/shiki-DIiSGZXA.js";import"./title-renderer.md_vue_type_script_setup_true_lang-YnSGBSzq.js";import"./IconButton.vue_vue_type_script_setup_true_lang-D8xOJ0zh.js";const ie=2e3;function re(m){const l=b(()=>m.value&&K.value);function r(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}L(l,u=>{u||s()}),B(s);let t=null;O(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),l.value?t=setTimeout(r,ie):t=null},{passive:!0})}const ue="/tutorials/OS-boot/assets/logo-BYkHSa_O.png",de={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ce=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:l}){const r=m,t=R(r,"modelValue",l);function u(){t.value=!1}return(_,o)=>(a(),f(H,null,[e(t)?(a(),g("div",de,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=p=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[A(_.$slots,"default")],2)])):d("v-if",!0)],1024))}}),me={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pe=["innerHTML"],fe=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:l}){const t=R(m,"modelValue",l),u=b(()=>typeof V.info=="string");return(_,o)=>(a(),f(ce,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=p=>D(t)?t.value=p:null),class:"px-6 py-4"},{default:M(()=>[i("div",me,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(V).info},null,8,pe)):d("v-if",!0),o[1]||(o[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ue,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),F("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ve=h({__name:"Controls",setup(m){const{isEmbedded:l}=P(),r=!V.drawings.presenterOnly&&!l.value,s=x();r&&J(()=>import("./DrawingControls-gMzo9Bzl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(_=>s.value=_.default);const t=x(),u=x();return(_,o)=>(a(),g(N,null,[s.value?(a(),f(e(s),{key:0})):d("v-if",!0),v(q),v(Q),t.value?(a(),f(e(t),{key:1})):d("v-if",!0),u.value?(a(),f(e(u),{key:2,modelValue:e(C),"onUpdate:modelValue":o[0]||(o[0]=p=>D(C)?C.value=p:null)},null,8,["modelValue"])):d("v-if",!0),e(V).info?(a(),f(fe,{key:3,modelValue:e($),"onUpdate:modelValue":o[1]||(o[1]=p=>D($)?$.value=p:null)},null,8,["modelValue"])):d("v-if",!0),v(Z)],64))}}),_e={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ge=h({__name:"PresenterMouse",setup(m){return(l,r)=>{const s=ne;return e(S).cursor?(a(),g("div",_e,[v(s,{class:"absolute stroke-white dark:stroke-black",style:U({left:`${e(S).cursor.x}%`,top:`${e(S).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),Ee=h({__name:"play",setup(m){const{next:l,prev:r,isPrintMode:s,isPlaying:t,isEmbedded:u}=P(),{isDrawing:_}=G(),o=W();function p(n){var y;k.value||n.button===0&&((y=n.target)==null?void 0:y.id)==="slide-container"&&(n.pageX/window.innerWidth>.5?l():r())}ee(o),te(),oe(),re(b(()=>t.value&&!u.value&&!k.value));const I=b(()=>X.value||k.value),T=x(),z=b(()=>{let n="";return c.value.brightness!==w.brightness&&(n+=`brightness(${c.value.brightness}) `),c.value.contrast!==w.contrast&&(n+=`contrast(${c.value.contrast}) `),c.value.sepia!==w.sepia&&(n+=`sepia(${c.value.sepia}) `),c.value.hueRotate!==w.hueRotate&&(n+=`hue-rotate(${c.value.hueRotate}deg) `),c.value.invert&&(n+="invert(1) "),{filter:n}});return(n,y)=>(a(),g(N,null,[i("div",{id:"page-root",ref_key:"root",ref:o,class:E(["grid",e(Y)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[v(j,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":z.value,onPointerdown:p,onContextmenu:e(se)},{default:M(()=>[v(le,{"render-context":"slide"}),v(ge)]),controls:M(()=>[e(s)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[I.value?"!opacity-100 right-0":"opacity-0 p-2",e(_)?"pointer-events-none":""]])},[v(ae,{persist:I.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),T.value&&e(k)?(a(),f(e(T),{key:0,resize:!0})):d("v-if",!0)],2),e(s)?d("v-if",!0):(a(),f(ve,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{Ee as default};
