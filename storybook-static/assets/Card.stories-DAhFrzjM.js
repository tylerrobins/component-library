import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{B as r}from"./button-C5Vfupqw.js";import{C,a as x,b as u,c as h,d as f,e as j}from"./card-CG3aRKE4.js";import{I as g}from"./input-BogIqK8Y.js";import{L as i}from"./label-b41m3Z3D.js";import{S as v,a as S,b as w,c as y,d as t}from"./select-BhlsrONA.js";import{B as b,C as k}from"./react-icons.esm-8vROIn83.js";import{S as I}from"./switch-jHx2lBS2.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";import"./utils-8RyR4BqC.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-BJdLDmjZ.js";import"./index-DaMBuB3t.js";import"./index-BBUPqgzG.js";import"./index-DK4nl9q8.js";import"./index-BbYVhFH8.js";import"./index-B41ILiX7.js";import"./index-D0F8yUy8.js";import"./index-DBNrNBDr.js";import"./index-GiP06gZx.js";import"./index-CN2qxwlO.js";import"./index-DirRZWZs.js";import"./index-WXvbiXxm.js";import"./index-mE8aEH4R.js";import"./index-DE9U7EbF.js";import"./chevron-down-DmK9nTZU.js";import"./createLucideIcon-kBjshEDv.js";import"./check-D2cwZkjZ.js";const ce={title:"BlackBox/Card",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Class added to the Card"},children:{control:void 0,description:"Card content"}}},s={args:{className:"w-[350px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(u,{children:"Create project"}),e.jsx(h,{children:"Deploy your new project in one-click."})]}),e.jsx(f,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(i,{htmlFor:"name",children:"Name"}),e.jsx(g,{id:"name",placeholder:"Name of your project"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(i,{htmlFor:"framework",children:"Framework"}),e.jsxs(v,{children:[e.jsx(S,{id:"framework",children:e.jsx(w,{placeholder:"Select"})}),e.jsxs(y,{position:"popper",children:[e.jsx(t,{value:"next",children:"Next.js"}),e.jsx(t,{value:"sveltekit",children:"SvelteKit"}),e.jsx(t,{value:"astro",children:"Astro"}),e.jsx(t,{value:"nuxt",children:"Nuxt.js"})]})]})]})]})})}),e.jsxs(j,{className:"flex justify-between",children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Deploy"})]})]})}},B=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],a={args:{className:"w-[380px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(u,{children:"Notifications"}),e.jsx(h,{children:"You have 3 unread messages."})]}),e.jsxs(f,{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[e.jsx(b,{}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Push Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Send notifications to device."})]}),e.jsx(I,{})]}),e.jsx("div",{children:B.map((n,N)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:n.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:n.description})]})]},N))})]}),e.jsx(j,{children:e.jsxs(r,{className:"w-full",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Mark all as read"]})})]})}};var o,l,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: "w-[350px]",
    children: <>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </>
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    className: "w-[380px]",
    children: <>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>)}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </>
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["Default","Notifications"];export{s as Default,a as Notifications,de as __namedExportsOrder,ce as default};
