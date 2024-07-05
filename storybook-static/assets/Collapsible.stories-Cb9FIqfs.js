import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as m}from"./index-CleY8y_P.js";import{R as c,C as u,a as b}from"./index-Cl3vqbcW.js";import{B as h}from"./button-C5Vfupqw.js";import{b as x}from"./react-icons.esm-8vROIn83.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-DaMBuB3t.js";import"./index-WXvbiXxm.js";import"./index-BbYVhFH8.js";import"./index-DBNrNBDr.js";import"./index-1PiYJVay.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-BvbQAose.js";import"./index-D0F8yUy8.js";import"./index-Bb4qSo10.js";import"./utils-8RyR4BqC.js";const o=c,t=u,r=b;try{o.displayName="Collapsible",o.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="CollapsibleTrigger",t.__docgenInfo={description:"",displayName:"CollapsibleTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="CollapsibleContent",r.__docgenInfo={description:"",displayName:"CollapsibleContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Blackbox/Collapsible",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean",description:"The default state"},disabled:{control:"boolean",description:"Whether the collapsible is enabled/disabled"},asChild:{table:{disable:!0}}}},a={render:s=>{const[d,p]=m.useState(s.defaultOpen||!1);return e.jsxs(o,{...s,open:d,onOpenChange:p,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(t,{asChild:!0,children:e.jsxs(h,{variant:"ghost",size:"sm",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/primitives"}),e.jsxs(r,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@stitches/react"})]})]})},args:{defaultOpen:!1,disabled:!1}};var n,l,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = React.useState(args.defaultOpen || false);
    return <Collapsible {...args} open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>;
  },
  args: {
    defaultOpen: false,
    disabled: false
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const $=["Standard"];export{a as Standard,$ as __namedExportsOrder,z as default};
