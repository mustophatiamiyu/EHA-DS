import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as l,r as Le}from"./index-BF9HgEP8.js";import{d as c}from"./design-tokens-Yam5b0Gf.js";import{u as he,_ as ve,b as ge,a as ye,P as a}from"./useCustom-xGDZc2V_.js";import{P as Ce}from"./statusIcons-DVlEUaPx.js";import{o as A}from"./oneOf-PZnPkCb4.js";import{B as se}from"./Button-kMHFPxLp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BEUhGoCT.js";import"./createSvgIcon-DWqCl1rG.js";import"./CheckRound-YEY7o-hH.js";import"./Check-2AVW1vSa.js";import"./Close-C1eXYKab.js";import"./Button-DXg0bdqQ.js";import"./taggedTemplateLiteralLoose-i6vP4YW0.js";import"./canUseDOM-CEHZbOpG.js";import"./Transition-D-KE_6Hy.js";import"./toString-B6ipePS4.js";import"./mergeRefs-Dstv1IRw.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./SafeAnchor-Doovd2rt.js";var je=["as","strokeWidth","trailWidth","width","percent","strokeLinecap","className","showInfo","status","classPrefix","style","gapDegree","gapPosition","trailColor","strokeColor"],Z=l.forwardRef(function(i,p){var s,n=he("ProgressCircle",i),r=n.propsWithDefaults,m=r.as,e=m===void 0?"div":m,k=r.strokeWidth,y=k===void 0?6:k,S=r.trailWidth,N=S===void 0?6:S,P=r.width,D=r.percent,f=D===void 0?0:D,L=r.strokeLinecap,U=L===void 0?"round":L,h=r.className,W=r.showInfo,z=W===void 0?!0:W,d=r.status,j=r.classPrefix,C=j===void 0?"progress":j,F=r.style,x=r.gapDegree,g=x===void 0?0:x,u=r.gapPosition,q=u===void 0?"top":u,I=r.trailColor,V=r.strokeColor,H=ve(r,je),J=Le.useCallback(function(){var o=50-y/2,Q=0,$=-o,E=0,b=-2*o;switch(q){case"left":Q=-o,$=0,E=2*o,b=0;break;case"right":Q=o,$=0,E=-2*o,b=0;break;case"bottom":$=o,b=2*o;break}var Se="M 50,50 m "+Q+","+$+" a "+o+","+o+" 0 1 1 "+E+","+-b+" a "+o+","+o+" 0 1 1 "+-E+","+b,R=Math.PI*2*o,Ne={stroke:I,strokeDasharray:R-g+"px "+R+"px",strokeDashoffset:"-"+g/2+"px"},De={stroke:V,strokeDasharray:f/100*(R-g)+"px "+R+"px",strokeDashoffset:"-"+g/2+"px"};return{pathString:Se,trailPathStyle:Ne,strokePathStyle:De}},[g,q,f,V,y,I]),_=J(),re=_.pathString,xe=_.trailPathStyle,ke=_.strokePathStyle,K=ge(C),w=K.prefix,Pe=K.merge,We=K.withClassPrefix,_e=Pe(h,We("circle",(s={},s["circle-"+(d||"")]=!!d,s))),we=d&&d!=="active",be=we?l.createElement("span",{className:w("icon-"+(d||""))},Ce[d]):l.createElement("span",{key:1},f,"%");return l.createElement(e,{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":f,ref:p,className:_e,style:F},z?l.createElement("span",{className:w("circle-info")},be):null,l.createElement("svg",ye({className:w("svg"),viewBox:"0 0 100 100",width:P},H),l.createElement("path",{className:w("trail"),d:re,strokeWidth:N||y,fillOpacity:"0",style:xe}),l.createElement("path",{d:re,strokeLinecap:U,className:w("stroke"),strokeWidth:f===0?0:y,fillOpacity:"0",style:ke})))});Z.displayName="ProgressCircle";Z.propTypes={className:a.string,strokeColor:a.string,strokeLinecap:A(["butt","round","square"]),trailColor:a.string,percent:a.number,strokeWidth:a.number,trailWidth:a.number,width:a.number,gapDegree:a.number,gapPosition:A(["top","bottom","left","right"]),showInfo:a.bool,status:A(["success","fail","active"]),classPrefix:a.string};var qe=["as","className","percent","strokeColor","strokeWidth","trailColor","trailWidth","status","showInfo","classPrefix","vertical"],G=l.forwardRef(function(i,p){var s,n,r,m=he("ProgressLine",i),e=m.propsWithDefaults,k=e.as,y=k===void 0?"div":k,S=e.className,N=e.percent,P=N===void 0?0:N,D=e.strokeColor,f=e.strokeWidth,L=e.trailColor,U=e.trailWidth,h=e.status,W=e.showInfo,z=W===void 0?!0:W,d=e.classPrefix,j=d===void 0?"progress":d,C=e.vertical,F=ve(e,qe),x=ge(j),g=x.merge,u=x.prefix,q=x.withClassPrefix,I=(s={backgroundColor:L},s[C?"width":"height"]=U||f,s),V=(n={},n[C?"height":"width"]=P+"%",n.backgroundColor=D,n[C?"width":"height"]=f,n),H=g(S,q("line",(r={"line-vertical":C},r["line-"+h]=!!h,r))),J=h&&h!=="active",_=J?l.createElement("span",{className:u("icon-"+(h||""))},Ce[h]):l.createElement("span",{className:u("info-status")},P,"%");return l.createElement(y,ye({role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":P},F,{ref:p,className:H}),l.createElement("div",{className:u("line-outer")},l.createElement("div",{className:u("line-inner"),style:I},l.createElement("div",{className:u("line-bg"),style:V}))),z?l.createElement("div",{className:u("info")},_):null)});G.displayName="ProgressLine";G.propTypes={className:a.string,classPrefix:a.string,percent:a.number,strokeColor:a.string,strokeWidth:a.number,trailColor:a.string,trailWidth:a.number,showInfo:a.bool,vertical:a.bool,status:A(["success","fail","active"])};var ee=G;ee.Line=G;ee.Circle=Z;const{Line:Ie,Circle:Ve}=ee,X=({percent:i=0,strokeColor:p,status:s,style:n,className:r,...m})=>{let e=p;return!e&&s&&(s==="success"&&(e=c.semanticColors.feedback.success),s==="fail"&&(e=c.semanticColors.feedback.error),s==="active"&&(e=c.semanticColors.interactive.primary)),e||(e=c.semanticColors.interactive.primary),t.jsx(Ie,{percent:i,strokeColor:e,status:s,style:n,className:`ds-progress-line ${r||""}`,...m})},Y=({percent:i=0,strokeColor:p,status:s,style:n,className:r,...m})=>{let e=p;return!e&&s&&(s==="success"&&(e=c.semanticColors.feedback.success),s==="fail"&&(e=c.semanticColors.feedback.error),s==="active"&&(e=c.semanticColors.interactive.primary)),e||(e=c.semanticColors.interactive.primary),t.jsx(Ve,{percent:i,strokeColor:e,status:s,style:n,className:`ds-progress-circle ${r||""}`,...m})},v={Line:X,Circle:Y};try{X.displayName="Line",X.__docgenInfo={description:"",displayName:"Line",props:{percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},strokeColor:{defaultValue:null,description:"",name:"strokeColor",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"number"}},trailColor:{defaultValue:null,description:"",name:"trailColor",required:!1,type:{name:"string"}},trailWidth:{defaultValue:null,description:"",name:"trailWidth",required:!1,type:{name:"number"}},showInfo:{defaultValue:null,description:"",name:"showInfo",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"active"'},{value:'"success"'},{value:'"fail"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{Y.displayName="Circle",Y.__docgenInfo={description:"",displayName:"Circle",props:{percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},strokeColor:{defaultValue:null,description:"",name:"strokeColor",required:!1,type:{name:"string"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"number"}},trailColor:{defaultValue:null,description:"",name:"trailColor",required:!1,type:{name:"string"}},trailWidth:{defaultValue:null,description:"",name:"trailWidth",required:!1,type:{name:"number"}},showInfo:{defaultValue:null,description:"",name:"showInfo",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"active"'},{value:'"success"'},{value:'"fail"'}]}},gapDegree:{defaultValue:null,description:"",name:"gapDegree",required:!1,type:{name:"number"}},gapPosition:{defaultValue:null,description:"",name:"gapPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const tr={title:"Components/Progress",parameters:{layout:"centered",docs:{description:{component:"A progress indicator component."}}}},T={render:i=>t.jsx("div",{style:{width:300},children:t.jsx(v.Line,{...i})}),args:{percent:30,strokeWidth:10}},B={render:i=>t.jsx("div",{style:{width:120},children:t.jsx(v.Circle,{...i})}),args:{percent:30,strokeWidth:6}},M={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:c.spacing.md,width:300},children:[t.jsx(v.Line,{percent:100,status:"success"}),t.jsx(v.Line,{percent:50,status:"fail"}),t.jsx(v.Line,{percent:80,status:"active"}),t.jsxs("div",{style:{display:"flex",gap:c.spacing.md},children:[t.jsx("div",{style:{width:80},children:t.jsx(v.Circle,{percent:100,status:"success"})}),t.jsx("div",{style:{width:80},children:t.jsx(v.Circle,{percent:50,status:"fail"})})]})]})},O={render:()=>{const[i,p]=l.useState(30),s=()=>p(r=>Math.min(r+10,100)),n=()=>p(r=>Math.max(r-10,0));return t.jsxs("div",{style:{width:300,display:"flex",flexDirection:"column",gap:c.spacing.md},children:[t.jsx(v.Line,{percent:i,status:i===100?"success":"active"}),t.jsxs("div",{style:{display:"flex",gap:c.spacing.sm},children:[t.jsx(se,{onClick:n,disabled:i===0,children:"-"}),t.jsx(se,{onClick:s,disabled:i===100,children:"+"})]})]})}};var te,ae,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 300
  }}>
            <Progress.Line {...args} />
        </div>,
  args: {
    percent: 30,
    strokeWidth: 10
  }
}`,...(ie=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,ne,oe;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 120
  }}>
            <Progress.Circle {...args} />
        </div>,
  args: {
    percent: 30,
    strokeWidth: 6
  }
}`,...(oe=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,pe,de;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.md,
    width: 300
  }}>
            <Progress.Line percent={100} status="success" />
            <Progress.Line percent={50} status="fail" />
            <Progress.Line percent={80} status="active" />
            <div style={{
      display: 'flex',
      gap: designTokens.spacing.md
    }}>
                <div style={{
        width: 80
      }}><Progress.Circle percent={100} status="success" /></div>
                <div style={{
        width: 80
      }}><Progress.Circle percent={50} status="fail" /></div>
            </div>
        </div>
}`,...(de=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,fe;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [percent, setPercent] = React.useState(30);
    const increase = () => setPercent(prev => Math.min(prev + 10, 100));
    const decrease = () => setPercent(prev => Math.max(prev - 10, 0));
    return <div style={{
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      gap: designTokens.spacing.md
    }}>
                <Progress.Line percent={percent} status={percent === 100 ? 'success' : 'active'} />
                <div style={{
        display: 'flex',
        gap: designTokens.spacing.sm
      }}>
                    <Button onClick={decrease} disabled={percent === 0}>-</Button>
                    <Button onClick={increase} disabled={percent === 100}>+</Button>
                </div>
            </div>;
  }
}`,...(fe=(me=O.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const ar=["Line","Circle","Statuses","Dynamic"];export{B as Circle,O as Dynamic,T as Line,M as Statuses,ar as __namedExportsOrder,tr as default};
