import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B80NBAco.js";import"./blocks-D76HFvEI.js";import{M as r}from"./index-D2DZtzpZ.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-r_U6gsAf.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Style Guide/Icons"}),`
`,n.jsx(e.h1,{id:"icons",children:"Icons"}),`
`,n.jsxs(e.p,{children:["Our design system uses two primary icon libraries to provide a comprehensive set of icons for all use cases: ",n.jsx(e.strong,{children:"Google Material Icons"})," and ",n.jsx(e.strong,{children:"Phosphor Icons"}),"."]}),`
`,n.jsx(e.h2,{id:"icon-libraries",children:"Icon Libraries"}),`
`,n.jsx(e.h3,{id:"google-material-icons",children:"Google Material Icons"}),`
`,n.jsx(e.p,{children:"Material Icons are Google's official icon set, offering over 2,000+ icons across various categories. These icons follow Material Design guidelines and are available in multiple styles."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Styles Available:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Filled (default)"}),`
`,n.jsx(e.li,{children:"Outlined"}),`
`,n.jsx(e.li,{children:"Rounded"}),`
`,n.jsx(e.li,{children:"Sharp"}),`
`,n.jsx(e.li,{children:"Two-tone"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Installation:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @mui/icons-material @mui/material @emotion/react @emotion/styled
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add @mui/icons-material @mui/material @emotion/react @emotion/styled
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Resources:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Browse Material Icons"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://mui.com/material-ui/icons/",rel:"nofollow",children:"Material Icons Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/mui/material-ui/tree/master/packages/mui-icons-material",rel:"nofollow",children:"GitHub Repository"})}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function MyComponent() {
  return (
    <>
      <HomeIcon />
      <HomeOutlinedIcon />
      <HomeRoundedIcon fontSize="large" color="primary" />
    </>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"phosphor-icons",children:"Phosphor Icons"}),`
`,n.jsx(e.p,{children:"Phosphor is a flexible icon family with over 9,000+ icons designed for interfaces, diagrams, presentations, and more. Each icon is available in six weights, providing excellent design flexibility."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Weights Available:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Thin"}),`
`,n.jsx(e.li,{children:"Light"}),`
`,n.jsx(e.li,{children:"Regular (default)"}),`
`,n.jsx(e.li,{children:"Bold"}),`
`,n.jsx(e.li,{children:"Fill"}),`
`,n.jsx(e.li,{children:"Duotone"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Installation:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @phosphor-icons/react
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add @phosphor-icons/react
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Resources:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://phosphoricons.com/",rel:"nofollow",children:"Browse Phosphor Icons"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/phosphor-icons/react",rel:"nofollow",children:"Phosphor React Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/phosphor-icons/react",rel:"nofollow",children:"GitHub Repository"})}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Usage Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { House, HouseLine, Heart } from "@phosphor-icons/react";

function MyComponent() {
  return (
    <>
      <House size={24} />
      <HouseLine size={32} weight="bold" />
      <Heart size={32} weight="fill" color="#e74c3c" />
    </>
  );
}
`})})]})}function g(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{g as default};
