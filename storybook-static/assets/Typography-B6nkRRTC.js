import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-B80NBAco.js";import"./blocks-D76HFvEI.js";import{M as p}from"./index-D2DZtzpZ.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-r_U6gsAf.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",td:"td",tr:"tr",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Style Guide/Typography"}),`
`,e.jsx("style",{children:`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  
  .manrope-font {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`}),`
`,e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",fontFamily:'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[e.jsx(n.h1,{id:"typography",children:"Typography"}),e.jsx(n.p,{children:"eHA Design System uses a typeface called Manrope for digital product UIs. Manrope is a semi-condensed, clean, minimal sans-serif font family which features variable font and 7 legacy weights. Geometric digits and OpenType features such as Case Sensitive, Auto-Apostrophe, Contextual Alternates, Common Ligatures, Custom Icon-Ligatures, Tabular Figures, are available too. These typography guidelines provide a simple set of font styles to help make user interfaces and content for digital products clear and efficient."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"font-family",children:"Font Family"}),e.jsxs("div",{style:{padding:"40px",backgroundColor:"#f9f9f9",borderRadius:"12px",textAlign:"center",marginTop:"30px",marginBottom:"60px"},children:[e.jsx("div",{style:{fontSize:"64px",fontWeight:700,marginBottom:"20px",fontFamily:"Manrope, sans-serif"},children:e.jsx(n.p,{children:"Manrope"})}),e.jsx("p",{style:{fontSize:"18px",color:"#666",margin:0},children:e.jsx(n.p,{children:"Primary typeface for all text content"})})]}),e.jsx(n.h3,{id:"installation",children:"Installation"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Using Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
`})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* CSS */
body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"font-weights",children:"Font Weights"}),e.jsx(n.p,{children:"Manrope provides 7 weight options for different hierarchy and emphasis levels."}),e.jsx("div",{style:{marginTop:"40px",marginBottom:"60px"},children:[{name:"Extra Light",weight:200,usage:"Decorative use only, very large text"},{name:"Light",weight:300,usage:"Subtle text, secondary information"},{name:"Normal (Regular)",weight:400,usage:"Body text, paragraphs (default)"},{name:"Medium",weight:500,usage:"Emphasis, important text"},{name:"Semi Bold",weight:600,usage:"Subheadings, labels, buttons"},{name:"Bold",weight:700,usage:"Headlines, titles, strong emphasis"},{name:"Extra Bold",weight:800,usage:"Display text, hero headlines"}].map((i,l)=>e.jsxs(n.div,{style:{padding:"20px",borderBottom:l<6?"1px solid #e0e0e0":"none",display:"flex",alignItems:"center",gap:"40px"},children:[e.jsxs(n.div,{style:{flex:1},children:[e.jsxs(n.div,{style:{fontSize:"32px",fontWeight:i.weight,fontFamily:"Manrope, sans-serif",marginBottom:"8px"},children:["Manrope ",i.name]}),e.jsxs(n.div,{style:{fontSize:"14px",color:"#999"},children:["Font weight: ",i.weight]})]}),e.jsx(n.div,{style:{fontSize:"14px",color:"#666",maxWidth:"300px",textAlign:"right"},children:i.usage})]},l))}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"type-scale-reference",children:"Type Scale Reference"}),e.jsx(n.p,{children:"Quick reference table for all text styles."}),e.jsx("div",{style:{marginTop:"30px",marginBottom:"60px",overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#F4F5F6"},children:[e.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid #e0e0e0"},children:e.jsx(n.p,{children:"Text Style"})}),e.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid #e0e0e0"},children:e.jsx(n.p,{children:"Font Weight"})}),e.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid #e0e0e0"},children:e.jsx(n.p,{children:"Font Size"})}),e.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid #e0e0e0"},children:e.jsx(n.p,{children:"Line Height"})}),e.jsx("th",{style:{padding:"12px",textAlign:"left",borderBottom:"2px solid #e0e0e0"},children:e.jsx(n.p,{children:"Letter Spacing"})})]})}),e.jsx("tbody",{children:[["Display Large","Bold (700)","57px","64px","-0.25%"],["Display Medium","Bold (700)","45px","52px","0%"],["Display Small","Bold (700)","36px","44px","0%"],["Headline Large","Bold (700)","32px","40px","0%"],["Headline Medium","Bold (700)","28px","36px","0%"],["Headline Small","Bold (700)","24px","32px","0%"],["Subheadline Large","Semibold (600)","18px","24px","0%"],["Subheadline Medium","Semibold (600)","16px","24px","0%"],["Subheadline Small","Semibold (600)","14px","20px","0%"],["Title Large","Semibold (600)","20px","28px","-1%"],["Title Medium","Semibold (600)","16px","20px","-1%"],["Title Small","Semibold (600)","14px","20px","-1%"],["Label Large","Semibold (600)","14px","20px","4%"],["Label Medium","Semibold (600)","12px","16px","4%"],["Label Small","Semibold (600)","11px","16px","4%"],["Body Large","Regular (400)","16px","24px","3%"],["Body Large Bold","Bold (700)","16px","24px","0%"],["Body Medium","Regular (400)","14px","20px","3%"],["Body Medium Bold","Bold (700)","14px","20px","0%"],["Body Small","Regular (400)","12px","16px","3%"],["Body Small Bold","Bold (700)","12px","16px","0%"],["Button Large","Semibold (600)","16px","22px","0%"],["Button Medium","Semibold (600)","14px","20px","0%"],["Button Small","Semibold (600)","12px","20px","0%"],["Input Field","Semibold (600)","15px","20px","5%"]].map((i,l)=>e.jsx(n.tr,{style:{borderBottom:"1px solid #f0f0f0"},children:i.map((r,s)=>e.jsx(n.td,{style:{padding:"12px",fontWeight:s===0?600:400},children:r},s))},l))})]})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"code-usage",children:"Code Usage"}),e.jsx(n.h3,{id:"css-classes",children:"CSS Classes"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Display Styles */
.display-large {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 57px;
  line-height: 64px;
  letter-spacing: -0.25%;
}

.display-medium {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 52px;
  letter-spacing: 0%;
}

/* Headline Styles */
.headline-large {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0%;
}

/* Body Styles */
.body-large {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3%;
}

/* Button Styles */
.button-medium {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
}
`})}),e.jsx(n.h3,{id:"reacttypescript",children:"React/TypeScript"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const typography = {
  display: {
    large: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 700,
      fontSize: "57px",
      lineHeight: "64px",
      letterSpacing: "-0.25%",
    },
    medium: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 700,
      fontSize: "45px",
      lineHeight: "52px",
      letterSpacing: "0%",
    },
    small: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "0%",
    },
  },
  body: {
    large: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "3%",
    },
    // ... more styles
  },
};
`})})]})]})}function b(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
