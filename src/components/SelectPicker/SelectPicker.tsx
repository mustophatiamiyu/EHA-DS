// src/components/SelectPicker/SelectPicker.tsx
import React from 'react';
import { SelectPicker as RSuiteSelectPicker, SelectPickerProps as RSuiteSelectPickerProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface SelectPickerProps extends RSuiteSelectPickerProps {
    /** Size of the picker */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Label for the picker */
    label?: string;
    /** Helper text */
    helperText?: string;
    /** Error message */
    error?: string;
}

/**
 * Custom SelectPicker Component
 * 
 * A design system-ready select picker that wraps RSuite SelectPicker.
 * 
 * @example
 * <SelectPicker data={data} label="Select Option" />
 */
export const SelectPicker = ({
    size = 'md',
    label,
    helperText,
    error,
    style,
    className,
    ...props
}: SelectPickerProps) => {

    const containerStyle: React.CSSProperties = {
        display: props.block ? 'block' : 'inline-block',
        width: props.block ? '100%' : 'auto',
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
        color: error ? designTokens.semanticColors.feedback.error : designTokens.semanticColors.text.secondary,
    };

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite SelectPicker styles are mostly CSS-based
    };

    return (
        <div style={containerStyle} className={className}>
            {label && <label style={labelStyle}>{label}</label>}
            <RSuiteSelectPicker
                size={size}
                style={customStyle}
                className={`ds-select-picker ds-select-picker--${size} ${error ? 'ds-select-picker--error' : ''}`}
                {...props}
            />
            {error && <span style={helperStyle}>{error}</span>}
            {!error && helperText && <span style={helperStyle}>{helperText}</span>}
        </div>
    );
};

SelectPicker.displayName = 'SelectPicker';
