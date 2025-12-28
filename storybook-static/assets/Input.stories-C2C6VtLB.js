import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./design-tokens-Yam5b0Gf.js";import{I as _}from"./Input-BJeE16rz.js";import"./useCustom-xGDZc2V_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BF9HgEP8.js";import"./index-BEUhGoCT.js";import"./Button-DXg0bdqQ.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";import"./oneOf-PZnPkCb4.js";import"./Plaintext-CDwakweP.js";import"./index-IiQ3Jng6.js";import"./useUniqueId-IyG5iNWH.js";import"./createChainedFunction-DrOnF2ID.js";const r=({size:s="md",label:m,helperText:p,error:l,fullWidth:d=!1,style:w,className:W,...k})=>{const E={fontFamily:e.fontFamily.body,fontSize:e.inputTokens.sizes[s].fontSize,height:e.inputTokens.sizes[s].height,borderRadius:e.borderRadius.md,borderColor:l?e.semanticColors.border.error:e.semanticColors.border.default,width:d?"100%":"auto"},T={display:d?"block":"inline-block",width:d?"100%":"auto",marginBottom:p||l?e.spacing.sm:0},C={display:"block",marginBottom:e.spacing.xs,fontSize:e.fontSize.sm,fontWeight:e.fontWeight.medium,color:e.semanticColors.text.primary},c={display:"block",marginTop:e.spacing.xs,fontSize:e.fontSize.xs,color:l?e.semanticColors.text.primary:e.semanticColors.text.secondary};return l&&(c.color=e.semanticColors.feedback.error),t.jsxs("div",{style:T,className:W,children:[m&&t.jsx("label",{style:C,children:m}),t.jsx(_,{size:s,style:{...E,...w},...k}),l&&t.jsx("span",{style:c,children:l}),!l&&p&&t.jsx("span",{style:c,children:p})]})};r.displayName="Input";try{r.displayName="Input",r.__docgenInfo={description:`Custom Input Component

A design system-ready input that wraps RSuite Input with brand styling.`,displayName:"Input",props:{size:{defaultValue:{value:"md"},description:"Size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"Label for the input (if not using a separate Label component)",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text to display below the input",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message to display below the input",name:"error",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"Full width input",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile input component with design system tokens for consistent styling."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Input size",table:{defaultValue:{summary:"md"}}},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width input",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Label text"},helperText:{control:"text",description:"Helper text"},error:{control:"text",description:"Error message"}}},o={args:{placeholder:"Enter text...",size:"md"}},a={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e.spacing.lg,width:"300px"},children:[t.jsx(r,{size:"xs",placeholder:"Extra Small"}),t.jsx(r,{size:"sm",placeholder:"Small"}),t.jsx(r,{size:"md",placeholder:"Medium"}),t.jsx(r,{size:"lg",placeholder:"Large"})]})},i={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:e.spacing.lg,width:"300px"},children:[t.jsx(r,{placeholder:"Normal"}),t.jsx(r,{placeholder:"Disabled",disabled:!0}),t.jsx(r,{placeholder:"With Label",label:"Username"}),t.jsx(r,{placeholder:"With Helper",helperText:"Enter your username"}),t.jsx(r,{placeholder:"Error State",error:"This field is required"})]})},n={args:{placeholder:"Full Width Input",fullWidth:!0},decorators:[s=>t.jsx("div",{style:{width:"400px"},children:t.jsx(s,{})})]};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,y,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.lg,
    width: '300px'
  }}>
            <Input size="xs" placeholder="Extra Small" />
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,S,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.lg,
    width: '300px'
  }}>
            <Input placeholder="Normal" />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="With Label" label="Username" />
            <Input placeholder="With Helper" helperText="Enter your username" />
            <Input placeholder="Error State" error="This field is required" />
        </div>
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,j,v;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full Width Input',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
                <Story />
            </div>]
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const ee=["Default","Sizes","States","FullWidth"];export{o as Default,n as FullWidth,a as Sizes,i as States,ee as __namedExportsOrder,Z as default};
