import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{f as C,C as j}from"./calendar-B70dU0CS.js";import{z as l,u as O,t as D,F as v,a as _,b as P,c as M,d as T,e as W,f as I}from"./form-BtYfHpIZ.js";import{a as B}from"./react-icons.esm-8vROIn83.js";import{c as R}from"./utils-8RyR4BqC.js";import{B as c}from"./button-C5Vfupqw.js";import{P as q,a as A,b as E}from"./popover-CJ0efhSf.js";import{t as J}from"./use-toast-CAMf2V-s.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chevron-left-CuPJilWa.js";import"./createLucideIcon-kBjshEDv.js";import"./chevron-right-LrJNRl_k.js";import"./index-1PiYJVay.js";import"./label-b41m3Z3D.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-Bb4qSo10.js";import"./index-DW48STyt.js";import"./index-DaMBuB3t.js";import"./index-DK4nl9q8.js";import"./index-BbYVhFH8.js";import"./index-B41ILiX7.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-GiP06gZx.js";import"./index-CN2qxwlO.js";import"./index-DirRZWZs.js";import"./index-BvbQAose.js";import"./index-WXvbiXxm.js";const L=l.object({dob:l.date({required_error:"A date of birth is required."})});function d(r){const i=O({resolver:D(L)});function F(s){J({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(v,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(F),className:"space-y-8",children:[e.jsx(_,{control:i.control,name:"dob",render:({field:s})=>e.jsxs(P,{className:"flex flex-col",children:[e.jsx(M,{children:"Date of birth"}),e.jsxs(q,{children:[e.jsx(A,{asChild:!0,children:e.jsx(T,{children:e.jsxs(c,{variant:"outline",className:R("w-[240px] pl-3 text-left font-normal",!s.value&&"text-muted-foreground"),children:[s.value?C(s.value,"PPP"):e.jsx("span",{children:"Pick a date"}),e.jsx(B,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(E,{className:"w-auto p-0",align:"start",children:e.jsx(j,{...r,selected:s.value,onSelect:s.onChange,disabled:m=>m>new Date||m<new Date("1900-01-01"),initialFocus:!0})})]}),e.jsx(W,{children:"Your date of birth is used to calculate your age."}),e.jsx(I,{})]})}),e.jsx(c,{type:"submit",children:"Submit"})]})})}try{d.displayName="CalendarForm",d.__docgenInfo={description:"",displayName:"CalendarForm",props:{}}}catch{}const be={title:"BlackBox/Calendar",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mode:{control:"select",options:["single","multiple","range","default"],description:"Selection type of the date picker"},className:{control:"text",description:"The CSS class to add to the container element. To change the name of the class instead, use `classNames.root`."},classNames:{control:"object",description:`Change the class names of the HTML elements.
 Use this prop when you need to change the default class names — for example when using CSS modules.`},defaultMonth:{control:"date",description:"The month displayed in the calendar. As opposed to {@link DayPickerBase.defaultMonth}, use this prop with {@link DayPickerBase.onMonthChange} to change the month programmatically."},numberOfMonths:{control:"number",description:"The number of displayed months. @defaultValue 1"},showOutsideDays:{control:"boolean",description:`Show the week numbers column. Weeks are numbered according to the local week index.
 - to use ISO week numbering, use the {@link ISOWeek} prop.
 - to change how the week numbers are displayed, use the {@link Formatters} prop.
@see  {@link ISOWeek}, {@link weekStartsOn} and {@link firstWeekContainsDate}.
@defaultValue false`},weekStartsOn:{control:"select",options:["0","1","2","3","4","5","6"],description:"The day of January, which is always in the first week of the year. Can be either Monday (`1`) or Thursday (`4`).\n@see https://date-fns.org/docs/getWeek\n@see https://en.wikipedia.org/wiki/Week#Numbering\n@see {@link ISOWeek}."}}},a={args:{mode:"default",className:"rounded-md border shadow",showOutsideDays:!0,classNames:{}}},o={args:{mode:"multiple",className:"rounded-md border shadow",showOutsideDays:!0,classNames:{}}},t={args:{mode:"range",className:"rounded-md border shadow",showOutsideDays:!0,classNames:{}}},n={render:r=>e.jsx("div",{children:e.jsx(d,{...r})}),args:{mode:"default",className:"",showOutsideDays:!0,classNames:{}}};var u,p,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: "default",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {}
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,f,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: "multiple",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {}
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,b,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: "range",
    className: "rounded-md border shadow",
    showOutsideDays: true,
    classNames: {}
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,k,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div>
      <CalendarForm {...args} />
    </div>,
  args: {
    mode: "default",
    className: "",
    showOutsideDays: true,
    classNames: {}
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const ye=["Single","Multiple","Range","WithForm"];export{o as Multiple,t as Range,a as Single,n as WithForm,ye as __namedExportsOrder,be as default};
