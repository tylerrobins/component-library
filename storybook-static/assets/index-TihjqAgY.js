import{r as o}from"./index-CleY8y_P.js";import{c as y}from"./index-CRjgN0eO.js";import{b,P as g,d as j}from"./index-BUwirNCq.js";import{u as w}from"./index-1PiYJVay.js";import{j as x}from"./jsx-runtime-CGpYA4L6.js";function z(r,e=globalThis==null?void 0:globalThis.document){const s=b(r);o.useEffect(()=>{const n=t=>{t.key==="Escape"&&s(t)};return e.addEventListener("keydown",n,{capture:!0}),()=>e.removeEventListener("keydown",n,{capture:!0})},[s,e])}var H="DismissableLayer",p="dismissableLayer.update",M="dismissableLayer.pointerDownOutside",K="dismissableLayer.focusOutside",O,B=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),T=o.forwardRef((r,e)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:n,onPointerDownOutside:t,onFocusOutside:a,onInteractOutside:l,onDismiss:d,...E}=r,c=o.useContext(B),[u,W]=o.useState(null),f=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,k]=o.useState({}),A=w(e,i=>W(i)),m=Array.from(c.layers),[N]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),I=m.indexOf(N),P=u?m.indexOf(u):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,D=P>=I,U=Y(i=>{const v=i.target,C=[...c.branches].some(h=>h.contains(v));!D||C||(t==null||t(i),l==null||l(i),i.defaultPrevented||d==null||d())},f),L=q(i=>{const v=i.target;[...c.branches].some(h=>h.contains(v))||(a==null||a(i),l==null||l(i),i.defaultPrevented||d==null||d())},f);return z(i=>{P===c.layers.size-1&&(n==null||n(i),!i.defaultPrevented&&d&&(i.preventDefault(),d()))},f),o.useEffect(()=>{if(u)return s&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(O=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),R(),()=>{s&&c.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=O)}},[u,f,s,c]),o.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),R())},[u,c]),o.useEffect(()=>{const i=()=>k({});return document.addEventListener(p,i),()=>document.removeEventListener(p,i)},[]),x.jsx(g.div,{...E,ref:A,style:{pointerEvents:_?D?"auto":"none":void 0,...r.style},onFocusCapture:y(r.onFocusCapture,L.onFocusCapture),onBlurCapture:y(r.onBlurCapture,L.onBlurCapture),onPointerDownCapture:y(r.onPointerDownCapture,U.onPointerDownCapture)})});T.displayName=H;var X="DismissableLayerBranch",S=o.forwardRef((r,e)=>{const s=o.useContext(B),n=o.useRef(null),t=w(e,n);return o.useEffect(()=>{const a=n.current;if(a)return s.branches.add(a),()=>{s.branches.delete(a)}},[s.branches]),x.jsx(g.div,{...r,ref:t})});S.displayName=X;function Y(r,e=globalThis==null?void 0:globalThis.document){const s=b(r),n=o.useRef(!1),t=o.useRef(()=>{});return o.useEffect(()=>{const a=d=>{if(d.target&&!n.current){let E=function(){F(M,s,c,{discrete:!0})};const c={originalEvent:d};d.pointerType==="touch"?(e.removeEventListener("click",t.current),t.current=E,e.addEventListener("click",t.current,{once:!0})):E()}else e.removeEventListener("click",t.current);n.current=!1},l=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(l),e.removeEventListener("pointerdown",a),e.removeEventListener("click",t.current)}},[e,s]),{onPointerDownCapture:()=>n.current=!0}}function q(r,e=globalThis==null?void 0:globalThis.document){const s=b(r),n=o.useRef(!1);return o.useEffect(()=>{const t=a=>{a.target&&!n.current&&F(K,s,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",t),()=>e.removeEventListener("focusin",t)},[e,s]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function R(){const r=new CustomEvent(p);document.dispatchEvent(r)}function F(r,e,s,{discrete:n}){const t=s.originalEvent.target,a=new CustomEvent(r,{bubbles:!1,cancelable:!0,detail:s});e&&t.addEventListener(r,e,{once:!0}),n?j(t,a):t.dispatchEvent(a)}var $=T,ee=S;export{ee as B,T as D,$ as R};
