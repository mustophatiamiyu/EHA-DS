/**
 * RSuite Theme Configuration
 * 
 * Customizes RSuite's default theme to match the design system tokens.
 * This file provides theme overrides and CSS variables that integrate
 * with RSuite's theming system.
 */
import React from 'react';
import { colors, semanticColors, spacing, fontSize, borderRadius, shadows } from './design-tokens';
import { CustomProvider } from 'rsuite';

/**
 * Custom RSuite Theme
 * Maps design tokens to RSuite's CSS variables
 */
export const rsuiteTheme = {
  // Primary colors
  '--rs-primary-50': colors.primary10,
  '--rs-primary-100': colors.primary20,
  '--rs-primary-200': colors.primary30,
  '--rs-primary-300': colors.primary30,
  '--rs-primary-400': colors.primary40,
  '--rs-primary-500': colors.primary40,
  '--rs-primary-600': colors.primary50,
  '--rs-primary-700': colors.primary60,
  '--rs-primary-800': colors.primary60,
  '--rs-primary-900': colors.primary60,

  // Success colors
  '--rs-green-50': colors.success10,
  '--rs-green-100': colors.success20,
  '--rs-green-200': colors.success30,
  '--rs-green-300': colors.success40,
  '--rs-green-400': colors.success40,
  '--rs-green-500': colors.success50,
  '--rs-green-600': colors.success50,
  '--rs-green-700': colors.success60,
  '--rs-green-800': colors.success60,
  '--rs-green-900': colors.success60,

  // Error colors
  '--rs-red-50': colors.error10,
  '--rs-red-100': colors.error20,
  '--rs-red-200': colors.error30,
  '--rs-red-300': colors.error40,
  '--rs-red-400': colors.error40,
  '--rs-red-500': colors.error50,
  '--rs-red-600': colors.error60,
  '--rs-red-700': colors.error60,
  '--rs-red-800': colors.error60,
  '--rs-red-900': colors.error60,

  // Warning colors
  '--rs-yellow-50': colors.warning10,
  '--rs-yellow-100': colors.warning20,
  '--rs-yellow-200': colors.warning30,
  '--rs-yellow-300': colors.warning40,
  '--rs-yellow-400': colors.warning40,
  '--rs-yellow-500': colors.warning50,
  '--rs-yellow-600': colors.warning50,
  '--rs-yellow-700': colors.warning60,
  '--rs-yellow-800': colors.warning60,
  '--rs-yellow-900': colors.warning60,

  // Neutral colors
  '--rs-gray-50': colors.neutral10,
  '--rs-gray-100': colors.neutral10,
  '--rs-gray-200': colors.neutral20,
  '--rs-gray-300': colors.neutral30,
  '--rs-gray-400': colors.neutral40,
  '--rs-gray-500': colors.neutral40,
  '--rs-gray-600': colors.neutral50,
  '--rs-gray-700': colors.neutral60,
  '--rs-gray-800': colors.neutral60,
  '--rs-gray-900': colors.neutral60,

  // Text colors
  '--rs-text-primary': semanticColors.text.primary,
  '--rs-text-secondary': semanticColors.text.secondary,
  '--rs-text-tertiary': semanticColors.text.tertiary,
  '--rs-text-disabled': semanticColors.text.disabled,
  '--rs-text-link': semanticColors.text.link,

  // Background colors
  '--rs-bg-card': semanticColors.background.primary,
  '--rs-bg-overlay': semanticColors.background.secondary,
  '--rs-bg-well': semanticColors.background.tertiary,

  // Border colors
  '--rs-border-primary': semanticColors.border.default,
  '--rs-border-secondary': semanticColors.border.hover,

  // State colors
  '--rs-state-success': colors.success50,
  '--rs-state-info': colors.primary40,
  '--rs-state-warning': colors.warning50,
  '--rs-state-error': colors.error60,

  // Component specific
  '--rs-btn-primary-bg': colors.primary40,
  '--rs-btn-primary-hover-bg': colors.primary50,
  '--rs-btn-primary-active-bg': colors.primary60,
  '--rs-btn-primary-text': colors.white,

  '--rs-btn-subtle-hover-bg': colors.neutral10,
  '--rs-btn-subtle-active-bg': colors.neutral20,
  '--rs-btn-subtle-text': semanticColors.text.primary,

  '--rs-btn-ghost-border': semanticColors.border.default,
  '--rs-btn-ghost-hover-border': semanticColors.border.hover,
  '--rs-btn-ghost-text': semanticColors.text.primary,

  // Spacing
  '--rs-spacing-xs': spacing.xs,
  '--rs-spacing-sm': spacing.sm,
  '--rs-spacing-md': spacing.md,
  '--rs-spacing-lg': spacing.lg,
  '--rs-spacing-xl': spacing.xl,

  // Border radius
  '--rs-border-radius': borderRadius.md,
  '--rs-border-radius-sm': borderRadius.sm,
  '--rs-border-radius-lg': borderRadius.lg,

  // Shadows
  '--rs-shadow-overlay': shadows.lg,
} as const;

/**
 * Apply Custom Theme
 * Helper function to apply theme CSS variables to a DOM element
 * 
 * @param element - DOM element to apply theme to (defaults to :root)
 * @example
 * ```tsx
 * // In your app initialization
 * import { applyRSuiteTheme } from './theme';
 * 
 * applyRSuiteTheme();
 * ```
 */
export function applyRSuiteTheme(element: HTMLElement = document.documentElement) {
  Object.entries(rsuiteTheme).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
}

/**
 * Theme Provider Component
 * React component to wrap your app and apply the theme
 * 
 * @example
 * ```tsx
 * import { ThemeProvider } from './theme';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    applyRSuiteTheme();
  }, []);

  return <>{children}</>;
}

/**
 * Get CSS Variable Value
 * Helper to access theme values in JavaScript
 */
export function getCSSVariable(variable: keyof typeof rsuiteTheme): string {
  return rsuiteTheme[variable];
}

export default rsuiteTheme;