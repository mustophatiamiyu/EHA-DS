import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-B80NBAco.js";import"./blocks-D76HFvEI.js";import{M as d}from"./index-D2DZtzpZ.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-r_U6gsAf.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function l(t){const s={div:"div",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Style Guide/Design Tokens"}),`
`,e.jsx("style",{children:`
    .token-section {
      margin-bottom: 48px;
    }

    .token-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }

    .color-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .color-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .color-swatch {
      height: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 16px;
      position: relative;
    }

    .color-token-name {
      font-family: 'Monaco', monospace;
      font-size: 11px;
      font-weight: 600;
      opacity: 0.9;
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 8px;
      border-radius: 4px;
      backdrop-filter: blur(4px);
    }

    .color-variant-badge {
      font-weight: 600;
      font-size: 12px;
    }

    .color-info {
      padding: 16px;
      background: white;
    }

    .color-name {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 4px;
      color: #2B3136;
    }

    .color-value {
      font-family: 'Monaco', monospace;
      font-size: 13px;
      color: #6B7A86;
    }

    .color-usage {
      font-size: 12px;
      color: #6B7A86;
      margin-top: 8px;
      line-height: 1.5;
    }

    .color-scale-header {
      margin-top: 32px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e0e0e0;
    }

    .color-scale-title {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      color: #2B3136;
    }

    .color-scale-description {
      font-size: 14px;
      color: #6B7A86;
      margin-top: 4px;
    }

    .spacing-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 24px;
    }

    .spacing-item {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 16px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: white;
    }

    .spacing-visual {
      width: 200px;
      height: 60px;
      background: #F4F5F6;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .spacing-box {
      background: #0090FC;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Monaco', monospace;
      font-size: 10px;
      font-weight: 600;
      color: white;
    }

    .spacing-details {
      flex: 1;
    }

    .spacing-name {
      font-weight: 600;
      font-size: 16px;
      color: #2B3136;
      margin-bottom: 4px;
    }

    .spacing-values {
      font-family: 'Monaco', monospace;
      font-size: 13px;
      color: #6B7A86;
      margin-bottom: 4px;
    }

    .spacing-usage {
      font-size: 13px;
      color: #6B7A86;
      line-height: 1.5;
    }

    .typography-showcase {
      margin-top: 24px;
      padding: 24px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }

    .font-weight-item {
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid #f0f0f0;
    }

    .font-weight-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .font-weight-preview {
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 32px;
      margin-bottom: 12px;
      color: #2B3136;
      position: relative;
    }

    .font-weight-token {
      font-family: 'Monaco', monospace;
      font-size: 11px;
      font-weight: 600;
      color: #0090FC;
      background: #F3FBFF;
      padding: 3px 8px;
      border-radius: 4px;
      margin-left: 12px;
      vertical-align: middle;
    }

    .font-weight-details {
      display: flex;
      gap: 24px;
      margin-bottom: 8px;
    }

    .font-weight-name {
      font-weight: 600;
      font-size: 14px;
      color: #2B3136;
    }

    .font-weight-value {
      font-family: 'Monaco', monospace;
      font-size: 13px;
      color: #6B7A86;
    }

    .font-weight-usage {
      font-size: 13px;
      color: #6B7A86;
      line-height: 1.5;
    }

    .token-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24px;
      font-size: 14px;
    }

    .token-table th {
      background: #F4F5F6;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #2B3136;
      border-bottom: 2px solid #D4D9DD;
    }

    .token-table td {
      padding: 12px;
      border-bottom: 1px solid #f0f0f0;
      color: #6B7A86;
    }

    .token-table code {
      background: #F4F5F6;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Monaco', monospace;
      font-size: 13px;
      color: #0090FC;
    }

    .usage-guidelines {
      background: #F3FBFF;
      border-left: 4px solid #0090FC;
      padding: 16px 20px;
      margin: 24px 0;
      border-radius: 4px;
    }

    .usage-guidelines h4 {
      margin-top: 0;
      color: #0090FC;
      font-size: 16px;
    }

    .usage-guidelines ul {
      margin: 8px 0;
      padding-left: 20px;
    }

    .usage-guidelines li {
      margin-bottom: 8px;
      color: #2B3136;
      line-height: 1.6;
    }

    .do-dont-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 24px;
    }

    .do-dont-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
    }

    .do-dont-card.do {
      background: #EAFFE8;
      border-color: #54BF85;
    }

    .do-dont-card.dont {
      background: #FDEFEF;
      border-color: #BA1B1B;
    }

    .do-dont-card h4 {
      margin-top: 0;
      font-size: 16px;
    }

    .do-dont-card.do h4 {
      color: #2A9D64;
    }

    .do-dont-card.dont h4 {
      color: #BA1B1B;
    }

    .code-example {
      background: #2B3136;
      color: #F4F5F6;
      padding: 16px;
      border-radius: 8px;
      font-family: 'Monaco', monospace;
      font-size: 13px;
      margin: 16px 0;
      overflow-x: auto;
    }

    .page-header {
      margin-bottom: 48px;
      padding-bottom: 24px;
      border-bottom: 3px solid #0090FC;
    }

    .page-title {
      font-size: 42px;
      font-weight: 800;
      margin: 0 0 12px 0;
      color: #2B3136;
      font-family: 'Manrope', sans-serif;
    }

    .page-description {
      font-size: 18px;
      color: #6B7A86;
      line-height: 1.6;
      margin: 0;
    }
  `}),`
