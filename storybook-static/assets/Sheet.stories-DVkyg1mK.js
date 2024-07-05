import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as d}from"./index-CleY8y_P.js";import{O as j,C as v,a as b,T,D as C,R as F,b as B,P as I}from"./index-g5OYk8e-.js";import{c as R}from"./index-Bb4qSo10.js";import{c as r}from"./utils-8RyR4BqC.js";import{X as L}from"./x-CMV14TNj.js";import{B as p}from"./button-C5Vfupqw.js";import{I as h}from"./input-BogIqK8Y.js";import{L as u}from"./label-b41m3Z3D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-1PiYJVay.js";import"./index-DaMBuB3t.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-WXvbiXxm.js";import"./index-BbYVhFH8.js";import"./index-DK4nl9q8.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-B41ILiX7.js";import"./index-DirRZWZs.js";import"./index-BvbQAose.js";import"./createLucideIcon-kBjshEDv.js";const w=F,D=B,O=b,P=I,_=d.forwardRef(({className:t,...a},s)=>e.jsx(j,{className:r("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a,ref:s}));_.displayName=j.displayName;const z=R("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),l=d.forwardRef(({side:t="right",className:a,children:s,...H},k)=>e.jsxs(P,{children:[e.jsx(_,{}),e.jsxs(v,{ref:k,className:r(z({side:t}),a),...H,children:[s,e.jsxs(b,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));l.displayName=v.displayName;const o=({className:t,...a})=>e.jsx("div",{className:r("flex flex-col space-y-2 text-center sm:text-left",t),...a});o.displayName="SheetHeader";const E=({className:t,...a})=>e.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a});E.displayName="SheetFooter";const c=d.forwardRef(({className:t,...a},s)=>e.jsx(T,{ref:s,className:r("text-lg font-semibold text-foreground",t),...a}));c.displayName=T.displayName;const m=d.forwardRef(({className:t,...a},s)=>e.jsx(C,{ref:s,className:r("text-sm text-muted-foreground",t),...a}));m.displayName=C.displayName;try{o.displayName="SheetHeader",o.__docgenInfo={description:"",displayName:"SheetHeader",props:{}}}catch{}const me={title:"BlackBox/Sheet",component:w,parameters:{layout:"centered"},argTypes:{children:{control:void 0}},tags:["autodocs"]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(D,{children:"Open"}),e.jsx(l,{children:e.jsxs(o,{children:[e.jsx(c,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})}},A=["top","right","bottom","left"];function i(){return e.jsx("div",{className:"grid grid-cols-2 gap-2",children:A.map(t=>e.jsxs(w,{children:[e.jsx(D,{asChild:!0,children:e.jsx(p,{variant:"outline",children:t})}),e.jsxs(l,{side:t,children:[e.jsxs(o,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(h,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(h,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(E,{children:e.jsx(O,{asChild:!0,children:e.jsx(p,{type:"submit",children:"Save changes"})})})]})]},t))})}var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </>
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,y,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`function SheetSide() {
  return <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>)}
    </div>;
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const pe=["Default","SheetSide"];export{n as Default,i as SheetSide,pe as __namedExportsOrder,me as default};
