import{j as V}from"./jsx-runtime-CGpYA4L6.js";import{r as st,R as r}from"./index-CleY8y_P.js";import{G as Ht}from"./index-Cytgc9eF.js";import{B as _t}from"./button-C5Vfupqw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";import"./utils-8RyR4BqC.js";var St=["light","dark"],Ut="(prefers-color-scheme: dark)",Ot=st.createContext(void 0),Vt={setTheme:e=>{},themes:[]},Kt=()=>{var e;return(e=st.useContext(Ot))!=null?e:Vt};st.memo(({forcedTheme:e,storageKey:a,attribute:o,enableSystem:g,enableColorScheme:v,defaultTheme:i,value:h,attrs:f,nonce:S})=>{let D=i==="system",j=o==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${f.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${o}',s='setAttribute';`,L=v?St.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",t=(w,y=!1,K=!0)=>{let $=h?h[w]:w,N=y?w+"|| ''":`'${$}'`,z="";return v&&K&&!y&&St.includes(w)&&(z+=`d.style.colorScheme = '${w}';`),o==="class"?y||$?z+=`c.add(${N})`:z+="null":$&&(z+=`d[s](n,${N})`),z},p=e?`!function(){${j}${t(e)}}()`:g?`!function(){try{${j}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${D})){var t='${Ut}',m=window.matchMedia(t);if(m.media!==t||m.matches){${t("dark")}}else{${t("light")}}}else if(e){${h?`var x=${JSON.stringify(h)};`:""}${t(h?"x[e]":"e",!0)}}${D?"":"else{"+t(i,!1,!1)+"}"}${L}}catch(e){}}()`:`!function(){try{${j}var e=localStorage.getItem('${a}');if(e){${h?`var x=${JSON.stringify(h)};`:""}${t(h?"x[e]":"e",!0)}}else{${t(i,!1,!1)};}${L}}catch(t){}}();`;return st.createElement("script",{nonce:S,dangerouslySetInnerHTML:{__html:p}})});var Wt=e=>{switch(e){case"success":return Xt;case"info":return Gt;case"warning":return qt;case"error":return Qt;default:return null}},Ft=Array(12).fill(0),Jt=({visible:e})=>r.createElement("div",{className:"sonner-loading-wrapper","data-visible":e},r.createElement("div",{className:"sonner-spinner"},Ft.map((a,o)=>r.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),Xt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),qt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Gt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Qt=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Zt=()=>{let[e,a]=r.useState(document.hidden);return r.useEffect(()=>{let o=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",o),()=>window.removeEventListener("visibilitychange",o)},[]),e},ft=1,te=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let a=this.subscribers.indexOf(e);this.subscribers.splice(a,1)}),this.publish=e=>{this.subscribers.forEach(a=>a(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var a;let{message:o,...g}=e,v=typeof(e==null?void 0:e.id)=="number"||((a=e.id)==null?void 0:a.length)>0?e.id:ft++,i=this.toasts.find(f=>f.id===v),h=e.dismissible===void 0?!0:e.dismissible;return i?this.toasts=this.toasts.map(f=>f.id===v?(this.publish({...f,...e,id:v,title:o}),{...f,...e,id:v,dismissible:h,title:o}):f):this.addToast({title:o,...g,dismissible:h,id:v}),v},this.dismiss=e=>(e||this.toasts.forEach(a=>{this.subscribers.forEach(o=>o({id:a.id,dismiss:!0}))}),this.subscribers.forEach(a=>a({id:e,dismiss:!0})),e),this.message=(e,a)=>this.create({...a,message:e}),this.error=(e,a)=>this.create({...a,message:e,type:"error"}),this.success=(e,a)=>this.create({...a,type:"success",message:e}),this.info=(e,a)=>this.create({...a,type:"info",message:e}),this.warning=(e,a)=>this.create({...a,type:"warning",message:e}),this.loading=(e,a)=>this.create({...a,type:"loading",message:e}),this.promise=(e,a)=>{if(!a)return;let o;a.loading!==void 0&&(o=this.create({...a,promise:e,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));let g=e instanceof Promise?e:e(),v=o!==void 0;return g.then(async i=>{if(ae(i)&&!i.ok){v=!1;let h=typeof a.error=="function"?await a.error(`HTTP error! status: ${i.status}`):a.error,f=typeof a.description=="function"?await a.description(`HTTP error! status: ${i.status}`):a.description;this.create({id:o,type:"error",message:h,description:f})}else if(a.success!==void 0){v=!1;let h=typeof a.success=="function"?await a.success(i):a.success,f=typeof a.description=="function"?await a.description(i):a.description;this.create({id:o,type:"success",message:h,description:f})}}).catch(async i=>{if(a.error!==void 0){v=!1;let h=typeof a.error=="function"?await a.error(i):a.error,f=typeof a.description=="function"?await a.description(i):a.description;this.create({id:o,type:"error",message:h,description:f})}}).finally(()=>{var i;v&&(this.dismiss(o),o=void 0),(i=a.finally)==null||i.call(a)}),o},this.custom=(e,a)=>{let o=(a==null?void 0:a.id)||ft++;return this.create({jsx:e(o),id:o,...a}),o},this.subscribers=[],this.toasts=[]}},x=new te,ee=(e,a)=>{let o=(a==null?void 0:a.id)||ft++;return x.addToast({title:e,...a,id:o}),o},ae=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",re=ee,oe=()=>x.toasts,ne=Object.assign(re,{success:x.success,info:x.info,warning:x.warning,error:x.error,custom:x.custom,message:x.message,promise:x.promise,dismiss:x.dismiss,loading:x.loading},{getHistory:oe});function se(e,{insertAt:a}={}){if(typeof document>"u")return;let o=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",a==="top"&&o.firstChild?o.insertBefore(g,o.firstChild):o.appendChild(g),g.styleSheet?g.styleSheet.cssText=e:g.appendChild(document.createTextNode(e))}se(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function ot(e){return e.label!==void 0}var ie=3,le="32px",de=4e3,ce=356,ue=14,me=20,he=200;function pe(...e){return e.filter(Boolean).join(" ")}var fe=e=>{var a,o,g,v,i,h,f,S,D,j;let{invert:L,toast:t,unstyled:p,interacting:w,setHeights:y,visibleToasts:K,heights:$,index:N,toasts:z,expanded:W,removeToast:E,defaultRichColors:F,closeButton:Z,style:tt,cancelButtonStyle:it,actionButtonStyle:lt,className:R="",descriptionClassName:et="",duration:J,position:dt,gap:P,loadingIcon:I,expandByDefault:X,classNames:s,icons:T,closeButtonAriaLabel:ct="Close toast",pauseWhenPageIsHidden:l,cn:c}=e,[m,B]=r.useState(!1),[A,b]=r.useState(!1),[ut,q]=r.useState(!1),[G,Q]=r.useState(!1),[Ct,mt]=r.useState(0),[Mt,vt]=r.useState(0),bt=r.useRef(null),H=r.useRef(null),zt=N===0,It=N+1<=K,k=t.type,_=t.dismissible!==!1,jt=t.className||"",Rt=t.descriptionClassName||"",at=r.useMemo(()=>$.findIndex(n=>n.toastId===t.id)||0,[$,t.id]),Yt=r.useMemo(()=>{var n;return(n=t.closeButton)!=null?n:Z},[t.closeButton,Z]),yt=r.useMemo(()=>t.duration||J||de,[t.duration,J]),ht=r.useRef(0),U=r.useRef(0),wt=r.useRef(0),O=r.useRef(null),[xt,Dt]=dt.split("-"),Et=r.useMemo(()=>$.reduce((n,u,d)=>d>=at?n:n+u.height,0),[$,at]),kt=Zt(),At=t.invert||L,pt=k==="loading";U.current=r.useMemo(()=>at*P+Et,[at,Et]),r.useEffect(()=>{B(!0)},[]),r.useLayoutEffect(()=>{if(!m)return;let n=H.current,u=n.style.height;n.style.height="auto";let d=n.getBoundingClientRect().height;n.style.height=u,vt(d),y(C=>C.find(M=>M.toastId===t.id)?C.map(M=>M.toastId===t.id?{...M,height:d}:M):[{toastId:t.id,height:d,position:t.position},...C])},[m,t.title,t.description,y,t.id]);let Y=r.useCallback(()=>{b(!0),mt(U.current),y(n=>n.filter(u=>u.toastId!==t.id)),setTimeout(()=>{E(t)},he)},[t,E,y,U]);r.useEffect(()=>{if(t.promise&&k==="loading"||t.duration===1/0||t.type==="loading")return;let n,u=yt;return W||w||l&&kt?(()=>{if(wt.current<ht.current){let d=new Date().getTime()-ht.current;u=u-d}wt.current=new Date().getTime()})():u!==1/0&&(ht.current=new Date().getTime(),n=setTimeout(()=>{var d;(d=t.onAutoClose)==null||d.call(t,t),Y()},u)),()=>clearTimeout(n)},[W,w,X,t,yt,Y,t.promise,k,l,kt]),r.useEffect(()=>{let n=H.current;if(n){let u=n.getBoundingClientRect().height;return vt(u),y(d=>[{toastId:t.id,height:u,position:t.position},...d]),()=>y(d=>d.filter(C=>C.toastId!==t.id))}},[y,t.id]),r.useEffect(()=>{t.delete&&Y()},[Y,t.delete]);function Lt(){return T!=null&&T.loading?r.createElement("div",{className:"sonner-loader","data-visible":k==="loading"},T.loading):I?r.createElement("div",{className:"sonner-loader","data-visible":k==="loading"},I):r.createElement(Jt,{visible:k==="loading"})}return r.createElement("li",{"aria-live":t.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:H,className:c(R,jt,s==null?void 0:s.toast,(a=t==null?void 0:t.classNames)==null?void 0:a.toast,s==null?void 0:s.default,s==null?void 0:s[k],(o=t==null?void 0:t.classNames)==null?void 0:o[k]),"data-sonner-toast":"","data-rich-colors":(g=t.richColors)!=null?g:F,"data-styled":!(t.jsx||t.unstyled||p),"data-mounted":m,"data-promise":!!t.promise,"data-removed":A,"data-visible":It,"data-y-position":xt,"data-x-position":Dt,"data-index":N,"data-front":zt,"data-swiping":ut,"data-dismissible":_,"data-type":k,"data-invert":At,"data-swipe-out":G,"data-expanded":!!(W||X&&m),style:{"--index":N,"--toasts-before":N,"--z-index":z.length-N,"--offset":`${A?Ct:U.current}px`,"--initial-height":X?"auto":`${Mt}px`,...tt,...t.style},onPointerDown:n=>{pt||!_||(bt.current=new Date,mt(U.current),n.target.setPointerCapture(n.pointerId),n.target.tagName!=="BUTTON"&&(q(!0),O.current={x:n.clientX,y:n.clientY}))},onPointerUp:()=>{var n,u,d,C;if(G||!_)return;O.current=null;let M=Number(((n=H.current)==null?void 0:n.style.getPropertyValue("--swipe-amount").replace("px",""))||0),rt=new Date().getTime()-((u=bt.current)==null?void 0:u.getTime()),Pt=Math.abs(M)/rt;if(Math.abs(M)>=me||Pt>.11){mt(U.current),(d=t.onDismiss)==null||d.call(t,t),Y(),Q(!0);return}(C=H.current)==null||C.style.setProperty("--swipe-amount","0px"),q(!1)},onPointerMove:n=>{var u;if(!O.current||!_)return;let d=n.clientY-O.current.y,C=n.clientX-O.current.x,M=(xt==="top"?Math.min:Math.max)(0,d),rt=n.pointerType==="touch"?10:2;Math.abs(M)>rt?(u=H.current)==null||u.style.setProperty("--swipe-amount",`${d}px`):Math.abs(C)>rt&&(O.current=null)}},Yt&&!t.jsx?r.createElement("button",{"aria-label":ct,"data-disabled":pt,"data-close-button":!0,onClick:pt||!_?()=>{}:()=>{var n;Y(),(n=t.onDismiss)==null||n.call(t,t)},className:c(s==null?void 0:s.closeButton,(v=t==null?void 0:t.classNames)==null?void 0:v.closeButton)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,t.jsx||r.isValidElement(t.title)?t.jsx||t.title:r.createElement(r.Fragment,null,k||t.icon||t.promise?r.createElement("div",{"data-icon":"",className:c(s==null?void 0:s.icon,(i=t==null?void 0:t.classNames)==null?void 0:i.icon)},t.promise||t.type==="loading"&&!t.icon?t.icon||Lt():null,t.type!=="loading"?t.icon||(T==null?void 0:T[k])||Wt(k):null):null,r.createElement("div",{"data-content":"",className:c(s==null?void 0:s.content,(h=t==null?void 0:t.classNames)==null?void 0:h.content)},r.createElement("div",{"data-title":"",className:c(s==null?void 0:s.title,(f=t==null?void 0:t.classNames)==null?void 0:f.title)},t.title),t.description?r.createElement("div",{"data-description":"",className:c(et,Rt,s==null?void 0:s.description,(S=t==null?void 0:t.classNames)==null?void 0:S.description)},t.description):null),r.isValidElement(t.cancel)?t.cancel:t.cancel&&ot(t.cancel)?r.createElement("button",{"data-button":!0,"data-cancel":!0,style:t.cancelButtonStyle||it,onClick:n=>{var u,d;ot(t.cancel)&&_&&((d=(u=t.cancel).onClick)==null||d.call(u,n),Y())},className:c(s==null?void 0:s.cancelButton,(D=t==null?void 0:t.classNames)==null?void 0:D.cancelButton)},t.cancel.label):null,r.isValidElement(t.action)?t.action:t.action&&ot(t.action)?r.createElement("button",{"data-button":!0,"data-action":!0,style:t.actionButtonStyle||lt,onClick:n=>{var u,d;ot(t.action)&&(n.defaultPrevented||((d=(u=t.action).onClick)==null||d.call(u,n),Y()))},className:c(s==null?void 0:s.actionButton,(j=t==null?void 0:t.classNames)==null?void 0:j.actionButton)},t.action.label):null))};function Nt(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}var ge=e=>{let{invert:a,position:o="bottom-right",hotkey:g=["altKey","KeyT"],expand:v,closeButton:i,className:h,offset:f,theme:S="light",richColors:D,duration:j,style:L,visibleToasts:t=ie,toastOptions:p,dir:w=Nt(),gap:y=ue,loadingIcon:K,icons:$,containerAriaLabel:N="Notifications",pauseWhenPageIsHidden:z,cn:W=pe}=e,[E,F]=r.useState([]),Z=r.useMemo(()=>Array.from(new Set([o].concat(E.filter(l=>l.position).map(l=>l.position)))),[E,o]),[tt,it]=r.useState([]),[lt,R]=r.useState(!1),[et,J]=r.useState(!1),[dt,P]=r.useState(S!=="system"?S:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),I=r.useRef(null),X=g.join("+").replace(/Key/g,"").replace(/Digit/g,""),s=r.useRef(null),T=r.useRef(!1),ct=r.useCallback(l=>{var c;(c=E.find(m=>m.id===l.id))!=null&&c.delete||x.dismiss(l.id),F(m=>m.filter(({id:B})=>B!==l.id))},[E]);return r.useEffect(()=>x.subscribe(l=>{if(l.dismiss){F(c=>c.map(m=>m.id===l.id?{...m,delete:!0}:m));return}setTimeout(()=>{Ht.flushSync(()=>{F(c=>{let m=c.findIndex(B=>B.id===l.id);return m!==-1?[...c.slice(0,m),{...c[m],...l},...c.slice(m+1)]:[l,...c]})})})}),[]),r.useEffect(()=>{if(S!=="system"){P(S);return}S==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?P("dark"):P("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:l})=>{P(l?"dark":"light")})},[S]),r.useEffect(()=>{E.length<=1&&R(!1)},[E]),r.useEffect(()=>{let l=c=>{var m,B;g.every(A=>c[A]||c.code===A)&&(R(!0),(m=I.current)==null||m.focus()),c.code==="Escape"&&(document.activeElement===I.current||(B=I.current)!=null&&B.contains(document.activeElement))&&R(!1)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[g]),r.useEffect(()=>{if(I.current)return()=>{s.current&&(s.current.focus({preventScroll:!0}),s.current=null,T.current=!1)}},[I.current]),E.length?r.createElement("section",{"aria-label":`${N} ${X}`,tabIndex:-1},Z.map((l,c)=>{var m;let[B,A]=l.split("-");return r.createElement("ol",{key:l,dir:w==="auto"?Nt():w,tabIndex:-1,ref:I,className:h,"data-sonner-toaster":!0,"data-theme":dt,"data-y-position":B,"data-x-position":A,style:{"--front-toast-height":`${((m=tt[0])==null?void 0:m.height)||0}px`,"--offset":typeof f=="number"?`${f}px`:f||le,"--width":`${ce}px`,"--gap":`${y}px`,...L},onBlur:b=>{T.current&&!b.currentTarget.contains(b.relatedTarget)&&(T.current=!1,s.current&&(s.current.focus({preventScroll:!0}),s.current=null))},onFocus:b=>{b.target instanceof HTMLElement&&b.target.dataset.dismissible==="false"||T.current||(T.current=!0,s.current=b.relatedTarget)},onMouseEnter:()=>R(!0),onMouseMove:()=>R(!0),onMouseLeave:()=>{et||R(!1)},onPointerDown:b=>{b.target instanceof HTMLElement&&b.target.dataset.dismissible==="false"||J(!0)},onPointerUp:()=>J(!1)},E.filter(b=>!b.position&&c===0||b.position===l).map((b,ut)=>{var q,G;return r.createElement(fe,{key:b.id,icons:$,index:ut,toast:b,defaultRichColors:D,duration:(q=p==null?void 0:p.duration)!=null?q:j,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:a,visibleToasts:t,closeButton:(G=p==null?void 0:p.closeButton)!=null?G:i,interacting:et,position:l,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:ct,toasts:E.filter(Q=>Q.position==b.position),heights:tt.filter(Q=>Q.position==b.position),setHeights:it,expandByDefault:v,gap:y,loadingIcon:K,expanded:lt,pauseWhenPageIsHidden:z,cn:W})}))})):null};const gt=({...e})=>{const{theme:a="system"}=Kt();return V.jsx(ge,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};try{gt.displayName="Toaster",gt.__docgenInfo={description:"",displayName:"Toaster",props:{}}}catch{}const Ne={title:"BlackBox/Sonner",parameters:{layout:"centered"},decorators:[e=>V.jsxs(V.Fragment,{children:[V.jsx(e,{}),V.jsx(gt,{})]})],tags:["autodocs"]},nt={render:()=>V.jsx(_t,{variant:"outline",onClick:()=>ne("Event has been created",{description:"Sunday, December 03, 2023 at 9:00 AM",action:{label:"Undo",onClick:()=>console.log("Undo")}}),children:"Show Toast"})};var Tt,$t,Bt;nt.parameters={...nt.parameters,docs:{...(Tt=nt.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast("Event has been created", {
    description: "Sunday, December 03, 2023 at 9:00 AM",
    action: {
      label: "Undo",
      onClick: () => console.log("Undo")
    }
  })}>
      Show Toast
    </Button>
}`,...(Bt=($t=nt.parameters)==null?void 0:$t.docs)==null?void 0:Bt.source}}};const Te=["Default"];export{nt as Default,Te as __namedExportsOrder,Ne as default};