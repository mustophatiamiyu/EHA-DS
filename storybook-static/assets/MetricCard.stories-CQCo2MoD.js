import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as l}from"./design-tokens-Yam5b0Gf.js";import{c as D}from"./createSvgIcon-DWqCl1rG.js";import{r as s}from"./index-BF9HgEP8.js";import{C as F}from"./CheckRound-YEY7o-hH.js";import"./index-BEUhGoCT.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({value:a,label:e,icon:r,variant:o="compact",breakdown:n,className:v,style:N})=>{const b={backgroundColor:l.colors.white,borderRadius:l.borderRadius.md,padding:o==="compact"?"24px":"32px",boxShadow:l.shadows.sm,border:`1px solid ${l.colors.neutral20}`,...N},z={width:64,height:64,borderRadius:"50%",backgroundColor:l.colors.primary10,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,color:l.colors.primary50,fontSize:28},f={fontSize:o==="compact"?"36px":"48px",fontWeight:l.fontWeight.bold,color:l.colors.neutral60,lineHeight:1.2,marginBottom:8},g={fontSize:l.fontSize.md,color:l.colors.neutral60,fontWeight:l.fontWeight.regular},V={display:"flex",gap:"32px",alignItems:"center"},$={width:1,height:80,backgroundColor:l.colors.neutral20},q={display:"flex",flexDirection:"column",gap:"8px"},L={fontSize:l.fontSize.md,color:l.colors.neutral60,fontWeight:l.fontWeight.regular};return o==="detailed"&&n?t.jsx("div",{style:b,className:`ds-metric-card ds-metric-card--detailed ${v||""}`,children:t.jsxs("div",{style:V,children:[t.jsxs("div",{children:[t.jsx("div",{style:f,children:a}),t.jsx("div",{style:g,children:e})]}),t.jsx("div",{style:$}),t.jsx("div",{style:q,children:n.map((y,B)=>t.jsxs("div",{style:L,children:[y.label," (",y.value,")"]},B))})]})}):t.jsxs("div",{style:b,className:`ds-metric-card ds-metric-card--compact ${v||""}`,children:[r&&t.jsx("div",{style:z,children:r}),t.jsx("div",{style:f,children:a}),t.jsx("div",{style:g,children:e})]})};i.displayName="MetricCard";try{i.displayName="MetricCard",i.__docgenInfo={description:`MetricCard Component

