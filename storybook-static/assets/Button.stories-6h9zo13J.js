import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-kMHFPxLp.js";import{d}from"./design-tokens-Yam5b0Gf.js";import{e as c,u as W}from"./index-bEuKYiOy.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DXg0bdqQ.js";import"./useCustom-xGDZc2V_.js";import"./index-BEUhGoCT.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";import"./oneOf-PZnPkCb4.js";const H={title:"Components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"A button triggers an event or action. The button label expresses what action will occur when the user interacts with it."}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost"],description:"Visual style variant",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"Button size",table:{defaultValue:{summary:"md"}}},isLoading:{control:"boolean",description:"Show loading spinner",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Make button full width",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click handler"},children:{control:"text",description:"Button label"}}},n={render:()=>t.jsxs("div",{style:{display:"flex",gap:d.spacing.lg,flexWrap:"wrap",alignItems:"center"},children:[t.jsx(e,{variant:"primary",children:"Primary"}),t.jsx(e,{variant:"secondary",children:"Secondary"}),t.jsx(e,{variant:"tertiary",children:"Tertiary"}),t.jsx(e,{variant:"ghost",children:"Ghost"})]})},r={render:()=>t.jsxs("div",{style:{display:"flex",gap:d.spacing.lg,flexWrap:"wrap",alignItems:"center"},children:[t.jsx(e,{size:"sm",children:"Small"}),t.jsx(e,{size:"md",children:"Medium"}),t.jsx(e,{size:"lg",children:"Large"})]})},i={render:()=>t.jsxs("div",{style:{display:"flex",gap:d.spacing.lg,flexWrap:"wrap",alignItems:"center"},children:[t.jsx(e,{children:"Normal"}),t.jsx(e,{disabled:!0,children:"Disabled"}),t.jsx(e,{isLoading:!0,children:"Loading"}),t.jsx(e,{disabled:!0,isLoading:!0,children:"Disabled + Loading"})]})},s={args:{children:"Full Width Button",variant:"primary",fullWidth:!0},decorators:[l=>t.jsx("div",{style:{width:"400px"},children:t.jsx(l,{})})]},o={args:{children:"Click to test",variant:"primary"},play:async({canvas:l})=>{const a=await l.findByRole("button",{name:/click to test/i});await c(a).toBeInTheDocument(),await c(a).not.toBeDisabled(),await W.click(a),await c(a).toBeInTheDocument()}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: designTokens.spacing.lg,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>

        </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: designTokens.spacing.lg,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,B,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: designTokens.spacing.lg,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
            <Button disabled isLoading>Disabled + Loading</Button>
        </div>
}`,...(b=(B=i.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,v,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
                <Story />
            </div>]
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,j,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Click to test',
    variant: 'primary'
  },
  play: async ({
    canvas
  }) => {
    const button = await canvas.findByRole('button', {
      name: /click to test/i
    });

    // Verify button exists and is clickable
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();

    // Simulate click
    await userEvent.click(button);

    // Verify it's still in the document after click
    await expect(button).toBeInTheDocument();
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const J=["Variants","Sizes","States","FullWidth","ClickInteraction"];export{o as ClickInteraction,s as FullWidth,r as Sizes,i as States,n as Variants,J as __namedExportsOrder,H as default};