`,e.jsx(s.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(s.p,{children:"The foundation of our design system. Design tokens are the visual design atoms of the design system — specifically named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and unity across all products."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s.p,{children:"Design tokens are the single source of truth for design decisions in our system. They include:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Colors"}),": Brand colors, semantic colors, and color scales"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Spacing"}),": Consistent spacing values for layouts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Typography"}),": Font families, sizes, and weights"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Border Radius"}),": Corner rounding values"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shadows"}),": Elevation and depth"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Z-Index"}),": Layering system"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs("div",{className:"token-section",children:[e.jsx("h2",{children:"Colors"}),e.jsx("p",{children:"Our color system includes brand colors (Primary Blue, Secondary Yellow, Tertiary Blue), feedback colors (Success, Error, Warning), and neutral tones. Each color has multiple variants to support different use cases."}),e.jsxs("div",{className:"usage-guidelines",children:[e.jsx("h4",{children:"🎨 Color Usage Guidelines"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primary Blue"})," for main actions, links, and interactive elements"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Secondary Yellow"})," for accents, highlights, and attention-drawing elements (use sparingly)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tertiary Blue"})," for depth, contrast, and professional dark accents"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use semantic colors"})," for UI elements (text.primary, background.secondary, etc.)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use color scales"})," consistently (10 for backgrounds, 40 for base, 50-60 for emphasis)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintain contrast ratios"})," of at least 4.5:1 for text (WCAG AA standard)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Don't use colors alone"})," to convey information (pair with icons or text)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test in different contexts"})," to ensure visibility and accessibility"]})]})]}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Primary Blue"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Primary brand color used for primary actions, links, and interactive elements. Conveys trust and professionalism."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#F3FBFF",usage:"Light backgrounds, hover states",textColor:"#0060A8"},{variant:"20",hex:"#D4EDFF",usage:"Subtle backgrounds, disabled states",textColor:"#0060A8"},{variant:"30",hex:"#53B5FF",usage:"Borders, lighter accents",textColor:"#fff"},{variant:"40",hex:"#0090FC",usage:"Primary buttons, links, focus states",textColor:"#fff",isBase:!0},{variant:"50",hex:"#0078D2",usage:"Hover states, emphasis",textColor:"#fff"},{variant:"60",hex:"#0060A8",usage:"Active/pressed states, strong emphasis",textColor:"#fff"}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["primary",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Primary ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Secondary Yellow"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Secondary brand color used for accents, highlights, and attention-drawing elements. Adds energy and vibrancy."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#FFFDE6",usage:"Light yellow backgrounds, subtle highlights",textColor:"#6B6100"},{variant:"20",hex:"#FFFACC",usage:"Pale yellow backgrounds",textColor:"#6B6100"},{variant:"30",hex:"#FFF799",usage:"Lighter yellow accents, borders",textColor:"#6B6100"},{variant:"40",hex:"#F4ED33",usage:"Medium yellow highlights",textColor:"#6B6100"},{variant:"50",hex:"#E5E507",usage:"Secondary buttons, accent elements",textColor:"#2B3136",isBase:!0},{variant:"60",hex:"#C2C206",usage:"Darker yellow for contrast",textColor:"#fff"}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["secondary",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Secondary ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Tertiary Blue"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Tertiary brand color used for depth, contrast, and professional dark accents. Complements primary blue."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#E6EFF5",usage:"Very light tertiary backgrounds",textColor:"#003963"},{variant:"20",hex:"#CCE0EB",usage:"Light tertiary backgrounds",textColor:"#003963"},{variant:"30",hex:"#99C1D6",usage:"Medium tertiary accents",textColor:"#003963"},{variant:"40",hex:"#4D7A99",usage:"Darker tertiary elements",textColor:"#fff"},{variant:"50",hex:"#1A5580",usage:"Strong tertiary emphasis",textColor:"#fff"},{variant:"60",hex:"#003963",usage:"Tertiary headers, dark accents",textColor:"#fff",isBase:!0}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["tertiary",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Tertiary ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Success Green"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Used for success messages, positive feedback, and confirmation actions."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#EAFFE8",usage:"Success message backgrounds",textColor:"#2A9D64"},{variant:"20",hex:"#C1FFD5",usage:"Subtle success backgrounds",textColor:"#2A9D64"},{variant:"30",hex:"#7CFCB0",usage:"Success borders",textColor:"#2A9D64"},{variant:"40",hex:"#71DB9F",usage:"Light success states",textColor:"#fff"},{variant:"50",hex:"#54BF85",usage:"Success icons, text, buttons",textColor:"#fff",isBase:!0},{variant:"60",hex:"#2A9D64",usage:"Dark success emphasis",textColor:"#fff"}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["success",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Success ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Error Red"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Used for error messages, destructive actions, and critical warnings."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#FDEFEF",usage:"Error message backgrounds",textColor:"#BA1B1B"},{variant:"20",hex:"#F6BEBE",usage:"Subtle error backgrounds",textColor:"#BA1B1B"},{variant:"30",hex:"#EF8E8E",usage:"Error borders",textColor:"#BA1B1B"},{variant:"40",hex:"#E75D5D",usage:"Light error states",textColor:"#fff"},{variant:"50",hex:"#E02C2C",usage:"Error hover states",textColor:"#fff"},{variant:"60",hex:"#BA1B1B",usage:"Error icons, text, destructive buttons",textColor:"#fff",isBase:!0}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["error",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Error ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Warning Orange"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Used for warning messages, cautions, and important notices that need attention."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#FFEEDA",usage:"Warning message backgrounds",textColor:"#9F6D00"},{variant:"20",hex:"#FFDEAE",usage:"Subtle warning backgrounds",textColor:"#9F6D00"},{variant:"30",hex:"#FDBA46",usage:"Warning borders",textColor:"#9F6D00"},{variant:"40",hex:"#DEA02D",usage:"Light warning states",textColor:"#fff"},{variant:"50",hex:"#C0850C",usage:"Warning icons, text, buttons",textColor:"#fff",isBase:!0},{variant:"60",hex:"#9F6D00",usage:"Dark warning emphasis",textColor:"#fff"}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["warning",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Warning ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"color-scale-header",children:[e.jsx("h3",{className:"color-scale-title",children:"Neutral Gray"}),e.jsx("p",{className:"color-scale-description",children:e.jsx(s.p,{children:"Neutral colors for text, backgrounds, borders, and general UI elements."})})]}),e.jsx("div",{className:"token-grid",children:[{variant:"10",hex:"#F4F5F6",usage:"Page backgrounds, disabled backgrounds",textColor:"#2B3136"},{variant:"20",hex:"#D4D9DD",usage:"Borders, dividers",textColor:"#2B3136"},{variant:"30",hex:"#B4BCC3",usage:"Secondary borders, disabled text",textColor:"#2B3136"},{variant:"40",hex:"#6B7A86",usage:"Secondary text, placeholders",textColor:"#fff"},{variant:"50",hex:"#3D464D",usage:"Tertiary text",textColor:"#fff"},{variant:"60",hex:"#2B3136",usage:"Primary text, headings, dark backgrounds",textColor:"#fff",isBase:!0}].map(({variant:r,hex:i,usage:a,textColor:n,isBase:o})=>e.jsxs(s.div,{className:"color-card",children:[e.jsxs(s.div,{className:"color-swatch",style:{background:i},children:[e.jsxs(s.span,{className:"color-token-name",style:{color:n},children:["neutral",r]}),e.jsx(s.span,{className:"color-variant-badge",style:{color:n},children:r})]}),e.jsxs(s.div,{className:"color-info",children:[e.jsxs(s.div,{className:"color-name",children:["Neutral ",r,o?" (Base)":""]}),e.jsx(s.div,{className:"color-value",children:i}),e.jsx(s.div,{className:"color-usage",children:a})]})]},r))}),e.jsxs("div",{className:"do-dont-grid",children:[e.jsxs("div",{className:"do-dont-card do",children:[e.jsx("h4",{children:"✅ Do"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use Primary 40 for main call-to-action buttons"}),e.jsx("li",{children:"Use Secondary 50 for accent elements and highlights"}),e.jsx("li",{children:"Use Tertiary 60 for professional dark accents"}),e.jsx("li",{children:"Use Success 50 for positive feedback messages"}),e.jsx("li",{children:"Use Neutral 60 for body text on light backgrounds"}),e.jsx("li",{children:"Use color scales consistently (10 for bg, 40-60 for text)"}),e.jsx("li",{children:"Maintain proper contrast ratios for accessibility"})]})]}),e.jsxs("div",{className:"do-dont-card dont",children:[e.jsx("h4",{children:"❌ Don't"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Don't use light colors (10-30) for text"}),e.jsx("li",{children:"Don't overuse Secondary yellow—use sparingly for accents"}),e.jsx("li",{children:"Don't mix color variants randomly"}),e.jsx("li",{children:"Don't rely on color alone to convey meaning"}),e.jsx("li",{children:"Don't use custom colors outside the token system"}),e.jsx("li",{children:"Don't use low-contrast color combinations"})]})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs("div",{className:"token-section",children:[e.jsx("h2",{children:"Spacing"}),e.jsx("p",{children:"Consistent spacing creates visual hierarchy and improves readability. Our spacing scale provides 17 values for different spacing needs."}),e.jsxs("div",{className:"usage-guidelines",children:[e.jsx("h4",{children:"📐 Spacing Usage Guidelines"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use spacing tokens"})," instead of arbitrary pixel values"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintain vertical rhythm"})," with consistent spacing patterns"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use smaller values (1-4)"})," for tight, related elements"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use medium values (5-8)"})," for component spacing"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use large values (10-16+)"})," for section separation"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Be consistent"})," with spacing choices throughout your interface"]})]})]}),e.jsx("div",{className:"spacing-list",children:[{name:"Spacing-1",rem:"0.25rem",px:"4px",size:4,usage:"Micro spacing, tight spacing between related elements"},{name:"Spacing-2",rem:"0.5rem",px:"8px",size:8,usage:"Very small gaps, icon padding, compact layouts"},{name:"Spacing-3",rem:"0.75rem",px:"12px",size:12,usage:"Small spacing, close proximity elements"},{name:"Spacing-4",rem:"1rem",px:"16px",size:16,usage:"Base unit, standard gaps, default spacing"},{name:"Spacing-5",rem:"1.25rem",px:"20px",size:20,usage:"Comfortable spacing between items"},{name:"Spacing-6",rem:"1.5rem",px:"24px",size:24,usage:"Medium spacing, section padding"},{name:"Spacing-8",rem:"2rem",px:"32px",size:32,usage:"Large spacing, component separation"},{name:"Spacing-10",rem:"2.5rem",px:"40px",size:40,usage:"Extra large spacing, major sections"},{name:"Spacing-12",rem:"3rem",px:"48px",size:48,usage:"Large section spacing"},{name:"Spacing-16",rem:"4rem",px:"64px",size:60,usage:"Very large spacing, page sections"}].map(({name:r,rem:i,px:a,size:n,usage:o})=>e.jsxs(s.div,{className:"spacing-item",children:[e.jsx(s.div,{className:"spacing-visual",children:e.jsx(s.div,{className:"spacing-box",style:{width:`${n}px`,height:`${Math.min(n,40)}px`},children:n>=16&&r.toLowerCase().replace("-","")})}),e.jsxs(s.div,{className:"spacing-details",children:[e.jsx(s.div,{className:"spacing-name",children:r}),e.jsxs(s.div,{className:"spacing-values",children:[i," / ",a]}),e.jsx(s.div,{className:"spacing-usage",children:o})]})]},r))}),e.jsx("div",{className:"code-example",children:`// Import spacing tokens
import { spacing } from '@/theme';

