import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as j}from"./Loader-bTFMYTpW.js";import{d as v}from"./design-tokens-Yam5b0Gf.js";import"./useCustom-xGDZc2V_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BF9HgEP8.js";import"./index-BEUhGoCT.js";import"./useUniqueId-IyG5iNWH.js";import"./toString-B6ipePS4.js";import"./oneOf-PZnPkCb4.js";const o=({size:r="md",style:z,className:h,...b})=>{const S={...z};return e.jsx(j,{size:r,style:S,className:`ds-loader ds-loader--${r} ${h||""}`,...b})};o.displayName="Loader";try{o.displayName="Loader",o.__docgenInfo={description:`Custom Loader Component

A design system-ready loader that wraps RSuite Loader.`,displayName:"Loader",props:{size:{defaultValue:{value:"md"},description:"Size of the loader",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const B={title:"Components/Loader",component:o,parameters:{layout:"centered",docs:{description:{component:"A loader component for indicating loading states."}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Loader size",table:{defaultValue:{summary:"md"}}},center:{control:"boolean",description:"Center the loader"},backdrop:{control:"boolean",description:"Show backdrop"},vertical:{control:"boolean",description:"Vertical layout"},content:{control:"text",description:"Loading text"},speed:{control:"select",options:["normal","fast","slow"],description:"Animation speed"}}},t={args:{content:"Loading..."}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:v.spacing.xl,alignItems:"center"},children:[e.jsx(o,{size:"xs",content:"xs"}),e.jsx(o,{size:"sm",content:"sm"}),e.jsx(o,{size:"md",content:"md"}),e.jsx(o,{size:"lg",content:"lg"})]})},a={args:{center:!0,backdrop:!0,content:"Loading...",size:"md"},decorators:[r=>e.jsx("div",{style:{height:200,width:400,border:`1px solid ${v.semanticColors.border.default}`,position:"relative"},children:e.jsx(r,{})})]},n={args:{vertical:!0,content:"Loading..."}};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: 'Loading...'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: designTokens.spacing.xl,
    alignItems: 'center'
  }}>
            <Loader size="xs" content="xs" />
            <Loader size="sm" content="sm" />
            <Loader size="md" content="md" />
            <Loader size="lg" content="lg" />
        </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    center: true,
    backdrop: true,
    content: 'Loading...',
    size: 'md'
  },
  decorators: [Story => <div style={{
    height: 200,
    width: 400,
    border: \`1px solid \${designTokens.semanticColors.border.default}\`,
    position: 'relative'
  }}>
                <Story />
            </div>]
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,L,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    vertical: true,
    content: 'Loading...'
  }
}`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const D=["Default","Sizes","CenterBackdrop","Vertical"];export{a as CenterBackdrop,t as Default,s as Sizes,n as Vertical,D as __namedExportsOrder,B as default};
