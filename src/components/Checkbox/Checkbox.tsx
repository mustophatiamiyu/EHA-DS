// src/components/Checkbox/Checkbox.tsx
import React from 'react';
import { Checkbox as RSuiteCheckbox, CheckboxProps as RSuiteCheckboxProps, CheckboxGroup as RSuiteCheckboxGroup, CheckboxGroupProps as RSuiteCheckboxGroupProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface CheckboxProps extends RSuiteCheckboxProps {
    /** Size of the checkbox */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * Custom Checkbox Component
 * 
 * A design system-ready checkbox that wraps RSuite Checkbox.
 * 
 * @example
 * <Checkbox>Option 1</Checkbox>
 */
export const Checkbox = ({
    size = 'md',
    style,
    className,
    children,
    ...props
}: CheckboxProps) => {
    const customStyle: React.CSSProperties = {
        ...style,
        // Add any specific overrides if needed, though RSuite handles most via theme variables
        // We can enforce font sizes here if needed
        fontSize: designTokens.fontSize[size],
    };

    return (
        <RSuiteCheckbox
            style={customStyle}
            className={`ds-checkbox ds-checkbox--${size} ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteCheckbox>
    );
};

export interface CheckboxGroupProps extends RSuiteCheckboxGroupProps {
    /** Label for the group */
    label?: string;
}

/**
 * Custom Checkbox Group Component
 * 
 * Wraps RSuite CheckboxGroup for consistent styling.
 */
export const CheckboxGroup = ({
    label,
    children,
    style,
    className,
    ...props
}: CheckboxGroupProps) => {
    return (
        <div className={`ds-checkbox-group-container ${className || ''}`} style={style}>
            {label && (
                <div style={{
                    marginBottom: designTokens.spacing.xs,
                    fontWeight: designTokens.fontWeight.medium,
                    color: designTokens.semanticColors.text.primary,
                    fontSize: designTokens.fontSize.sm
                }}>
                    {label}
                </div>
            )}
            <RSuiteCheckboxGroup {...props}>
                {children}
            </RSuiteCheckboxGroup>
        </div>
    );
};

Checkbox.displayName = 'Checkbox';
CheckboxGroup.displayName = 'CheckboxGroup';
