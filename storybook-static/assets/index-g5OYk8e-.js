import{r as i}from"./index-CleY8y_P.js";import{c as p}from"./index-DW48STyt.js";import{u as C,S as B}from"./index-1PiYJVay.js";import{c as H,a as V}from"./index-DaMBuB3t.js";import{u as x}from"./index-D0F8yUy8.js";import{u as q}from"./index-WXvbiXxm.js";import{D as z}from"./index-DK4nl9q8.js";import{R as K,h as U,u as Y,F as Z}from"./index-B41ILiX7.js";import{P as J}from"./index-DirRZWZs.js";import{P as R}from"./index-BvbQAose.js";import{P as m}from"./index-BflAudCn.js";import{j as s}from"./jsx-runtime-CGpYA4L6.js";var _="Dialog",[M,Q]=H(_),[X,u]=M(_),h=e=>{const{__scopeDialog:o,children:r,open:a,defaultOpen:n,onOpenChange:t,modal:c=!0}=e,l=i.useRef(null),d=i.useRef(null),[g=!1,v]=q({prop:a,defaultProp:n,onChange:t});return s.jsx(X,{scope:o,triggerRef:l,contentRef:d,contentId:x(),titleId:x(),descriptionId:x(),open:g,onOpenChange:v,onOpenToggle:i.useCallback(()=>v($=>!$),[v]),modal:c,children:r})};h.displayName=_;var F="DialogTrigger",E=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(F,r),t=C(o,n.triggerRef);return s.jsx(m.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":A(n.open),...a,ref:t,onClick:p(e.onClick,n.onOpenToggle)})});E.displayName=F;var P="DialogPortal",[ee,S]=M(P,{forceMount:void 0}),y=e=>{const{__scopeDialog:o,forceMount:r,children:a,container:n}=e,t=u(P,o);return s.jsx(ee,{scope:o,forceMount:r,children:i.Children.map(a,c=>s.jsx(R,{present:r||t.open,children:s.jsx(J,{asChild:!0,container:n,children:c})}))})};y.displayName=P;var D="DialogOverlay",O=i.forwardRef((e,o)=>{const r=S(D,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(D,e.__scopeDialog);return t.modal?s.jsx(R,{present:a||t.open,children:s.jsx(te,{...n,ref:o})}):null});O.displayName=D;var te=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(D,r);return s.jsx(K,{as:B,allowPinchZoom:!0,shards:[n.contentRef],children:s.jsx(m.div,{"data-state":A(n.open),...a,ref:o,style:{pointerEvents:"auto",...a.style}})})}),f="DialogContent",N=i.forwardRef((e,o)=>{const r=S(f,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(f,e.__scopeDialog);return s.jsx(R,{present:a||t.open,children:t.modal?s.jsx(oe,{...n,ref:o}):s.jsx(ne,{...n,ref:o})})});N.displayName=f;var oe=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(null),n=C(o,r.contentRef,a);return i.useEffect(()=>{const t=a.current;if(t)return U(t)},[]),s.jsx(w,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,t=>{var c;t.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,t=>{const c=t.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&t.preventDefault()}),onFocusOutside:p(e.onFocusOutside,t=>t.preventDefault())})}),ne=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(!1),n=i.useRef(!1);return s.jsx(w,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,t),t.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),t.preventDefault()),a.current=!1,n.current=!1},onInteractOutside:t=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,t),t.defaultPrevented||(a.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const c=t.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}})}),w=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:t,...c}=e,l=u(f,r),d=i.useRef(null),g=C(o,d);return Y(),s.jsxs(s.Fragment,{children:[s.jsx(Z,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:t,children:s.jsx(z,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":A(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ae,{titleId:l.titleId}),s.jsx(ie,{contentRef:d,descriptionId:l.descriptionId})]})]})}),I="DialogTitle",b=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(I,r);return s.jsx(m.h2,{id:n.titleId,...a,ref:o})});b.displayName=I;var W="DialogDescription",j=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(W,r);return s.jsx(m.p,{id:n.descriptionId,...a,ref:o})});j.displayName=W;var k="DialogClose",T=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(k,r);return s.jsx(m.button,{type:"button",...a,ref:o,onClick:p(e.onClick,()=>n.onOpenChange(!1))})});T.displayName=k;function A(e){return e?"open":"closed"}var G="DialogTitleWarning",[re,L]=V(G,{contentName:f,titleName:I,docsSlug:"dialog"}),ae=({titleId:e})=>{const o=L(G),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},se="DialogDescriptionWarning",ie=({contentRef:e,descriptionId:o})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${L(se).contentName}}.`;return i.useEffect(()=>{var t;const n=(t=e.current)==null?void 0:t.getAttribute("aria-describedby");o&&n&&(document.getElementById(o)||console.warn(a))},[a,e,o]),null},ce=h,le=E,ue=y,de=O,fe=N,ge=b,pe=j,me=T;const Ie=Object.freeze(Object.defineProperty({__proto__:null,Close:me,Content:fe,Description:pe,Dialog:h,DialogClose:T,DialogContent:N,DialogDescription:j,DialogOverlay:O,DialogPortal:y,DialogTitle:b,DialogTrigger:E,Overlay:de,Portal:ue,Root:ce,Title:ge,Trigger:le,WarningProvider:re,createDialogScope:Q},Symbol.toStringTag,{value:"Module"}));export{fe as C,pe as D,de as O,ue as P,ce as R,ge as T,re as W,me as a,le as b,Q as c,Ie as d};