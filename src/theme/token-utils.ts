/**
 * Design Token Utilities
 * 
 * Helper functions for working with design tokens in components.
 * Provides type-safe access to tokens and common patterns.
 */

import {
  colors,
  semanticColors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadows,
  ColorToken,
  SpacingToken,
  FontSizeToken,
  BorderRadiusToken,
  ShadowToken,
} from './design-tokens';


// ============================================================================
// COLOR UTILITIES
// ============================================================================

/**
 * Get color value by token name
 * 
 * @param token - Color token name
 * @returns Hex color value
 * 
 * @example
 * ```tsx
 * const primaryColor = getColor('primary40'); // '#0090FC'
 * ```
 */
export function getColor(token: ColorToken): string {
  return colors[token];
}

/**
 * Get semantic color value
 * 
 * @param category - Semantic category (text, background, border, etc.)
 * @param variant - Variant within category
 * @returns Color value
 * 
 * @example
 * ```tsx
 * const textColor = getSemanticColor('text', 'primary');
 * const bgColor = getSemanticColor('background', 'secondary');
 * ```
 */
export function getSemanticColor(
  category: keyof typeof semanticColors,
  variant: string
): string {
  return (semanticColors[category] as any)[variant] || colors.neutral60;
}

/**
 * Get feedback color for different states
 * 
 * @param type - Feedback type (success, error, warning, info)
 * @param variant - Color variant (default, bg, border)
 * @returns Color value
 * 
 * @example
 * ```tsx
 * const errorColor = getFeedbackColor('error'); // '#BA1B1B'
 * const errorBg = getFeedbackColor('error', 'bg'); // '#FDEFEF'
 * ```
 */
export function getFeedbackColor(
  type: 'success' | 'error' | 'warning' | 'info',
  variant: 'default' | 'bg' | 'border' = 'default'
): string {
  const mapping = {
    success: {
      default: semanticColors.feedback.success,
      bg: semanticColors.feedback.successBg,
      border: semanticColors.feedback.successBorder,
    },
    error: {
      default: semanticColors.feedback.error,
      bg: semanticColors.feedback.errorBg,
      border: semanticColors.feedback.errorBorder,
    },
    warning: {
      default: semanticColors.feedback.warning,
      bg: semanticColors.feedback.warningBg,
      border: semanticColors.feedback.warningBorder,
    },
    info: {
      default: semanticColors.feedback.info,
      bg: semanticColors.feedback.infoBg,
      border: semanticColors.feedback.infoBorder,
    },
  };

  return mapping[type][variant];
}

/**
 * Convert hex color to rgba
 * 
 * @param hex - Hex color value
 * @param alpha - Alpha/opacity value (0-1)
 * @returns RGBA color string
 * 
 * @example
 * ```tsx
 * const semiTransparent = hexToRgba('#0090FC', 0.5);
 * // 'rgba(0, 144, 252, 0.5)'
 * ```
 */
export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ============================================================================
// SPACING UTILITIES
// ============================================================================

/**
 * Get spacing value by token name
 * 
 * @param token - Spacing token name
 * @returns Spacing value in pixels
 * 
 * @example
 * ```tsx
 * const margin = getSpacing('md'); // '12px'
 * ```
 */
export function getSpacing(token: SpacingToken): string {
  return spacing[token];
}

/**
 * Generate spacing for multiple sides
 * 
 * @param top - Top spacing token
 * @param right - Right spacing token (defaults to top)
 * @param bottom - Bottom spacing token (defaults to top)
 * @param left - Left spacing token (defaults to right)
 * @returns CSS padding/margin string
 * 
 * @example
 * ```tsx
 * const padding = getSpacingMultiple('md', 'lg'); // '12px 16px'
 * ```
 */
export function getSpacingMultiple(
  top: SpacingToken,
  right?: SpacingToken,
  bottom?: SpacingToken,
  left?: SpacingToken
): string {
  const values = [
    spacing[top],
    right ? spacing[right] : spacing[top],
    bottom ? spacing[bottom] : spacing[top],
    left ? spacing[left] : (right ? spacing[right] : spacing[top]),
  ];

  return values.join(' ');
}

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================

