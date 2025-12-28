import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as F,_ as H,b as J,a as b,P as t}from"./useCustom-xGDZc2V_.js";import{R as i}from"./index-BF9HgEP8.js";import{o as K}from"./oneOf-PZnPkCb4.js";import{B as M}from"./Button-kMHFPxLp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEUhGoCT.js";import"./design-tokens-Yam5b0Gf.js";import"./Button-DXg0bdqQ.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";var Q=["as","content","color","className","classPrefix","children","maxCount"],y=i.forwardRef(function(s,n){var f=F("Badge",s),r=f.propsWithDefaults,d=r.as,l=d===void 0?"div":d,a=r.content,A=r.color,G=r.className,B=r.classPrefix,V=B===void 0?"badge":B,c=r.children,h=r.maxCount,v=h===void 0?99:h,_=H(r,Q),x=J(V),I=x.withClassPrefix,L=x.prefix,q=x.merge,z=a==null,C=q(G,I(A,{independent:!c,wrapper:c,dot:z}));if(a===!1)return i.cloneElement(c,{ref:n});var N=typeof a=="number"&&a>v?v+"+":a;return c?i.createElement(l,b({},_,{ref:n,className:C}),c,i.createElement("div",{className:L("content")},N)):i.createElement(l,b({},_,{ref:n,className:C}),N)});y.displayName="Badge";y.propTypes={className:t.string,classPrefix:t.string,children:t.node,as:t.elementType,content:t.oneOfType([t.node,t.bool]),maxCount:t.number,color:K(["red","orange","yellow","green","cyan","blue","violet"])};const o=({style:s,className:n,children:f,color:r,...d})=>{const l={...s};return e.jsx(y,{style:l,className:`ds-badge ${n||""}`,color:r,...d,children:f})};o.displayName="Badge";try{o.displayName="Badge",o.__docgenInfo={description:`Custom Badge Component

A design system-ready badge that wraps RSuite Badge.`,displayName:"Badge",props:{}}}catch{}const ge={title:"Components/Badge",component:o,parameters:{layout:"centered",docs:{description:{component:"A badge component for displaying notifications or status."}}},argTypes:{color:{control:"select",options:["red","orange","yellow","green","cyan","blue","violet"],description:"Badge color"},content:{control:"text",description:"Badge content"}}},p={args:{content:"New"}},m={args:{content:"99+"},render:s=>e.jsx(o,{...s,children:e.jsx(M,{children:"Notifications"})})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(o,{content:"Red",color:"red"}),e.jsx(o,{content:"Orange",color:"orange"}),e.jsx(o,{content:"Green",color:"green"}),e.jsx(o,{content:"Blue",color:"blue"}),e.jsx(o,{content:"Violet",color:"violet"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(o,{}),e.jsx(o,{color:"green"}),e.jsx(o,{children:e.jsx("div",{style:{width:40,height:40,background:"#f0f0f0",borderRadius:4}})})]})};var j,w,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'New'
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var P,R,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: '99+'
  },
  render: args => <Badge {...args}>
            <Button>Notifications</Button>
        </Badge>
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var E,S,T;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>
            <Badge content="Red" color="red" />
            <Badge content="Orange" color="orange" />
            <Badge content="Green" color="green" />
            <Badge content="Blue" color="blue" />
            <Badge content="Violet" color="violet" />
        </div>
}`,...(T=(S=g.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var O,$,k;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>
            <Badge />
            <Badge color="green" />
            <Badge>
                <div style={{
        width: 40,
        height: 40,
        background: '#f0f0f0',
        borderRadius: 4
      }} />
            </Badge>
        </div>
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const ue=["Default","WithContent","Colors","Dot"];export{g as Colors,p as Default,u as Dot,m as WithContent,ue as __namedExportsOrder,ge as default};
