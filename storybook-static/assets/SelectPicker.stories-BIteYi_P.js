import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as S}from"./index-BF9HgEP8.js";import{d as t}from"./design-tokens-Yam5b0Gf.js";import{S as q}from"./SelectPicker-C9R8STOk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./useCustom-xGDZc2V_.js";import"./index-BEUhGoCT.js";import"./Fade-fCFdpxve.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./canUseDOM-CEHZbOpG.js";import"./mergeRefs-Dstv1IRw.js";import"./toString-B6ipePS4.js";import"./hasIn-DFx5evFp.js";import"./Transition-D-KE_6Hy.js";import"./OverlayTrigger-BD77U1XR.js";import"./_stringToArray-C4YuUSC0.js";import"./get-DoBpDxvC.js";import"./Button-DXg0bdqQ.js";import"./SafeAnchor-Doovd2rt.js";import"./oneOf-PZnPkCb4.js";import"./addStyle-mw_AB0Sp.js";import"./_baseIteratee-CZnMOZP4.js";import"./kebabCase-52mGmbCP.js";import"./index-IiQ3Jng6.js";import"./ReactChildren-BEZRcJZl.js";import"./createChainedFunction-DrOnF2ID.js";import"./createSvgIcon-DWqCl1rG.js";import"./Input-BJeE16rz.js";import"./Plaintext-CDwakweP.js";import"./useUniqueId-IyG5iNWH.js";import"./propTypes-C9RkEgOG.js";import"./useMount-Dn6rBIdG.js";import"./useEventCallback-DFATGJdb.js";import"./useIsomorphicLayoutEffect-B5gjKS-z.js";import"./CloseButton-CN3dDXG8.js";import"./Close-C1eXYKab.js";import"./Loader-bTFMYTpW.js";import"./isString-B--2tE0B.js";import"./getHeight-C7CokI8H.js";import"./ScrollView-BkW7oHvt.js";import"./shallowEqual-TdB9YEW_.js";import"./Stack-DGxtqjfu.js";import"./BrowserDetection-BCe25-UL.js";import"./useToggleCaret-DFiS4a00.js";import"./ArrowDownLine-BHrLt-eh.js";import"./ArrowRightLine-ChQ9NMIn.js";const r=({size:l="md",label:i,helperText:o,error:a,style:n,className:V,...g})=>{const C={display:g.block?"block":"inline-block",width:g.block?"100%":"auto",marginBottom:o||a?t.spacing.sm:0},G={display:"block",marginBottom:t.spacing.xs,fontSize:t.fontSize.sm,fontWeight:t.fontWeight.medium,color:t.semanticColors.text.primary},h={display:"block",marginTop:t.spacing.xs,fontSize:t.fontSize.xs,color:a?t.semanticColors.feedback.error:t.semanticColors.text.secondary},W={...n};return e.jsxs("div",{style:C,className:V,children:[i&&e.jsx("label",{style:G,children:i}),e.jsx(q,{size:l,style:W,className:`ds-select-picker ds-select-picker--${l} ${a?"ds-select-picker--error":""}`,...g}),a&&e.jsx("span",{style:h,children:a}),!a&&o&&e.jsx("span",{style:h,children:o})]})};r.displayName="SelectPicker";try{r.displayName="SelectPicker",r.__docgenInfo={description:`Custom SelectPicker Component

A design system-ready select picker that wraps RSuite SelectPicker.`,displayName:"SelectPicker",props:{size:{defaultValue:{value:"md"},description:"Size of the picker",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label for the picker",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}}}}}catch{}const Me={title:"Components/SelectPicker",component:r,parameters:{layout:"centered",docs:{description:{component:"A select picker component for selecting a value from a list of options."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Size of the picker",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state"},searchable:{control:"boolean",description:"Whether to show search input",table:{defaultValue:{summary:"true"}}}}},s=[{label:"Eugenia",value:"Eugenia",role:"Master"},{label:"Kariane",value:"Kariane",role:"Master"},{label:"Louisa",value:"Louisa",role:"Master"},{label:"Marty",value:"Marty",role:"Master"},{label:"Kenya",value:"Kenya",role:"Master"},{label:"Hal",value:"Hal",role:"Developer"},{label:"Julius",value:"Julius",role:"Developer"},{label:"Travon",value:"Travon",role:"Developer"},{label:"Vincenza",value:"Vincenza",role:"Developer"},{label:"Dominic",value:"Dominic",role:"Developer"},{label:"Pearlie",value:"Pearlie",role:"Guest"},{label:"Tyrel",value:"Tyrel",role:"Guest"},{label:"Jaylen",value:"Jaylen",role:"Guest"},{label:"Rrogers",value:"Rrogers",role:"Guest"}],c={args:{data:s,placeholder:"Select User",style:{width:224}}},p={args:{data:s,label:"Assignee",helperText:"Select a user to assign this task to",placeholder:"Select User",style:{width:224}}},d={args:{data:s,label:"Assignee",error:"Please select an assignee",placeholder:"Select User",style:{width:224}}},m={args:{data:s,groupBy:"role",placeholder:"Select User by Role",style:{width:224}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t.spacing.md},children:[e.jsx(r,{data:s,size:"xs",placeholder:"Extra Small",style:{width:224}}),e.jsx(r,{data:s,size:"sm",placeholder:"Small",style:{width:224}}),e.jsx(r,{data:s,size:"md",placeholder:"Medium",style:{width:224}}),e.jsx(r,{data:s,size:"lg",placeholder:"Large",style:{width:224}})]})},y={render:()=>{const[l,i]=S.useState([]),[o,a]=S.useState(!1),n=()=>{a(!0),setTimeout(()=>{i(s),a(!1)},1500)};return e.jsx(r,{data:l,loading:o,onOpen:n,onSearch:n,placeholder:"Select User (Async)",style:{width:224}})}};var b,f,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    placeholder: 'Select User',
    style: {
      width: 224
    }
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,v,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    label: 'Assignee',
    helperText: 'Select a user to assign this task to',
    placeholder: 'Select User',
    style: {
      width: 224
    }
  }
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,D,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data,
    label: 'Assignee',
    error: 'Please select an assignee',
    placeholder: 'Select User',
    style: {
      width: 224
    }
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var j,T,L;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data,
    groupBy: 'role',
    placeholder: 'Select User by Role',
    style: {
      width: 224
    }
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var A,R,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.md
  }}>
            <SelectPicker data={data} size="xs" placeholder="Extra Small" style={{
      width: 224
    }} />
            <SelectPicker data={data} size="sm" placeholder="Small" style={{
      width: 224
    }} />
            <SelectPicker data={data} size="md" placeholder="Medium" style={{
      width: 224
    }} />
            <SelectPicker data={data} size="lg" placeholder="Large" style={{
      width: 224
    }} />
        </div>
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,E,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);
    const updateData = () => {
      setLoading(true);
      setTimeout(() => {
        setItems(data);
        setLoading(false);
      }, 1500);
    };
    return <SelectPicker data={items} loading={loading} onOpen={updateData} onSearch={updateData} placeholder="Select User (Async)" style={{
      width: 224
    }} />;
  }
}`,...(M=(E=y.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const Ve=["Default","WithLabel","ErrorState","Grouped","Sizes","AsyncData"];export{y as AsyncData,c as Default,d as ErrorState,m as Grouped,u as Sizes,p as WithLabel,Ve as __namedExportsOrder,Me as default};
