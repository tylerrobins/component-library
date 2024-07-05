import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{I as B}from"./input-BogIqK8Y.js";import{L as I}from"./label-b41m3Z3D.js";import{B as D}from"./button-C5Vfupqw.js";import{z as l,u as T,F as z,a as C,b as W,c as k,d as O,e as U,f as J,t as M}from"./form-BtYfHpIZ.js";import{t as R}from"./use-toast-CAMf2V-s.js";import{w as V}from"./withToastProvider-TS5GKI8m.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-8RyR4BqC.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./index-1PiYJVay.js";import"./index-Bb4qSo10.js";import"./index-DW48STyt.js";import"./index-BJdLDmjZ.js";import"./index-DaMBuB3t.js";import"./index-DK4nl9q8.js";import"./index-BbYVhFH8.js";import"./index-DirRZWZs.js";import"./index-DBNrNBDr.js";import"./index-BvbQAose.js";import"./index-WXvbiXxm.js";import"./index-DE9U7EbF.js";import"./x-CMV14TNj.js";import"./createLucideIcon-kBjshEDv.js";const fe={title:"BlackBox/Input",component:B,parameters:{layout:"centered"},argTypes:{className:{control:"text",description:"Classes to be applied"},type:{control:"select",options:["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"],description:""},placeholder:{control:"text",description:"Placeholder for the input field"},id:{control:"text",description:"Input field id"},disabled:{control:"boolean",description:"Disables the input field"}},tags:["autodocs"]},t={args:{type:"email",placeholder:"Email"}},o={args:{type:"file",id:"picture"},decorators:[r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(I,{htmlFor:"picture",children:"Picture"}),e.jsx(r,{})]})]},s={args:{type:"email",placeholder:"Email",disabled:!0}},a={args:{type:"email",id:"email",placeholder:"Email"},decorators:[r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(r,{})]})]},i={args:{type:"email",placeholder:"Email"},decorators:[r=>e.jsxs("div",{className:"flex w-full max-w-sm items-center space-x-2",children:[e.jsx(r,{}),e.jsx(D,{type:"submit",children:"Subscribe"})]})]},Y=l.object({username:l.string().min(2,{message:"Username must be at least 2 characters."})}),n={render:()=>{const r=T({resolver:M(Y),defaultValues:{username:""}});function P(m){R({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(m,null,2)})})})}return e.jsx(z,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(P),className:"w-2/3 space-y-6",children:[e.jsx(C,{control:r.control,name:"username",render:({field:m})=>e.jsxs(W,{children:[e.jsx(k,{children:"Username"}),e.jsx(O,{children:e.jsx(B,{placeholder:"shadcn",...m})}),e.jsx(U,{children:"This is your public display name."}),e.jsx(J,{})]})}),e.jsx(D,{type:"submit",children:"Submit"})]})})},decorators:[V]};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Email"
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "file",
    id: "picture"
  },
  decorators: [Story => <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Story />
      </div>]
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Email",
    disabled: true
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var F,y,S;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: "email",
    id: "email",
    placeholder: "Email"
  },
  decorators: [Story => <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Story />
      </div>]
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,j,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Email"
  },
  decorators: [Story => <div className="flex w-full max-w-sm items-center space-x-2">
        <Story />
        <Button type="submit">Subscribe</Button>
      </div>]
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var N,E,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: ""
      }
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  },
  decorators: [withToastProvider]
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const xe=["Default","File","Disabled","WithLabel","WithButton","InForm"];export{t as Default,s as Disabled,o as File,n as InForm,i as WithButton,a as WithLabel,xe as __namedExportsOrder,fe as default};
