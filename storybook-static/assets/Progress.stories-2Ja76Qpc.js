import{j as a}from"./jsx-runtime-CGpYA4L6.js";import{r as d}from"./index-CleY8y_P.js";import{c as V}from"./index-DaMBuB3t.js";import{P as b}from"./index-BflAudCn.js";import{c as C}from"./utils-8RyR4BqC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cytgc9eF.js";import"./index-1PiYJVay.js";var m="Progress",v=100,[M,Q]=V(m),[A,T]=M(m),j=d.forwardRef((e,r)=>{const{__scopeProgress:t,value:s=null,max:o,getValueLabel:E=L,...I}=e;(o||o===0)&&!f(o)&&console.error(O(`${o}`,"Progress"));const n=f(o)?o:v;s!==null&&!g(s,n)&&console.error(B(`${s}`,"Progress"));const i=g(s,n)?s:null,R=p(i)?E(i,n):void 0;return a.jsx(A,{scope:t,value:i,max:n,children:a.jsx(b.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":p(i)?i:void 0,"aria-valuetext":R,role:"progressbar","data-state":$(i,n),"data-value":i??void 0,"data-max":n,...I,ref:r})})});j.displayName=m;var w="ProgressIndicator",S=d.forwardRef((e,r)=>{const{__scopeProgress:t,...s}=e,o=T(w,t);return a.jsx(b.div,{"data-state":$(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...s,ref:r})});S.displayName=w;function L(e,r){return`${Math.round(e/r*100)}%`}function $(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function p(e){return typeof e=="number"}function f(e){return p(e)&&!isNaN(e)&&e>0}function g(e,r){return p(e)&&!isNaN(e)&&e<=r&&e>=0}function O(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function B(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var D=j,G=S;const l=d.forwardRef(({className:e,value:r,...t},s)=>a.jsx(D,{ref:s,className:C("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...t,children:a.jsx(G,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));l.displayName=D.displayName;try{l.displayName="Progress",l.__docgenInfo={description:"",displayName:"Progress",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"BlackBox/Progress",component:l,parameters:{layout:"centered"},tags:["autodocs"]},u={render:()=>a.jsx(l,{value:33}),decorators:[e=>a.jsx("div",{style:{width:"400px"},children:a.jsx(e,{})})]};function X(){const[e,r]=d.useState(13);return d.useEffect(()=>{const t=setTimeout(()=>r(66),500);return()=>clearTimeout(t)},[]),a.jsx(l,{value:e,className:"w-[60%]"})}const c={render:()=>a.jsx(X,{}),decorators:[e=>a.jsx("div",{style:{width:"500px"},children:a.jsx(e,{})})]};var x,P,y;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Progress value={33} />,
  decorators: [Story => <div style={{
    width: "400px"
  }}>
        <Story />
      </div>]
}`,...(y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var h,N,_;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ProgressDemo />,
  decorators: [Story => <div style={{
    width: "500px"
  }}>
        <Story />
      </div>]
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const Y=["Default","DemoProgress"];export{u as Default,c as DemoProgress,Y as __namedExportsOrder,W as default};
