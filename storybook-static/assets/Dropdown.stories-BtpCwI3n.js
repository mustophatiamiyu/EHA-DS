import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as e}from"./Dropdown-DCsC1iB_.js";import"./useCustom-xGDZc2V_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BF9HgEP8.js";import"./index-BEUhGoCT.js";import"./Transition-D-KE_6Hy.js";import"./canUseDOM-CEHZbOpG.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./Fade-fCFdpxve.js";import"./hasIn-DFx5evFp.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./Nav-4RQRkFm1.js";import"./OverlayTrigger-BD77U1XR.js";import"./_stringToArray-C4YuUSC0.js";import"./get-DoBpDxvC.js";import"./Button-DXg0bdqQ.js";import"./SafeAnchor-Doovd2rt.js";import"./oneOf-PZnPkCb4.js";import"./addStyle-mw_AB0Sp.js";import"./_baseIteratee-CZnMOZP4.js";import"./kebabCase-52mGmbCP.js";import"./index-IiQ3Jng6.js";import"./ReactChildren-BEZRcJZl.js";import"./createChainedFunction-DrOnF2ID.js";import"./useUniqueId-IyG5iNWH.js";import"./shallowEqual-TdB9YEW_.js";import"./IconButton-x0hBdPDO.js";import"./PageNext-48fn5mlW.js";import"./createSvgIcon-DWqCl1rG.js";import"./ArrowDownLine-BHrLt-eh.js";import"./remove-CCVvQKbh.js";import"./createComponent-D6GURCQO.js";import"./Collapse-DINot8sC.js";import"./capitalize-CVV-Ykfm.js";import"./ArrowRightLine-ChQ9NMIn.js";import"./useToggleCaret-DFiS4a00.js";const ir={title:"Components/Dropdown",component:e,subcomponents:{"Dropdown.Item":e.Item},parameters:{layout:"centered",docs:{description:{component:"A dropdown menu for displaying a list of actions or options."}}},argTypes:{title:{control:"text",description:"Dropdown button text"},trigger:{control:"select",options:["click","hover","contextMenu"],description:"Trigger behavior",table:{defaultValue:{summary:"click"}}},disabled:{control:"boolean",description:"Disabled state"}}},t={args:{title:"Actions"},render:o=>r.jsxs(e,{...o,children:[r.jsx(e.Item,{children:"New File"}),r.jsx(e.Item,{children:"New Folder"}),r.jsx(e.Item,{divider:!0}),r.jsx(e.Item,{children:"Save"}),r.jsx(e.Item,{children:"Save As..."})]})},n={render:()=>r.jsxs(e,{title:"User Menu",children:[r.jsx(e.Item,{icon:r.jsx("span",{style:{marginRight:8},children:"👤"}),children:"Profile"}),r.jsx(e.Item,{icon:r.jsx("span",{style:{marginRight:8},children:"⚙️"}),children:"Settings"}),r.jsx(e.Item,{divider:!0}),r.jsx(e.Item,{icon:r.jsx("span",{style:{marginRight:8},children:"🚪"}),children:"Logout"})]})},i={args:{title:"Hover Me",trigger:"hover"},render:o=>r.jsxs(e,{...o,children:[r.jsx(e.Item,{children:"Option 1"}),r.jsx(e.Item,{children:"Option 2"}),r.jsx(e.Item,{children:"Option 3"})]})},s={args:{title:"Disabled",disabled:!0},render:o=>r.jsx(e,{...o,children:r.jsx(e.Item,{children:"Option 1"})})};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Actions'
  },
  render: args => <Dropdown {...args}>
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>New Folder</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item>Save</Dropdown.Item>
            <Dropdown.Item>Save As...</Dropdown.Item>
        </Dropdown>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var a,c,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Dropdown title="User Menu">
            <Dropdown.Item icon={<span style={{
      marginRight: 8
    }}>👤</span>}>Profile</Dropdown.Item>
            <Dropdown.Item icon={<span style={{
      marginRight: 8
    }}>⚙️</span>}>Settings</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item icon={<span style={{
      marginRight: 8
    }}>🚪</span>}>Logout</Dropdown.Item>
        </Dropdown>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,D,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Hover Me',
    trigger: 'hover'
  },
  render: args => <Dropdown {...args}>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown>
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var I,u,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Disabled',
    disabled: true
  },
  render: args => <Dropdown {...args}>
            <Dropdown.Item>Option 1</Dropdown.Item>
        </Dropdown>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const sr=["Default","WithIcons","HoverTrigger","Disabled"];export{t as Default,s as Disabled,i as HoverTrigger,n as WithIcons,sr as __namedExportsOrder,ir as default};
