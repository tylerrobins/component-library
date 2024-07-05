import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as l}from"./index-CleY8y_P.js";import{c as w}from"./index-DW48STyt.js";import{c as ae}from"./index-DaMBuB3t.js";import{c as G,R as re,I as se}from"./index-CU-B850s.js";import{P as ne}from"./index-BvbQAose.js";import{P as y}from"./index-BflAudCn.js";import{u as te}from"./index-BBUPqgzG.js";import{u as oe}from"./index-WXvbiXxm.js";import{u as ie}from"./index-D0F8yUy8.js";import{c as N}from"./utils-8RyR4BqC.js";import{C as F,a as L,b as A,c as P,d as V,e as R}from"./card-CG3aRKE4.js";import{B as S}from"./button-C5Vfupqw.js";import{I as v}from"./input-BogIqK8Y.js";import{L as C}from"./label-b41m3Z3D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BJdLDmjZ.js";import"./index-1PiYJVay.js";import"./index-BbYVhFH8.js";import"./index-Cytgc9eF.js";import"./index-DBNrNBDr.js";import"./index-Bb4qSo10.js";var _="Tabs",[ce,Re]=ae(_,[G]),H=G(),[de,I]=ce(_),q=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:n,onValueChange:i,defaultValue:d,orientation:t="horizontal",dir:u,activationMode:f="automatic",...b}=a,c=te(u),[o,g]=oe({prop:n,onChange:i,defaultProp:d});return e.jsx(de,{scope:s,baseId:ie(),value:o,onValueChange:g,orientation:t,dir:c,activationMode:f,children:e.jsx(y.div,{dir:c,"data-orientation":t,...b,ref:r})})});q.displayName=_;var K="TabsList",O=l.forwardRef((a,r)=>{const{__scopeTabs:s,loop:n=!0,...i}=a,d=I(K,s),t=H(s);return e.jsx(re,{asChild:!0,...t,orientation:d.orientation,dir:d.dir,loop:n,children:e.jsx(y.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:r})})});O.displayName=K;var U="TabsTrigger",z=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:n,disabled:i=!1,...d}=a,t=I(U,s),u=H(s),f=W(t.baseId,n),b=X(t.baseId,n),c=n===t.value;return e.jsx(se,{asChild:!0,...u,focusable:!i,active:c,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":b,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:f,...d,ref:r,onMouseDown:w(a.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?t.onValueChange(n):o.preventDefault()}),onKeyDown:w(a.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&t.onValueChange(n)}),onFocus:w(a.onFocus,()=>{const o=t.activationMode!=="manual";!c&&!i&&o&&t.onValueChange(n)})})})});z.displayName=U;var J="TabsContent",Q=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:n,forceMount:i,children:d,...t}=a,u=I(J,s),f=W(u.baseId,n),b=X(u.baseId,n),c=n===u.value,o=l.useRef(c);return l.useEffect(()=>{const g=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(ne,{present:i||c,children:({present:g})=>e.jsx(y.div,{"data-state":c?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":f,hidden:!g,id:b,tabIndex:0,...t,ref:r,style:{...a.style,animationDuration:o.current?"0s":void 0},children:g&&d})})});Q.displayName=J;function W(a,r){return`${a}-trigger-${r}`}function X(a,r){return`${a}-content-${r}`}var le=q,Y=O,Z=z,ee=Q;const j=le,h=l.forwardRef(({className:a,...r},s)=>e.jsx(Y,{ref:s,className:N("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...r}));h.displayName=Y.displayName;const p=l.forwardRef(({className:a,...r},s)=>e.jsx(Z,{ref:s,className:N("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...r}));p.displayName=Z.displayName;const m=l.forwardRef(({className:a,...r},s)=>e.jsx(ee,{ref:s,className:N("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...r}));m.displayName=ee.displayName;try{j.displayName="Tabs",j.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="TabsTrigger",p.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="TabsContent",m.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Se={title:"BlackBox/Tabs",component:j,parameters:{layout:"centered"},argTypes:{className:{control:"text"},defaultValue:{control:"text"},children:{control:void 0}},tags:["autodocs"]},x={args:{defaultValue:"account",className:"w-[400px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx(p,{value:"account",children:"Account"}),e.jsx(p,{value:"password",children:"Password"})]}),e.jsx(m,{value:"account",children:"Make changes to your account here."}),e.jsx(m,{value:"password",children:"Change your password here."})]})}},T={args:{defaultValue:"account",className:"w-[400px]",children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{className:"grid w-full grid-cols-2",children:[e.jsx(p,{value:"account",children:"Account"}),e.jsx(p,{value:"password",children:"Password"})]}),e.jsx(m,{value:"account",children:e.jsxs(F,{children:[e.jsxs(L,{children:[e.jsx(A,{children:"Account"}),e.jsx(P,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(V,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(C,{htmlFor:"name",children:"Name"}),e.jsx(v,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(C,{htmlFor:"username",children:"Username"}),e.jsx(v,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(R,{children:e.jsx(S,{children:"Save changes"})})]})}),e.jsx(m,{value:"password",children:e.jsxs(F,{children:[e.jsxs(L,{children:[e.jsx(A,{children:"Password"}),e.jsx(P,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(V,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(C,{htmlFor:"current",children:"Current password"}),e.jsx(v,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(C,{htmlFor:"new",children:"New password"}),e.jsx(v,{id:"new",type:"password"})]})]}),e.jsx(R,{children:e.jsx(S,{children:"Save password"})})]})})]})}};var D,E,M;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    defaultValue: "account",
    className: "w-[400px]",
    children: <>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </>
  }
}`,...(M=(E=x.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,B,$;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: "account",
    className: "w-[400px]",
    children: <>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </>
  }
}`,...($=(B=T.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const De=["Default","Example"];export{x as Default,T as Example,De as __namedExportsOrder,Se as default};