// Use in your components
const styles = {
  padding: spacing.md,        // 12px
  margin: spacing.lg,         // 16px
  gap: spacing.xl,            // 20px
};`})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs("div",{className:"token-section",children:[e.jsx("h2",{children:"Typography"}),e.jsx("p",{children:"Typography tokens define font families, sizes, weights, and line heights. We use Manrope as our primary typeface for its clean, modern appearance and excellent readability."}),e.jsxs("div",{className:"usage-guidelines",children:[e.jsx("h4",{children:"✍️ Typography Usage Guidelines"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use Manrope font family"})," for all text elements"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regular (400)"})," for body text and paragraphs"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semi Bold (600)"})," for subheadings and buttons"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bold (700)"})," for headlines and strong emphasis"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintain proper line heights"})," for readability"]})]})]}),e.jsx("h3",{style:{marginTop:"32px",marginBottom:"16px"},children:"Font Weights"}),e.jsx("div",{className:"typography-showcase",children:[{weight:200,name:"Extra Light",usage:"Decorative use only, very large text"},{weight:300,name:"Light",usage:"Subtle text, secondary information"},{weight:400,name:"Normal (Regular)",usage:"Body text, paragraphs (default)"},{weight:500,name:"Medium",usage:"Emphasis, important text"},{weight:600,name:"Semi Bold",usage:"Subheadings, labels, buttons"},{weight:700,name:"Bold",usage:"Headlines, titles, strong emphasis"},{weight:800,name:"Extra Bold",usage:"Hero headlines, maximum impact"}].map(({weight:r,name:i,usage:a})=>e.jsxs(s.div,{className:"font-weight-item",children:[e.jsxs(s.div,{className:"font-weight-preview",style:{fontWeight:r},children:["Manrope ",i,e.jsxs(s.span,{className:"font-weight-token",children:["fontWeight: ",r]})]}),e.jsxs(s.div,{className:"font-weight-details",children:[e.jsx(s.span,{className:"font-weight-name",children:i}),e.jsxs(s.span,{className:"font-weight-value",children:["Font weight: ",r]})]}),e.jsx(s.div,{className:"font-weight-usage",children:a})]},r))}),e.jsx("div",{className:"code-example",children:`// Import typography tokens
import { fontSize, fontWeight, fontFamily } from '@/theme';

