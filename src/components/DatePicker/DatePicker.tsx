// src/components/DatePicker/DatePicker.tsx
import React from 'react';
import { DatePicker as RSuiteDatePicker, DatePickerProps as RSuiteDatePickerProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

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
const DatePickerComponent = ({
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
        color: designTokens.colors.neutral60,
    };

    const helperStyle: React.CSSProperties = {
        display: 'block',
        marginTop: designTokens.spacing.xs,
        fontSize: designTokens.fontSize.xs,
        color: error ? designTokens.semanticColors.feedback.error : designTokens.semanticColors.text.secondary,
    };

    const customStyle: React.CSSProperties = {
        ...style,
    };

    return (
        <div style={containerStyle} className={className}>
            <style>{`
                .ds-datepicker .rs-picker-toggle.rs-btn {
                    border-color: ${designTokens.colors.neutral20} !important;
                }
                .ds-datepicker .rs-picker-toggle.rs-btn:hover {
                    border-color: ${designTokens.colors.primary50} !important;
                }
                .ds-datepicker .rs-picker-toggle-placeholder {
                    color: ${designTokens.colors.neutral40} !important;
                }
                /* Ensure value text color is standard when selected */
                .ds-datepicker .rs-picker-toggle-value {
                    color: ${designTokens.colors.neutral60} !important;
                }
            `}</style>
            {label && <label style={labelStyle}>{label}</label>}
            <RSuiteDatePicker
                size={size}
                style={customStyle}
                caretAs={CalendarMonthOutlinedIcon}
                className={`ds-datepicker ds-datepicker--${size} ${error ? 'ds-datepicker--error' : ''}`}
                {...props}
            />
            {error && <span style={helperStyle}>{error}</span>}
            {!error && helperText && <span style={helperStyle}>{helperText}</span>}
        </div>
    );
};

DatePickerComponent.displayName = 'DatePicker';

export const DatePicker = DatePickerComponent;
