import{r as o}from"./index-CleY8y_P.js";import{u as I,c as O}from"./index-CRjgN0eO.js";import{c as S,P as b,u as D}from"./index-BUwirNCq.js";import{u as M}from"./index-1PiYJVay.js";import{P as L}from"./index-FvTp1rED.js";import{u as k}from"./index-DF5SYaCP.js";import{j as c}from"./jsx-runtime-CGpYA4L6.js";var v="Collapsible",[F,U]=S(v),[B,g]=F(v),T=o.forwardRef((e,s)=>{const{__scopeCollapsible:r,open:a,defaultOpen:t,disabled:l,onOpenChange:i,...f}=e,[d=!1,p]=I({prop:a,defaultProp:t,onChange:i});return c.jsx(B,{scope:r,disabled:l,contentId:k(),open:d,onOpenToggle:o.useCallback(()=>p(m=>!m),[p]),children:c.jsx(b.div,{"data-state":R(d),"data-disabled":l?"":void 0,...f,ref:s})})});T.displayName=v;var j="CollapsibleTrigger",w=o.forwardRef((e,s)=>{const{__scopeCollapsible:r,...a}=e,t=g(j,r);return c.jsx(b.button,{type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":R(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled,...a,ref:s,onClick:O(e.onClick,t.onOpenToggle)})});w.displayName=j;var x="CollapsibleContent",A=o.forwardRef((e,s)=>{const{forceMount:r,...a}=e,t=g(x,e.__scopeCollapsible);return c.jsx(L,{present:r||t.open,children:({present:l})=>c.jsx(G,{...a,ref:s,present:l})})});A.displayName=x;var G=o.forwardRef((e,s)=>{const{__scopeCollapsible:r,present:a,children:t,...l}=e,i=g(x,r),[f,d]=o.useState(a),p=o.useRef(null),m=M(s,p),h=o.useRef(0),P=h.current,y=o.useRef(0),N=y.current,C=i.open||f,E=o.useRef(C),u=o.useRef();return o.useEffect(()=>{const n=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(n)},[]),D(()=>{const n=p.current;if(n){u.current=u.current||{transitionDuration:n.style.transitionDuration,animationName:n.style.animationName},n.style.transitionDuration="0s",n.style.animationName="none";const _=n.getBoundingClientRect();h.current=_.height,y.current=_.width,E.current||(n.style.transitionDuration=u.current.transitionDuration,n.style.animationName=u.current.animationName),d(a)}},[i.open,a]),c.jsx(b.div,{"data-state":R(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!C,...l,ref:m,style:{"--radix-collapsible-content-height":P?`${P}px`:void 0,"--radix-collapsible-content-width":N?`${N}px`:void 0,...e.style},children:C&&t})});function R(e){return e?"open":"closed"}var V=T,W=w,X=A;export{w as C,V as R,W as T,A as a,X as b,U as c};