/**
 * Get font size value by token name
 * 
 * @param token - Font size token name
 * @returns Font size value
 * 
 * @example
 * ```tsx
 * const size = getFontSize('lg'); // '18px'
 * ```
 */
export function getFontSize(token: FontSizeToken): string {
  return fontSize[token];
}

/**
 * Get font weight value by token name
 * 
 * @param token - Font weight token name
 * @returns Font weight value
 * 
 * @example
 * ```tsx
 * const weight = getFontWeight('bold'); // 700
 * ```
 */
export function getFontWeight(token: keyof typeof fontWeight): number {
  return fontWeight[token];
}

/**
 * Generate typography styles object
 * 
 * @param size - Font size token
 * @param weight - Font weight token
 * @returns Style object with typography properties
 * 
 * @example
 * ```tsx
 * const styles = getTypographyStyles('lg', 'bold');
 * // { fontSize: '18px', fontWeight: 700 }
 * ```
 */
export function getTypographyStyles(
  size: FontSizeToken,
  weight?: keyof typeof fontWeight
): { fontSize: string; fontWeight?: number } {
  return {
    fontSize: fontSize[size],
    ...(weight && { fontWeight: fontWeight[weight] }),
  };
}

// ============================================================================
// BORDER UTILITIES
// ============================================================================

/**
 * Get border radius value by token name
 * 
 * @param token - Border radius token name
 * @returns Border radius value
 * 
 * @example
 * ```tsx
 * const radius = getBorderRadius('lg'); // '8px'
 * ```
 */
export function getBorderRadius(token: BorderRadiusToken): string {
  return borderRadius[token];
}

/**
 * Generate border style
 * 
 * @param width - Border width in pixels
 * @param color - Color token or hex value
 * @param style - Border style (solid, dashed, etc.)
 * @returns CSS border string
 * 
 * @example
 * ```tsx
 * const border = getBorder(1, 'neutral30'); // '1px solid #B4BCC3'
 * ```
 */
export function getBorder(
  width: number = 1,
  color: ColorToken | string = 'neutral30',
  style: 'solid' | 'dashed' | 'dotted' = 'solid'
): string {
  const colorValue = color in colors ? colors[color as ColorToken] : color;
  return `${width}px ${style} ${colorValue}`;
}

// ============================================================================
// SHADOW UTILITIES
// ============================================================================

/**
 * Get box shadow value by token name
 * 
 * @param token - Shadow token name
 * @returns Box shadow value
 * 
 * @example
 * ```tsx
 * const shadow = getShadow('md');
 * ```
 */
export function getShadow(token: ShadowToken): string {
  return shadows[token];
}

// ============================================================================
// COMPONENT STYLE GENERATORS
// ============================================================================

/**
 * Generate button variant styles
 * 
 * @param variant - Button variant (primary, secondary, etc.)
 * @param size - Button size
 * @returns Style object for button
 * 
 * @example
 * ```tsx
 * const buttonStyles = getButtonStyles('primary', 'md');
 * ```
 */
