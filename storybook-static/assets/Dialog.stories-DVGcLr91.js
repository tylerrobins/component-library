import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{D as v,a as t,b as l,c,d,e as m,f as N,g as C}from"./dialog-C8NdrF-4.js";import{B as a}from"./button-Cp_m9PNF.js";import{I as r}from"./input-BogIqK8Y.js";import{L as o}from"./label-p2dGKIr_.js";import{c as b}from"./createLucideIcon-kBjshEDv.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CdDZsoTU.js";import"./index-CRjgN0eO.js";import"./index-BUwirNCq.js";import"./index-C2jgcCTd.js";import"./index-1PiYJVay.js";import"./index-DF5SYaCP.js";import"./index-TihjqAgY.js";import"./index-AUzbzXwX.js";import"./index-BRjJqqTI.js";import"./index-FvTp1rED.js";import"./utils-8RyR4BqC.js";import"./x-CMV14TNj.js";import"./index-Bb4qSo10.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=b("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),K={title:"BlackBox/Dialog",component:v,parameters:{layout:"centered"},argTypes:{children:{control:void 0,description:"React child object for the Dialog"}},tags:["autodocs"]},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Open"}),e.jsx(l,{children:e.jsxs(c,{children:[e.jsx(d,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Edit Profile"})}),e.jsxs(l,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(o,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(r,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(o,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(r,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(N,{children:e.jsx(a,{type:"submit",children:"Save changes"})})]})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Share"})}),e.jsxs(l,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Share link"}),e.jsx(m,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(o,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(r,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(a,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(T,{className:"h-4 w-4"})]})]}),e.jsx(N,{className:"sm:justify-start",children:e.jsx(C,{asChild:!0,children:e.jsx(a,{type:"button",variant:"secondary",children:"Close"})})})]})]})}};var g,p,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </>
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,x,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </>
  }
}`,...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var y,j,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </>
  }
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const Q=["Default","EditProfileDialog","CustomCloseButton"];export{i as CustomCloseButton,s as Default,n as EditProfileDialog,Q as __namedExportsOrder,K as default};
