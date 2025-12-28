import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as ae,_ as oe,b as re,a as se,P as r}from"./useCustom-xGDZc2V_.js";import{_ as j}from"./taggedTemplateLiteralLoose-i6vP4YW0.js";import{R as c}from"./index-BF9HgEP8.js";import{C as le}from"./CloseButton-CN3dDXG8.js";import{c as ce}from"./createComponent-D6GURCQO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEUhGoCT.js";import"./Close-C1eXYKab.js";import"./createSvgIcon-DWqCl1rG.js";import"./kebabCase-52mGmbCP.js";import"./toString-B6ipePS4.js";var _,z,te=["as","classPrefix","size","color","children","closable","className","locale","onClose"],T=c.forwardRef(function(s,g){var l=ae("Tag",s),o=l.propsWithDefaults,m=l.getLocale,f=o.as,V=f===void 0?"div":f,h=o.classPrefix,Y=h===void 0?"tag":h,y=o.size,k=y===void 0?"md":y,b=o.color,A=b===void 0?"default":b,q=o.children,v=o.closable,F=o.className,H=o.locale,J=o.onClose,K=oe(o,te),Q=m("common",H),U=Q.remove,u=re(Y),X=u.withClassPrefix,C=u.prefix,Z=u.merge,ee=Z(F,X(k,A,{closable:v}));return c.createElement(V,se({},K,{ref:g,className:ee}),c.createElement("span",{className:C(_||(_=j(["text"])))},q),v&&c.createElement(le,{className:C(z||(z=j(["icon-close"]))),onClick:J,tabIndex:-1,locale:{closeLabel:U}}))});T.displayName="Tag";T.propTypes={closable:r.bool,classPrefix:r.string,onClose:r.func,children:r.node,className:r.string,as:r.elementType};var ie=ce({name:"TagGroup"});const x=({style:s,className:g,children:l,...o})=>{const m={...s};return e.jsx(T,{style:m,className:`ds-tag ${g||""}`,...o,children:l})},ne=ie;x.Group=ne;x.displayName="Tag";const a=x;try{a.displayName="Tag",a.__docgenInfo={description:"",displayName:"Tag",props:{}}}catch{}const Ce={title:"Components/Tag",component:a,subcomponents:{"Tag.Group":a.Group},parameters:{layout:"centered",docs:{description:{component:"A tag component for labeling or categorization."}}},argTypes:{color:{control:"select",options:["red","orange","yellow","green","cyan","blue","violet"],description:"Tag color"},size:{control:"select",options:["lg","md","sm"],description:"Tag size"},closable:{control:"boolean",description:"Closable tag"}}},t={args:{children:"Tag"}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(a,{color:"red",children:"Red"}),e.jsx(a,{color:"orange",children:"Orange"}),e.jsx(a,{color:"yellow",children:"Yellow"}),e.jsx(a,{color:"green",children:"Green"}),e.jsx(a,{color:"cyan",children:"Cyan"}),e.jsx(a,{color:"blue",children:"Blue"}),e.jsx(a,{color:"violet",children:"Violet"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(a,{size:"lg",children:"Large"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"sm",children:"Small"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(a,{closable:!0,children:"Closable"}),e.jsx(a,{closable:!0,color:"red",children:"Closable Red"})]})},p={render:()=>e.jsxs(a.Group,{children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"})]})};var N,G,L;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var S,P,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 10
  }}>
            <Tag color="red">Red</Tag>
            <Tag color="orange">Orange</Tag>
            <Tag color="yellow">Yellow</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="cyan">Cyan</Tag>
            <Tag color="blue">Blue</Tag>
            <Tag color="violet">Violet</Tag>
        </div>
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,R,W;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  }}>
            <Tag size="lg">Large</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="sm">Small</Tag>
        </div>
}`,...(W=(R=n.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var $,E,O;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 10
  }}>
            <Tag closable>Closable</Tag>
            <Tag closable color="red">Closable Red</Tag>
        </div>
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var I,B,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Tag.Group>
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 3</Tag>
        </Tag.Group>
}`,...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const je=["Default","Colors","Sizes","Closable","Group"];export{d as Closable,i as Colors,t as Default,p as Group,n as Sizes,je as __namedExportsOrder,Ce as default};
