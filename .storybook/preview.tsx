// .storybook/preview.tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/rsuite-theme';
import { designTokens } from '../src/theme/design-tokens';
import 'rsuite/dist/rsuite.min.css';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{
          padding: designTokens.spacing['2xl'],
          fontFamily: designTokens.fontFamily.body
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: designTokens.semanticColors.background.primary,
        },
        {
          name: 'dark',
          value: designTokens.semanticColors.background.inverse,
        },
      ],
    },
  },
};

export default preview;