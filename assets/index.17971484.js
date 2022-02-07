import{r as v,o as N,c as O,w as n,a as u,b as e,u as i,U as S,V as z,d as V,e as h,f as k,g as B,h as A,m as R,X as b,i as E,j as $,k as j,A as I}from"./vendor.08eb8cb5.js";const P=function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function m(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(a){if(a.ep)return;a.ep=!0;const t=m(a);fetch(a.href,t)}};P();const T=h("div",{class:"logo"},null,-1),H=h("span",{class:"nav-text"},"\u6821\u9A8C\u5355\u4EF7\u91CD\u91CF",-1),X=h("span",{class:"nav-text"},"nav 2",-1),q=h("span",{class:"nav-text"},"nav 3",-1),J=h("span",{class:"nav-text"},"nav 4",-1),K={style:{padding:"24px",background:"#fff",minHeight:"360px"}},M=k(" Check excel \xA92022 Created by Chuzs "),G={setup(x){const f=(a,t)=>{console.log(a,t)},m=a=>{console.log(a)},d=v(["4"]);return(a,t)=>{const p=u("a-menu-item"),w=u("a-menu"),D=u("a-layout-sider"),L=u("a-layout-header"),g=u("router-view"),C=u("a-layout-content"),U=u("a-layout-footer"),s=u("a-layout");return N(),O(s,null,{default:n(()=>[e(D,{breakpoint:"lg",onCollapse:f,onBreakpoint:m},{default:n(()=>[T,e(w,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),theme:"dark",mode:"inline"},{default:n(()=>[e(p,{key:"1"},{default:n(()=>[e(i(S)),H]),_:1}),e(p,{key:"2"},{default:n(()=>[e(i(z)),X]),_:1}),e(p,{key:"3"},{default:n(()=>[e(i(V)),q]),_:1}),e(p,{key:"4"},{default:n(()=>[e(i(S)),J]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:n(()=>[e(L,{style:{background:"#fff",padding:0}}),e(C,{style:{margin:"24px 16px 0"}},{default:n(()=>[h("div",K,[e(g)])]),_:1}),e(U,{style:{"text-align":"center"}},{default:n(()=>[M]),_:1})]),_:1})]),_:1})}}},W={setup(x){return(f,m)=>(N(),B("div",null,[e(G)]))}},Q="GOODTRIP",Y={style:{width:"800px"}},Z=k(" \u4E0A\u4F20\u603B\u6570\u636E "),ee=k(" \u4E0A\u4F20\u5F85\u6838\u5BF9\u6570\u636E "),te=k(" \u5F00\u59CB\u6838\u5BF9 "),ae={setup(x){const f={labelCol:{span:4},wrapperCol:{span:14}},m=v([]),d=v([]),a=v(!1),t=A({totalDataFileList:[],uncheckedDataFileList:[]}),p=s=>(t.totalDataFileList=[s],!1),w=s=>(t.uncheckedDataFileList=[s],!1),D=async s=>{const l=await s.arrayBuffer(),o=b.read(l),r="2022\u4EF7\u683C";return b.utils.sheet_to_json(o.Sheets[r],{header:["number","size","pattern","fob","ddp","weight"]})},L=async s=>{const l=await s.arrayBuffer(),o=b.read(l),r=g(o,o.SheetNames[0]),c=g(o,o.SheetNames[1]),y=[];if(r.length===c.length)for(let _=0;_<r.length;_++)y.push({size:r[_][3].split(" ")[0],pattern:r[_][6],fob:r[_][8],ddp:r[_][9],weight:c[_][8]});else console.log("");return y},g=(s,l)=>b.utils.sheet_to_json(s.Sheets[l],{header:1}).filter(o=>o[2]===Q),C=async()=>{const s=await D(t.totalDataFileList[0]),l=await L(t.uncheckedDataFileList[0]);m.value=[],d.value=[];for(const o of l){let r=!0;for(const c of s)o.size.trim().toUpperCase()===c.size.trim().toUpperCase()&&o.pattern.trim().toUpperCase()===c.pattern.trim().toUpperCase()&&(r=!1,U(o,c)?m.value.push(o):(console.log(c),console.log(o),d.value.push(o)));r&&(console.log(o),d.value.push(o))}},U=(s,l)=>s.fob===l.fob&&s.ddp===l.ddp&&s.weight===l.weight;return(s,l)=>{const o=u("a-button"),r=u("a-upload"),c=u("a-form-item"),y=u("a-textarea"),_=u("a-form");return N(),B("div",Y,[e(_,R({model:i(t),name:"checkForm"},f,{layout:"horizontal"}),{default:n(()=>[e(c,{name:"upload",label:"\u603B\u6570\u636E"},{default:n(()=>[e(r,{modelValue:i(t).totalDataFileList,"onUpdate:modelValue":l[0]||(l[0]=F=>i(t).totalDataFileList=F),name:"totalDataFile",multiple:!1,"before-upload":p,style:{width:"100%"}},{default:n(()=>[e(o,null,{default:n(()=>[e(i(V)),Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(c,{name:"upload",label:"\u5F85\u6838\u5BF9\u6570\u636E"},{default:n(()=>[e(r,{modelValue:i(t).uncheckedDataFileList,"onUpdate:modelValue":l[1]||(l[1]=F=>i(t).uncheckedDataFileList=F),name:"uncheckedDataFile",multiple:!1,"before-upload":w},{default:n(()=>[e(o,null,{default:n(()=>[e(i(V)),ee]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(c,{"wrapper-col":{span:12,offset:6}},{default:n(()=>[e(o,{type:"primary",loading:a.value,style:{"margin-top":"16px"},onClick:C},{default:n(()=>[te]),_:1},8,["loading"])]),_:1}),e(c,{label:"\u9519\u8BEF\u6570\u636E"},{default:n(()=>[e(y,{value:JSON.stringify(d.value),"auto-size":{minRows:2,maxRows:50}},null,8,["value"])]),_:1}),e(c,{label:"\u6B63\u786E\u6570\u636E"},{default:n(()=>[e(y,{value:JSON.stringify(m.value),"auto-size":{minRows:2,maxRows:50}},null,8,["value"])]),_:1})]),_:1},16,["model"])])}}},oe=[{path:"/",component:ae}];var ne=E({history:$(),routes:oe});j(W).use(I).use(ne).mount("#app");