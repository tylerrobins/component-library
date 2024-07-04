import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as s}from"./index-CleY8y_P.js";import{c as Ge}from"./index-DSu0jbuC.js";import{u as Ve}from"./index-BBUPqgzG.js";import{u as ne,c as v}from"./index-CRjgN0eO.js";import{u as De}from"./index-1PiYJVay.js";import{c as Le,P as te}from"./index-BUwirNCq.js";import{u as V}from"./index-DF5SYaCP.js";import{c as Be,k as oe,l as $e,m as qe,A as Ke,C as Ue,G as ze,L as We,I as He,a as Ze,R as Xe,b as Ye,d as Je,S as Qe,e as er,f as rr,g as ar,h as nr,P as tr,i as or,j as sr}from"./index-Zot6UBXR.js";import{c as I}from"./utils-8RyR4BqC.js";import{C as ur}from"./chevron-right-LrJNRl_k.js";import{C as ir}from"./check-D2cwZkjZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./createLucideIcon-kBjshEDv.js";import"./index-TihjqAgY.js";import"./index-AUzbzXwX.js";import"./index-BCbxt7xm.js";import"./index-DOFQCb2T.js";import"./index-BRjJqqTI.js";import"./index-FvTp1rED.js";var F="Menubar",[D,dr,cr]=Ge(F),[se,ea]=Le(F,[cr,oe]),p=Be(),ue=oe(),[lr,K]=se(F),ie=s.forwardRef((r,n)=>{const{__scopeMenubar:a,value:t,onValueChange:o,defaultValue:f,loop:b=!0,dir:c,...i}=r,h=Ve(c),d=ue(a),[g="",m]=ne({prop:t,onChange:o,defaultProp:f}),[_,l]=s.useState(null);return e.jsx(lr,{scope:a,value:g,onMenuOpen:s.useCallback(x=>{m(x),l(x)},[m]),onMenuClose:s.useCallback(()=>m(""),[m]),onMenuToggle:s.useCallback(x=>{m(z=>z?"":x),l(x)},[m]),dir:h,loop:b,children:e.jsx(D.Provider,{scope:a,children:e.jsx(D.Slot,{scope:a,children:e.jsx($e,{asChild:!0,...d,orientation:"horizontal",loop:b,dir:h,currentTabStopId:_,onCurrentTabStopIdChange:l,children:e.jsx(te.div,{role:"menubar",...i,ref:n})})})})})});ie.displayName=F;var U="MenubarMenu",[pr,de]=se(U),ce=r=>{const{__scopeMenubar:n,value:a,...t}=r,o=V(),f=a||o||"LEGACY_REACT_AUTO_VALUE",b=K(U,n),c=p(n),i=s.useRef(null),h=s.useRef(!1),d=b.value===f;return s.useEffect(()=>{d||(h.current=!1)},[d]),e.jsx(pr,{scope:n,value:f,triggerId:V(),triggerRef:i,contentId:V(),wasKeyboardTriggerOpenRef:h,children:e.jsx(nr,{...c,open:d,onOpenChange:g=>{g||b.onMenuClose()},modal:!1,dir:b.dir,...t})})};ce.displayName=U;var L="MenubarTrigger",le=s.forwardRef((r,n)=>{const{__scopeMenubar:a,disabled:t=!1,...o}=r,f=ue(a),b=p(a),c=K(L,a),i=de(L,a),h=s.useRef(null),d=De(n,h,i.triggerRef),[g,m]=s.useState(!1),_=c.value===i.value;return e.jsx(D.ItemSlot,{scope:a,value:i.value,disabled:t,children:e.jsx(qe,{asChild:!0,...f,focusable:!t,tabStopId:i.value,children:e.jsx(Ke,{asChild:!0,...b,children:e.jsx(te.button,{type:"button",role:"menuitem",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":_,"aria-controls":_?i.contentId:void 0,"data-highlighted":g?"":void 0,"data-state":_?"open":"closed","data-disabled":t?"":void 0,disabled:t,...o,ref:d,onPointerDown:v(r.onPointerDown,l=>{!t&&l.button===0&&l.ctrlKey===!1&&(c.onMenuOpen(i.value),_||l.preventDefault())}),onPointerEnter:v(r.onPointerEnter,()=>{var x;!!c.value&&!_&&(c.onMenuOpen(i.value),(x=h.current)==null||x.focus())}),onKeyDown:v(r.onKeyDown,l=>{t||(["Enter"," "].includes(l.key)&&c.onMenuToggle(i.value),l.key==="ArrowDown"&&c.onMenuOpen(i.value),["Enter"," ","ArrowDown"].includes(l.key)&&(i.wasKeyboardTriggerOpenRef.current=!0,l.preventDefault()))}),onFocus:v(r.onFocus,()=>m(!0)),onBlur:v(r.onBlur,()=>m(!1))})})})})});le.displayName=L;var br="MenubarPortal",pe=r=>{const{__scopeMenubar:n,...a}=r,t=p(n);return e.jsx(tr,{...t,...a})};pe.displayName=br;var B="MenubarContent",be=s.forwardRef((r,n)=>{const{__scopeMenubar:a,align:t="start",...o}=r,f=p(a),b=K(B,a),c=de(B,a),i=dr(a),h=s.useRef(!1);return e.jsx(Ue,{id:c.contentId,"aria-labelledby":c.triggerId,"data-radix-menubar-content":"",...f,...o,ref:n,align:t,onCloseAutoFocus:v(r.onCloseAutoFocus,d=>{var m;!!!b.value&&!h.current&&((m=c.triggerRef.current)==null||m.focus()),h.current=!1,d.preventDefault()}),onFocusOutside:v(r.onFocusOutside,d=>{const g=d.target;i().some(_=>{var l;return(l=_.ref.current)==null?void 0:l.contains(g)})&&d.preventDefault()}),onInteractOutside:v(r.onInteractOutside,()=>{h.current=!0}),onEntryFocus:d=>{c.wasKeyboardTriggerOpenRef.current||d.preventDefault()},onKeyDown:v(r.onKeyDown,d=>{if(["ArrowRight","ArrowLeft"].includes(d.key)){const g=d.target,m=g.hasAttribute("data-radix-menubar-subtrigger"),_=g.closest("[data-radix-menubar-content]")!==d.currentTarget,x=(b.dir==="rtl"?"ArrowRight":"ArrowLeft")===d.key;if(!x&&m||_&&x)return;let j=i().filter(G=>!G.disabled).map(G=>G.value);x&&j.reverse();const W=j.indexOf(c.value);j=b.loop?Cr(j,W+1):j.slice(W+1);const[H]=j;H&&b.onMenuOpen(H)}},{checkForDefaultPrevented:!1}),style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});be.displayName=B;var mr="MenubarGroup",me=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(ze,{...o,...t,ref:n})});me.displayName=mr;var Mr="MenubarLabel",Me=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(We,{...o,...t,ref:n})});Me.displayName=Mr;var fr="MenubarItem",fe=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(He,{...o,...t,ref:n})});fe.displayName=fr;var hr="MenubarCheckboxItem",he=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(Ze,{...o,...t,ref:n})});he.displayName=hr;var xr="MenubarRadioGroup",xe=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(Xe,{...o,...t,ref:n})});xe.displayName=xr;var gr="MenubarRadioItem",ge=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(Ye,{...o,...t,ref:n})});ge.displayName=gr;var _r="MenubarItemIndicator",_e=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(Je,{...o,...t,ref:n})});_e.displayName=_r;var yr="MenubarSeparator",ye=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(Qe,{...o,...t,ref:n})});ye.displayName=yr;var Ir="MenubarArrow",vr=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(er,{...o,...t,ref:n})});vr.displayName=Ir;var Sr="MenubarSub",Ie=r=>{const{__scopeMenubar:n,children:a,open:t,onOpenChange:o,defaultOpen:f}=r,b=p(n),[c=!1,i]=ne({prop:t,defaultProp:f,onChange:o});return e.jsx(or,{...b,open:c,onOpenChange:i,children:a})};Ie.displayName=Sr;var Nr="MenubarSubTrigger",ve=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(rr,{"data-radix-menubar-subtrigger":"",...o,...t,ref:n})});ve.displayName=Nr;var jr="MenubarSubContent",Se=s.forwardRef((r,n)=>{const{__scopeMenubar:a,...t}=r,o=p(a);return e.jsx(ar,{...o,"data-radix-menubar-content":"",...t,ref:n,style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});Se.displayName=jr;function Cr(r,n){return r.map((a,t)=>r[(n+t)%r.length])}var Ne=ie,Rr=ce,je=le,Ce=pe,Re=be,wr=me,we=Me,Te=fe,Pe=he,Tr=xe,Ae=ge,Ee=_e,Oe=ye,Pr=Ie,ke=ve,Fe=Se;const R=Rr,Z=wr,X=Ce,O=Pr,$=Tr,k=s.forwardRef(({className:r,...n},a)=>e.jsx(Ne,{ref:a,className:I("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",r),...n}));k.displayName=Ne.displayName;const S=s.forwardRef(({className:r,...n},a)=>e.jsx(je,{ref:a,className:I("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",r),...n}));S.displayName=je.displayName;const w=s.forwardRef(({className:r,inset:n,children:a,...t},o)=>e.jsxs(ke,{ref:o,className:I("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",n&&"pl-8",r),...t,children:[a,e.jsx(ur,{className:"ml-auto h-4 w-4"})]}));w.displayName=ke.displayName;const T=s.forwardRef(({className:r,...n},a)=>e.jsx(Fe,{ref:a,className:I("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n}));T.displayName=Fe.displayName;const N=s.forwardRef(({className:r,align:n="start",alignOffset:a=-4,sideOffset:t=8,...o},f)=>e.jsx(Ce,{children:e.jsx(Re,{ref:f,align:n,alignOffset:a,sideOffset:t,className:I("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})}));N.displayName=Re.displayName;const u=s.forwardRef(({className:r,inset:n,...a},t)=>e.jsx(Te,{ref:t,className:I("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",r),...a}));u.displayName=Te.displayName;const P=s.forwardRef(({className:r,children:n,checked:a,...t},o)=>e.jsxs(Pe,{ref:o,className:I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:a,...t,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Ee,{children:e.jsx(ir,{className:"h-4 w-4"})})}),n]}));P.displayName=Pe.displayName;const C=s.forwardRef(({className:r,children:n,...a},t)=>e.jsxs(Ae,{ref:t,className:I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...a,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Ee,{children:e.jsx(sr,{className:"h-2 w-2 fill-current"})})}),n]}));C.displayName=Ae.displayName;const q=s.forwardRef(({className:r,inset:n,...a},t)=>e.jsx(we,{ref:t,className:I("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",r),...a}));q.displayName=we.displayName;const M=s.forwardRef(({className:r,...n},a)=>e.jsx(Oe,{ref:a,className:I("-mx-1 my-1 h-px bg-muted",r),...n}));M.displayName=Oe.displayName;const y=({className:r,...n})=>e.jsx("span",{className:I("ml-auto text-xs tracking-widest text-muted-foreground",r),...n});y.displayname="MenubarShortcut";try{k.displayName="Menubar",k.__docgenInfo={description:"",displayName:"Menubar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="MenubarTrigger",S.__docgenInfo={description:"",displayName:"MenubarTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="MenubarContent",N.__docgenInfo={description:"",displayName:"MenubarContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="MenubarItem",u.__docgenInfo={description:"",displayName:"MenubarItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{M.displayName="MenubarSeparator",M.__docgenInfo={description:"",displayName:"MenubarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="MenubarLabel",q.__docgenInfo={description:"",displayName:"MenubarLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="MenubarCheckboxItem",P.__docgenInfo={description:"",displayName:"MenubarCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{$.displayName="MenubarRadioGroup",$.__docgenInfo={description:"",displayName:"MenubarRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="MenubarRadioItem",C.__docgenInfo={description:"",displayName:"MenubarRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{X.displayName="MenubarPortal",X.__docgenInfo={description:"",displayName:"MenubarPortal",props:{}}}catch{}try{T.displayName="MenubarSubContent",T.__docgenInfo={description:"",displayName:"MenubarSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="MenubarSubTrigger",w.__docgenInfo={description:"",displayName:"MenubarSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{Z.displayName="MenubarGroup",Z.__docgenInfo={description:"",displayName:"MenubarGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{O.displayName="MenubarSub",O.__docgenInfo={description:"",displayName:"MenubarSub",props:{}}}catch{}try{y.displayName="MenubarShortcut",y.__docgenInfo={description:"",displayName:"MenubarShortcut",props:{}}}catch{}const ra={title:"BlackBox/Menubar",component:k,parameters:{layout:"centered"},argTypes:{children:{control:void 0,description:"Child React elements"}}},A={args:{children:e.jsxs(R,{children:[e.jsx(S,{children:"File"}),e.jsxs(N,{children:[e.jsxs(u,{children:["New Tab ",e.jsx(y,{children:"⌘T"})]}),e.jsx(u,{children:"New Window"}),e.jsx(M,{}),e.jsx(u,{children:"Share"}),e.jsx(M,{}),e.jsx(u,{children:"Print"})]})]})}},E={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx(S,{children:"File"}),e.jsxs(N,{children:[e.jsxs(u,{children:["New Tab ",e.jsx(y,{children:"⌘T"})]}),e.jsxs(u,{children:["New Window ",e.jsx(y,{children:"⌘N"})]}),e.jsx(u,{disabled:!0,children:"New Incognito Window"}),e.jsx(M,{}),e.jsxs(O,{children:[e.jsx(w,{children:"Share"}),e.jsxs(T,{children:[e.jsx(u,{children:"Email link"}),e.jsx(u,{children:"Messages"}),e.jsx(u,{children:"Notes"})]})]}),e.jsx(M,{}),e.jsxs(u,{children:["Print... ",e.jsx(y,{children:"⌘P"})]})]})]}),e.jsxs(R,{children:[e.jsx(S,{children:"Edit"}),e.jsxs(N,{children:[e.jsxs(u,{children:["Undo ",e.jsx(y,{children:"⌘Z"})]}),e.jsxs(u,{children:["Redo ",e.jsx(y,{children:"⇧⌘Z"})]}),e.jsx(M,{}),e.jsxs(O,{children:[e.jsx(w,{children:"Find"}),e.jsxs(T,{children:[e.jsx(u,{children:"Search the web"}),e.jsx(M,{}),e.jsx(u,{children:"Find..."}),e.jsx(u,{children:"Find Next"}),e.jsx(u,{children:"Find Previous"})]})]}),e.jsx(M,{}),e.jsx(u,{children:"Cut"}),e.jsx(u,{children:"Copy"}),e.jsx(u,{children:"Paste"})]})]}),e.jsxs(R,{children:[e.jsx(S,{children:"View"}),e.jsxs(N,{children:[e.jsx(P,{children:"Always Show Bookmarks Bar"}),e.jsx(P,{checked:!0,children:"Always Show Full URLs"}),e.jsx(M,{}),e.jsxs(u,{inset:!0,children:["Reload ",e.jsx(y,{children:"⌘R"})]}),e.jsxs(u,{disabled:!0,inset:!0,children:["Force Reload ",e.jsx(y,{children:"⇧⌘R"})]}),e.jsx(M,{}),e.jsx(u,{inset:!0,children:"Toggle Fullscreen"}),e.jsx(M,{}),e.jsx(u,{inset:!0,children:"Hide Sidebar"})]})]}),e.jsxs(R,{children:[e.jsx(S,{children:"Profiles"}),e.jsxs(N,{children:[e.jsxs($,{value:"benoit",children:[e.jsx(C,{value:"andy",children:"Andy"}),e.jsx(C,{value:"benoit",children:"Benoit"}),e.jsx(C,{value:"Luis",children:"Luis"})]}),e.jsx(M,{}),e.jsx(u,{inset:!0,children:"Edit..."}),e.jsx(M,{}),e.jsx(u,{inset:!0,children:"Add Profile..."})]})]})]})}};var Y,J,Q;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
  }
}`,...(Q=(J=A.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,re,ae;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </>
  }
}`,...(ae=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const aa=["Default","MultipleOptions"];export{A as Default,E as MultipleOptions,aa as __namedExportsOrder,ra as default};
