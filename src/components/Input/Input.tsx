// src/components/Input/Input.tsx
import React from 'react';
import { Input as RSuiteInput, InputProps as RSuiteInputProps, InputGroup } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';
import { getSemanticColor } from '../../theme/token-utils';

export interface InputProps extends Omit<RSuiteInputProps, 'size'> {
  /** Size of the input */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Label for the input (if not using a separate Label component) */
  label?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Error message to display below the input */
  error?: string;
  /** Full width input */
  fullWidth?: boolean;
}

/**
 * Custom Input Component
 * 
 * A design system-ready input that wraps RSuite Input with brand styling.
 * 
 * @example
 * <Input size="md" placeholder="Enter your name" />
 */
export const Input: React.FC<InputProps> = ({
  size = 'md',
  label,
  helperText,
  error,
  fullWidth = false,
  style,
  className,
  ...props
}) => {

  // Get token-based styles
  const tokenStyles: React.CSSProperties = {
    fontFamily: designTokens.fontFamily.body,
    fontSize: designTokens.inputTokens.sizes[size].fontSize,
    height: designTokens.inputTokens.sizes[size].height,
    // padding: designTokens.inputTokens.sizes[size].padding, // RSuite Input handles padding internally usually, but we might need to override
    borderRadius: designTokens.borderRadius.button,
    borderColor: error ? designTokens.semanticColors.border.error : designTokens.colors.neutral30,
    width: fullWidth ? '100%' : 'auto',
  };

  const containerStyle: React.CSSProperties = {
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : 'auto',
    marginBottom: (helperText || error) ? designTokens.spacing.sm : 0,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: designTokens.spacing.xs,
    fontSize: designTokens.fontSize.sm,
    fontWeight: designTokens.fontWeight.medium,
    color: designTokens.semanticColors.text.primary,
  };

  const helperStyle: React.CSSProperties = {
    display: 'block',
    marginTop: designTokens.spacing.xs,
    fontSize: designTokens.fontSize.xs,
    color: error ? designTokens.semanticColors.text.primary : designTokens.semanticColors.text.secondary, // Error text usually red, but let's stick to tokens
  };

  // If error, override helper color
  if (error) {
    helperStyle.color = designTokens.semanticColors.feedback.error;
  }

  return (
    <div style={containerStyle} className={className}>
      <style>{`
        /* Override RSuite Input placeholder */
        .ds-input::-webkit-input-placeholder {
            font-size: ${designTokens.fontSize.sm} !important;
            color: ${designTokens.colors.neutral40};
        }
        .ds-input::-moz-placeholder {
            font-size: ${designTokens.fontSize.sm} !important;
            color: ${designTokens.colors.neutral40};
        }
        .ds-input:-ms-input-placeholder {
            font-size: ${designTokens.fontSize.sm} !important;
            color: ${designTokens.colors.neutral40};
        }
        .ds-input::placeholder {
            font-size: ${designTokens.fontSize.sm} !important;
            color: ${designTokens.colors.neutral40};
        }
        /* Override RSuite default border color to ensure neutral30 applies */
        .ds-input.rs-input {
            border-color: ${error ? designTokens.semanticColors.border.error : designTokens.colors.neutral30};
        }
        .ds-input.rs-input:hover {
            border-color: ${error ? designTokens.semanticColors.border.error : designTokens.semanticColors.border.hover};
        }
        .ds-input.rs-input:focus {
             border-color: ${designTokens.semanticColors.border.focus};
        }

      `}</style>
      {label && <label style={labelStyle}>{label}</label>}
      <RSuiteInput
        size={size}
        style={{ ...tokenStyles, ...style }}
        className={`ds-input ${className || ''}`}
        {...props}
      />
      {error && <span style={helperStyle}>{error}</span>}
      {!error && helperText && <span style={helperStyle}>{helperText}</span>}
    </div>
  );
};

Input.displayName = 'Input';
