import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as l,r as D}from"./index-CleY8y_P.js";import{c as me,P as q}from"./index-BUwirNCq.js";import{c as ue}from"./index-DSu0jbuC.js";import{u as Ae}from"./index-1PiYJVay.js";import{u as F,c as fe}from"./index-CRjgN0eO.js";import{c as J,R as ge,T as xe,b as he}from"./index-Dy3DlD1s.js";import{u as ve}from"./index-DF5SYaCP.js";import{u as Ie}from"./index-BBUPqgzG.js";import{c as O}from"./utils-8RyR4BqC.js";import{C as Ce}from"./chevron-down-DmK9nTZU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./index-FvTp1rED.js";import"./createLucideIcon-kBjshEDv.js";var m="Accordion",be=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,ye,je]=ue(m),[j,Je]=me(m,[je,J]),V=J(),Q=l.forwardRef((r,c)=>{const{type:o,...t}=r,i=t,n=t;return e.jsx(M.Provider,{scope:r.__scopeAccordion,children:o==="multiple"?e.jsx(Ne,{...n,ref:c}):e.jsx(Re,{...i,ref:c})})});Q.displayName=m;var[X,_e]=j(m),[Z,we]=j(m,{collapsible:!1}),Re=l.forwardRef((r,c)=>{const{value:o,defaultValue:t,onValueChange:i=()=>{},collapsible:n=!1,...s}=r,[a,d]=F({prop:o,defaultProp:t,onChange:i});return e.jsx(X,{scope:r.__scopeAccordion,value:a?[a]:[],onItemOpen:d,onItemClose:l.useCallback(()=>n&&d(""),[n,d]),children:e.jsx(Z,{scope:r.__scopeAccordion,collapsible:n,children:e.jsx(ee,{...s,ref:c})})})}),Ne=l.forwardRef((r,c)=>{const{value:o,defaultValue:t,onValueChange:i=()=>{},...n}=r,[s=[],a]=F({prop:o,defaultProp:t,onChange:i}),d=l.useCallback(f=>a((u=[])=>[...u,f]),[a]),A=l.useCallback(f=>a((u=[])=>u.filter(w=>w!==f)),[a]);return e.jsx(X,{scope:r.__scopeAccordion,value:s,onItemOpen:d,onItemClose:A,children:e.jsx(Z,{scope:r.__scopeAccordion,collapsible:!0,children:e.jsx(ee,{...n,ref:c})})})}),[Te,_]=j(m),ee=l.forwardRef((r,c)=>{const{__scopeAccordion:o,disabled:t,dir:i,orientation:n="vertical",...s}=r,a=l.useRef(null),d=Ae(a,c),A=ye(o),u=Ie(i)==="ltr",w=fe(r.onKeyDown,v=>{var W;if(!be.includes(v.key))return;const de=v.target,R=A().filter(E=>{var K;return!((K=E.ref.current)!=null&&K.disabled)}),I=R.findIndex(E=>E.ref.current===de),H=R.length;if(I===-1)return;v.preventDefault();let p=I;const N=0,T=H-1,S=()=>{p=I+1,p>T&&(p=N)},P=()=>{p=I-1,p<N&&(p=T)};switch(v.key){case"Home":p=N;break;case"End":p=T;break;case"ArrowRight":n==="horizontal"&&(u?S():P());break;case"ArrowDown":n==="vertical"&&S();break;case"ArrowLeft":n==="horizontal"&&(u?P():S());break;case"ArrowUp":n==="vertical"&&P();break}const pe=p%H;(W=R[pe].ref.current)==null||W.focus()});return e.jsx(Te,{scope:o,disabled:t,direction:i,orientation:n,children:e.jsx(M.Slot,{scope:o,children:e.jsx(q.div,{...s,"data-orientation":n,ref:d,onKeyDown:t?void 0:w})})})}),y="AccordionItem",[Se,Y]=j(y),oe=l.forwardRef((r,c)=>{const{__scopeAccordion:o,value:t,...i}=r,n=_(y,o),s=_e(y,o),a=V(o),d=ve(),A=t&&s.value.includes(t)||!1,f=n.disabled||r.disabled;return e.jsx(Se,{scope:o,open:A,disabled:f,triggerId:d,children:e.jsx(ge,{"data-orientation":n.orientation,"data-state":se(A),...a,...i,ref:c,disabled:f,open:A,onOpenChange:u=>{u?s.onItemOpen(t):s.onItemClose(t)}})})});oe.displayName=y;var re="AccordionHeader",ne=l.forwardRef((r,c)=>{const{__scopeAccordion:o,...t}=r,i=_(m,o),n=Y(re,o);return e.jsx(q.h3,{"data-orientation":i.orientation,"data-state":se(n.open),"data-disabled":n.disabled?"":void 0,...t,ref:c})});ne.displayName=re;var k="AccordionTrigger",te=l.forwardRef((r,c)=>{const{__scopeAccordion:o,...t}=r,i=_(m,o),n=Y(k,o),s=we(k,o),a=V(o);return e.jsx(M.ItemSlot,{scope:o,children:e.jsx(xe,{"aria-disabled":n.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:n.triggerId,...a,...t,ref:c})})});te.displayName=k;var ce="AccordionContent",ie=l.forwardRef((r,c)=>{const{__scopeAccordion:o,...t}=r,i=_(m,o),n=Y(ce,o),s=V(o);return e.jsx(he,{role:"region","aria-labelledby":n.triggerId,"data-orientation":i.orientation,...s,...t,ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...r.style}})});ie.displayName=ce;function se(r){return r?"open":"closed"}var Pe=Q,Ee=oe,ke=ne,ae=te,le=ie;const De=Pe,g=D.forwardRef(({className:r,...c},o)=>e.jsx(Ee,{ref:o,className:O("border-b",r),...c}));g.displayName="AccordionItem";const x=D.forwardRef(({className:r,children:c,...o},t)=>e.jsx(ke,{className:"flex",children:e.jsxs(ae,{ref:t,className:O("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...o,children:[c,e.jsx(Ce,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));x.displayName=ae.displayName;const h=D.forwardRef(({className:r,children:c,...o},t)=>e.jsx(le,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:e.jsx("div",{className:O("pb-4 pt-0",r),children:c})}));h.displayName=le.displayName;try{g.displayName="AccordionItem",g.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Qe={title:"BlackBox/Accordion",component:De,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"The type of accordion"},collapsible:{control:"boolean",description:"Whether the accordion items are collapsible"},children:{control:void 0,description:"Accordion content"}}},C={args:{type:"single",collapsible:!1,children:e.jsxs(g,{value:"item-1",children:[e.jsx(x,{children:"Is it accessible?"}),e.jsx(h,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]})},argTypes:{type:{control:!1,table:{disable:!0}}}},b={args:{type:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsxs(g,{value:"item-1",children:[e.jsx(x,{children:"Is it accessible?"}),e.jsx(h,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(g,{value:"item-2",children:[e.jsx(x,{children:"Is it styled?"}),e.jsx(h,{children:"Yes. It is styled using Tailwind CSS."})]}),e.jsxs(g,{value:"item-3",children:[e.jsx(x,{children:"Is it responsive?"}),e.jsx(h,{children:"Yes. It is fully responsive."})]})]})},argTypes:{type:{control:!1,table:{disable:!0}}}};var $,L,z;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "single",
    collapsible: false,
    children: <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
  },
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true
      }
    }
  }
}`,...(z=(L=C.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var B,G,U;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    children: <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It is styled using Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it responsive?</AccordionTrigger>
          <AccordionContent>Yes. It is fully responsive.</AccordionContent>
        </AccordionItem>
      </>
  },
  argTypes: {
    type: {
      control: false,
      table: {
        disable: true
      }
    }
  }
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const Xe=["Single","Multiple"];export{b as Multiple,C as Single,Xe as __namedExportsOrder,Qe as default};
