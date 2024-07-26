import{j as d}from"./jsx-runtime-CGpYA4L6.js";import{r as u}from"./index-CleY8y_P.js";import{c as q}from"./index-BdQq_4o_.js";import{c as j}from"./index-DW48STyt.js";import{u as A}from"./index-1PiYJVay.js";import{c as fe}from"./index-DaMBuB3t.js";import{u as me}from"./index-WXvbiXxm.js";import{u as pe}from"./index-BBUPqgzG.js";import{u as he}from"./index-mE8aEH4R.js";import{u as ge}from"./index-CN2qxwlO.js";import{P as T}from"./index-BflAudCn.js";import{c as Se}from"./index-BJdLDmjZ.js";import{c as ve}from"./utils-8RyR4BqC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BbYVhFH8.js";import"./index-DBNrNBDr.js";import"./index-Cytgc9eF.js";var J=["PageUp","PageDown"],Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Z={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},M="Slider",[z,be,xe]=Se(M),[ee,et]=fe(M,[xe]),[we,k]=ee(M),te=u.forwardRef((e,t)=>{const{name:o,min:n=0,max:s=100,step:l=1,orientation:r="horizontal",disabled:a=!1,minStepsBetweenThumbs:c=0,defaultValue:h=[n],value:b,onValueChange:i=()=>{},onValueCommit:f=()=>{},inverted:S=!1,...x}=e,g=u.useRef(new Set),m=u.useRef(0),P=r==="horizontal"?ye:Pe,[p=[],y]=me({prop:b,defaultProp:h,onChange:v=>{var E;(E=[...g.current][m.current])==null||E.focus(),i(v)}}),D=u.useRef(p);function U(v){const R=Ce(p,v);V(v,R)}function B(v){V(v,m.current)}function ue(){const v=D.current[m.current];p[m.current]!==v&&f(p)}function V(v,R,{commit:E}={commit:!1}){const Y=Ie(l),H=Ae(Math.round((v-n)/l)*l+n,Y),I=q(H,[n,s]);y((C=[])=>{const _=De(C,I,R);if(Ve(_,c*l)){m.current=_.indexOf(I);const $=String(_)!==String(C);return $&&E&&f(_),$?_:C}else return C})}return d.jsx(we,{scope:e.__scopeSlider,name:o,disabled:a,min:n,max:s,valueIndexToChangeRef:m,thumbs:g.current,values:p,orientation:r,children:d.jsx(z.Provider,{scope:e.__scopeSlider,children:d.jsx(z.Slot,{scope:e.__scopeSlider,children:d.jsx(P,{"aria-disabled":a,"data-disabled":a?"":void 0,...x,ref:t,onPointerDown:j(x.onPointerDown,()=>{a||(D.current=p)}),min:n,max:s,inverted:S,onSlideStart:a?void 0:U,onSlideMove:a?void 0:B,onSlideEnd:a?void 0:ue,onHomeKeyDown:()=>!a&&V(n,0,{commit:!0}),onEndKeyDown:()=>!a&&V(s,p.length-1,{commit:!0}),onStepKeyDown:({event:v,direction:R})=>{if(!a){const H=J.includes(v.key)||v.shiftKey&&Q.includes(v.key)?10:1,I=m.current,C=p[I],_=l*H*R;V(C+_,I,{commit:!0})}}})})})})});te.displayName=M;var[oe,ne]=ee(M,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ye=u.forwardRef((e,t)=>{const{min:o,max:n,dir:s,inverted:l,onSlideStart:r,onSlideMove:a,onSlideEnd:c,onStepKeyDown:h,...b}=e,[i,f]=u.useState(null),S=A(t,p=>f(p)),x=u.useRef(),g=pe(s),m=g==="ltr",w=m&&!l||!m&&l;function P(p){const y=x.current||i.getBoundingClientRect(),D=[0,y.width],B=F(D,w?[o,n]:[n,o]);return x.current=y,B(p-y.left)}return d.jsx(oe,{scope:e.__scopeSlider,startEdge:w?"left":"right",endEdge:w?"right":"left",direction:w?1:-1,size:"width",children:d.jsx(re,{dir:g,"data-orientation":"horizontal",...b,ref:S,style:{...b.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:p=>{const y=P(p.clientX);r==null||r(y)},onSlideMove:p=>{const y=P(p.clientX);a==null||a(y)},onSlideEnd:()=>{x.current=void 0,c==null||c()},onStepKeyDown:p=>{const D=Z[w?"from-left":"from-right"].includes(p.key);h==null||h({event:p,direction:D?-1:1})}})})}),Pe=u.forwardRef((e,t)=>{const{min:o,max:n,inverted:s,onSlideStart:l,onSlideMove:r,onSlideEnd:a,onStepKeyDown:c,...h}=e,b=u.useRef(null),i=A(t,b),f=u.useRef(),S=!s;function x(g){const m=f.current||b.current.getBoundingClientRect(),w=[0,m.height],p=F(w,S?[n,o]:[o,n]);return f.current=m,p(g-m.top)}return d.jsx(oe,{scope:e.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:d.jsx(re,{"data-orientation":"vertical",...h,ref:i,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:g=>{const m=x(g.clientY);l==null||l(m)},onSlideMove:g=>{const m=x(g.clientY);r==null||r(m)},onSlideEnd:()=>{f.current=void 0,a==null||a()},onStepKeyDown:g=>{const w=Z[S?"from-bottom":"from-top"].includes(g.key);c==null||c({event:g,direction:w?-1:1})}})})}),re=u.forwardRef((e,t)=>{const{__scopeSlider:o,onSlideStart:n,onSlideMove:s,onSlideEnd:l,onHomeKeyDown:r,onEndKeyDown:a,onStepKeyDown:c,...h}=e,b=k(M,o);return d.jsx(T.span,{...h,ref:t,onKeyDown:j(e.onKeyDown,i=>{i.key==="Home"?(r(i),i.preventDefault()):i.key==="End"?(a(i),i.preventDefault()):J.concat(Q).includes(i.key)&&(c(i),i.preventDefault())}),onPointerDown:j(e.onPointerDown,i=>{const f=i.target;f.setPointerCapture(i.pointerId),i.preventDefault(),b.thumbs.has(f)?f.focus():n(i)}),onPointerMove:j(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&s(i)}),onPointerUp:j(e.onPointerUp,i=>{const f=i.target;f.hasPointerCapture(i.pointerId)&&(f.releasePointerCapture(i.pointerId),l(i))})})}),se="SliderTrack",ie=u.forwardRef((e,t)=>{const{__scopeSlider:o,...n}=e,s=k(se,o);return d.jsx(T.span,{"data-disabled":s.disabled?"":void 0,"data-orientation":s.orientation,...n,ref:t})});ie.displayName=se;var O="SliderRange",ae=u.forwardRef((e,t)=>{const{__scopeSlider:o,...n}=e,s=k(O,o),l=ne(O,o),r=u.useRef(null),a=A(t,r),c=s.values.length,h=s.values.map(f=>ce(f,s.min,s.max)),b=c>1?Math.min(...h):0,i=100-Math.max(...h);return d.jsx(T.span,{"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,...n,ref:a,style:{...e.style,[l.startEdge]:b+"%",[l.endEdge]:i+"%"}})});ae.displayName=O;var L="SliderThumb",le=u.forwardRef((e,t)=>{const o=be(e.__scopeSlider),[n,s]=u.useState(null),l=A(t,a=>s(a)),r=u.useMemo(()=>n?o().findIndex(a=>a.ref.current===n):-1,[o,n]);return d.jsx(Re,{...e,ref:l,index:r})}),Re=u.forwardRef((e,t)=>{const{__scopeSlider:o,index:n,name:s,...l}=e,r=k(L,o),a=ne(L,o),[c,h]=u.useState(null),b=A(t,P=>h(P)),i=c?!!c.closest("form"):!0,f=ge(c),S=r.values[n],x=S===void 0?0:ce(S,r.min,r.max),g=Ee(n,r.values.length),m=f==null?void 0:f[a.size],w=m?je(m,x,a.direction):0;return u.useEffect(()=>{if(c)return r.thumbs.add(c),()=>{r.thumbs.delete(c)}},[c,r.thumbs]),d.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[a.startEdge]:`calc(${x}% + ${w}px)`},children:[d.jsx(z.ItemSlot,{scope:e.__scopeSlider,children:d.jsx(T.span,{role:"slider","aria-label":e["aria-label"]||g,"aria-valuemin":r.min,"aria-valuenow":S,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0,...l,ref:b,style:S===void 0?{display:"none"}:e.style,onFocus:j(e.onFocus,()=>{r.valueIndexToChangeRef.current=n})})}),i&&d.jsx(_e,{name:s??(r.name?r.name+(r.values.length>1?"[]":""):void 0),value:S},n)]})});le.displayName=L;var _e=e=>{const{value:t,...o}=e,n=u.useRef(null),s=he(t);return u.useEffect(()=>{const l=n.current,r=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(r,"value").set;if(s!==t&&c){const h=new Event("input",{bubbles:!0});c.call(l,t),l.dispatchEvent(h)}},[s,t]),d.jsx("input",{style:{display:"none"},...o,ref:n,defaultValue:t})};function De(e=[],t,o){const n=[...e];return n[o]=t,n.sort((s,l)=>s-l)}function ce(e,t,o){const l=100/(o-t)*(e-t);return q(l,[0,100])}function Ee(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ce(e,t){if(e.length===1)return 0;const o=e.map(s=>Math.abs(s-t)),n=Math.min(...o);return o.indexOf(n)}function je(e,t,o){const n=e/2,l=F([0,50],[0,n]);return(n-l(t)*o)*o}function Me(e){return e.slice(0,-1).map((t,o)=>e[o+1]-t)}function Ve(e,t){if(t>0){const o=Me(e);return Math.min(...o)>=t}return!0}function F(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(o-e[0])}}function Ie(e){return(String(e).split(".")[1]||"").length}function Ae(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}var de=te,Ke=ie,Ne=ae,Te=le;const N=u.forwardRef(({className:e,...t},o)=>d.jsxs(de,{ref:o,className:ve("relative flex w-full touch-none select-none items-center",e),...t,children:[d.jsx(Ke,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:d.jsx(Ne,{className:"absolute h-full bg-primary"})}),d.jsx(Te,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));N.displayName=de.displayName;try{N.displayName="Slider",N.__docgenInfo={description:"",displayName:"Slider",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const tt={title:"BlackBox/Slider",component:N,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},orientation:{control:"select",options:["horizontal","vertical"]},dir:{control:"select",options:["ltr","rtl"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},defaultValue:{control:void 0,description:"number[]"},inverted:{control:"boolean"}},tags:["autodocs"]},K={args:{defaultValue:[50],max:100,step:1,className:"w-[60%]"},decorators:[e=>d.jsx("div",{style:{width:"500px"},children:d.jsx(e,{})})]};var X,G,W;K.parameters={...K.parameters,docs:{...(X=K.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[60%]"
  },
  decorators: [Story => <div style={{
    width: "500px"
  }}>
        <Story />
      </div>]
}`,...(W=(G=K.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const ot=["Default"];export{K as Default,ot as __namedExportsOrder,tt as default};