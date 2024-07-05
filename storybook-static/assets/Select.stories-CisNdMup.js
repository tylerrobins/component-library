import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{S as A,a as m,b as o,c as S,d as t,e as a,f as l}from"./select-BhlsrONA.js";import{z as d,u as C,t as f,F as b,a as w,b as F,c as L,d as G,e as N,f as k}from"./form-BtYfHpIZ.js";import{B as M}from"./button-C5Vfupqw.js";import{t as y}from"./use-toast-CAMf2V-s.js";import{w as B}from"./withToastProvider-TS5GKI8m.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cytgc9eF.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BJdLDmjZ.js";import"./index-DaMBuB3t.js";import"./index-1PiYJVay.js";import"./index-BBUPqgzG.js";import"./index-DK4nl9q8.js";import"./index-BflAudCn.js";import"./index-BbYVhFH8.js";import"./index-B41ILiX7.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-GiP06gZx.js";import"./index-CN2qxwlO.js";import"./index-DirRZWZs.js";import"./index-WXvbiXxm.js";import"./index-mE8aEH4R.js";import"./index-DE9U7EbF.js";import"./utils-8RyR4BqC.js";import"./chevron-down-DmK9nTZU.js";import"./createLucideIcon-kBjshEDv.js";import"./check-D2cwZkjZ.js";import"./label-b41m3Z3D.js";import"./index-Bb4qSo10.js";import"./index-BvbQAose.js";import"./x-CMV14TNj.js";const ve={title:"BlackBox/Select",component:A,parameters:{layout:"centered"},argTypes:{children:{control:void 0}},tags:["autodocs"]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"w-[180px]",children:e.jsx(o,{placeholder:"Theme"})}),e.jsxs(S,{children:[e.jsx(t,{value:"light",children:"Light"}),e.jsx(t,{value:"dark",children:"Dark"}),e.jsx(t,{value:"system",children:"System"})]})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"w-[280px]",children:e.jsx(o,{placeholder:"Select a timezone"})}),e.jsxs(S,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"North America"}),e.jsx(t,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(t,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(t,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(t,{value:"pst",children:"Pacific Standard Time (PST)"}),e.jsx(t,{value:"akst",children:"Alaska Standard Time (AKST)"}),e.jsx(t,{value:"hst",children:"Hawaii Standard Time (HST)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Europe & Africa"}),e.jsx(t,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(t,{value:"cet",children:"Central European Time (CET)"}),e.jsx(t,{value:"eet",children:"Eastern European Time (EET)"}),e.jsx(t,{value:"west",children:"Western European Summer Time (WEST)"}),e.jsx(t,{value:"cat",children:"Central Africa Time (CAT)"}),e.jsx(t,{value:"eat",children:"East Africa Time (EAT)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Asia"}),e.jsx(t,{value:"msk",children:"Moscow Time (MSK)"}),e.jsx(t,{value:"ist",children:"India Standard Time (IST)"}),e.jsx(t,{value:"cst_china",children:"China Standard Time (CST)"}),e.jsx(t,{value:"jst",children:"Japan Standard Time (JST)"}),e.jsx(t,{value:"kst",children:"Korea Standard Time (KST)"}),e.jsx(t,{value:"ist_indonesia",children:"Indonesia Central Standard Time (WITA)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Australia & Pacific"}),e.jsx(t,{value:"awst",children:"Australian Western Standard Time (AWST)"}),e.jsx(t,{value:"acst",children:"Australian Central Standard Time (ACST)"}),e.jsx(t,{value:"aest",children:"Australian Eastern Standard Time (AEST)"}),e.jsx(t,{value:"nzst",children:"New Zealand Standard Time (NZST)"}),e.jsx(t,{value:"fjt",children:"Fiji Time (FJT)"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"South America"}),e.jsx(t,{value:"art",children:"Argentina Time (ART)"}),e.jsx(t,{value:"bot",children:"Bolivia Time (BOT)"}),e.jsx(t,{value:"brt",children:"Brasilia Time (BRT)"}),e.jsx(t,{value:"clt",children:"Chile Standard Time (CLT)"})]})]})]})}},W=d.object({email:d.string({required_error:"Please select an email to display."}).email()});function P(){const s=C({resolver:f(W)});function E(r){y({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(r,null,2)})})})}return e.jsx(b,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(E),className:"w-2/3 space-y-6",children:[e.jsx(w,{control:s.control,name:"email",render:({field:r})=>e.jsxs(F,{children:[e.jsx(L,{children:"Email"}),e.jsxs(A,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(G,{children:e.jsx(m,{children:e.jsx(o,{placeholder:"Select a verified email to display"})})}),e.jsxs(S,{children:[e.jsx(t,{value:"m@example.com",children:"m@example.com"}),e.jsx(t,{value:"m@google.com",children:"m@google.com"}),e.jsx(t,{value:"m@support.com",children:"m@support.com"})]})]}),e.jsxs(N,{children:["You can manage email addresses in your"," ",e.jsx("a",{href:"/examples/forms",children:"email settings"}),"."]}),e.jsx(k,{})]})}),e.jsx(M,{type:"submit",children:"Submit"})]})})}const c={render:()=>e.jsx(P,{}),decorators:[B]};var u,T,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </>
  }
}`,...(p=(T=n.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var h,x,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value="acst">
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value="aest">
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value="nzst">
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </>
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,I,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SelectForm />,
  decorators: [withToastProvider]
}`,...(g=(I=c.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const Ie=["Default","Scrollable","ExampleSelectForm"];export{n as Default,c as ExampleSelectForm,i as Scrollable,Ie as __namedExportsOrder,ve as default};
