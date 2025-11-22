/**
 * Design System Theme Exports
 * 
 * Central export point for all theme-related utilities and tokens.
 */

// Design Tokens
export {
  colors,
  baseColors,
  primaryColors,
  secondaryColors,
  tertiaryColors,
  neutralColors,
  errorColors,
  successColors,
  warningColors,
  semanticColors,
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
  shadows,
  zIndex,
  transitionDuration,
  transitionTiming,
  buttonTokens,
  inputTokens,
  type ColorToken,
  type SpacingToken,
  type FontSizeToken,
  type FontWeightToken,
  type BorderRadiusToken,
  type ShadowToken,
} from './design-tokens';

// RSuite Theme Configuration
export {
  rsuiteTheme,
  applyRSuiteTheme,
  ThemeProvider,
  getCSSVariable,
} from './rsuite-theme';

// Token Utilities
export {
  getColor,
  getSemanticColor,
  getFeedbackColor,
  hexToRgba,
  getSpacing,
  getSpacingMultiple,
  getResponsiveSpacing,
  getFontSize,
  getFontWeight,
  getTypographyStyles,
  getBorderRadius,
  getBorder,
  getShadow,
  getButtonStyles,
  getStatusBadgeStyles,
  getCardStyles,
  tokenUtils,
} from './token-utils';

// Default export
export { default as designTokens } from './design-tokens';