A card component for displaying dashboard metrics.
Supports 3 visual variants:
- Compact with icon
- Compact without icon
- Detailed with breakdown`,displayName:"MetricCard",props:{value:{defaultValue:null,description:"Main metric value",name:"value",required:!0,type:{name:"string | number"}},label:{defaultValue:null,description:"Metric label/description",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Optional icon (for compact variant)",name:"icon",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},variant:{defaultValue:{value:"compact"},description:"Card variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"compact"'},{value:'"detailed"'}]}},breakdown:{defaultValue:null,description:"Breakdown items (for detailed variant)",name:"breakdown",required:!1,type:{name:"MetricBreakdown[]"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styles",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}function A(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function G(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){A(a,n,r[n])})}return a}var H=function(a,e){return s.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:e},a),s.createElement("path",{d:"M8 5a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 5m0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1a2 2 0 1 1-.001-3.999A2 2 0 0 1 13 8M3 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1a2 2 0 1 1-.001-3.999A2 2 0 0 1 3 8m5 0a3 3 0 0 0-3 3v4h6v-4a3 3 0 0 0-3-3m0-1a4 4 0 0 1 4 4v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a4 4 0 0 1 4-4m5 7a2 2 0 1 0 0-4V9a3 3 0 1 1 0 6zm0 0a2 2 0 1 0 0-4V9a3 3 0 1 1 0 6zM3 14v1a3 3 0 1 1 0-6v1a2 2 0 1 0 0 4m0 0v1a3 3 0 1 1 0-6v1a2 2 0 1 0 0 4"}))},U=s.forwardRef(H),E=D({as:U,ariaLabel:"peoples",category:"people",displayName:"Peoples"});function J(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function X(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){J(a,n,r[n])})}return a}var Q=function(a,e){return s.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:e},a),s.createElement("path",{d:"m4.818 4.111 3.181 3.182 3.183-3.182a.5.5 0 0 1 .707.707L8.706 7.999l3.183 3.183a.5.5 0 0 1-.707.707L7.999 8.706l-3.181 3.183a.5.5 0 0 1-.707-.707l3.182-3.183-3.182-3.181a.5.5 0 0 1 .707-.707"}),s.createElement("path",{d:"M12.323 1.268a.5.5 0 0 1-.541.841 7 7 0 1 0 2.497 2.793.5.5 0 0 1 .897-.443 8 8 0 1 1-2.852-3.191z"}))},Y=s.forwardRef(Q),Z=D({as:Y,ariaLabel:"close outline",category:"action",displayName:"CloseOutline"});const oe={title:"Components/MetricCard",component:i,parameters:{layout:"padded",docs:{description:{component:"A card component for displaying dashboard metrics with multiple variants."}}},argTypes:{variant:{control:"select",options:["compact","detailed"],description:"Card variant"},value:{control:"text",description:"Main metric value"},label:{control:"text",description:"Metric label"}}},c={args:{value:"2,420",label:"Metric Name",icon:t.jsx(E,{}),variant:"compact"}},d={args:{value:"230",label:"Failed",variant:"compact"}},u={args:{value:"7,271",label:"Total Tasks",variant:"detailed",breakdown:[{label:"Delivery Subtasks",value:"253"},{label:"Pickup Subtasks",value:"1,727"},{label:"Return Subtasks",value:"20"}]}},p={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",maxWidth:"1200px"},children:[t.jsx(i,{value:"2,420",label:"Total Users",icon:t.jsx(E,{})}),t.jsx(i,{value:"230",label:"Failed"}),t.jsx(i,{value:"1,890",label:"Completed",icon:t.jsx(F,{})}),t.jsx(i,{value:"300",label:"Pending",icon:t.jsx(Z,{})})]})},m={render:()=>t.jsx("div",{style:{maxWidth:"600px"},children:t.jsx(i,{value:"7,271",label:"Total Tasks",variant:"detailed",breakdown:[{label:"Delivery Subtasks",value:"253"},{label:"Pickup Subtasks",value:"1,727"},{label:"Return Subtasks",value:"20"}]})})};var h,x,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: '2,420',
    label: 'Metric Name',
    icon: <PeoplesIcon />,
    variant: 'compact'
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,w,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: '230',
    label: 'Failed',
    variant: 'compact'
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,M,O;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: '7,271',
    label: 'Total Tasks',
    variant: 'detailed',
    breakdown: [{
      label: 'Delivery Subtasks',
      value: '253'
    }, {
      label: 'Pickup Subtasks',
      value: '1,727'
    }, {
      label: 'Return Subtasks',
      value: '20'
    }]
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,_,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px'
  }}>
            <MetricCard value="2,420" label="Total Users" icon={<PeoplesIcon />} />
            <MetricCard value="230" label="Failed" />
            <MetricCard value="1,890" label="Completed" icon={<CheckRoundIcon />} />
            <MetricCard value="300" label="Pending" icon={<CloseOutlineIcon />} />
        </div>
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var T,W,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>
            <MetricCard value="7,271" label="Total Tasks" variant="detailed" breakdown={[{
      label: 'Delivery Subtasks',
      value: '253'
    }, {
      label: 'Pickup Subtasks',
      value: '1,727'
    }, {
      label: 'Return Subtasks',
      value: '20'
    }]} />
        </div>
}`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const ie=["CompactWithIcon","CompactWithoutIcon","Detailed","GridLayout","DetailedStandalone"];export{c as CompactWithIcon,d as CompactWithoutIcon,u as Detailed,m as DetailedStandalone,p as GridLayout,ie as __namedExportsOrder,oe as default};
