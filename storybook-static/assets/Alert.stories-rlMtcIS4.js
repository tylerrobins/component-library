import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as d}from"./index-CleY8y_P.js";import{c as N}from"./index-Bb4qSo10.js";import{c as p}from"./utils-8RyR4BqC.js";import{c as A}from"./createLucideIcon-kBjshEDv.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=A("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=A("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),k=N("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),i=d.forwardRef(({className:r,variant:t,...a},j)=>e.jsx("div",{ref:j,role:"alert",className:p(k({variant:t}),r),...a}));i.displayName="Alert";const o=d.forwardRef(({className:r,...t},a)=>e.jsx("h5",{ref:a,className:p("mb-1 font-medium leading-none tracking-tight",r),...t}));o.displayName="AlertTitle";const c=d.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:p("text-sm [&_p]:leading-relaxed",r),...t}));c.displayName="AlertDescription";try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | null'}}}}}catch{}const Y={title:"BlackBox/Alert",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"],description:"The variant of the alert"},children:{control:void 0,description:"Alert content"}}},n={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"h-4 w-4"}),e.jsx(o,{children:"Alert!"}),e.jsx(c,{children:"This is the control alert..."})]})},argTypes:{children:{table:{disable:!0}}}},s={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"h-4 w-4"}),e.jsx(o,{children:"Heads up!"}),e.jsx(c,{children:"You can add components to your app using the cli."})]})},argTypes:{variant:{table:{disable:!0}},children:{table:{disable:!0}}}},l={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx(o,{children:"Error"}),e.jsx(c,{children:"Your session has expired. Please log in again."})]})},argTypes:{variant:{table:{disable:!0}},children:{table:{disable:!0}}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription>This is the control alert...</AlertDescription>
      </>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </>
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </>
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const F=["Control","Default","Destructive"];export{n as Control,s as Default,l as Destructive,F as __namedExportsOrder,Y as default};
