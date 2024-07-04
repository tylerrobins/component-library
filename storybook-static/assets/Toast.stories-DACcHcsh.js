import{j as n}from"./jsx-runtime-CGpYA4L6.js";import{u as s}from"./use-toast-CAMf2V-s.js";import{w,T as g}from"./withToastProvider-EXalOMcD.js";import{B as a}from"./button-Cp_m9PNF.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./index-CRjgN0eO.js";import"./index-BUwirNCq.js";import"./index-1PiYJVay.js";import"./index-DSu0jbuC.js";import"./index-TihjqAgY.js";import"./index-BRjJqqTI.js";import"./index-FvTp1rED.js";import"./index-wt3N3kzb.js";import"./index-Bb4qSo10.js";import"./utils-8RyR4BqC.js";import"./x-CMV14TNj.js";import"./createLucideIcon-kBjshEDv.js";const R={title:"BlackBox/Toast",parameters:{layout:"centered"},tags:["autodocs"],decorators:[w]},o={render:()=>{const{toast:t}=s();return n.jsx(a,{variant:"outline",onClick:()=>{t({description:"Your message has been sent."})},children:"Show Toast"})}},r={render:()=>{const{toast:t}=s();return n.jsx(a,{variant:"outline",onClick:()=>{t({title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})},children:"Show Toast"})}},e={render:()=>{const{toast:t}=s();return n.jsx(a,{variant:"outline",onClick:()=>{t({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:n.jsx(g,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="outline" onClick={() => {
      toast({
        description: "Your message has been sent."
      });
    }}>
        Show Toast
      </Button>;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="outline" onClick={() => {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request."
      });
    }}>
        Show Toast
      </Button>;
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var l,d,T;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <Button variant="outline" onClick={() => {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      });
    }}>
        Show Toast
      </Button>;
  }
}`,...(T=(d=e.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};const z=["Simple","WithTitle","WithAction"];export{o as Simple,e as WithAction,r as WithTitle,z as __namedExportsOrder,R as default};
