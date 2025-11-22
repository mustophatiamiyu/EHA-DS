// src/components/DatePicker/DatePicker.tsx
import React from 'react';
import { DatePicker as RSuiteDatePicker, DatePickerProps as RSuiteDatePickerProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface DatePickerProps extends RSuiteDatePickerProps {
    /** Size of the date picker */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Label for the date picker */
    label?: string;
    /** Helper text */
    helperText?: string;
    /** Error message */
    error?: string;
}

/**
 * Custom DatePicker Component
 * 
 * A design system-ready date picker that wraps RSuite DatePicker.
 * 
 * @example
 * <DatePicker size="md" placeholder="Select Date" />
 */
export const DatePicker = ({
    size = 'md',
    label,
    helperText,
    error,
    style,
    className,
    ...props
}: DatePickerProps) => {

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
        // RSuite DatePicker handles most styles, but we can inject overrides if needed via class or style
        // For example, border radius is usually handled by theme variables we set in rsuite-theme.tsx
    };

    return (
        <div style={containerStyle} className={className}>
            {label && <label style={labelStyle}>{label}</label>}
            <RSuiteDatePicker
                size={size}
                style={customStyle}
                className={`ds-datepicker ds-datepicker--${size} ${error ? 'ds-datepicker--error' : ''}`}
                {...props}
            />
            {error && <span style={helperStyle}>{error}</span>}
            {!error && helperText && <span style={helperStyle}>{helperText}</span>}
        </div>
    );
};

DatePicker.displayName = 'DatePicker';
