import{j as r}from"./jsx-runtime-CGpYA4L6.js";import{r as m}from"./index-CleY8y_P.js";import{S as g}from"./index-1PiYJVay.js";import{c as s}from"./utils-8RyR4BqC.js";import{C as w}from"./chevron-right-LrJNRl_k.js";import{E as N}from"./ellipsis-Bbx6_-2g.js";import{D,a as I,b as y,c as i}from"./dropdown-menu-Vq2VwwhK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-kBjshEDv.js";import"./index-DW48STyt.js";import"./index-DaMBuB3t.js";import"./index-WXvbiXxm.js";import"./index-BbYVhFH8.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-CnK-S-d_.js";import"./index-BJdLDmjZ.js";import"./index-BBUPqgzG.js";import"./index-DK4nl9q8.js";import"./index-B41ILiX7.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-GiP06gZx.js";import"./index-CN2qxwlO.js";import"./index-DirRZWZs.js";import"./index-BvbQAose.js";import"./index-CU-B850s.js";import"./check-D2cwZkjZ.js";import"./circle-CXDbpJHa.js";const t=m.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));t.displayName="Breadcrumb";const x=m.forwardRef(({className:e,...a},n)=>r.jsx("ol",{ref:n,className:s("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a}));x.displayName="BreadcrumbList";const o=m.forwardRef(({className:e,...a},n)=>r.jsx("li",{ref:n,className:s("inline-flex items-center gap-1.5",e),...a}));o.displayName="BreadcrumbItem";const p=m.forwardRef(({asChild:e,className:a,...n},h)=>{const j=e?g:"a";return r.jsx(j,{ref:h,className:s("transition-colors hover:text-foreground",a),...n})});p.displayName="BreadcrumbLink";const B=m.forwardRef(({className:e,...a},n)=>r.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:s("font-normal text-foreground",e),...a}));B.displayName="BreadcrumbPage";const d=({children:e,className:a,...n})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:s("[&>svg]:size-3.5",a),...n,children:e??r.jsx(w,{})});d.displayName="BreadcrumbSeparator";const f=({className:e,...a})=>r.jsxs("span",{role:"presentation","aria-hidden":"true",className:s("flex h-9 w-9 items-center justify-center",e),...a,children:[r.jsx(N,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"More"})]});f.displayName="BreadcrumbElipssis";try{t.displayName="Breadcrumb",t.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const er={title:"BlackBox/Breadcrumb",component:t,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>r.jsx(t,{children:r.jsxs(x,{children:[r.jsx(o,{children:r.jsx(p,{href:"/",children:"Home"})}),r.jsx(d,{}),r.jsx(o,{children:r.jsxs(D,{children:[r.jsxs(I,{className:"flex items-center gap-1",children:[r.jsx(f,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),r.jsxs(y,{align:"start",children:[r.jsx(i,{children:"Documentation"}),r.jsx(i,{children:"Themes"}),r.jsx(i,{children:"GitHub"})]})]})}),r.jsx(d,{}),r.jsx(o,{children:r.jsx(p,{href:"/docs/components",children:"Components"})}),r.jsx(d,{}),r.jsx(o,{children:r.jsx(B,{children:"Breadcrumb"})})]})})};var l,u,b;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ar=["Default"];export{c as Default,ar as __namedExportsOrder,er as default};
