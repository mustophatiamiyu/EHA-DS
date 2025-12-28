import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B80NBAco.js";import"./blocks-D76HFvEI.js";import{M as r}from"./index-D2DZtzpZ.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-r_U6gsAf.js";import"./index-Dp7zRQ9y.js";import"./index-AKL6M_bP.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(o){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Start Guide"}),`
`,`
`,n.jsx(e.h1,{id:"developer-guide",children:"Developer Guide"}),`
`,n.jsx(e.p,{children:"Welcome to the EHA Design System! This guide will help you get started with developing, testing, and deploying components."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before you begin, ensure you have the following installed on your machine:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Node.js"})," (v18 or higher) - ",n.jsx(e.a,{href:"https://nodejs.org/",rel:"nofollow",children:"Download Node.js"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"npm"})," (v9 or higher) or ",n.jsx(e.strong,{children:"yarn"})," (v1.22 or higher)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Git"})," - ",n.jsx(e.a,{href:"https://git-scm.com/",rel:"nofollow",children:"Download Git"})]}),`
`]}),`
`,n.jsx(e.p,{children:"To verify your installations:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
git --version    # Should show 2.x.x or higher
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h3,{id:"step-1-clone-the-repository",children:"Step 1: Clone the Repository"}),`
`,n.jsx(e.p,{children:"Clone the EHA Design System repository to your local machine:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Using HTTPS
git clone https://github.com/eha/EHA-design-system.git

# OR using SSH (if you have SSH keys set up)
git clone git@github.com:eha/EHA-design-system.git

# Navigate into the project directory
cd EHA-design-system
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),`
`,n.jsx(e.p,{children:"Install all project dependencies using npm or yarn:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Using npm
npm install

# OR using yarn
yarn install
`})}),`
`,n.jsxs(e.p,{children:["This will install all the packages listed in ",n.jsx(e.code,{children:"package.json"}),", including:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React and React DOM"}),`
`,n.jsx(e.li,{children:"RSuite component library"}),`
`,n.jsx(e.li,{children:"Storybook and its dependencies"}),`
`,n.jsx(e.li,{children:"TypeScript and type definitions"}),`
`,n.jsx(e.li,{children:"Build tools and utilities"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"step-3-install-global-dependencies",children:"Step 3: Install Global Dependencies"}),`
`,n.jsx(e.p,{children:"Some tools are recommended to be installed globally for better development experience:"}),`
`,n.jsx(e.h4,{id:"storybook-cli-optional-but-recommended",children:"Storybook CLI (Optional but Recommended)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install -g storybook
`})}),`
`,n.jsx(e.p,{children:"This allows you to use Storybook commands from anywhere and helps with troubleshooting."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,n.jsx(e.h3,{id:"starting-storybook",children:"Starting Storybook"}),`
`,n.jsx(e.p,{children:"Storybook is the main development environment for the EHA Design System. It allows you to:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"View all components in isolation"}),`
`,n.jsx(e.li,{children:"Test different component states"}),`
`,n.jsx(e.li,{children:"Interact with component props"}),`
`,n.jsx(e.li,{children:"Read component documentation"}),`
`]}),`
`,n.jsx(e.h4,{id:"start-the-development-server",children:"Start the Development Server"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Using npm
npm run storybook

# OR using yarn
yarn storybook
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"project-structure",children:"Project Structure"}),`
`,n.jsx(e.p,{children:"Understanding the project structure will help you navigate and contribute effectively:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`EHA-design-system/
│
├── src/                          # Source code
│   ├── components/               # Component library
│   │   ├── Accordion/
│   │   │   ├── Panel.tsx         # Component implementation
│   │   │   ├── PanelGroup.tsx
│   │   │   ├── index.ts          # Component exports
│   │   │   └── Accordion.stories.tsx  # Storybook stories
│   │   │
│   │   ├── Button/
│   │   ├── Checkbox/
│   │   ├── Breadcrumb/
│   │   └── Dropdown/
│   │
│   ├── stories/                  # Additional documentation
│   │   ├── Introduction.mdx
│   │   ├── icons.mdx
│   │   └── ...
│   │
│   ├── theme/                    # Design tokens and theme configuration
│   │   ├── design-tokens.ts      # Design tokens (colors, spacing, etc.)
│   │   └── rsuite-theme.tsx      # RSuite theme provider
│   │
│   ├── index.css                 # Global styles (fonts, resets)
│   └── index.ts                  # Main entry point (exports all components)
│
├── .storybook/                   # Storybook configuration
│   ├── main.ts                   # Main Storybook config
│   ├── preview.tsx               # Global decorators and parameters
│
├── public/                       # Static assets
├── dist/                         # Build output (generated)
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"global-styles--theming",children:"Global Styles & Theming"}),`
`,n.jsxs(e.p,{children:["The design system uses ",n.jsx(e.strong,{children:"Manrope"})," as the primary font family. This is configured in ",n.jsx(e.code,{children:"src/theme/design-tokens.ts"})," and imported via ",n.jsx(e.code,{children:"src/index.css"}),"."]}),`
`,n.jsxs(e.p,{children:["When creating stories or using components, ensure they are wrapped in the ",n.jsx(e.code,{children:"ThemeProvider"})," (exported from ",n.jsx(e.code,{children:"src/theme/rsuite-theme.tsx"}),") to apply the correct RSuite theme and design tokens."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"common-development-tasks",children:"Common Development Tasks"}),`
`,n.jsx(e.h3,{id:"creating-a-new-component",children:"Creating a New Component"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Create the component directory:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`mkdir -p src/components/YourComponent
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Create the component file:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/YourComponent/YourComponent.tsx
import React from 'react';
import { YourComponent as RSuiteYourComponent } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface YourComponentProps {
  // Define props
}

export const YourComponent: React.FC<YourComponentProps> = (props) => {
  return <RSuiteYourComponent {...props} />;
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Create the index file:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/YourComponent/index.ts
export { YourComponent } from './YourComponent';
export type { YourComponentProps } from './YourComponent';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Create the stories file:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/YourComponent/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './index';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // Default props
  },
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Export from main index:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/index.ts
export { YourComponent } from './components/YourComponent';
export type { YourComponentProps } from './components/YourComponent';
`})}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"building-the-project",children:"Building the Project"}),`
`,n.jsx(e.h3,{id:"development-build",children:"Development Build"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run build
`})}),`
`,n.jsxs(e.p,{children:["This creates a production-ready build in the ",n.jsx(e.code,{children:"dist/"})," directory."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Output:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dist/index.js"})," - Compiled JavaScript"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dist/index.d.ts"})," - TypeScript definitions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dist/components/"})," - Individual component builds"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"building-storybook-static",children:"Building Storybook (Static)"}),`
`,n.jsx(e.p,{children:"To build a static version of Storybook for deployment:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run build-storybook
`})}),`
`,n.jsxs(e.p,{children:["This creates a static website in ",n.jsx(e.code,{children:"storybook-static/"})," that can be deployed to any static hosting service."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"reporting-issues",children:"Reporting Issues"}),`
`,n.jsx(e.p,{children:"When reporting issues, please include:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Steps to reproduce"}),`
`,n.jsx(e.li,{children:"Expected behavior"}),`
`,n.jsx(e.li,{children:"Actual behavior"}),`
`,n.jsx(e.li,{children:"Screenshots (if applicable)"}),`
`,n.jsx(e.li,{children:"Your environment (OS, Node version, npm version)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Last updated: November 2025"})})]})}function g(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{g as default};
