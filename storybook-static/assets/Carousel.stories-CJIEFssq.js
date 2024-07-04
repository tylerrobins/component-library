import{j}from"./jsx-runtime-CGpYA4L6.js";import{r as A}from"./index-CleY8y_P.js";import{c as dt}from"./utils-8RyR4BqC.js";import{B as $t}from"./button-Cp_m9PNF.js";import{c as Kt}from"./createLucideIcon-kBjshEDv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=Kt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=Kt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function le(t){return Object.prototype.toString.call(t)==="[object Object]"}function Vt(t){return le(t)||Array.isArray(t)}function fe(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Et(t,e){const r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==o?!1:r.every(n=>{const u=t[n],a=e[n];return typeof u=="function"?`${u}`==`${a}`:!Vt(u)||!Vt(a)?u===a:Et(u,a)})}function Rt(t){return t.concat().sort((e,r)=>e.name>r.name?1:-1).map(e=>e.options)}function de(t,e){if(t.length!==e.length)return!1;const r=Rt(t),s=Rt(e);return r.every((i,o)=>{const n=s[o];return Et(i,n)})}function wt(t){return typeof t=="number"}function xt(t){return typeof t=="string"}function It(t){return typeof t=="boolean"}function Bt(t){return Object.prototype.toString.call(t)==="[object Object]"}function N(t){return Math.abs(t)}function Tt(t){return Math.sign(t)}function ct(t,e){return N(t-e)}function pe(t,e){if(t===0||e===0||N(t)<=N(e))return 0;const r=ct(N(t),N(e));return N(r/t)}function at(t){return ut(t).map(Number)}function q(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function Lt(t,e){return e===pt(t)}function Ht(t,e=0){return Array.from(Array(t),(r,s)=>e+s)}function ut(t){return Object.keys(t)}function Ut(t,e){return[t,e].reduce((r,s)=>(ut(s).forEach(i=>{const o=r[i],n=s[i],u=Bt(o)&&Bt(n);r[i]=u?Ut(o,n):n}),r),{})}function vt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function me(t,e){const r={start:s,center:i,end:o};function s(){return 0}function i(a){return o(a)/2}function o(a){return e-a}function n(a,c){return xt(t)?r[t](a):t(e,a,c)}return{measure:n}}function lt(){let t=[];function e(i,o,n,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,n,u),a=()=>i.removeEventListener(o,n,u);else{const c=i;c.addListener(n),a=()=>c.removeListener(n)}return t.push(a),s}function r(){t=t.filter(i=>i())}const s={add:e,clear:r};return s}function ge(t,e,r){const s=lt(),i=1e3/60;let o=null,n=0,u=0;function a(){s.add(t,"visibilitychange",()=>{t.hidden&&x()})}function c(){g(),s.clear()}function m(p){if(!n)return;o||(o=p);const y=p-o;for(o=p,u+=y;u>=i;)r(),u-=i;n&&e.requestAnimationFrame(m)}function f(){n||(n=e.requestAnimationFrame(m))}function g(){e.cancelAnimationFrame(n),o=null,u=0,n=0}function x(){o=null,u=0}return{init:a,destroy:c,start:f,stop:g,update:r}}function he(t,e){const r=e==="rtl",s=t==="y",i=s?"y":"x",o=s?"x":"y",n=!s&&r?-1:1,u=m(),a=f();function c(d){const{height:p,width:y}=d;return s?p:y}function m(){return s?"top":r?"right":"left"}function f(){return s?"bottom":r?"left":"right"}function g(d){return d*n}return{scroll:i,cross:o,startEdge:u,endEdge:a,measureSize:c,direction:g}}function et(t=0,e=0){const r=N(t-e);function s(c){return c<t}function i(c){return c>e}function o(c){return s(c)||i(c)}function n(c){return o(c)?s(c)?t:e:c}function u(c){return r?c-r*Math.ceil((c-e)/r):c}return{length:r,max:e,min:t,constrain:n,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function Qt(t,e,r){const{constrain:s}=et(0,t),i=t+1;let o=n(e);function n(g){return r?N((i+g)%i):s(g)}function u(){return o}function a(g){return o=n(g),f}function c(g){return m().set(u()+g)}function m(){return Qt(t,u(),r)}const f={get:u,set:a,add:c,clone:m};return f}function ye(t,e,r,s,i,o,n,u,a,c,m,f,g,x,d,p,y,l,h){const{cross:S,direction:v}=t,P=["INPUT","SELECT","TEXTAREA"],L={passive:!1},C=lt(),E=lt(),w=et(50,225).constrain(x.measure(20)),T={mouse:300,touch:400},O={mouse:500,touch:600},V=d?43:25;let X=!1,B=0,_=0,Z=!1,$=!1,Y=!1,K=!1;function W(b){if(!h)return;function I(M){(It(h)||h(b,M))&&R(M)}const k=e;C.add(k,"dragstart",M=>M.preventDefault(),L).add(k,"touchmove",()=>{},L).add(k,"touchend",()=>{}).add(k,"touchstart",I).add(k,"mousedown",I).add(k,"touchcancel",z).add(k,"contextmenu",z).add(k,"click",rt,!0)}function U(){C.clear(),E.clear()}function nt(){const b=K?r:e;E.add(b,"touchmove",G,L).add(b,"touchend",z).add(b,"mousemove",G,L).add(b,"mouseup",z)}function Q(b){const I=b.nodeName||"";return P.includes(I)}function ot(){return(d?O:T)[K?"mouse":"touch"]}function st(b,I){const k=f.add(Tt(b)*-1),M=m.byDistance(b,!d).distance;return d||N(b)<w?M:y&&I?M*.5:m.byIndex(k.get(),0).distance}function R(b){const I=vt(b,s);K=I,Y=d&&I&&!b.buttons&&X,X=ct(i.get(),n.get())>=2,!(I&&b.button!==0)&&(Q(b.target)||(Z=!0,o.pointerDown(b),c.useFriction(0).useDuration(0),i.set(n),nt(),B=o.readPoint(b),_=o.readPoint(b,S),g.emit("pointerDown")))}function G(b){if(!vt(b,s)&&b.touches.length>=2)return z(b);const k=o.readPoint(b),M=o.readPoint(b,S),F=ct(k,B),J=ct(M,_);if(!$&&!K&&(!b.cancelable||($=F>J,!$)))return z(b);const tt=o.pointerMove(b);F>p&&(Y=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(v(tt)),b.preventDefault()}function z(b){const k=m.byDistance(0,!1).index!==f.get(),M=o.pointerUp(b)*ot(),F=st(v(M),k),J=pe(M,F),tt=V-10*J,it=l+J/50;$=!1,Z=!1,E.clear(),c.useDuration(tt).useFriction(it),a.distance(F,!d),K=!1,g.emit("pointerUp")}function rt(b){Y&&(b.stopPropagation(),b.preventDefault(),Y=!1)}function H(){return Z}return{init:W,destroy:U,pointerDown:H}}function be(t,e){let s,i;function o(f){return f.timeStamp}function n(f,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(vt(f,e)?f:f.touches[0])[d]}function u(f){return s=f,i=f,n(f)}function a(f){const g=n(f)-n(i),x=o(f)-o(s)>170;return i=f,x&&(s=f),g}function c(f){if(!s||!i)return 0;const g=n(i)-n(s),x=o(f)-o(s),d=o(f)-o(i)>170,p=g/x;return x&&!d&&N(p)>.1?p:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:n}}function Se(){function t(r){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:n}=r;return{top:s,right:i+o,bottom:s+n,left:i,width:o,height:n}}return{measure:t}}function xe(t){function e(s){return t*(s/100)}return{measure:e}}function ve(t,e,r,s,i,o,n){let u,a,c=[],m=!1;function f(p){return i.measureSize(n.measure(p))}function g(p){if(!o)return;a=f(t),c=s.map(f);function y(h){for(const S of h){const v=S.target===t,P=s.indexOf(S.target),L=v?a:c[P],C=f(v?t:s[P]);if(N(C-L)>=.5){r.requestAnimationFrame(()=>{p.reInit(),e.emit("resize")});break}}}u=new ResizeObserver(h=>{m||(It(o)||o(p,h))&&y(h)}),[t].concat(s).forEach(h=>u.observe(h))}function x(){u&&u.disconnect(),m=!0}return{init:g,destroy:x}}function Ce(t,e,r,s){let i=0,o=0,n=r,u=s,a=t.get(),c=0;function m(){const v=e.get()-t.get(),P=!n;let L=0;return P?(i=0,t.set(e),L=v):(i+=v/n,i*=u,a+=i,t.add(i),L=a-c),o=Tt(L),c=a,S}function f(){const v=e.get()-t.get();return N(v)<.001}function g(){return n}function x(){return o}function d(){return i}function p(){return l(r)}function y(){return h(s)}function l(v){return n=v,S}function h(v){return u=v,S}const S={direction:x,duration:g,velocity:d,seek:m,settled:f,useBaseFriction:y,useBaseDuration:p,useFriction:h,useDuration:l};return S}function Ee(t,e,r,s,i){const o=i.measure(10),n=i.measure(50),u=et(.1,.99);let a=!1;function c(){return!(a||!t.reachedAny(r.get())||!t.reachedAny(e.get()))}function m(x){if(!c())return;const d=t.reachedMin(e.get())?"min":"max",p=N(t[d]-e.get()),y=r.get()-e.get(),l=u.constrain(p/n);r.subtract(y*l),!x&&N(y)<o&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function f(x){a=!x}return{shouldConstrain:c,constrain:m,toggleActive:f}}function we(t,e,r,s,i){const o=et(-e+t,0),n=f(),u=m(),a=g();function c(d,p){return ct(d,p)<1}function m(){const d=n[0],p=q(n),y=n.lastIndexOf(d),l=n.indexOf(p)+1;return et(y,l)}function f(){return r.map((d,p)=>{const{min:y,max:l}=o,h=o.constrain(d),S=!p,v=Lt(r,p);return S?l:v||c(y,h)?y:c(l,h)?l:h}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(e<=t+i)return[o.max];if(s==="keepSnaps")return n;const{min:d,max:p}=u;return n.slice(d,p)}return{snapsContained:a,scrollContainLimit:u}}function Ie(t,e,r){const s=e[0],i=r?s-t:q(e);return{limit:et(i,s)}}function Te(t,e,r,s){const o=e.min+.1,n=e.max+.1,{reachedMin:u,reachedMax:a}=et(o,n);function c(g){return g===1?a(r.get()):g===-1?u(r.get()):!1}function m(g){if(!c(g))return;const x=t*(g*-1);s.forEach(d=>d.add(x))}return{loop:m}}function Le(t){const{max:e,length:r}=t;function s(o){const n=o-e;return r?n/-r:0}return{get:s}}function Ae(t,e,r,s,i){const{startEdge:o,endEdge:n}=t,{groupSlides:u}=i,a=f().map(e.measure),c=g(),m=x();function f(){return u(s).map(p=>q(p)[n]-p[0][o]).map(N)}function g(){return s.map(p=>r[o]-p[o]).map(p=>-N(p))}function x(){return u(c).map(p=>p[0]).map((p,y)=>p+a[y])}return{snaps:c,snapsAligned:m}}function Ne(t,e,r,s,i,o){const{groupSlides:n}=i,{min:u,max:a}=s,c=m();function m(){const g=n(o),x=!t||e==="keepSnaps";return r.length===1?[o]:x?g:g.slice(u,a).map((d,p,y)=>{const l=!p,h=Lt(y,p);if(l){const S=q(y[0])+1;return Ht(S)}if(h){const S=pt(o)-q(y)[0]+1;return Ht(S,q(y)[0])}return d})}return{slideRegistry:c}}function Pe(t,e,r,s,i){const{reachedAny:o,removeOffset:n,constrain:u}=s;function a(d){return d.concat().sort((p,y)=>N(p)-N(y))[0]}function c(d){const p=t?n(d):u(d),y=e.map((h,S)=>({diff:m(h-p,0),index:S})).sort((h,S)=>N(h.diff)-N(S.diff)),{index:l}=y[0];return{index:l,distance:p}}function m(d,p){const y=[d,d+r,d-r];if(!t)return d;if(!p)return a(y);const l=y.filter(h=>Tt(h)===p);return l.length?a(l):q(y)-r}function f(d,p){const y=e[d]-i.get(),l=m(y,p);return{index:d,distance:l}}function g(d,p){const y=i.get()+d,{index:l,distance:h}=c(y),S=!t&&o(y);if(!p||S)return{index:l,distance:d};const v=e[l]-h,P=d+m(v,0);return{index:l,distance:P}}return{byDistance:g,byIndex:f,shortcut:m}}function De(t,e,r,s,i,o){function n(m){const f=m.distance,g=m.index!==e.get();i.add(f),f&&t.start(),g&&(r.set(e.get()),e.set(m.index),o.emit("select"))}function u(m,f){const g=s.byDistance(m,f);n(g)}function a(m,f){const g=e.clone().set(m),x=s.byIndex(g.get(),f);n(x)}return{distance:u,index:a}}function Oe(t,e,r,s,i,o,n){let u=0;function a(){o.add(document,"keydown",c,!1),e.forEach(m)}function c(g){g.code==="Tab"&&(u=new Date().getTime())}function m(g){const x=()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;const y=e.indexOf(g),l=r.findIndex(h=>h.includes(y));wt(l)&&(i.useDuration(0),s.index(l,0),n.emit("slideFocus"))};o.add(g,"focus",x,{passive:!0,capture:!0})}return{init:a}}function Ct(t){let e=t;function r(){return e}function s(a){e=n(a)}function i(a){e+=n(a)}function o(a){e-=n(a)}function n(a){return wt(a)?a:a.get()}return{get:r,set:s,add:i,subtract:o}}function Jt(t,e){const r=t.scroll==="x"?o:n,s=e.style;let i=!1;function o(f){return`translate3d(${f}px,0px,0px)`}function n(f){return`translate3d(0px,${f}px,0px)`}function u(f){i||(s.transform=r(t.direction(f)))}function a(f){i=!f}function c(){i||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:c,to:u,toggleActive:a}}function Me(t,e,r,s,i,o,n,u,a){const m=at(i),f=at(i).reverse(),g=l().concat(h());function x(C,E){return C.reduce((w,T)=>w-i[T],E)}function d(C,E){return C.reduce((w,T)=>x(w,E)>0?w.concat([T]):w,[])}function p(C){return o.map((E,w)=>({start:E-s[w]+.5+C,end:E+e-.5+C}))}function y(C,E,w){const T=p(E);return C.map(O=>{const V=w?0:-r,X=w?r:0,B=w?"end":"start",_=T[O][B];return{index:O,loopPoint:_,slideLocation:Ct(-1),translate:Jt(t,a[O]),target:()=>u.get()>_?V:X}})}function l(){const C=n[0],E=d(f,C);return y(E,r,!1)}function h(){const C=e-n[0]-1,E=d(m,C);return y(E,-r,!0)}function S(){return g.every(({index:C})=>{const E=m.filter(w=>w!==C);return x(E,e)<=.1})}function v(){g.forEach(C=>{const{target:E,translate:w,slideLocation:T}=C,O=E();O!==T.get()&&(w.to(O),T.set(O))})}function P(){g.forEach(C=>C.translate.clear())}return{canLoop:S,clear:P,loop:v,loopPoints:g}}function ke(t,e,r){let s,i=!1;function o(a){if(!r)return;function c(m){for(const f of m)if(f.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(m=>{i||(It(r)||r(a,m))&&c(m)}),s.observe(t,{childList:!0})}function n(){s&&s.disconnect(),i=!0}return{init:o,destroy:n}}function je(t,e,r,s){const i={};let o=null,n=null,u,a=!1;function c(){u=new IntersectionObserver(d=>{a||(d.forEach(p=>{const y=e.indexOf(p.target);i[y]=p}),o=null,n=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(d=>u.observe(d))}function m(){u&&u.disconnect(),a=!0}function f(d){return ut(i).reduce((p,y)=>{const l=parseInt(y),{isIntersecting:h}=i[l];return(d&&h||!d&&!h)&&p.push(l),p},[])}function g(d=!0){if(d&&o)return o;if(!d&&n)return n;const p=f(d);return d&&(o=p),d||(n=p),p}return{init:c,destroy:m,get:g}}function ze(t,e,r,s,i,o){const{measureSize:n,startEdge:u,endEdge:a}=t,c=r[0]&&i,m=d(),f=p(),g=r.map(n),x=y();function d(){if(!c)return 0;const h=r[0];return N(e[u]-h[u])}function p(){if(!c)return 0;const h=o.getComputedStyle(q(s));return parseFloat(h.getPropertyValue(`margin-${a}`))}function y(){return r.map((h,S,v)=>{const P=!S,L=Lt(v,S);return P?g[S]+m:L?g[S]+f:v[S+1][u]-h[u]}).map(N)}return{slideSizes:g,slideSizesWithGaps:x,startGap:m,endGap:f}}function Fe(t,e,r,s,i,o,n,u,a){const{startEdge:c,endEdge:m,direction:f}=t,g=wt(r);function x(l,h){return at(l).filter(S=>S%h===0).map(S=>l.slice(S,S+h))}function d(l){return l.length?at(l).reduce((h,S,v)=>{const P=q(h)||0,L=P===0,C=S===pt(l),E=i[c]-o[P][c],w=i[c]-o[S][m],T=!s&&L?f(n):0,O=!s&&C?f(u):0,V=N(w-O-(E+T));return v&&V>e+a&&h.push(S),C&&h.push(l.length),h},[]).map((h,S,v)=>{const P=Math.max(v[S-1]||0);return l.slice(P,h)}):[]}function p(l){return g?x(l,r):d(l)}return{groupSlides:p}}function Ve(t,e,r,s,i,o,n){const{align:u,axis:a,direction:c,startIndex:m,loop:f,duration:g,dragFree:x,dragThreshold:d,inViewThreshold:p,slidesToScroll:y,skipSnaps:l,containScroll:h,watchResize:S,watchSlides:v,watchDrag:P}=o,L=2,C=Se(),E=C.measure(e),w=r.map(C.measure),T=he(a,c),O=T.measureSize(E),V=xe(O),X=me(u,O),B=!f&&!!h,_=f||!!h,{slideSizes:Z,slideSizesWithGaps:$,startGap:Y,endGap:K}=ze(T,E,w,r,_,i),W=Fe(T,O,y,f,E,w,Y,K,L),{snaps:U,snapsAligned:nt}=Ae(T,X,E,w,W),Q=-q(U)+q($),{snapsContained:ot,scrollContainLimit:st}=we(O,Q,nt,h,L),R=B?ot:nt,{limit:G}=Ie(Q,R,f),z=Qt(pt(R),m,f),rt=z.clone(),H=at(r),D=({dragHandler:Mt,eventHandler:kt,scrollBody:bt,scrollBounds:jt,scrollLooper:ne,slideLooper:re,translate:oe,location:se,animation:ie,options:{loop:St}})=>{St||jt.constrain(Mt.pointerDown()),bt.seek();const zt=bt.settled(),ce=!jt.shouldConstrain(),Ft=St?zt:zt&&ce;Ft&&!Mt.pointerDown()&&(ie.stop(),kt.emit("settle")),Ft||kt.emit("scroll"),St&&(ne.loop(bt.direction()),re.loop()),oe.to(se.get())},b=ge(s,i,()=>D(Ot)),I=.68,k=R[z.get()],M=Ct(k),F=Ct(k),J=Ce(M,F,g,I),tt=Pe(f,R,Q,G,F),it=De(b,z,rt,tt,F,n),Nt=Le(G),Pt=lt(),te=je(e,r,n,p),{slideRegistry:Dt}=Ne(B,h,R,st,W,H),ee=Oe(t,r,Dt,it,J,Pt,n),Ot={ownerDocument:s,ownerWindow:i,eventHandler:n,containerRect:E,slideRects:w,animation:b,axis:T,dragHandler:ye(T,t,s,i,F,be(T,i),M,b,it,J,tt,z,n,V,x,d,l,I,P),eventStore:Pt,percentOfView:V,index:z,indexPrevious:rt,limit:G,location:M,options:o,resizeHandler:ve(e,n,i,r,T,S,C),scrollBody:J,scrollBounds:Ee(G,M,F,J,V),scrollLooper:Te(Q,G,M,[M,F]),scrollProgress:Nt,scrollSnapList:R.map(Nt.get),scrollSnaps:R,scrollTarget:tt,scrollTo:it,slideLooper:Me(T,O,Q,Z,$,U,R,M,r),slideFocus:ee,slidesHandler:ke(e,n,v),slidesInView:te,slideIndexes:H,slideRegistry:Dt,slidesToScroll:W,target:F,translate:Jt(T,e)};return Ot}function Re(){let t={},e;function r(c){e=c}function s(c){return t[c]||[]}function i(c){return s(c).forEach(m=>m(e,c)),a}function o(c,m){return t[c]=s(c).concat([m]),a}function n(c,m){return t[c]=s(c).filter(f=>f!==m),a}function u(){t={}}const a={init:r,emit:i,off:n,on:o,clear:u};return a}const Be={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function He(t){function e(o,n){return Ut(o,n||{})}function r(o){const n=o.breakpoints||{},u=ut(n).filter(a=>t.matchMedia(a).matches).map(a=>n[a]).reduce((a,c)=>e(a,c),{});return e(o,u)}function s(o){return o.map(n=>ut(n.breakpoints||{})).reduce((n,u)=>n.concat(u),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:r,optionsMediaQueries:s}}function qe(t){let e=[];function r(o,n){return e=n.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),e.forEach(u=>u.init(o,t)),n.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function s(){e=e.filter(o=>o.destroy())}return{init:r,destroy:s}}function ht(t,e,r){const s=t.ownerDocument,i=s.defaultView,o=He(i),n=qe(o),u=lt(),a=Re(),{mergeOptions:c,optionsAtMedia:m,optionsMediaQueries:f}=o,{on:g,off:x,emit:d}=a,p=O;let y=!1,l,h=c(Be,ht.globalOptions),S=c(h),v=[],P,L,C;function E(){const{container:D,slides:b}=S;L=(xt(D)?t.querySelector(D):D)||t.children[0];const k=xt(b)?L.querySelectorAll(b):b;C=[].slice.call(k||L.children)}function w(D){const b=Ve(t,L,C,s,i,D,a);if(D.loop&&!b.slideLooper.canLoop()){const I=Object.assign({},D,{loop:!1});return w(I)}return b}function T(D,b){y||(h=c(h,D),S=m(h),v=b||v,E(),l=w(S),f([h,...v.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",O)),S.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(H),l.resizeHandler.init(H),l.slidesHandler.init(H),l.options.loop&&l.slideLooper.loop(),L.offsetParent&&C.length&&l.dragHandler.init(H),P=n.init(H,v)))}function O(D,b){const I=U();V(),T(c({startIndex:I},D),b),a.emit("reInit")}function V(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),n.destroy(),u.clear()}function X(){y||(y=!0,u.clear(),V(),a.emit("destroy"),a.clear())}function B(D,b,I){!S.active||y||(l.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),l.scrollTo.index(D,I||0))}function _(D){const b=l.index.add(1).get();B(b,D,-1)}function Z(D){const b=l.index.add(-1).get();B(b,D,1)}function $(){return l.index.add(1).get()!==U()}function Y(){return l.index.add(-1).get()!==U()}function K(){return l.scrollSnapList}function W(){return l.scrollProgress.get(l.location.get())}function U(){return l.index.get()}function nt(){return l.indexPrevious.get()}function Q(){return l.slidesInView.get()}function ot(){return l.slidesInView.get(!1)}function st(){return P}function R(){return l}function G(){return t}function z(){return L}function rt(){return C}const H={canScrollNext:$,canScrollPrev:Y,containerNode:z,internalEngine:R,destroy:X,off:x,on:g,emit:d,plugins:st,previousScrollSnap:nt,reInit:p,rootNode:G,scrollNext:_,scrollPrev:Z,scrollProgress:W,scrollSnapList:K,scrollTo:B,selectedScrollSnap:U,slideNodes:rt,slidesInView:Q,slidesNotInView:ot};return T(e,r),setTimeout(()=>a.emit("init"),0),H}ht.globalOptions=void 0;function At(t={},e=[]){const r=A.useRef(t),s=A.useRef(e),[i,o]=A.useState(),[n,u]=A.useState(),a=A.useCallback(()=>{i&&i.reInit(r.current,s.current)},[i]);return A.useEffect(()=>{if(fe()&&n){ht.globalOptions=At.globalOptions;const c=ht(n,r.current,s.current);return o(c),()=>c.destroy()}else o(void 0)},[n,o]),A.useEffect(()=>{Et(r.current,t)||(r.current=t,a())},[t,a]),A.useEffect(()=>{de(s.current,e)||(s.current=e,a())},[e,a]),[u,i]}At.globalOptions=void 0;const Xt=A.createContext(null);function yt(){const t=A.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const ft=A.forwardRef(({orientation:t="horizontal",opts:e,setApi:r,plugins:s,className:i,children:o,...n},u)=>{const[a,c]=At({...e,axis:t==="horizontal"?"x":"y"},s),[m,f]=A.useState(!1),[g,x]=A.useState(!1),d=A.useCallback(h=>{h&&(f(h.canScrollPrev()),x(h.canScrollNext()))},[]),p=A.useCallback(()=>{c==null||c.scrollPrev()},[c]),y=A.useCallback(()=>{c==null||c.scrollNext()},[c]),l=A.useCallback(h=>{h.key==="ArrowLeft"?(h.preventDefault(),p()):h.key==="ArrowRight"&&(h.preventDefault(),y())},[p,y]);return A.useEffect(()=>{!c||!r||r(c)},[c,r]),A.useEffect(()=>{if(c)return d(c),c.on("reInit",d),c.on("select",d),()=>{c==null||c.off("select",d)}},[c,d]),j.jsx(Xt.Provider,{value:{carouselRef:a,api:c,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:y,canScrollPrev:m,canScrollNext:g},children:j.jsx("div",{ref:u,onKeyDownCapture:l,className:dt("relative",i),role:"region","aria-roledescription":"carousel",...n,children:o})})});ft.displayName="Carousel";const Yt=A.forwardRef(({className:t,...e},r)=>{const{carouselRef:s,orientation:i}=yt();return j.jsx("div",{ref:s,className:"overflow-hidden",children:j.jsx("div",{ref:r,className:dt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});Yt.displayName="CarouselContent";const gt=A.forwardRef(({className:t,...e},r)=>{const{orientation:s}=yt();return j.jsx("div",{ref:r,role:"group","aria-roledescription":"slide",className:dt("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",t),...e})});gt.displayName="CarouselItem";const Zt=A.forwardRef(({className:t,variant:e="outline",size:r="icon",...s},i)=>{const{orientation:o,scrollPrev:n,canScrollPrev:u}=yt();return j.jsxs($t,{ref:i,variant:e,size:r,className:dt("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:n,...s,children:[j.jsx(ae,{className:"h-4 w-4"}),j.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Zt.displayName="CarouselPrevious";const Wt=A.forwardRef(({className:t,variant:e="outline",size:r="icon",...s},i)=>{const{orientation:o,scrollNext:n,canScrollNext:u}=yt();return j.jsxs($t,{ref:i,variant:e,size:r,className:dt("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:n,...s,children:[j.jsx(ue,{className:"h-4 w-4"}),j.jsx("span",{className:"sr-only",children:"Next slide"})]})});Wt.displayName="CarouselNext";try{ft.displayName="Carousel",ft.__docgenInfo={description:"",displayName:"Carousel",props:{opts:{defaultValue:null,description:"",name:"opts",required:!1,type:{name:"Partial<OptionsType>"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"CreatePluginType<LoosePluginType, {}>[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},setApi:{defaultValue:null,description:"",name:"setApi",required:!1,type:{name:"((api: EmblaCarouselType) => void)"}}}}}catch{}const Ye={title:"BlackBox/Carousel",component:ft,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{opts:{control:"object",description:"Options for configuring the carousel behavior",table:{type:{summary:"CarouselOptions",detail:`
            {
              align: 'start' | 'center' | 'end' | ((viewSize: number, snapSize: number) => number);
              axis: 'x' | 'y';
              container: string | HTMLElement | null;
              slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null;
              containScroll: false | 'trimSnaps' | 'keepSnaps';
              direction: 'ltr' | 'rtl';
              slidesToScroll: 'auto' | number;
              dragFree: boolean;
              dragThreshold: number;
              inViewThreshold: number | number[];
              loop: boolean;
              skipSnaps: boolean;
              duration: number;
              startIndex: number;
              watchDrag: boolean | ((emblaApi: EmblaCarouselType, evt: PointerEventType) => boolean | void);
              watchResize: boolean | ((emblaApi: EmblaCarouselType, entries: ResizeObserverEntry[]) => boolean | void);
              watchSlides: boolean | ((emblaApi: EmblaCarouselType, mutations: MutationRecord[]) => boolean | void);
            }
          `}}}}},mt={args:{opts:{align:"start",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:"auto",dragFree:!0,dragThreshold:0,inViewThreshold:0,loop:!0,skipSnaps:!0,duration:3,startIndex:1,watchDrag:!0,watchResize:!1,watchSlides:!1}},render:t=>j.jsxs(ft,{...t,children:[j.jsxs(Yt,{children:[j.jsx(gt,{children:"Item 1"}),j.jsx(gt,{children:"Item 2"}),j.jsx(gt,{children:"Item 3"})]}),j.jsx(Zt,{}),j.jsx(Wt,{})]})};var qt,Gt,_t;mt.parameters={...mt.parameters,docs:{...(qt=mt.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    opts: {
      align: "start",
      axis: "x",
      container: null,
      slides: null,
      containScroll: "trimSnaps",
      direction: "ltr",
      slidesToScroll: "auto",
      dragFree: true,
      dragThreshold: 0,
      inViewThreshold: 0,
      loop: true,
      skipSnaps: true,
      duration: 3,
      startIndex: 1,
      watchDrag: true,
      watchResize: false,
      watchSlides: false
    }
  },
  render: args => <Carousel {...args}>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...(_t=(Gt=mt.parameters)==null?void 0:Gt.docs)==null?void 0:_t.source}}};const Ze=["Default"];export{mt as Default,Ze as __namedExportsOrder,Ye as default};