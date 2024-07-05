import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as _}from"./index-CleY8y_P.js";import{c as B}from"./utils-8RyR4BqC.js";import{L as N}from"./label-b41m3Z3D.js";import{B as L}from"./button-C5Vfupqw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";const d=_.forwardRef(({className:r,...S},w)=>e.jsx("textarea",{className:B("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:w,...S}));d.displayName="Textarea";try{d.displayName="Textarea",d.__docgenInfo={description:"",displayName:"Textarea",props:{}}}catch{}const q={title:"BlackBox/Textarea",component:d,parameters:{layout:"centered"},argTypes:{className:{control:"text"},placeholder:{control:"text"},id:{control:"text"},disabled:{control:"boolean"}},tags:["autodocs"]},s={args:{placeholder:"Type your message here."}},a={args:{placeholder:"Type your message here.",disabled:!0}},o={args:{placeholder:"Type your message here.",id:"message"},decorators:[r=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(N,{htmlFor:"message",children:"Your message"}),e.jsx(r,{})]})]},t={args:{placeholder:"Type your message here.",id:"message-2"},decorators:[r=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(N,{htmlFor:"message-2",children:"Your Message"}),e.jsx(r,{}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your message will be copied to the support team."})]})]},l={args:{placeholder:"Type your message here."},decorators:[r=>e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(r,{}),e.jsx(L,{children:"Send message"})]})]};var c,n,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here."
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here.",
    disabled: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here.",
    id: "message"
  },
  decorators: [Story => <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Story />
      </div>]
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,f,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here.",
    id: "message-2"
  },
  decorators: [Story => <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your Message</Label>
        <Story />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>]
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,j,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here."
  },
  decorators: [Story => <div className="grid w-full gap-2">
        <Story />
        <Button>Send message</Button>
      </div>]
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const z=["Default","Disabled","WithLabel","WithText","WithButton"];export{s as Default,a as Disabled,l as WithButton,o as WithLabel,t as WithText,z as __namedExportsOrder,q as default};
