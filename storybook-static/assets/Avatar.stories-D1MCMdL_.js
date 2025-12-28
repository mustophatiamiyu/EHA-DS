import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as s}from"./Avatar-B9M_ILnV.js";import{c as B}from"./createSvgIcon-DWqCl1rG.js";import{g as L}from"./_commonjsHelpers-Cpj98o6Y.js";import{b as F}from"./index-BF9HgEP8.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./useCustom-xGDZc2V_.js";import"./index-BEUhGoCT.js";import"./oneOf-PZnPkCb4.js";import"./BrowserDetection-BCe25-UL.js";import"./canUseDOM-CEHZbOpG.js";import"./useIsomorphicLayoutEffect-B5gjKS-z.js";var h={},A;function X(){return A||(A=1,(function(f){function c(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(e){return typeof e}:c=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(r)}Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var v=P(F());function y(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return y=function(){return r},r}function P(r){if(r&&r.__esModule)return r;if(r===null||c(r)!=="object"&&typeof r!="function")return{default:r};var t=y();if(t&&t.has(r))return t.get(r);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=n?Object.getOwnPropertyDescriptor(r,o):null;i&&(i.get||i.set)?Object.defineProperty(e,o,i):e[o]=r[o]}return e.default=r,t&&t.set(r,e),e}function g(){return g=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},g.apply(this,arguments)}function j(r,t){return v.createElement("svg",g({width:"1em",height:"1em",viewBox:"0 0 23 32",fill:"currentColor",ref:t},r),v.createElement("path",{d:"M22.857 24.982c0 2.607-1.714 4.732-3.804 4.732H3.803c-2.089 0-3.804-2.125-3.804-4.732 0-4.696 1.161-10.125 5.839-10.125a7.972 7.972 0 0011.178 0c4.679 0 5.839 5.429 5.839 10.125zM18.286 9.143c0 3.786-3.071 6.857-6.857 6.857s-6.857-3.071-6.857-6.857 3.071-6.857 6.857-6.857 6.857 3.071 6.857 6.857z"}))}var q=v.forwardRef(j),E=q;f.default=E})(h)),h}var H=X();const N=L(H);var T=B({as:N,ariaLabel:"user",category:"",displayName:"User"});const sr={title:"Components/Avatar",component:s,subcomponents:{"Avatar.Group":s.Group},parameters:{layout:"centered",docs:{description:{component:"An avatar component for displaying user profile images or initials."}}},argTypes:{size:{control:"select",options:["lg","md","sm","xs"],description:"Avatar size"},circle:{control:"boolean",description:"Circle shape"},src:{control:"text",description:"Image source"},icon:{control:!1,description:"Custom icon to render"}}},u={args:{children:"US",circle:!0,size:"md"}},p={args:{src:"https://avatars.githubusercontent.com/u/12592949",circle:!0,size:"md"}},l={args:{icon:a.jsx(T,{}),circle:!0,size:"md"}},m={render:()=>a.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[a.jsx(s,{size:"lg",children:"LG"}),a.jsx(s,{size:"md",children:"MD"}),a.jsx(s,{size:"sm",children:"SM"}),a.jsx(s,{size:"xs",children:"XS"})]})},d={render:()=>a.jsxs(s.Group,{stack:!0,children:[a.jsx(s,{circle:!0,src:"https://avatars.githubusercontent.com/u/12592949"}),a.jsx(s,{circle:!0,children:"AB"}),a.jsx(s,{circle:!0,children:"CD"}),a.jsx(s,{circle:!0,children:"+2"})]})};var x,z,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'US',
    circle: true,
    size: 'md'
  }
}`,...(S=(z=u.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var O,_,U;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: 'https://avatars.githubusercontent.com/u/12592949',
    circle: true,
    size: 'md'
  }
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var b,w,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: <UserIcon />,
    circle: true,
    size: 'md'
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,C,G;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20,
    alignItems: 'center'
  }}>
            <Avatar size="lg">LG</Avatar>
            <Avatar size="md">MD</Avatar>
            <Avatar size="sm">SM</Avatar>
            <Avatar size="xs">XS</Avatar>
        </div>
}`,...(G=(C=m.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var I,R,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Avatar.Group stack>
            <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" />
            <Avatar circle>AB</Avatar>
            <Avatar circle>CD</Avatar>
            <Avatar circle>+2</Avatar>
        </Avatar.Group>
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const nr=["Default","WithImage","WithIcon","Sizes","Group"];export{u as Default,d as Group,m as Sizes,l as WithIcon,p as WithImage,nr as __namedExportsOrder,sr as default};
