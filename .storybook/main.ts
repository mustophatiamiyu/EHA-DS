import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../src/stories/assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true, // ✅ Enable automatic docs for all components
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  viteFinal: async (config) => {
    // Set base path for GitHub Pages deployment
    config.base = process.env.NODE_ENV === 'production' ? '/EHA-DS/' : '/';
    return config;
  },
};

export default config;