export function getButtonStyles(
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning',
  size: 'sm' | 'md' | 'lg' = 'md'
) {
  const variantColorMap = {
    primary: {
      backgroundColor: colors.primary50,
      bgHover: colors.primary50,
      bgActive: colors.primary60,
      color: colors.white,
    },
    secondary: {
      backgroundColor: 'transparent',
      bgHover: 'transparent',
      bgActive: colors.secondary60,
      color: colors.primary50,
      border: `1px solid ${colors.primary50}`,
    },
    tertiary: {
      backgroundColor: 'transparent',
      bgHover: 'transparent',
      bgActive: 'transparent',
      color: colors.primary50,
    },

    ghost: {
      backgroundColor: 'transparent',
      bgHover: 'transparent',
      bgActive: 'transparent',
      color: colors.neutral60,
      border: `1px solid ${colors.neutral60}`,
    },

    error: {
      backgroundColor: colors.error60,
      bgHover: colors.error50,
      bgActive: colors.error60,
      color: colors.white,
    },
    success: {
      backgroundColor: colors.success50,
      bgHover: colors.success40,
      bgActive: colors.success60,
      color: colors.white,
    },
    warning: {
      backgroundColor: colors.warning50,
      bgHover: colors.warning40,
      bgActive: colors.warning60,
      color: colors.white,
    },
  };

  const sizeMap = {
    xs: { height: '24px', padding: '0 8px', fontSize: fontSize.xs },
    sm: { height: '32px', padding: '0 12px', fontSize: fontSize.sm },
    md: { height: '40px', padding: '0 16px', fontSize: fontSize.md },
    lg: { height: '48px', padding: '0 20px', fontSize: fontSize.lg },
  };

  return {
    ...variantColorMap[variant],
    ...sizeMap[size],
    borderRadius: borderRadius.md,
  };
}

/**
 * Generate status badge styles
 * 
 * @param status - Status type
 * @returns Style object for badge
 * 
 * @example
 * ```tsx
 * const badgeStyles = getStatusBadgeStyles('success');
 * ```
 */
export function getStatusBadgeStyles(
  status: 'success' | 'error' | 'warning' | 'info' | 'neutral'
) {
  const statusMap = {
    success: {
      backgroundColor: colors.success10,
      color: colors.success60,
      border: `1px solid ${colors.success30}`,
    },
    error: {
      backgroundColor: colors.error10,
      color: colors.error60,
      border: `1px solid ${colors.error30}`,
    },
    warning: {
      backgroundColor: colors.warning10,
      color: colors.warning60,
      border: `1px solid ${colors.warning30}`,
    },
    info: {
      backgroundColor: colors.primary10,
      color: colors.primary60,
      border: `1px solid ${colors.primary30}`,
    },
    neutral: {
      backgroundColor: colors.neutral10,
      color: colors.neutral60,
      border: `1px solid ${colors.neutral30}`,
    },
  };

  return {
    ...statusMap[status],
    padding: getSpacingMultiple('xs', 'sm'),
    borderRadius: borderRadius.full,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  };
}

/**
 * Generate card styles
 * 
 * @param elevated - Whether card should have elevation
 * @returns Style object for card
 * 
 * @example
 * ```tsx
 * const cardStyles = getCardStyles(true);
 * ```
 */
export function getCardStyles(elevated: boolean = false) {
  return {
    backgroundColor: semanticColors.background.primary,
    borderRadius: borderRadius.lg,
    border: getBorder(1, 'neutral20'),
    padding: spacing.lg,
    ...(elevated && { boxShadow: shadows.md }),
  };
}

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

/**
 * Generate responsive spacing
 * 
 * @param mobile - Mobile spacing token
 * @param tablet - Tablet spacing token
 * @param desktop - Desktop spacing token
 * @returns Object with responsive spacing values
 * 
 * @example
 * ```tsx
 * const responsiveMargin = getResponsiveSpacing('sm', 'md', 'lg');
 * ```
 */
export function getResponsiveSpacing(
  mobile: SpacingToken,
  tablet?: SpacingToken,
  desktop?: SpacingToken
) {
  return {
    mobile: spacing[mobile],
    tablet: tablet ? spacing[tablet] : spacing[mobile],
    desktop: desktop ? spacing[desktop] : (tablet ? spacing[tablet] : spacing[mobile]),
  };
}

// ============================================================================
// EXPORTS
// ============================================================================

export const tokenUtils = {
  // Color
  getColor,
  getSemanticColor,
  getFeedbackColor,
  hexToRgba,

  // Spacing
  getSpacing,
  getSpacingMultiple,
  getResponsiveSpacing,

  // Typography
  getFontSize,
  getFontWeight,
  getTypographyStyles,

  // Border
  getBorderRadius,
  getBorder,

  // Shadow
  getShadow,

  // Component Styles
  getButtonStyles,
  getStatusBadgeStyles,
  getCardStyles,
};

export default tokenUtils;