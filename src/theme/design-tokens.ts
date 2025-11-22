/**
 * Design Tokens
 * 
 * Central source of truth for design system values including colors, spacing,
 * typography, and other design primitives. These tokens ensure consistency
 * across all components.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Base Colors
 * Primary brand colors and fundamental color values
 */
export const baseColors = {
  primary: '#0090FC',
  secondary: '#E5E507',
  tertiary: '#003963',
  neutral: '#2B3136',
  white: '#FFFFFF',
  black: '#000000',
  error: '#BA1B1B',
  success: '#54BF85',
  warning: '#C0850C',
} as const;

/**
 * Primary Color Scale
 * Variants of the primary brand color for different use cases
 */
export const primaryColors = {
  primary10: '#F3FBFF',
  primary20: '#D4EDFF',
  primary30: '#53B5FF',
  primary40: '#0090FC', // Base primary
  primary50: '#0078D2',
  primary60: '#0060A8',
} as const;

/**
 * Secondary Color Scale
 * Variants of the secondary brand color
 */
export const secondaryColors = {
  secondary10: '#FEFEEE',
  secondary20: '#FBFB7A',
  secondary30: '#F6F608',
  secondary40: '#E5E507', // Base secondary
  secondary50: '#BABA06',
  secondary60: '#9D9D05',
} as const;

/**
 * Tertiary Color Scale
 * Variants of the tertiary brand color
 */
export const tertiaryColors = {
  tertiary10: '#D1E4FF',
  tertiary20: '#9ECAFF',
  tertiary30: '#6DAFF6',
  tertiary40: '#5195DA',
  tertiary50: '#327ABE',
  tertiary60: '#0061A3',
} as const;

/**
 * Neutral Color Scale
 * Grayscale colors for backgrounds, borders, and text
 */
export const neutralColors = {
  neutral10: '#F4F5F6',
  neutral20: '#D4D9DD',
  neutral30: '#B4BCC3',
  neutral40: '#6B7A86',
  neutral50: '#3D464D',
  neutral60: '#2B3136', // Base neutral
} as const;

/**
 * Error Color Scale
 * Colors for error states and destructive actions
 */
export const errorColors = {
  error10: '#FDEFEF',
  error20: '#F6BEBE',
  error30: '#EF8E8E',
  error40: '#E75D5D',
  error50: '#E02C2C',
  error60: '#BA1B1B', // Base error
} as const;

/**
 * Success Color Scale
 * Colors for success states and positive feedback
 */
export const successColors = {
  success10: '#EAFFE8',
  success20: '#C1FFD5',
  success30: '#7CFCB0',
  success40: '#71DB9F',
  success50: '#54BF85', // Base success
  success60: '#2A9D64',
} as const;

/**
 * Warning Color Scale
 * Colors for warning states and cautionary messages
 */
export const warningColors = {
  warning10: '#FFEEDA',
  warning20: '#FFDEAE',
  warning30: '#FDBA46',
  warning40: '#DEA02D',
  warning50: '#C0850C', // Base warning
  warning60: '#9F6D00',
} as const;

/**
 * All Color Tokens
 * Combined object containing all color scales
 */
export const colors = {
  ...baseColors,
  ...primaryColors,
  ...secondaryColors,
  ...tertiaryColors,
  ...neutralColors,
  ...errorColors,
  ...successColors,
  ...warningColors,
} as const;

// ============================================================================
// SEMANTIC COLOR TOKENS
// ============================================================================

/**
 * Semantic Colors
 * Color tokens mapped to specific UI purposes for consistent usage
 */
export const semanticColors = {
  // Text colors
  text: {
    primary: colors.neutral60,
    secondary: colors.neutral40,
    tertiary: colors.neutral30,
    inverse: colors.white,
    disabled: colors.neutral30,
    link: colors.primary50,
    linkHover: colors.primary50,
  },

  // Background colors
  background: {
    primary: colors.white,
    secondary: colors.neutral10,
    tertiary: colors.neutral20,
    inverse: colors.neutral60,
    disabled: colors.neutral10,
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Border colors
  border: {
    default: colors.neutral20,
    inverse: colors.primary50,
    hover: colors.neutral30,
    focus: colors.primary40,
    error: colors.error60,
    disabled: colors.neutral20,
  },

  // Interactive states
  interactive: {
    primary: colors.primary40,
    primaryHover: colors.primary50,
    primaryActive: colors.primary60,
    primaryDisabled: colors.primary20,

    secondary: colors.secondary40,
    secondaryHover: colors.secondary50,
    secondaryActive: colors.secondary60,
    secondaryDisabled: colors.secondary20,

    tertiary: colors.tertiary40,
    tertiaryHover: colors.tertiary50,
    tertiaryActive: colors.tertiary60,
    tertiaryDisabled: colors.tertiary20,
  },

  // Feedback colors
  feedback: {
    error: colors.error60,
    errorBg: colors.error10,
    errorBorder: colors.error30,

    success: colors.success50,
    successBg: colors.success10,
    successBorder: colors.success30,

    warning: colors.warning50,
    warningBg: colors.warning10,
    warningBorder: colors.warning30,

    info: colors.primary40,
    infoBg: colors.primary10,
    infoBorder: colors.primary30,
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing Scale
 * Consistent spacing values based on 4px base unit
 */
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font Families
 */
export const fontFamily = {
  body: '"Manrope", -apple-system, sans-serif',
  heading: '"Manrope", -apple-system, sans-serif',
  mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

/**
 * Font Sizes
 */
export const fontSize = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
} as const;

/**
 * Font Weights
 */
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Line Heights
 */
export const lineHeight = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

/**
 * Border Radius Scale
 */
export const borderRadius = {
  none: '0',
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

/**
 * Box Shadow Scale
 */
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

/**
 * Z-Index Scale
 * Consistent layering for overlays and positioned elements
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
} as const;

// ============================================================================
// TRANSITION TOKENS
// ============================================================================

/**
 * Transition Duration
 */
export const transitionDuration = {
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
} as const;

/**
 * Transition Timing Functions
 */
export const transitionTiming = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

/**
 * Button Tokens
 */
export const buttonTokens = {
  sizes: {
    sm: {
      height: '36px',
      padding: '0 12px',
      fontSize: fontSize.sm,
    },
    md: {
      height: '40px',
      padding: '0 16px',
      fontSize: fontSize.md,
    },
    lg: {
      height: '44px',
      padding: '0 20px',
      fontSize: fontSize.lg,
    },
  },
} as const;

/**
 * Input Tokens
 */
export const inputTokens = {
  sizes: {
    sm: {
      height: '32px',
      padding: '0 12px',
      fontSize: fontSize.sm,
    },
    md: {
      height: '40px',
      padding: '0 16px',
      fontSize: fontSize.md,
    },
    lg: {
      height: '48px',
      padding: '0 20px',
      fontSize: fontSize.lg,
    },
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

/**
 * Complete Design Token System
 * All design tokens in a single object for easy import
 */
export const designTokens = {
  colors,
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
} as const;

export default designTokens;