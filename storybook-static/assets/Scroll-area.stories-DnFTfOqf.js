import{j as a}from"./jsx-runtime-CGpYA4L6.js";import{r as s}from"./index-CleY8y_P.js";import{P as N}from"./index-BflAudCn.js";import{P as X}from"./index-BvbQAose.js";import{c as xe}from"./index-DaMBuB3t.js";import{u as A}from"./index-1PiYJVay.js";import{u as y}from"./index-BbYVhFH8.js";import{u as ye}from"./index-BBUPqgzG.js";import{u as Pe}from"./index-DBNrNBDr.js";import{c as Ce}from"./index-BdQq_4o_.js";import{c as P}from"./index-DW48STyt.js";import{c as ae}from"./utils-8RyR4BqC.js";import{S as Ee}from"./separator-CZv6Lb76.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cytgc9eF.js";function Ae(e,o){return s.useReducer((r,n)=>o[r][n]??r,e)}var q="ScrollArea",[ce,nr]=xe(q),[Re,v]=ce(q),ie=s.forwardRef((e,o)=>{const{__scopeScrollArea:r,type:n="hover",dir:t,scrollHideDelay:l=600,...c}=e,[i,d]=s.useState(null),[f,u]=s.useState(null),[m,h]=s.useState(null),[p,S]=s.useState(null),[R,U]=s.useState(null),[x,j]=s.useState(0),[F,L]=s.useState(0),[D,T]=s.useState(!1),[k,z]=s.useState(!1),b=A(o,C=>d(C)),g=ye(t);return a.jsx(Re,{scope:r,type:n,dir:g,scrollHideDelay:l,scrollArea:i,viewport:f,onViewportChange:u,content:m,onContentChange:h,scrollbarX:p,onScrollbarXChange:S,scrollbarXEnabled:D,onScrollbarXEnabledChange:T,scrollbarY:R,onScrollbarYChange:U,scrollbarYEnabled:k,onScrollbarYEnabledChange:z,onCornerWidthChange:j,onCornerHeightChange:L,children:a.jsx(N.div,{dir:g,...c,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":F+"px",...e.style}})})});ie.displayName=q;var de="ScrollAreaViewport",ue=s.forwardRef((e,o)=>{const{__scopeScrollArea:r,children:n,nonce:t,...l}=e,c=v(de,r),i=s.useRef(null),d=A(o,i,c.onViewportChange);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:t}),a.jsx(N.div,{"data-radix-scroll-area-viewport":"",...l,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:a.jsx("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});ue.displayName=de;var w="ScrollAreaScrollbar",J=s.forwardRef((e,o)=>{const{forceMount:r,...n}=e,t=v(w,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:c}=t,i=e.orientation==="horizontal";return s.useEffect(()=>(i?l(!0):c(!0),()=>{i?l(!1):c(!1)}),[i,l,c]),t.type==="hover"?a.jsx(Te,{...n,ref:o,forceMount:r}):t.type==="scroll"?a.jsx(_e,{...n,ref:o,forceMount:r}):t.type==="auto"?a.jsx(he,{...n,ref:o,forceMount:r}):t.type==="always"?a.jsx($,{...n,ref:o}):null});J.displayName=w;var Te=s.forwardRef((e,o)=>{const{forceMount:r,...n}=e,t=v(w,e.__scopeScrollArea),[l,c]=s.useState(!1);return s.useEffect(()=>{const i=t.scrollArea;let d=0;if(i){const f=()=>{window.clearTimeout(d),c(!0)},u=()=>{d=window.setTimeout(()=>c(!1),t.scrollHideDelay)};return i.addEventListener("pointerenter",f),i.addEventListener("pointerleave",u),()=>{window.clearTimeout(d),i.removeEventListener("pointerenter",f),i.removeEventListener("pointerleave",u)}}},[t.scrollArea,t.scrollHideDelay]),a.jsx(X,{present:r||l,children:a.jsx(he,{"data-state":l?"visible":"hidden",...n,ref:o})})}),_e=s.forwardRef((e,o)=>{const{forceMount:r,...n}=e,t=v(w,e.__scopeScrollArea),l=e.orientation==="horizontal",c=V(()=>d("SCROLL_END"),100),[i,d]=Ae("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return s.useEffect(()=>{if(i==="idle"){const f=window.setTimeout(()=>d("HIDE"),t.scrollHideDelay);return()=>window.clearTimeout(f)}},[i,t.scrollHideDelay,d]),s.useEffect(()=>{const f=t.viewport,u=l?"scrollLeft":"scrollTop";if(f){let m=f[u];const h=()=>{const p=f[u];m!==p&&(d("SCROLL"),c()),m=p};return f.addEventListener("scroll",h),()=>f.removeEventListener("scroll",h)}},[t.viewport,l,d,c]),a.jsx(X,{present:r||i!=="hidden",children:a.jsx($,{"data-state":i==="hidden"?"hidden":"visible",...n,ref:o,onPointerEnter:P(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:P(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),he=s.forwardRef((e,o)=>{const r=v(w,e.__scopeScrollArea),{forceMount:n,...t}=e,[l,c]=s.useState(!1),i=e.orientation==="horizontal",d=V(()=>{if(r.viewport){const f=r.viewport.offsetWidth<r.viewport.scrollWidth,u=r.viewport.offsetHeight<r.viewport.scrollHeight;c(i?f:u)}},10);return E(r.viewport,d),E(r.content,d),a.jsx(X,{present:n||l,children:a.jsx($,{"data-state":l?"visible":"hidden",...t,ref:o})})}),$=s.forwardRef((e,o)=>{const{orientation:r="vertical",...n}=e,t=v(w,e.__scopeScrollArea),l=s.useRef(null),c=s.useRef(0),[i,d]=s.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),f=Se(i.viewport,i.content),u={...n,sizes:i,onSizesChange:d,hasThumb:f>0&&f<1,onThumbChange:h=>l.current=h,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:h=>c.current=h};function m(h,p){return ze(h,c.current,i,p)}return r==="horizontal"?a.jsx(Ne,{...u,ref:o,onThumbPositionChange:()=>{if(t.viewport&&l.current){const h=t.viewport.scrollLeft,p=K(h,i,t.dir);l.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:h=>{t.viewport&&(t.viewport.scrollLeft=h)},onDragScroll:h=>{t.viewport&&(t.viewport.scrollLeft=m(h,t.dir))}}):r==="vertical"?a.jsx(je,{...u,ref:o,onThumbPositionChange:()=>{if(t.viewport&&l.current){const h=t.viewport.scrollTop,p=K(h,i);l.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:h=>{t.viewport&&(t.viewport.scrollTop=h)},onDragScroll:h=>{t.viewport&&(t.viewport.scrollTop=m(h))}}):null}),Ne=s.forwardRef((e,o)=>{const{sizes:r,onSizesChange:n,...t}=e,l=v(w,e.__scopeScrollArea),[c,i]=s.useState(),d=s.useRef(null),f=A(o,d,l.onScrollbarXChange);return s.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),a.jsx(me,{"data-orientation":"horizontal",...t,ref:f,sizes:r,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,m)=>{if(l.viewport){const h=l.viewport.scrollLeft+u.deltaX;e.onWheelScroll(h),ge(h,m)&&u.preventDefault()}},onResize:()=>{d.current&&l.viewport&&c&&n({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:B(c.paddingLeft),paddingEnd:B(c.paddingRight)}})}})}),je=s.forwardRef((e,o)=>{const{sizes:r,onSizesChange:n,...t}=e,l=v(w,e.__scopeScrollArea),[c,i]=s.useState(),d=s.useRef(null),f=A(o,d,l.onScrollbarYChange);return s.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),a.jsx(me,{"data-orientation":"vertical",...t,ref:f,sizes:r,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,m)=>{if(l.viewport){const h=l.viewport.scrollTop+u.deltaY;e.onWheelScroll(h),ge(h,m)&&u.preventDefault()}},onResize:()=>{d.current&&l.viewport&&c&&n({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:B(c.paddingTop),paddingEnd:B(c.paddingBottom)}})}})}),[Le,fe]=ce(w),me=s.forwardRef((e,o)=>{const{__scopeScrollArea:r,sizes:n,hasThumb:t,onThumbChange:l,onThumbPointerUp:c,onThumbPointerDown:i,onThumbPositionChange:d,onDragScroll:f,onWheelScroll:u,onResize:m,...h}=e,p=v(w,r),[S,R]=s.useState(null),U=A(o,b=>R(b)),x=s.useRef(null),j=s.useRef(""),F=p.viewport,L=n.content-n.viewport,D=y(u),T=y(d),k=V(m,10);function z(b){if(x.current){const g=b.clientX-x.current.left,C=b.clientY-x.current.top;f({x:g,y:C})}}return s.useEffect(()=>{const b=g=>{const C=g.target;(S==null?void 0:S.contains(C))&&D(g,L)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[F,S,L,D]),s.useEffect(T,[n,T]),E(S,k),E(p.content,k),a.jsx(Le,{scope:r,scrollbar:S,hasThumb:t,onThumbChange:y(l),onThumbPointerUp:y(c),onThumbPositionChange:T,onThumbPointerDown:y(i),children:a.jsx(N.div,{...h,ref:U,style:{position:"absolute",...h.style},onPointerDown:P(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),x.current=S.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),z(b))}),onPointerMove:P(e.onPointerMove,z),onPointerUp:P(e.onPointerUp,b=>{const g=b.target;g.hasPointerCapture(b.pointerId)&&g.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=j.current,p.viewport&&(p.viewport.style.scrollBehavior=""),x.current=null})})})}),I="ScrollAreaThumb",pe=s.forwardRef((e,o)=>{const{forceMount:r,...n}=e,t=fe(I,e.__scopeScrollArea);return a.jsx(X,{present:r||t.hasThumb,children:a.jsx(De,{ref:o,...n})})}),De=s.forwardRef((e,o)=>{const{__scopeScrollArea:r,style:n,...t}=e,l=v(I,r),c=fe(I,r),{onThumbPositionChange:i}=c,d=A(o,m=>c.onThumbChange(m)),f=s.useRef(),u=V(()=>{f.current&&(f.current(),f.current=void 0)},100);return s.useEffect(()=>{const m=l.viewport;if(m){const h=()=>{if(u(),!f.current){const p=He(m,i);f.current=p,i()}};return i(),m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)}},[l.viewport,u,i]),a.jsx(N.div,{"data-state":c.hasThumb?"visible":"hidden",...t,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:P(e.onPointerDownCapture,m=>{const p=m.target.getBoundingClientRect(),S=m.clientX-p.left,R=m.clientY-p.top;c.onThumbPointerDown({x:S,y:R})}),onPointerUp:P(e.onPointerUp,c.onThumbPointerUp)})});pe.displayName=I;var G="ScrollAreaCorner",be=s.forwardRef((e,o)=>{const r=v(G,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&n?a.jsx(ke,{...e,ref:o}):null});be.displayName=G;var ke=s.forwardRef((e,o)=>{const{__scopeScrollArea:r,...n}=e,t=v(G,r),[l,c]=s.useState(0),[i,d]=s.useState(0),f=!!(l&&i);return E(t.scrollbarX,()=>{var m;const u=((m=t.scrollbarX)==null?void 0:m.offsetHeight)||0;t.onCornerHeightChange(u),d(u)}),E(t.scrollbarY,()=>{var m;const u=((m=t.scrollbarY)==null?void 0:m.offsetWidth)||0;t.onCornerWidthChange(u),c(u)}),f?a.jsx(N.div,{...n,ref:o,style:{width:l,height:i,position:"absolute",right:t.dir==="ltr"?0:void 0,left:t.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function B(e){return e?parseInt(e,10):0}function Se(e,o){const r=e/o;return isNaN(r)?0:r}function Y(e){const o=Se(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*o;return Math.max(n,18)}function ze(e,o,r,n="ltr"){const t=Y(r),l=t/2,c=o||l,i=t-c,d=r.scrollbar.paddingStart+c,f=r.scrollbar.size-r.scrollbar.paddingEnd-i,u=r.content-r.viewport,m=n==="ltr"?[0,u]:[u*-1,0];return ve([d,f],m)(e)}function K(e,o,r="ltr"){const n=Y(o),t=o.scrollbar.paddingStart+o.scrollbar.paddingEnd,l=o.scrollbar.size-t,c=o.content-o.viewport,i=l-n,d=r==="ltr"?[0,c]:[c*-1,0],f=Ce(e,d);return ve([0,c],[0,i])(f)}function ve(e,o){return r=>{if(e[0]===e[1]||o[0]===o[1])return o[0];const n=(o[1]-o[0])/(e[1]-e[0]);return o[0]+n*(r-e[0])}}function ge(e,o){return e>0&&e<o}var He=(e,o=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return function t(){const l={left:e.scrollLeft,top:e.scrollTop},c=r.left!==l.left,i=r.top!==l.top;(c||i)&&o(),r=l,n=window.requestAnimationFrame(t)}(),()=>window.cancelAnimationFrame(n)};function V(e,o){const r=y(e),n=s.useRef(0);return s.useEffect(()=>()=>window.clearTimeout(n.current),[]),s.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,o)},[r,o])}function E(e,o){const r=y(o);Pe(()=>{let n=0;if(e){const t=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(r)});return t.observe(e),()=>{window.cancelAnimationFrame(n),t.unobserve(e)}}},[e,r])}var we=ie,We=ue,Oe=be;const M=s.forwardRef(({className:e,children:o,...r},n)=>a.jsxs(we,{ref:n,className:ae("relative overflow-hidden",e),...r,children:[a.jsx(We,{className:"h-full w-full rounded-[inherit]",children:o}),a.jsx(_,{}),a.jsx(Oe,{})]}));M.displayName=we.displayName;const _=s.forwardRef(({className:e,orientation:o="vertical",...r},n)=>a.jsx(J,{ref:n,orientation:o,className:ae("flex touch-none select-none transition-colors",o==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",o==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:a.jsx(pe,{className:"relative flex-1 rounded-full bg-border"})}));_.displayName=J.displayName;try{M.displayName="ScrollArea",M.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="ScrollBar",_.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const lr={title:"BlackBox/ScrollArea",component:M,parameters:{layout:"centered"},argTypes:{className:{control:"text"},children:{control:void 0}},tags:["autodocs"]},H={args:{className:"h-[200px] w-[350px] rounded-md border p-4",children:a.jsx(a.Fragment,{children:"Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."})}},Ie=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}],W={args:{className:"w-96 whitespace-nowrap rounded-md border",children:a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex w-max space-x-4 p-4",children:Ie.map(e=>a.jsxs("figure",{className:"shrink-0",children:[a.jsx("div",{className:"overflow-hidden rounded-md",children:a.jsx("img",{src:e.art,alt:`Photo by ${e.artist}`,className:"aspect-[3/4] h-fit w-fit object-cover",width:300,height:400})}),a.jsxs("figcaption",{className:"pt-2 text-xs text-muted-foreground",children:["Photo by"," ",a.jsx("span",{className:"font-semibold text-foreground",children:e.artist})]})]},e.artist))}),a.jsx(_,{orientation:"horizontal"})]})}},Be=Array.from({length:50}).map((e,o,r)=>`v1.2.0-beta.${r.length-o}`);function Me(){return a.jsxs("div",{className:"p-4",children:[a.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),Be.map(e=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"text-sm",children:e},e),a.jsx(Ee,{className:"my-2"})]}))]})}const O={args:{className:"h-72 w-48 rounded-md border",children:a.jsx(Me,{})}};var Q,Z,ee;H.parameters={...H.parameters,docs:{...(Q=H.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    className: "h-[200px] w-[350px] rounded-md border p-4",
    children: <>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </>
  }
}`,...(ee=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,te;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    className: "w-96 whitespace-nowrap rounded-md border",
    children: <>
        <div className="flex w-max space-x-4 p-4">
          {works.map(artwork => <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img src={artwork.art} alt={\`Photo by \${artwork.artist}\`} className="aspect-[3/4] h-fit w-fit object-cover" width={300} height={400} />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>)}
        </div>
        <ScrollBar orientation="horizontal" />
      </>
  }
}`,...(te=(oe=W.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,se;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    className: "h-72 w-48 rounded-md border",
    children: <ScrollAreaDemo />
  }
}`,...(se=(le=O.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const sr=["Default","Horizontal","ExampleScrollArea"];export{H as Default,O as ExampleScrollArea,W as Horizontal,sr as __namedExportsOrder,lr as default};
