import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as o}from"./index-CleY8y_P.js";import{c as l}from"./index-DW48STyt.js";import{c as $}from"./index-DaMBuB3t.js";import{u as q}from"./index-WXvbiXxm.js";import{u as G}from"./index-1PiYJVay.js";import{c as M,A as J,C as K,a as Q,R as X}from"./index-GiP06gZx.js";import{P as Y}from"./index-BvbQAose.js";import{P as Z}from"./index-BflAudCn.js";import{D as ee}from"./index-DK4nl9q8.js";import{c as re}from"./utils-8RyR4BqC.js";import{A as te,a as oe,b as ae}from"./avatar-BiIxnAZW.js";import{B as ne}from"./button-C5Vfupqw.js";import{c as se}from"./createLucideIcon-kBjshEDv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BbYVhFH8.js";import"./index-Cytgc9eF.js";import"./index-DBNrNBDr.js";import"./index-CN2qxwlO.js";import"./index-Bb4qSo10.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=se("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);var T,S="HoverCard",[I,Me]=$(S,[M]),R=M(),[ie,j]=I(S),L=r=>{const{__scopeHoverCard:a,children:n,open:c,defaultOpen:s,onOpenChange:d,openDelay:u=700,closeDelay:v=300}=r,i=R(a),f=o.useRef(0),p=o.useRef(0),C=o.useRef(!1),m=o.useRef(!1),[x=!1,t]=q({prop:c,defaultProp:s,onChange:d}),g=o.useCallback(()=>{clearTimeout(p.current),f.current=window.setTimeout(()=>t(!0),u)},[u,t]),y=o.useCallback(()=>{clearTimeout(f.current),!C.current&&!m.current&&(p.current=window.setTimeout(()=>t(!1),v))},[v,t]),W=o.useCallback(()=>t(!1),[t]);return o.useEffect(()=>()=>{clearTimeout(f.current),clearTimeout(p.current)},[]),e.jsx(ie,{scope:a,open:x,onOpenChange:t,onOpen:g,onClose:y,onDismiss:W,hasSelectionRef:C,isPointerDownOnContentRef:m,children:e.jsx(X,{...i,children:n})})};L.displayName=S;var B="HoverCardTrigger",U=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,...c}=r,s=j(B,n),d=R(n);return e.jsx(J,{asChild:!0,...d,children:e.jsx(Z.a,{"data-state":s.open?"open":"closed",...c,ref:a,onPointerEnter:l(r.onPointerEnter,N(s.onOpen)),onPointerLeave:l(r.onPointerLeave,N(s.onClose)),onFocus:l(r.onFocus,s.onOpen),onBlur:l(r.onBlur,s.onClose),onTouchStart:l(r.onTouchStart,u=>u.preventDefault())})})});U.displayName=B;var de="HoverCardPortal",[Ie,le]=I(de,{forceMount:void 0}),w="HoverCardContent",V=o.forwardRef((r,a)=>{const n=le(w,r.__scopeHoverCard),{forceMount:c=n.forceMount,...s}=r,d=j(w,r.__scopeHoverCard);return e.jsx(Y,{present:c||d.open,children:e.jsx(pe,{"data-state":d.open?"open":"closed",...s,onPointerEnter:l(r.onPointerEnter,N(d.onOpen)),onPointerLeave:l(r.onPointerLeave,N(d.onClose)),ref:a})})});V.displayName=w;var pe=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:u,...v}=r,i=j(w,n),f=R(n),p=o.useRef(null),C=G(a,p),[m,x]=o.useState(!1);return o.useEffect(()=>{if(m){const t=document.body;return T=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect="none",t.style.webkitUserSelect="none",()=>{t.style.userSelect=T,t.style.webkitUserSelect=T}}},[m]),o.useEffect(()=>{if(p.current){const t=()=>{x(!1),i.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var y;((y=document.getSelection())==null?void 0:y.toString())!==""&&(i.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerup",t),i.hasSelectionRef.current=!1,i.isPointerDownOnContentRef.current=!1}}},[i.isPointerDownOnContentRef,i.hasSelectionRef]),o.useEffect(()=>{p.current&&ve(p.current).forEach(g=>g.setAttribute("tabindex","-1"))}),e.jsx(ee,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:u,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:l(d,t=>{t.preventDefault()}),onDismiss:i.onDismiss,children:e.jsx(K,{...f,...v,onPointerDown:l(v.onPointerDown,t=>{t.currentTarget.contains(t.target)&&x(!0),i.hasSelectionRef.current=!1,i.isPointerDownOnContentRef.current=!0}),ref:C,style:{...v.style,userSelect:m?"text":void 0,WebkitUserSelect:m?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),me="HoverCardArrow",ue=o.forwardRef((r,a)=>{const{__scopeHoverCard:n,...c}=r,s=R(n);return e.jsx(Q,{...s,...c,ref:a})});ue.displayName=me;function N(r){return a=>a.pointerType==="touch"?void 0:r()}function ve(r){const a=[],n=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:c=>c.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)a.push(n.currentNode);return a}var fe=L,he=U,z=V;const P=fe,H=he,h=o.forwardRef(({className:r,align:a="center",sideOffset:n=4,...c},s)=>e.jsx(z,{ref:s,align:a,sideOffset:n,className:re("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...c}));h.displayName=z.displayName;try{P.displayName="HoverCard",P.__docgenInfo={description:"",displayName:"HoverCard",props:{}}}catch{}try{H.displayName="HoverCardTrigger",H.__docgenInfo={description:"",displayName:"HoverCardTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="HoverCardContent",h.__docgenInfo={description:"",displayName:"HoverCardContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Le={title:"BlackBox/HoverCard",component:P,parameters:{layout:"centered"},argTypes:{children:{control:void 0,description:"ReactNode for the HoverCard children"}},tags:["autodocs"]},b={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(H,{children:"Hover"}),e.jsx(h,{children:"The React Framework – created and maintained by @vercel."})]})}},_={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(H,{asChild:!0,children:e.jsx(ne,{variant:"link",children:"@nextjs"})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(te,{children:[e.jsx(oe,{src:"https://github.com/vercel.png"}),e.jsx(ae,{children:"VC"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@nextjs"}),e.jsx("p",{className:"text-sm",children:"The React Framework – created and maintained by @vercel."}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx(ce,{className:"mr-2 h-4 w-4 opacity-70"})," ",e.jsx("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})]})]})]})})]})}};var E,k,D;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </>
  }
}`,...(D=(k=b.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var O,A,F;_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </>
  }
}`,...(F=(A=_.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Be=["Default","Example"];export{b as Default,_ as Example,Be as __namedExportsOrder,Le as default};