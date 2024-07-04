import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as g}from"./index-CleY8y_P.js";import{z as P,u as B,F as M,a as R,b as E,c as O,d as z,e as V,f as Y,t as _}from"./form-C7HgSUBv.js";import{c as n}from"./utils-8RyR4BqC.js";import{B as s}from"./button-Cp_m9PNF.js";import{f as o,C as p,a as T}from"./calendar-DSoKLvgD.js";import{P as l,a as f,b as x}from"./popover-DBEycZR7.js";import{S as q,a as J,b as W,c as A,d as i}from"./select-BUWvHBLv.js";import{t as $}from"./use-toast-CAMf2V-s.js";import{c as G}from"./createLucideIcon-kBjshEDv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-1PiYJVay.js";import"./label-p2dGKIr_.js";import"./index-BUwirNCq.js";import"./index-C2jgcCTd.js";import"./index-Bb4qSo10.js";import"./chevron-right-LrJNRl_k.js";import"./index-CRjgN0eO.js";import"./index-TihjqAgY.js";import"./index-AUzbzXwX.js";import"./index-DF5SYaCP.js";import"./index-BCbxt7xm.js";import"./index-DOFQCb2T.js";import"./index-BRjJqqTI.js";import"./index-FvTp1rED.js";import"./index-DSu0jbuC.js";import"./index-BBUPqgzG.js";import"./index-mE8aEH4R.js";import"./index-wt3N3kzb.js";import"./chevron-down-DmK9nTZU.js";import"./check-D2cwZkjZ.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=G("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),Fe={title:"BlackBox/DatePicker",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>{{const[t,r]=g.useState();return e.jsxs(l,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:n("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t?o(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(x,{className:"w-auto p-0",children:e.jsx(p,{mode:"single",selected:t,onSelect:r,initialFocus:!0})})]})}}},c={render:()=>{const[t,r]=g.useState({from:new Date(2022,0,20),to:T(new Date(2022,0,20),20)});return e.jsx("div",{className:n("grid gap-2"),children:e.jsxs(l,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(s,{id:"date",variant:"outline",className:n("w-[300px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t!=null&&t.from?t.to?e.jsxs(e.Fragment,{children:[o(t.from,"LLL dd, y")," -"," ",o(t.to,"LLL dd, y")]}):o(t.from,"LLL dd, y"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(x,{className:"w-auto p-0",align:"start",children:e.jsx(p,{initialFocus:!0,mode:"range",defaultMonth:t==null?void 0:t.from,selected:t,onSelect:r,numberOfMonths:2})})]})})}},m={render:()=>{const[t,r]=g.useState();return e.jsxs(l,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:n("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t?o(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsxs(x,{className:"flex w-auto flex-col space-y-2 p-2",children:[e.jsxs(q,{onValueChange:a=>r(T(new Date,parseInt(a))),children:[e.jsx(J,{children:e.jsx(W,{placeholder:"Select"})}),e.jsxs(A,{position:"popper",children:[e.jsx(i,{value:"0",children:"Today"}),e.jsx(i,{value:"1",children:"Tomorrow"}),e.jsx(i,{value:"3",children:"In 3 days"}),e.jsx(i,{value:"7",children:"In a week"})]})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx(p,{mode:"single",selected:t,onSelect:r})})]})]})}},H=P.object({dob:P.date({required_error:"A date of birth is required."})}),u={render:()=>{const t=B({resolver:_(H)});function r(a){$({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(a,null,2)})})})}return e.jsx(M,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"space-y-8",children:[e.jsx(R,{control:t.control,name:"dob",render:({field:a})=>e.jsxs(E,{className:"flex flex-col",children:[e.jsx(O,{children:"Date of birth"}),e.jsxs(l,{children:[e.jsx(f,{asChild:!0,children:e.jsx(z,{children:e.jsxs(s,{variant:"outline",className:n("w-[240px] pl-3 text-left font-normal",!a.value&&"text-muted-foreground"),children:[a.value?o(a.value,"PPP"):e.jsx("span",{children:"Pick a date"}),e.jsx(h,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(x,{className:"w-auto p-0",align:"start",children:e.jsx(p,{mode:"single",selected:a.value,onSelect:a.onChange,disabled:v=>v>new Date||v<new Date("1900-01-01"),initialFocus:!0})})]}),e.jsx(V,{children:"Your date of birth is used to calculate your age."}),e.jsx(Y,{})]})}),e.jsx(s,{type:"submit",children:"Submit"})]})})}};var j,S,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    {
      const [date, setDate] = React.useState<Date>();
      return <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>;
    }
  }
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,C,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20)
    });
    return <div className={cn("grid gap-2")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? date.to ? <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </> : format(date.from, "LLL dd, y") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var F,b,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date>();
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <Select onValueChange={value => setDate(addDays(new Date(), parseInt(value)))}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...(D=(b=m.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var I,L,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control} name="dob" render={({
          field
        }) => <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  }
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const be=["DefaultPicker","RangePicker","WithPresets","FormExample"];export{d as DefaultPicker,u as FormExample,c as RangePicker,m as WithPresets,be as __namedExportsOrder,Fe as default};
