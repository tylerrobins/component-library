import{r as a}from"./index-CleY8y_P.js";import{r as g}from"./index-C2jgcCTd.js";import{u as O}from"./index-1PiYJVay.js";import{u as l}from"./index-BUwirNCq.js";function E(e,n){return a.useReducer((o,r)=>n[o][r]??o,e)}var M=e=>{const{present:n,children:o}=e,r=P(n),i=typeof o=="function"?o({present:r.isPresent}):a.Children.only(o),u=O(r.ref,R(i));return typeof o=="function"||r.isPresent?a.cloneElement(i,{ref:u}):null};M.displayName="Presence";function P(e){const[n,o]=a.useState(),r=a.useRef({}),i=a.useRef(e),u=a.useRef("none"),p=e?"mounted":"unmounted",[N,s]=E(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const t=d(r.current);u.current=N==="mounted"?t:"none"},[N]),l(()=>{const t=r.current,c=i.current;if(c!==e){const A=u.current,f=d(t);e?s("MOUNT"):f==="none"||(t==null?void 0:t.display)==="none"?s("UNMOUNT"):s(c&&A!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,s]),l(()=>{if(n){const t=m=>{const f=d(r.current).includes(m.animationName);m.target===n&&f&&g.flushSync(()=>s("ANIMATION_END"))},c=m=>{m.target===n&&(u.current=d(r.current))};return n.addEventListener("animationstart",c),n.addEventListener("animationcancel",t),n.addEventListener("animationend",t),()=>{n.removeEventListener("animationstart",c),n.removeEventListener("animationcancel",t),n.removeEventListener("animationend",t)}}else s("ANIMATION_END")},[n,s]),{isPresent:["mounted","unmountSuspended"].includes(N),ref:a.useCallback(t=>{t&&(r.current=getComputedStyle(t)),o(t)},[])}}function d(e){return(e==null?void 0:e.animationName)||"none"}function R(e){var r,i;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}export{M as P};
