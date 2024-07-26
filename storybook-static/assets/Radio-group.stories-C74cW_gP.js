import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as n}from"./index-CleY8y_P.js";import{c as _}from"./index-DW48STyt.js";import{u as w}from"./index-1PiYJVay.js";import{c as E}from"./index-DaMBuB3t.js";import{P as C}from"./index-BflAudCn.js";import{c as P,R as W,I as $}from"./index-CU-B850s.js";import{u as X}from"./index-WXvbiXxm.js";import{u as Y}from"./index-BBUPqgzG.js";import{u as J}from"./index-CN2qxwlO.js";import{u as Q}from"./index-mE8aEH4R.js";import{P as Z}from"./index-BvbQAose.js";import{c as S}from"./utils-8RyR4BqC.js";import{C as ee}from"./circle-CXDbpJHa.js";import{L as g}from"./label-b41m3Z3D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cytgc9eF.js";import"./index-BJdLDmjZ.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-BbYVhFH8.js";import"./createLucideIcon-kBjshEDv.js";import"./index-Bb4qSo10.js";var j="Radio",[oe,A]=E(j),[re,te]=oe(j),D=n.forwardRef((r,s)=>{const{__scopeRadio:o,name:d,checked:t=!1,required:a,disabled:c,value:u="on",onCheck:l,...f}=r,[v,p]=n.useState(null),m=w(s,h=>p(h)),i=n.useRef(!1),R=v?!!v.closest("form"):!0;return e.jsxs(re,{scope:o,checked:t,disabled:c,children:[e.jsx(C.button,{type:"button",role:"radio","aria-checked":t,"data-state":V(t),"data-disabled":c?"":void 0,disabled:c,value:u,...f,ref:m,onClick:_(r.onClick,h=>{t||l==null||l(),R&&(i.current=h.isPropagationStopped(),i.current||h.stopPropagation())})}),R&&e.jsx(ae,{control:v,bubbles:!i.current,name:d,value:u,checked:t,required:a,disabled:c,style:{transform:"translateX(-100%)"}})]})});D.displayName=j;var F="RadioIndicator",L=n.forwardRef((r,s)=>{const{__scopeRadio:o,forceMount:d,...t}=r,a=te(F,o);return e.jsx(Z,{present:d||a.checked,children:e.jsx(C.span,{"data-state":V(a.checked),"data-disabled":a.disabled?"":void 0,...t,ref:s})})});L.displayName=F;var ae=r=>{const{control:s,checked:o,bubbles:d=!0,...t}=r,a=n.useRef(null),c=Q(o),u=J(s);return n.useEffect(()=>{const l=a.current,f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"checked").set;if(c!==o&&p){const m=new Event("click",{bubbles:d});p.call(l,o),l.dispatchEvent(m)}},[c,o,d]),e.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...t,tabIndex:-1,ref:a,style:{...r.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function V(r){return r?"checked":"unchecked"}var se=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],N="RadioGroup",[ie,De]=E(N,[P,A]),O=P(),q=A(),[ne,ce]=ie(N),M=n.forwardRef((r,s)=>{const{__scopeRadioGroup:o,name:d,defaultValue:t,value:a,required:c=!1,disabled:u=!1,orientation:l,dir:f,loop:v=!0,onValueChange:p,...m}=r,i=O(o),R=Y(f),[h,H]=X({prop:a,defaultProp:t,onChange:p});return e.jsx(ne,{scope:o,name:d,required:c,disabled:u,value:h,onValueChange:H,children:e.jsx(W,{asChild:!0,...i,orientation:l,dir:R,loop:v,children:e.jsx(C.div,{role:"radiogroup","aria-required":c,"aria-orientation":l,"data-disabled":u?"":void 0,dir:R,...m,ref:s})})})});M.displayName=N;var T="RadioGroupItem",B=n.forwardRef((r,s)=>{const{__scopeRadioGroup:o,disabled:d,...t}=r,a=ce(T,o),c=a.disabled||d,u=O(o),l=q(o),f=n.useRef(null),v=w(s,f),p=a.value===t.value,m=n.useRef(!1);return n.useEffect(()=>{const i=h=>{se.includes(h.key)&&(m.current=!0)},R=()=>m.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",R),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",R)}},[]),e.jsx($,{asChild:!0,...u,focusable:!c,active:p,children:e.jsx(D,{disabled:c,required:a.required,checked:p,...l,...t,name:a.name,ref:v,onCheck:()=>a.onValueChange(t.value),onKeyDown:_(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:_(t.onFocus,()=>{var i;m.current&&((i=f.current)==null||i.click())})})})});B.displayName=T;var de="RadioGroupIndicator",K=n.forwardRef((r,s)=>{const{__scopeRadioGroup:o,...d}=r,t=q(o);return e.jsx(L,{...t,...d,ref:s})});K.displayName=de;var z=M,U=B,le=K;const y=n.forwardRef(({className:r,...s},o)=>e.jsx(z,{className:S("grid gap-2",r),...s,ref:o}));y.displayName=z.displayName;const x=n.forwardRef(({className:r,...s},o)=>e.jsx(U,{ref:o,className:S("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...s,children:e.jsx(le,{className:"flex items-center justify-center",children:e.jsx(ee,{className:"h-2.5 w-2.5 fill-current text-current"})})}));x.displayName=U.displayName;try{y.displayName="RadioGroup",y.__docgenInfo={description:"",displayName:"RadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="RadioGroupItem",x.__docgenInfo={description:"",displayName:"RadioGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"BlackBox/RadioGroup",component:y,parameters:{layout:"centered"},argTypes:{dir:{control:"select",option:["ltr","rtl"],description:"The direction of navigation between items."},orientation:{control:"select",options:["horizontal","vertical"]},loop:{control:"boolean",description:"Whether keyboard navigation should loop around @defaultValue — false"},defaultValue:{control:"text",description:"The default selected radio button, must be set to match RadioGroupItem value."},children:{control:void 0}},tags:["autodocs"]},b={args:{defaultValue:"comfortable",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(x,{value:"default",id:"r1"}),e.jsx(g,{htmlFor:"r1",children:"Default"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(x,{value:"comfortable",id:"r2"}),e.jsx(g,{htmlFor:"r2",children:"Comfortable"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(x,{value:"compact",id:"r3"}),e.jsx(g,{htmlFor:"r3",children:"Compact"})]})]})}};var G,I,k;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: "comfortable",
    children: <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
  }
}`,...(k=(I=b.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Le=["Default"];export{b as Default,Le as __namedExportsOrder,Fe as default};