const styles = {
  fontFamily: fontFamily.body,     // 'Manrope, ...'
  fontSize: fontSize.md,           // 16px
  fontWeight: fontWeight.semibold, // 600
};`})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"quick-reference",children:"Quick Reference"}),`
`,e.jsxs("table",{className:"token-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Preview"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"8",children:"Colors"}),e.jsx("td",{children:e.jsx("code",{children:"primary40"})}),e.jsx("td",{children:"#0090FC"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#0090FC",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"primary40"})}),e.jsx("td",{children:"Primary buttons, links"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"secondary50"})}),e.jsx("td",{children:"#E5E507"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#E5E507",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#2B3136",fontFamily:"Monaco, monospace"},children:"secondary50"})}),e.jsx("td",{children:"Accent elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tertiary60"})}),e.jsx("td",{children:"#003963"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#003963",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"tertiary60"})}),e.jsx("td",{children:"Dark accents"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"success50"})}),e.jsx("td",{children:"#54BF85"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#54BF85",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"success50"})}),e.jsx("td",{children:"Success states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"error60"})}),e.jsx("td",{children:"#BA1B1B"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#BA1B1B",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"error60"})}),e.jsx("td",{children:"Error states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"warning50"})}),e.jsx("td",{children:"#C0850C"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#C0850C",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"warning50"})}),e.jsx("td",{children:"Warning states"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"neutral60"})}),e.jsx("td",{children:"#2B3136"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#2B3136",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#fff",fontFamily:"Monaco, monospace"},children:"neutral60"})}),e.jsx("td",{children:"Body text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"neutral10"})}),e.jsx("td",{children:"#F4F5F6"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:600,color:"#2B3136",fontFamily:"Monaco, monospace",border:"1px solid #D4D9DD"},children:"neutral10"})}),e.jsx("td",{children:"Page backgrounds"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"5",children:"Spacing"}),e.jsx("td",{children:e.jsx("code",{children:"spacing1"})}),e.jsx("td",{children:"0.25rem / 4px"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"4px",height:"20px",background:"#0090FC",borderRadius:"2px"}})})}),e.jsx("td",{children:"Micro spacing"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"spacing4"})}),e.jsx("td",{children:"1rem / 16px"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"16px",height:"20px",background:"#0090FC",borderRadius:"2px"}})})}),e.jsx("td",{children:"Base spacing"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"spacing6"})}),e.jsx("td",{children:"1.5rem / 24px"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"24px",height:"20px",background:"#0090FC",borderRadius:"2px"}})})}),e.jsx("td",{children:"Section padding"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"spacing8"})}),e.jsx("td",{children:"2rem / 32px"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"32px",height:"20px",background:"#0090FC",borderRadius:"2px"}})})}),e.jsx("td",{children:"Component separation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"spacing12"})}),e.jsx("td",{children:"3rem / 48px"}),e.jsx("td",{children:e.jsx("div",{style:{width:"60px",height:"30px",background:"#F4F5F6",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"48px",height:"20px",background:"#0090FC",borderRadius:"2px"}})})}),e.jsx("td",{children:"Large section spacing"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:"Typography"}),e.jsx("td",{children:e.jsx("code",{children:"fontWeight: 400"})}),e.jsx("td",{children:"Regular"}),e.jsx("td",{children:e.jsx("span",{style:{fontWeight:400,fontFamily:"Manrope, sans-serif",fontSize:"14px"},children:"Aa"})}),e.jsx("td",{children:"Body text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fontWeight: 600"})}),e.jsx("td",{children:"Semi Bold"}),e.jsx("td",{children:e.jsx("span",{style:{fontWeight:600,fontFamily:"Manrope, sans-serif",fontSize:"14px"},children:"Aa"})}),e.jsx("td",{children:"Buttons, labels"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fontWeight: 700"})}),e.jsx("td",{children:"Bold"}),e.jsx("td",{children:e.jsx("span",{style:{fontWeight:700,fontFamily:"Manrope, sans-serif",fontSize:"14px"},children:"Aa"})}),e.jsx("td",{children:"Headings"})]})]})]})]})}function F(t={}){const{wrapper:s}={...c(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{F as default};
