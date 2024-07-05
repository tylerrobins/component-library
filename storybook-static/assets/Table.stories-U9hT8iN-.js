import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as o}from"./index-CleY8y_P.js";import{c as n}from"./utils-8RyR4BqC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=o.forwardRef(({className:a,...t},l)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:l,className:n("w-full caption-bottom text-sm",a),...t})}));d.displayName="Table";const T=o.forwardRef(({className:a,...t},l)=>e.jsx("thead",{ref:l,className:n("[&_tr]:border-b",a),...t}));T.displayName="TableHeader";const x=o.forwardRef(({className:a,...t},l)=>e.jsx("tbody",{ref:l,className:n("[&_tr:last-child]:border-0",a),...t}));x.displayName="TableBody";const u=o.forwardRef(({className:a,...t},l)=>e.jsx("tfoot",{ref:l,className:n("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...t}));u.displayName="TableFooter";const c=o.forwardRef(({className:a,...t},l)=>e.jsx("tr",{ref:l,className:n("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...t}));c.displayName="TableRow";const r=o.forwardRef(({className:a,...t},l)=>e.jsx("th",{ref:l,className:n("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...t}));r.displayName="TableHead";const s=o.forwardRef(({className:a,...t},l)=>e.jsx("td",{ref:l,className:n("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...t}));s.displayName="TableCell";const h=o.forwardRef(({className:a,...t},l)=>e.jsx("caption",{ref:l,className:n("mt-4 text-sm text-muted-foreground",a),...t}));h.displayName="TableCaption";try{d.displayName="Table",d.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const v={title:"BlackBox/Table",component:d,parameters:{layout:"centered"},tags:["autodocs"]},y=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],i={render:()=>e.jsxs(d,{children:[e.jsx(h,{children:"A list of your recent invoices."}),e.jsx(T,{children:e.jsxs(c,{children:[e.jsx(r,{className:"w-[100px]",children:"Invoice"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Method"}),e.jsx(r,{className:"text-right",children:"Amount"})]})}),e.jsx(x,{children:y.map(a=>e.jsxs(c,{children:[e.jsx(s,{className:"font-medium",children:a.invoice}),e.jsx(s,{children:a.paymentStatus}),e.jsx(s,{children:a.paymentMethod}),e.jsx(s,{className:"text-right",children:a.totalAmount})]},a.invoice))}),e.jsx(u,{children:e.jsxs(c,{children:[e.jsx(s,{colSpan:3,children:"Total"}),e.jsx(s,{className:"text-right",children:"$2,500.00"})]})})]})};var m,b,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const w=["Default"];export{i as Default,w as __namedExportsOrder,v as default};
