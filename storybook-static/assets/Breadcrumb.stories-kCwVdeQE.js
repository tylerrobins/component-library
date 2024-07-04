import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as m}from"./index-CleY8y_P.js";import{S as g}from"./index-1PiYJVay.js";import{c as s}from"./utils-8RyR4BqC.js";import{C as w}from"./chevron-right-LrJNRl_k.js";import{c as N}from"./createLucideIcon-kBjshEDv.js";import{D as y,a as D,b as I,c as i}from"./dropdown-menu-y34kZjI6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CRjgN0eO.js";import"./index-BUwirNCq.js";import"./index-C2jgcCTd.js";import"./index-DvMrJWEt.js";import"./index-DSu0jbuC.js";import"./index-BBUPqgzG.js";import"./index-BFj9zJkO.js";import"./index-AUzbzXwX.js";import"./index-DF5SYaCP.js";import"./index-BCbxt7xm.js";import"./index-DOFQCb2T.js";import"./index-FvTp1rED.js";import"./check-D2cwZkjZ.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=N("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),t=m.forwardRef(({...r},a)=>e.jsx("nav",{ref:a,"aria-label":"breadcrumb",...r}));t.displayName="Breadcrumb";const x=m.forwardRef(({className:r,...a},n)=>e.jsx("ol",{ref:n,className:s("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",r),...a}));x.displayName="BreadcrumbList";const o=m.forwardRef(({className:r,...a},n)=>e.jsx("li",{ref:n,className:s("inline-flex items-center gap-1.5",r),...a}));o.displayName="BreadcrumbItem";const l=m.forwardRef(({asChild:r,className:a,...n},h)=>{const j=r?g:"a";return e.jsx(j,{ref:h,className:s("transition-colors hover:text-foreground",a),...n})});l.displayName="BreadcrumbLink";const B=m.forwardRef(({className:r,...a},n)=>e.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:s("font-normal text-foreground",r),...a}));B.displayName="BreadcrumbPage";const d=({children:r,className:a,...n})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:s("[&>svg]:size-3.5",a),...n,children:r??e.jsx(w,{})});d.displayName="BreadcrumbSeparator";const f=({className:r,...a})=>e.jsxs("span",{role:"presentation","aria-hidden":"true",className:s("flex h-9 w-9 items-center justify-center",r),...a,children:[e.jsx(M,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"More"})]});f.displayName="BreadcrumbElipssis";try{t.displayName="Breadcrumb",t.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const U={title:"BlackBox/Breadcrumb",component:t,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsx(t,{children:e.jsxs(x,{children:[e.jsx(o,{children:e.jsx(l,{href:"/",children:"Home"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsxs(y,{children:[e.jsxs(D,{className:"flex items-center gap-1",children:[e.jsx(f,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),e.jsxs(I,{align:"start",children:[e.jsx(i,{children:"Documentation"}),e.jsx(i,{children:"Themes"}),e.jsx(i,{children:"GitHub"})]})]})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(l,{href:"/docs/components",children:"Components"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(B,{children:"Breadcrumb"})})]})})};var p,u,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const W=["Default"];export{c as Default,W as __namedExportsOrder,U as default};
