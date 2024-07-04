import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as t}from"./index-CleY8y_P.js";import{c as re}from"./utils-8RyR4BqC.js";import{c as Ye}from"./createLucideIcon-kBjshEDv.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=Ye("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var Xe=Object.defineProperty,Je=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Se=(n,a,l)=>a in n?Xe(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l,Qe=(n,a)=>{for(var l in a||(a={}))_e.call(a,l)&&Se(n,l,a[l]);if(ae)for(var l of ae(a))Ne.call(a,l)&&Se(n,l,a[l]);return n},Ze=(n,a)=>Je(n,Ke(a)),et=(n,a)=>{var l={};for(var c in n)_e.call(n,c)&&a.indexOf(c)<0&&(l[c]=n[c]);if(n!=null&&ae)for(var c of ae(n))a.indexOf(c)<0&&Ne.call(n,c)&&(l[c]=n[c]);return l},tt="^\\d+$",nt="^[a-zA-Z0-9]+$";function rt(n){let a=setTimeout(n,0),l=setTimeout(n,10),c=setTimeout(n,50);return[a,l,c]}function at(n){let a=t.useRef();return t.useEffect(()=>{a.current=n}),a.current}var lt=18,De=40,ot=`${De}px`,it=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function ut({containerRef:n,inputRef:a,pushPasswordManagerStrategy:l,isFocused:c}){let I=t.useRef({done:!1,refocused:!1}),[d,G]=t.useState(!1),[P,U]=t.useState(!1),[A,X]=t.useState(!1),oe=t.useMemo(()=>l==="none"?!1:(l==="increase-width"||l==="experimental-no-flickering")&&d&&P,[d,P,l]),E=t.useCallback(()=>{let g=n.current,x=a.current;if(!g||!x||A||l==="none")return;let i=g,O=i.getBoundingClientRect().left+i.offsetWidth,L=i.getBoundingClientRect().top+i.offsetHeight/2,J=O-lt,K=L;if(!(document.querySelectorAll(it).length===0&&document.elementFromPoint(J,K)===g)&&(G(!0),X(!0),!I.current.refocused&&document.activeElement===x)){let V=[x.selectionStart,x.selectionEnd];x.blur(),x.focus(),x.setSelectionRange(V[0],V[1]),I.current.refocused=!0}},[n,a,A,l]);return t.useEffect(()=>{let g=n.current;if(!g||l==="none")return;function x(){let O=window.innerWidth-g.getBoundingClientRect().right;U(O>=De)}x();let i=setInterval(x,1e3);return()=>{clearInterval(i)}},[n,l]),t.useEffect(()=>{let g=c||document.activeElement===a.current;if(l==="none"||!g)return;let x=setTimeout(E,0),i=setTimeout(E,2e3),O=setTimeout(E,5e3),L=setTimeout(()=>{X(!0)},6e3);return()=>{clearTimeout(x),clearTimeout(i),clearTimeout(O),clearTimeout(L)}},[a,c,l,E]),{hasPWMBadge:d,willPushPWMBadge:oe,PWM_BADGE_SPACE_WIDTH:ot}}var Ge=t.createContext({}),Ae=t.forwardRef((n,a)=>{var l=n,{value:c,onChange:I,maxLength:d,textAlign:G="left",pattern:P=tt,inputMode:U="numeric",onComplete:A,pushPasswordManagerStrategy:X="increase-width",containerClassName:oe,noScriptCSSFallback:E=st,render:g,children:x}=l,i=et(l,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),O,L,J,K,V;let[Le,Be]=t.useState(typeof i.defaultValue=="string"?i.defaultValue:""),m=c??Le,C=at(m),q=t.useCallback(r=>{I==null||I(r),Be(r)},[I]),S=t.useMemo(()=>P?typeof P=="string"?new RegExp(P):P:null,[P]),p=t.useRef(null),ie=t.useRef(null),ue=t.useRef({value:m,onChange:q,isIOS:typeof window<"u"&&((L=(O=window==null?void 0:window.CSS)==null?void 0:O.supports)==null?void 0:L.call(O,"-webkit-touch-callout","none"))}),Q=t.useRef({prev:[(J=p.current)==null?void 0:J.selectionStart,(K=p.current)==null?void 0:K.selectionEnd,(V=p.current)==null?void 0:V.selectionDirection]});t.useImperativeHandle(a,()=>p.current,[]),t.useEffect(()=>{let r=p.current,o=ie.current;if(!r||!o)return;ue.current.value!==r.value&&ue.current.onChange(r.value),Q.current.prev=[r.selectionStart,r.selectionEnd,r.selectionDirection];function f(){if(document.activeElement!==r){$(null),z(null);return}let s=r.selectionStart,h=r.selectionEnd,b=r.selectionDirection,M=r.maxLength,R=r.value,W=Q.current.prev,j=-1,y=-1,_;if(R.length!==0&&s!==null&&h!==null){let He=s===h,$e=s===R.length&&R.length<M;if(He&&!$e){let N=s;if(N===0)j=0,y=1,_="forward";else if(N===M)j=N-1,y=N,_="backward";else if(M>1&&R.length>1){let de=0;if(W[0]!==null&&W[1]!==null){_=N<W[1]?"backward":"forward";let ze=W[0]===W[1]&&W[0]<M;_==="backward"&&!ze&&(de=-1)}j=de+N,y=de+N+1}}j!==-1&&y!==-1&&j!==y&&p.current.setSelectionRange(j,y,_)}let he=j!==-1?j:s,Pe=y!==-1?y:h,qe=_??b;$(he),z(Pe),Q.current.prev=[he,Pe,qe]}if(document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===r&&se(!0),!document.getElementById("input-otp-style")){let s=document.createElement("style");if(s.id="input-otp-style",document.head.appendChild(s),s.sheet){let h="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Y(s.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Y(s.sheet,`[data-input-otp]:autofill { ${h} }`),Y(s.sheet,`[data-input-otp]:-webkit-autofill { ${h} }`),Y(s.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Y(s.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{o&&o.style.setProperty("--root-height",`${r.clientHeight}px`)};v();let T=new ResizeObserver(v);return T.observe(r),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),T.disconnect()}},[]);let[pe,me]=t.useState(!1),[H,se]=t.useState(!1),[k,$]=t.useState(null),[B,z]=t.useState(null);t.useEffect(()=>{rt(()=>{var r,o,f,v;(r=p.current)==null||r.dispatchEvent(new Event("input"));let T=(o=p.current)==null?void 0:o.selectionStart,s=(f=p.current)==null?void 0:f.selectionEnd,h=(v=p.current)==null?void 0:v.selectionDirection;T!==null&&s!==null&&($(T),z(s),Q.current.prev=[T,s,h])})},[m,H]),t.useEffect(()=>{C!==void 0&&m!==C&&C.length<d&&m.length===d&&(A==null||A(m))},[d,A,C,m]);let F=ut({containerRef:ie,inputRef:p,pushPasswordManagerStrategy:X,isFocused:H}),xe=t.useCallback(r=>{let o=r.currentTarget.value.slice(0,d);if(o.length>0&&S&&!S.test(o)){r.preventDefault();return}typeof C=="string"&&o.length<C.length&&document.dispatchEvent(new Event("selectionchange")),q(o)},[d,q,C,S]),fe=t.useCallback(()=>{var r;if(p.current){let o=Math.min(p.current.value.length,d-1),f=p.current.value.length;(r=p.current)==null||r.setSelectionRange(o,f),$(o),z(f)}se(!0)},[d]),ge=t.useCallback(r=>{var o,f;let v=p.current;if(!ue.current.isIOS||!r.clipboardData||!v)return;let T=r.clipboardData.getData("text/plain");r.preventDefault();let s=(o=p.current)==null?void 0:o.selectionStart,h=(f=p.current)==null?void 0:f.selectionEnd,b=(s!==h?m.slice(0,s)+T+m.slice(h):m.slice(0,s)+T+m.slice(s)).slice(0,d);if(b.length>0&&S&&!S.test(b))return;v.value=b,q(b);let M=Math.min(b.length,d-1),R=b.length;v.setSelectionRange(M,R),$(M),z(R)},[d,q,S,m]),Fe=t.useMemo(()=>({position:"relative",cursor:i.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[i.disabled]),ve=t.useMemo(()=>({position:"absolute",inset:0,width:F.willPushPWMBadge?`calc(100% + ${F.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:F.willPushPWMBadge?`inset(0 ${F.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:G,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[F.PWM_BADGE_SPACE_WIDTH,F.willPushPWMBadge,G]),We=t.useMemo(()=>t.createElement("input",Ze(Qe({autoComplete:i.autoComplete||"one-time-code"},i),{"data-input-otp":!0,"data-input-otp-mss":k,"data-input-otp-mse":B,inputMode:U,pattern:S==null?void 0:S.source,style:ve,maxLength:d,value:m,ref:p,onPaste:r=>{var o;ge(r),(o=i.onPaste)==null||o.call(i,r)},onChange:xe,onMouseOver:r=>{var o;me(!0),(o=i.onMouseOver)==null||o.call(i,r)},onMouseLeave:r=>{var o;me(!1),(o=i.onMouseLeave)==null||o.call(i,r)},onFocus:r=>{var o;fe(),(o=i.onFocus)==null||o.call(i,r)},onBlur:r=>{var o;se(!1),(o=i.onBlur)==null||o.call(i,r)}})),[xe,fe,ge,U,ve,d,B,k,i,S==null?void 0:S.source,m]),ce=t.useMemo(()=>({slots:Array.from({length:d}).map((r,o)=>{let f=H&&k!==null&&B!==null&&(k===B&&o===k||o>=k&&o<B),v=m[o]!==void 0?m[o]:null;return{char:v,isActive:f,hasFakeCaret:f&&v===null}}),isFocused:H,isHovering:!i.disabled&&pe}),[H,pe,d,B,k,i.disabled,m]),Ve=t.useMemo(()=>g?g(ce):t.createElement(Ge.Provider,{value:ce},x),[x,ce,g]);return t.createElement(t.Fragment,null,E!==null&&t.createElement("noscript",null,t.createElement("style",null,E)),t.createElement("div",{ref:ie,"data-input-otp-container":!0,style:Fe,className:oe},Ve,t.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},We)))});Ae.displayName="Input";function Y(n,a){try{n.insertRule(a)}catch{console.error("input-otp could not insert CSS rule:",a)}}var st=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;const D=t.forwardRef(({className:n,containerClassName:a,...l},c)=>e.jsx(Ae,{ref:c,containerClassName:re("flex items-center gap-2 has-[:disabled]:opacity-50",a),className:re("disabled:cursor-not-allowed",n),...l}));D.displayName="InputOTP";const w=t.forwardRef(({className:n,...a},l)=>e.jsx("div",{ref:l,className:re("flex items-center",n),...a}));w.displayName="InputOTPGroup";const u=t.forwardRef(({index:n,className:a,...l},c)=>{const I=t.useContext(Ge),{char:d,hasFakeCaret:G,isActive:P}=I.slots[n];return e.jsxs("div",{ref:c,className:re("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",P&&"z-10 ring-2 ring-ring ring-offset-background",a),...l,children:[d,G&&e.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});u.displayName="InputOTPSlot";const le=t.forwardRef(({...n},a)=>e.jsx("div",{ref:a,role:"separator",...n,children:e.jsx(Ue,{})}));le.displayName="InputOTPSeparator";try{D.displayName="InputOTP",D.__docgenInfo={description:"",displayName:"InputOTP",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newValue: string) => unknown)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"InputOTPRenderFn"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"((...args: any[]) => unknown)"}},pushPasswordManagerStrategy:{defaultValue:null,description:"",name:"pushPasswordManagerStrategy",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"increase-width"'}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},noScriptCSSFallback:{defaultValue:null,description:"",name:"noScriptCSSFallback",required:!1,type:{name:"string | null"}}}}}catch{}const ft={title:"BlackBox/Input-OTP",parameters:{layout:"centered"}},Z={render:()=>e.jsx(D,{maxLength:6,pattern:nt,children:e.jsxs(w,{children:[e.jsx(u,{index:0}),e.jsx(u,{index:1}),e.jsx(u,{index:2}),e.jsx(u,{index:3}),e.jsx(u,{index:4}),e.jsx(u,{index:5})]})})},ee={render:()=>e.jsxs(D,{maxLength:6,children:[e.jsxs(w,{children:[e.jsx(u,{index:0}),e.jsx(u,{index:1}),e.jsx(u,{index:2})]}),e.jsx(le,{}),e.jsxs(w,{children:[e.jsx(u,{index:3}),e.jsx(u,{index:4}),e.jsx(u,{index:5})]})]})},te={render:()=>e.jsxs(D,{maxLength:6,children:[e.jsxs(w,{children:[e.jsx(u,{index:0}),e.jsx(u,{index:1})]}),e.jsx(le,{}),e.jsxs(w,{children:[e.jsx(u,{index:2}),e.jsx(u,{index:3})]}),e.jsx(le,{}),e.jsxs(w,{children:[e.jsx(u,{index:4}),e.jsx(u,{index:5})]})]})},ne={render:()=>{const[n,a]=t.useState("");return e.jsxs("div",{className:"space-y-2",children:[e.jsx(D,{maxLength:6,value:n,onChange:l=>a(l),children:e.jsxs(w,{children:[e.jsx(u,{index:0}),e.jsx(u,{index:1}),e.jsx(u,{index:2}),e.jsx(u,{index:3}),e.jsx(u,{index:4}),e.jsx(u,{index:5})]})}),e.jsx("div",{className:"text-center text-sm",children:n===""?e.jsx(e.Fragment,{children:"Enter your one-time password."}):e.jsxs(e.Fragment,{children:["You entered: ",n]})})]})}};var Oe,Te,Ie;Z.parameters={...Z.parameters,docs:{...(Oe=Z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
}`,...(Ie=(Te=Z.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var be,je,ye;ee.parameters={...ee.parameters,docs:{...(be=ee.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
}`,...(ye=(je=ee.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var we,Ee,Ce;te.parameters={...te.parameters,docs:{...(we=te.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
}`,...(Ce=(Ee=te.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var ke,Me,Re;ne.parameters={...ne.parameters,docs:{...(ke=ne.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <div className="space-y-2">
        <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
        </div>
      </div>;
  }
}`,...(Re=(Me=ne.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const gt=["Pattern","SingleSeperator","MultiSeperator","Controlled"];export{ne as Controlled,te as MultiSeperator,Z as Pattern,ee as SingleSeperator,gt as __namedExportsOrder,ft as default};
