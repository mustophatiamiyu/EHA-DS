// src/components/Button/Button.tsx
import React from 'react';
import { Button as RSuiteButton, ButtonProps as RSuiteButtonProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';
import { tokenUtils } from '../../theme/token-utils';

export interface ButtonProps extends Omit<RSuiteButtonProps, 'appearance' | 'size' | 'color'> {
    /** Visual style variant */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    /** Size of the button */
    size?: 'sm' | 'md' | 'lg';
    /** Show loading spinner */
    isLoading?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Button content */
    children: React.ReactNode;
}

/**
 * Custom Button Component
 * 
 * A design system-ready button that wraps RSuite Button with brand styling.
 * Use semantic variants and sizes for consistent UI across all projects.
 * 
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Button
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    disabled = false,
    children,
    style,
    className,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);

    // Map our variants to RSuite's appearance system
    // We'll use 'default' for most and override styles, or 'ghost' for ghost
    const appearance = variant === 'ghost' ? 'ghost' : 'default';

    // Get token-based styles
    // We map our variants to the getButtonStyles utility which returns colors etc.
    // Note: getButtonStyles expects 'error'/'success'/'warning' too but our props limit to primary/secondary/tertiary/ghost


    let variantStyles: any = {};
    if (variant === 'primary' || variant === 'secondary' || variant === 'tertiary' || variant === 'ghost') {
        variantStyles = tokenUtils.getButtonStyles(variant, size);

    }

    // Extract interactive states if they exist (from token-utils)
    const { bgHover, bgActive, ...baseStyles } = variantStyles;

    let currentBackgroundColor = baseStyles.backgroundColor;
    if (!disabled && !isLoading) {
        if (isActive && bgActive) {
            currentBackgroundColor = bgActive;
        } else if (isHovered && bgHover) {
            currentBackgroundColor = bgHover;
        }
    }

    const finalStyle: React.CSSProperties = {
        ...baseStyles,
        backgroundColor: currentBackgroundColor,
        width: fullWidth ? '100%' : 'auto',
        transition: `all ${designTokens.transitionDuration.fast} ${designTokens.transitionTiming.easeInOut}`,
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        ...style,
    };

    return (
        <RSuiteButton
            appearance={appearance}
            size={size}
            loading={isLoading}
            disabled={disabled || isLoading}
            style={finalStyle}
            className={`ds-button ds-button--${variant} ds-button--${size} ${className || ''}`}
            block={fullWidth}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsActive(false);
            }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            {...props}
        >
            {children}
        </RSuiteButton>
    );
};

Button.displayName = 'Button';
