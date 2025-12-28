import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./index-BF9HgEP8.js";import{_ as ee,b as te,a as W,P as i,u as ne}from"./useCustom-xGDZc2V_.js";import{C as ae}from"./Check-2AVW1vSa.js";import{C as oe}from"./Close-C1eXYKab.js";import{o as se}from"./oneOf-PZnPkCb4.js";import{R as A}from"./ReactChildren-BEZRcJZl.js";import{B as V}from"./Button-kMHFPxLp.js";import{d as R}from"./design-tokens-Yam5b0Gf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEUhGoCT.js";import"./createSvgIcon-DWqCl1rG.js";import"./Button-DXg0bdqQ.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";var ce=["as","className","classPrefix","style","itemWidth","status","icon","stepNumber","description","title"],le={finish:n.createElement(ae,null),wait:null,process:null,error:n.createElement(oe,null)},O=n.forwardRef(function(e,c){var a,r,l=e.as,x=l===void 0?"div":l,f=e.className,N=e.classPrefix,T=N===void 0?"steps-item":N,C=e.style,v=e.itemWidth,p=e.status,m=e.icon,h=e.stepNumber,I=e.description,j=e.title,$=ee(e,ce),d=te(T),_=d.merge,b=d.withClassPrefix,o=d.prefix,F=_(f,b((a={custom:m},a["status-"+p]=p,a))),k=W({width:v},C),u=n.createElement("span",{className:o("icon","icon-"+p)},p&&(r=le[p])!==null&&r!==void 0?r:h);return m&&(u=n.createElement("span",{className:o("icon")},m)),n.createElement(x,W({},$,{ref:c,className:F,style:k}),n.createElement("div",{className:o("tail")}),n.createElement("div",{className:o(["icon-wrapper",m?"custom-icon":""])},u),n.createElement("div",{className:o("content")},n.createElement("div",{className:o("title")},j),I&&n.createElement("div",{className:o("description")},I)))});O.displayName="StepItem";O.propTypes={className:i.string,classPrefix:i.string,style:i.object,itemWidth:i.oneOfType([i.number,i.string]),status:se(["finish","wait","process","error"]),icon:i.object,stepNumber:i.number,description:i.node,title:i.node};var pe=["as","classPrefix","className","children","vertical","small","current","currentStatus"],y=n.forwardRef(function(e,c){var a=ne("Steps",e),r=a.propsWithDefaults,l=r.as,x=l===void 0?"div":l,f=r.classPrefix,N=f===void 0?"steps":f,T=r.className,C=r.children,v=r.vertical,p=r.small,m=r.current,h=m===void 0?0:m,I=r.currentStatus,j=I===void 0?"process":I,$=ee(r,pe),d=te(N),_=d.merge,b=d.prefix,o=d.withClassPrefix,F=!v,k=_(T,o({small:p,vertical:v,horizontal:!v})),u=A.count(C),re=A.mapCloneElement(C,function(z,S){var ie={flexBasis:S<u-1?100/(u-1)+"%":void 0,maxWidth:S===u-1?100/u+"%":void 0},g=W({stepNumber:S+1,status:"wait",style:F?ie:void 0},z.props);return j==="error"&&S===h-1&&(g.className=b("next-error")),z.props.status||(S===h?(g.status=j,g.className=_(g.className,b("item-active"))):S<h&&(g.status="finish")),g});return n.createElement(x,W({},$,{ref:c,className:k}),re)});y.Item=O;y.displayName="Steps";y.propTypes={classPrefix:i.string,vertical:i.bool,small:i.bool,className:i.string,children:i.node,current:i.number,currentStatus:se(["finish","wait","process","error"])};const me=({current:e=0,status:c,style:a,className:r,children:l,...x})=>{const f={...a};return t.jsx(y,{current:e,status:c,style:f,className:`ds-steps ${r||""}`,...x,children:l})},B=y.Item,s=me;s.Item=B;s.displayName="Steps";try{B.displayName="StepsItem",B.__docgenInfo={description:"",displayName:"StepsItem",props:{}}}catch{}const $e={title:"Components/Steps",component:s,subcomponents:{"Steps.Item":s.Item},parameters:{layout:"centered",docs:{description:{component:"A navigation component that guides users through a process."}}},argTypes:{current:{control:"number",description:"Current step index"},status:{control:"select",options:["wait","process","finish","error"],description:"Status of current step"},vertical:{control:"boolean",description:"Vertical layout"},small:{control:"boolean",description:"Small size"}}},w={args:{current:1,style:{width:600}},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Item,{title:"Finished",description:"Description"}),t.jsx(s.Item,{title:"In Progress",description:"Description"}),t.jsx(s.Item,{title:"Waiting",description:"Description"}),t.jsx(s.Item,{title:"Waiting",description:"Description"})]})},P={args:{current:1,vertical:!0,style:{width:200}},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Item,{title:"Finished",description:"Description"}),t.jsx(s.Item,{title:"In Progress",description:"Description"}),t.jsx(s.Item,{title:"Waiting",description:"Description"})]})},D={args:{current:1,status:"error",style:{width:600}},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Item,{title:"Finished"}),t.jsx(s.Item,{title:"Error",description:"Something went wrong"}),t.jsx(s.Item,{title:"Waiting"})]})},E={render:()=>{const[e,c]=n.useState(0),a=r=>{c(r<0?0:r>3?3:r)};return t.jsxs("div",{style:{width:600},children:[t.jsxs(s,{current:e,children:[t.jsx(s.Item,{title:"First"}),t.jsx(s.Item,{title:"Second"}),t.jsx(s.Item,{title:"Third"}),t.jsx(s.Item,{title:"Fourth"})]}),t.jsx("hr",{style:{margin:`${R.spacing.lg} 0`,border:"none",borderTop:`1px solid ${R.semanticColors.border.default}`}}),t.jsxs("div",{style:{display:"flex",gap:R.spacing.sm,justifyContent:"flex-end"},children:[t.jsx(V,{onClick:()=>a(e-1),disabled:e===0,children:"Previous"}),t.jsx(V,{onClick:()=>a(e+1),disabled:e===3,variant:"primary",children:"Next"})]})]})}};var U,L,q;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    current: 1,
    style: {
      width: 600
    }
  },
  render: args => <Steps {...args}>
            <Steps.Item title="Finished" description="Description" />
            <Steps.Item title="In Progress" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
        </Steps>
}`,...(q=(L=w.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var G,H,J;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    current: 1,
    vertical: true,
    style: {
      width: 200
    }
  },
  render: args => <Steps {...args}>
            <Steps.Item title="Finished" description="Description" />
            <Steps.Item title="In Progress" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
        </Steps>
}`,...(J=(H=P.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    current: 1,
    status: 'error',
    style: {
      width: 600
    }
  },
  render: args => <Steps {...args}>
            <Steps.Item title="Finished" />
            <Steps.Item title="Error" description="Something went wrong" />
            <Steps.Item title="Waiting" />
        </Steps>
}`,...(Q=(M=D.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Y,Z;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = React.useState(0);
    const onChange = (nextStep: number) => {
      setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    return <div style={{
      width: 600
    }}>
                <Steps current={step}>
                    <Steps.Item title="First" />
                    <Steps.Item title="Second" />
                    <Steps.Item title="Third" />
                    <Steps.Item title="Fourth" />
                </Steps>
                <hr style={{
        margin: \`\${designTokens.spacing.lg} 0\`,
        border: 'none',
        borderTop: \`1px solid \${designTokens.semanticColors.border.default}\`
      }} />
                <div style={{
        display: 'flex',
        gap: designTokens.spacing.sm,
        justifyContent: 'flex-end'
      }}>
                    <Button onClick={() => onChange(step - 1)} disabled={step === 0}>
                        Previous
                    </Button>
                    <Button onClick={() => onChange(step + 1)} disabled={step === 3} variant="primary">
                        Next
                    </Button>
                </div>
            </div>;
  }
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Fe=["Default","Vertical","ErrorStatus","Interactive"];export{w as Default,D as ErrorStatus,E as Interactive,P as Vertical,Fe as __namedExportsOrder,$e as default};
