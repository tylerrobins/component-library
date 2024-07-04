import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{B as w}from"./button-C5Vfupqw.js";import{r}from"./index-CleY8y_P.js";import{c as n}from"./utils-8RyR4BqC.js";import{I as X}from"./input-BogIqK8Y.js";import{L as T}from"./label-p2dGKIr_.js";import{S as $,a as G,b as J,c as Q,d as x}from"./select-B1xNsqKv.js";import{B as Z,b as ee}from"./react-icons.esm-B7_ZKjrr.js";import{u as te,c as se}from"./index-CRjgN0eO.js";import{u as ae}from"./index-1PiYJVay.js";import{c as re,P as Y}from"./index-BUwirNCq.js";import{u as ne}from"./index-mE8aEH4R.js";import{u as oe}from"./index-DOFQCb2T.js";import"./index-Bb4qSo10.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2jgcCTd.js";import"./index-DSu0jbuC.js";import"./index-BBUPqgzG.js";import"./index-BFj9zJkO.js";import"./index-AUzbzXwX.js";import"./index-DF5SYaCP.js";import"./index-BCbxt7xm.js";import"./index-wt3N3kzb.js";import"./chevron-down-DmK9nTZU.js";import"./createLucideIcon-kBjshEDv.js";import"./check-D2cwZkjZ.js";const N=r.forwardRef(({className:t,...a},s)=>e.jsx("div",{ref:s,className:n("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a}));N.displayName="Card";const y=r.forwardRef(({className:t,...a},s)=>e.jsx("div",{ref:s,className:n("flex flex-col space-y-1.5 p-6",t),...a}));y.displayName="CardHeader";const S=r.forwardRef(({className:t,...a},s)=>e.jsx("h3",{ref:s,className:n("text-2xl font-semibold leading-none tracking-tight",t),...a}));S.displayName="CardTitle";const k=r.forwardRef(({className:t,...a},s)=>e.jsx("p",{ref:s,className:n("text-sm text-muted-foreground",t),...a}));k.displayName="CardDescription";const _=r.forwardRef(({className:t,...a},s)=>e.jsx("div",{ref:s,className:n("p-6 pt-0",t),...a}));_.displayName="CardContent";const I=r.forwardRef(({className:t,...a},s)=>e.jsx("div",{ref:s,className:n("flex items-center p-6 pt-0",t),...a}));I.displayName="CardFooter";try{N.displayName="Card",N.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}var B="Switch",[ie,Ye]=re(B),[ce,le]=ie(B),A=r.forwardRef((t,a)=>{const{__scopeSwitch:s,name:o,checked:i,defaultChecked:p,required:d,disabled:c,value:m="on",onCheckedChange:C,...P}=t,[l,j]=r.useState(null),K=ae(a,f=>j(f)),b=r.useRef(!1),R=l?!!l.closest("form"):!0,[u=!1,U]=te({prop:i,defaultProp:p,onChange:C});return e.jsxs(ce,{scope:s,checked:u,disabled:c,children:[e.jsx(Y.button,{type:"button",role:"switch","aria-checked":u,"aria-required":d,"data-state":V(u),"data-disabled":c?"":void 0,disabled:c,value:m,...P,ref:K,onClick:se(t.onClick,f=>{U(W=>!W),R&&(b.current=f.isPropagationStopped(),b.current||f.stopPropagation())})}),R&&e.jsx(de,{control:l,bubbles:!b.current,name:o,value:m,checked:u,required:d,disabled:c,style:{transform:"translateX(-100%)"}})]})});A.displayName=B;var q="SwitchThumb",O=r.forwardRef((t,a)=>{const{__scopeSwitch:s,...o}=t,i=le(q,s);return e.jsx(Y.span,{"data-state":V(i.checked),"data-disabled":i.disabled?"":void 0,...o,ref:a})});O.displayName=q;var de=t=>{const{control:a,checked:s,bubbles:o=!0,...i}=t,p=r.useRef(null),d=ne(s),c=oe(a);return r.useEffect(()=>{const m=p.current,C=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(C,"checked").set;if(d!==s&&l){const j=new Event("click",{bubbles:o});l.call(m,s),m.dispatchEvent(j)}},[d,s,o]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...i,tabIndex:-1,ref:p,style:{...t.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function V(t){return t?"checked":"unchecked"}var z=A,me=O;const v=r.forwardRef(({className:t,...a},s)=>e.jsx(z,{className:n("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...a,ref:s,children:e.jsx(me,{className:n("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));v.displayName=z.displayName;try{v.displayName="Switch",v.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ae={title:"BlackBox/Card",component:N,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Class added to the Card"},children:{control:void 0,description:"Card content"}}},h={args:{className:"w-[350px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(S,{children:"Create project"}),e.jsx(k,{children:"Deploy your new project in one-click."})]}),e.jsx(_,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(T,{htmlFor:"name",children:"Name"}),e.jsx(X,{id:"name",placeholder:"Name of your project"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(T,{htmlFor:"framework",children:"Framework"}),e.jsxs($,{children:[e.jsx(G,{id:"framework",children:e.jsx(J,{placeholder:"Select"})}),e.jsxs(Q,{position:"popper",children:[e.jsx(x,{value:"next",children:"Next.js"}),e.jsx(x,{value:"sveltekit",children:"SvelteKit"}),e.jsx(x,{value:"astro",children:"Astro"}),e.jsx(x,{value:"nuxt",children:"Nuxt.js"})]})]})]})]})})}),e.jsxs(I,{className:"flex justify-between",children:[e.jsx(w,{variant:"outline",children:"Cancel"}),e.jsx(w,{children:"Deploy"})]})]})}},pe=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],g={args:{className:"w-[380px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(S,{children:"Notifications"}),e.jsx(k,{children:"You have 3 unread messages."})]}),e.jsxs(_,{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[e.jsx(Z,{}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Push Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Send notifications to device."})]}),e.jsx(v,{})]}),e.jsx("div",{children:pe.map((t,a)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:t.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:t.description})]})]},a))})]}),e.jsx(I,{children:e.jsxs(w,{className:"w-full",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Mark all as read"]})})]})}};var F,D,E;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,L,M;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const qe=["Default","Notifications"];export{h as Default,g as Notifications,qe as __namedExportsOrder,Ae as default};
