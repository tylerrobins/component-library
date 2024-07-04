import{j as T}from"./jsx-runtime-CGpYA4L6.js";import{c as _}from"./index-Bb4qSo10.js";import{c as S}from"./utils-8RyR4BqC.js";import{f as D}from"./index-4lRnP7hS.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DEUJ_QDu.js";const j=_("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s({className:o,variant:x,...C}){return T.jsx("div",{className:S(j({variant:x}),o),...C})}try{s.displayName="Badge",s.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | "outline" | "secondary" | null'}}}}}catch{}const w={title:"BlackBox/Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"The variant of the badge"},onClick:{action:"clicked",description:"Badge click handler"},children:{control:"text",description:"Badge label"}},args:{onClick:D()}},e={args:{children:"Badge",variant:"default"},argTypes:{onClick:{table:{disable:!0}}}},a={args:{children:"Badge",variant:"default"},argTypes:{variant:{table:{disable:!0}},onClick:{table:{disable:!0}}}},r={args:{children:"Badge",variant:"secondary"},argTypes:{variant:{table:{disable:!0}},onClick:{table:{disable:!0}}}},n={args:{children:"Badge",variant:"destructive"},argTypes:{variant:{table:{disable:!0}},onClick:{table:{disable:!0}}}},t={args:{children:"Badge",variant:"outline"},argTypes:{variant:{table:{disable:!0}},onClick:{table:{disable:!0}}}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  },
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    }
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "secondary"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,f,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "destructive"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,B,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "outline"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const z=["Control","Default","Secondary","Destructive","Outline"];export{e as Control,a as Default,n as Destructive,t as Outline,r as Secondary,z as __namedExportsOrder,w as default};
