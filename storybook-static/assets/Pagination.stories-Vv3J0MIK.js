import{j as a}from"./jsx-runtime-CGpYA4L6.js";import{r as p}from"./index-CleY8y_P.js";import{c as t}from"./utils-8RyR4BqC.js";import{b as j}from"./button-C5Vfupqw.js";import{C as u}from"./chevron-left-CuPJilWa.js";import{C as N}from"./chevron-right-LrJNRl_k.js";import{E as y}from"./ellipsis-Bbx6_-2g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-kBjshEDv.js";const l=({className:n,...i})=>a.jsx("nav",{role:"navigation","aria-label":"pagination",className:t("mx-auto flex w-full justify-center",n),...i});l.displayName="Pagination";const d=p.forwardRef(({className:n,...i},o)=>a.jsx("ul",{ref:o,className:t("flex flex-row items-center gap-1",n),...i}));d.displayName="PaginationContent";const e=p.forwardRef(({className:n,...i},o)=>a.jsx("li",{ref:o,className:t("",n),...i}));e.displayName="PaginationItem";const s=({className:n,isActive:i,size:o="icon",...f})=>a.jsx("a",{"aria-current":i?"page":void 0,className:t(j({variant:i?"outline":"ghost",size:o}),n),...f});s.displayName="PaginationLink";const P=({className:n,...i})=>a.jsxs(s,{"aria-label":"Go to previous page",size:"default",className:t("gap-1 pl-2.5",n),...i,children:[a.jsx(u,{className:"h-4 w-4"}),a.jsx("span",{children:"Previous"})]});P.displayName="PaginationPrevious";const x=({className:n,...i})=>a.jsxs(s,{"aria-label":"Go to next page",size:"default",className:t("gap-1 pr-2.5",n),...i,children:[a.jsx("span",{children:"Next"}),a.jsx(N,{className:"h-4 w-4"})]});x.displayName="PaginationNext";const h=({className:n,...i})=>a.jsxs("span",{"aria-hidden":!0,className:t("flex h-9 w-9 items-center justify-center",n),...i,children:[a.jsx(y,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"More pages"})]});h.displayName="PaginationEllipsis";try{l.displayName="Pagination",l.__docgenInfo={description:"",displayName:"Pagination",props:{}}}catch{}const B={title:"BlackBox/Pagination",component:l,parameters:{layout:"centered"},argTypes:{className:{control:"text",description:"Class/Classes to be applied"},children:{control:void 0}},tags:["autodocs"]},r={args:{children:a.jsxs(d,{children:[a.jsx(e,{children:a.jsx(P,{href:"#"})}),a.jsx(e,{children:a.jsx(s,{href:"#",children:"1"})}),a.jsx(e,{children:a.jsx(s,{href:"#",isActive:!0,children:"2"})}),a.jsx(e,{children:a.jsx(s,{href:"#",children:"3"})}),a.jsx(e,{children:a.jsx(h,{})}),a.jsx(e,{children:a.jsx(x,{href:"#"})})]})}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,B as default};
