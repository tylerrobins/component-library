import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{S as n}from"./switch-jHx2lBS2.js";import{B as j}from"./button-C5Vfupqw.js";import{L as y}from"./label-b41m3Z3D.js";import{z as s,u as g,F as v,a as i,b as m,c as l,e as c,d,t as N}from"./form-BtYfHpIZ.js";import{t as S}from"./use-toast-CAMf2V-s.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-1PiYJVay.js";import"./index-DaMBuB3t.js";import"./index-WXvbiXxm.js";import"./index-BbYVhFH8.js";import"./index-mE8aEH4R.js";import"./index-CN2qxwlO.js";import"./index-DBNrNBDr.js";import"./index-BflAudCn.js";import"./index-Cytgc9eF.js";import"./utils-8RyR4BqC.js";import"./index-Bb4qSo10.js";const P={title:"BlackBox/Switch",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{id:"airplane-mode"}),e.jsx(y,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},w=s.object({marketing_emails:s.boolean().default(!1).optional(),security_emails:s.boolean()});function a(){const o=g({resolver:N(w),defaultValues:{security_emails:!0}});function F(r){S({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(r,null,2)})})})}return e.jsx(v,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(F),className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Email Notifications"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{control:o.control,name:"marketing_emails",render:({field:r})=>e.jsxs(m,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(l,{className:"text-base",children:"Marketing emails"}),e.jsx(c,{children:"Receive emails about new products, features, and more."})]}),e.jsx(d,{children:e.jsx(n,{checked:r.value,onCheckedChange:r.onChange})})]})}),e.jsx(i,{control:o.control,name:"security_emails",render:({field:r})=>e.jsxs(m,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(l,{className:"text-base",children:"Security emails"}),e.jsx(c,{children:"Receive emails about your account security."})]}),e.jsx(d,{children:e.jsx(n,{checked:r.value,onCheckedChange:r.onChange,disabled:!0,"aria-readonly":!0})})]})})]})]}),e.jsx(j,{type:"submit",children:"Submit"})]})})}var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <FormField control={form.control} name="marketing_emails" render={({
            field
          }) => <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Marketing emails
                    </FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>} />
            <FormField control={form.control} name="security_emails" render={({
            field
          }) => <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Security emails</FormLabel>
                    <FormDescription>
                      Receive emails about your account security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} disabled aria-readonly />
                  </FormControl>
                </FormItem>} />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>;
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Q=["Default","SwitchForm"];export{t as Default,a as SwitchForm,Q as __namedExportsOrder,P as default};
