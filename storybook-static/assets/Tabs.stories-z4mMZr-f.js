import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,_ as X,b as Y,a as Z,u as fe}from"./useCustom-xGDZc2V_.js";import{_ as Te}from"./taggedTemplateLiteralLoose-i6vP4YW0.js";import{R as d}from"./index-BF9HgEP8.js";import{N as ee}from"./Nav-4RQRkFm1.js";import{u as ye}from"./useUniqueId-IyG5iNWH.js";import{u as he}from"./get-DoBpDxvC.js";import{u as O}from"./useEventCallback-DFATGJdb.js";import{R as ae}from"./ReactChildren-BEZRcJZl.js";import{D as ge,G as xe}from"./Group-BYdfyr8a.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEUhGoCT.js";import"./OverlayTrigger-BD77U1XR.js";import"./_stringToArray-C4YuUSC0.js";import"./mergeRefs-Dstv1IRw.js";import"./toString-B6ipePS4.js";import"./Button-DXg0bdqQ.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";import"./oneOf-PZnPkCb4.js";import"./Fade-fCFdpxve.js";import"./hasIn-DFx5evFp.js";import"./addStyle-mw_AB0Sp.js";import"./_baseIteratee-CZnMOZP4.js";import"./kebabCase-52mGmbCP.js";import"./index-IiQ3Jng6.js";import"./createChainedFunction-DrOnF2ID.js";import"./shallowEqual-TdB9YEW_.js";import"./IconButton-x0hBdPDO.js";import"./PageNext-48fn5mlW.js";import"./createSvgIcon-DWqCl1rG.js";import"./ArrowDownLine-BHrLt-eh.js";import"./remove-CCVvQKbh.js";import"./createComponent-D6GURCQO.js";import"./Collapse-DINot8sC.js";import"./capitalize-CVV-Ykfm.js";import"./ArrowRightLine-ChQ9NMIn.js";import"./useIsomorphicLayoutEffect-B5gjKS-z.js";var R=function(){return d.createElement(d.Fragment,null)};R.displayName="Tab";R.propTypes={disabled:i.bool,eventKey:i.string,title:i.node,children:i.node,icon:i.node};var Ke=["as","classPrefix","children","active","className"],te=d.forwardRef(function(e,s){var t=e.as,a=t===void 0?"div":t,c=e.classPrefix,v=c===void 0?"tab-panel":c,l=e.children,o=e.active,u=e.className,p=X(e,Ke),f=Y(v),T=f.withClassPrefix,_=f.merge;return d.createElement(a,Z({role:"tabpanel",ref:s,tabIndex:0,hidden:!o,className:_(u,T())},p),l)});te.displayName="TabPanel";var F,Ce=["as","classPrefix","appearance","className","children","activeKey","defaultActiveKey","id","reversed","vertical","onSelect"];function x(e){var s=e==null?void 0:e.querySelectorAll("[role=tab]");return Array.from(s).filter(function(t){return t.getAttribute("aria-disabled")!=="true"})}function re(e){var s=x(e);return s.find(function(t){return t.getAttribute("aria-selected")})}function _e(e){if(!e)return null;var s=re(e),t=x(e);if(!s)return t[0];var a=t[t.indexOf(s)+1];return!a||a.getAttribute("role")!=="tab"?t[0]:a}function je(e){if(!e)return null;var s=re(e),t=x(e);if(!s)return t[t.length-1];var a=t[t.indexOf(s)-1];return!a||a.getAttribute("role")!=="tab"?t[t.length-1]:a}var Ae=function(s,t){var a=t.id,c=t.activeKey;return ae.map(s,function(v){var l=v.props,o=l.eventKey,u=l.children,p=o===c;return d.createElement(te,{"aria-labelledby":a+"-"+o,"aria-hidden":!p,id:a+"-panel-"+o,active:p},u)})},Ne=function(s,t){var a=t.id,c=t.activeKey;return ae.map(s,function(v){var l=v.props,o=l.eventKey,u=l.title,p=l.disabled,f=l.icon,T=o===c;return d.createElement(ee.Item,{role:"tab",as:"button",type:"button","aria-selected":T,"aria-controls":a+"-panel-"+o,"aria-disabled":p,"data-event-key":o,disabled:p,icon:f,id:a+"-"+o,tabIndex:T?void 0:-1,eventKey:o},u)})},C=d.forwardRef(function(e,s){var t=fe("Tabs",e),a=t.propsWithDefaults,c=t.rtl,v=a.as,l=v===void 0?"div":v,o=a.classPrefix,u=o===void 0?"tabs":o,p=a.appearance,f=p===void 0?"tabs":p,T=a.className,_=a.children,se=a.activeKey,ie=a.defaultActiveKey,ne=a.id,S=a.reversed,y=a.vertical,D=a.onSelect,oe=X(a,Ce),E=ye("tab-",ne),$=he(se,ie),w=$[0],le=$[1],P=Y(u),de=P.withClassPrefix,ce=P.prefix,pe=P.merge,h=d.useRef(null),W=O(function(b,g){le(b),D==null||D(b,g)}),be=O(function(b){var g,ve=b.target;if(ve.getAttribute("role")==="tab"){var k=y?"ArrowUp":"ArrowLeft",G=y?"ArrowDown":"ArrowRight";!y&&c&&(k="ArrowRight",G="ArrowLeft");var m=null;switch(b.key){case k:m=je(h.current),b.preventDefault();break;case G:m=_e(h.current),b.preventDefault();break;case"Home":m=(g=x(h.current))===null||g===void 0?void 0:g[0],b.preventDefault();break;case"End":var L=x(h.current);m=L[L.length-1],b.preventDefault();break}if(m){var I,ue=(I=m)===null||I===void 0?void 0:I.dataset,me=ue.eventKey;W(me,b),m.focus()}}});return d.createElement(l,Z({className:pe(T,de({reversed:S,vertical:y}))},oe,{ref:s}),d.createElement(ee,{role:"tablist","aria-orientation":y?"vertical":"horizontal",reversed:S,vertical:y,appearance:f,activeKey:w,onSelect:W,onKeyDown:be,ref:h},Ne(_,{id:E,activeKey:w})),d.createElement("div",{className:ce(F||(F=Te(["content"])))},Ae(_,{id:E,activeKey:w})))});C.Tab=R;C.displayName="Tabs";C.propTypes={appearance:i.oneOf(["tabs","subtle","pills"]),activeKey:i.any,defaultActiveKey:i.any,reversed:i.bool,vertical:i.bool,id:i.string,className:i.string,classPrefix:i.string,children:i.node,onSelect:i.func};const K=({style:e,className:s,children:t,...a})=>{const c={...e};return r.jsx(C,{style:c,className:`ds-tabs ${s||""}`,...a,children:t})},De=C.Tab;K.Tab=De;K.displayName="Tabs";const n=K;try{K.displayName="TabsComponent",K.__docgenInfo={description:`Custom Tabs Component

A design system-ready tabs component that wraps RSuite Tabs.`,displayName:"TabsComponent",props:{}}}catch{}try{n.displayName="Tabs",n.__docgenInfo={description:"",displayName:"Tabs",props:{}}}catch{}const fa={title:"Components/Tabs",component:n,subcomponents:{"Tabs.Tab":n.Tab},parameters:{layout:"padded",docs:{description:{component:"A tabs component for switching between different views."}}},argTypes:{appearance:{control:"select",options:["default","subtle","tabs"],description:"Tabs appearance"},vertical:{control:"boolean",description:"Vertical tabs"}}},j={args:{defaultActiveKey:"1"},render:e=>r.jsxs(n,{...e,children:[r.jsx(n.Tab,{eventKey:"1",title:"Tab 1",children:r.jsx("div",{style:{padding:20},children:"Content of Tab 1"})}),r.jsx(n.Tab,{eventKey:"2",title:"Tab 2",children:r.jsx("div",{style:{padding:20},children:"Content of Tab 2"})}),r.jsx(n.Tab,{eventKey:"3",title:"Tab 3",children:r.jsx("div",{style:{padding:20},children:"Content of Tab 3"})})]})},A={args:{defaultActiveKey:"1",appearance:"subtle"},render:e=>r.jsxs(n,{...e,children:[r.jsx(n.Tab,{eventKey:"1",title:"Dashboard",icon:r.jsx(ge,{}),children:r.jsx("div",{style:{padding:20},children:"Dashboard Content"})}),r.jsx(n.Tab,{eventKey:"2",title:"Groups",icon:r.jsx(xe,{}),children:r.jsx("div",{style:{padding:20},children:"Groups Content"})})]})},N={args:{defaultActiveKey:"1",vertical:!0,style:{height:200}},render:e=>r.jsxs(n,{...e,children:[r.jsx(n.Tab,{eventKey:"1",title:"Tab 1",children:r.jsx("div",{style:{padding:10},children:"Content of Tab 1"})}),r.jsx(n.Tab,{eventKey:"2",title:"Tab 2",children:r.jsx("div",{style:{padding:10},children:"Content of Tab 2"})}),r.jsx(n.Tab,{eventKey:"3",title:"Tab 3",children:r.jsx("div",{style:{padding:10},children:"Content of Tab 3"})})]})};var V,q,U;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: '1'
  },
  render: args => <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Tab 1">
                <div style={{
        padding: 20
      }}>Content of Tab 1</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Tab 2">
                <div style={{
        padding: 20
      }}>Content of Tab 2</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Tab 3">
                <div style={{
        padding: 20
      }}>Content of Tab 3</div>
            </Tabs.Tab>
        </Tabs>
}`,...(U=(q=j.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var z,H,B;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: '1',
    appearance: 'subtle'
  },
  render: args => <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Dashboard" icon={<DashboardIcon />}>
                <div style={{
        padding: 20
      }}>Dashboard Content</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Groups" icon={<GroupIcon />}>
                <div style={{
        padding: 20
      }}>Groups Content</div>
            </Tabs.Tab>
        </Tabs>
}`,...(B=(H=A.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var J,M,Q;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: '1',
    vertical: true,
    style: {
      height: 200
    }
  },
  render: args => <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Tab 1">
                <div style={{
        padding: 10
      }}>Content of Tab 1</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Tab 2">
                <div style={{
        padding: 10
      }}>Content of Tab 2</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Tab 3">
                <div style={{
        padding: 10
      }}>Content of Tab 3</div>
            </Tabs.Tab>
        </Tabs>
}`,...(Q=(M=N.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Ta=["Default","WithIcons","Vertical"];export{j as Default,N as Vertical,A as WithIcons,Ta as __namedExportsOrder,fa as default};
