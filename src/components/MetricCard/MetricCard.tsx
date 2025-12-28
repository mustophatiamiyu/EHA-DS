// src/components/MetricCard/MetricCard.tsx
import React from 'react';
import { Panel } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface MetricBreakdown {
    label: string;
    value: string | number;
}

export interface MetricCardProps {
    /** Main metric value */
    value: string | number;
    /** Metric label/description */
    label: string;
    /** Optional icon (for compact variant) */
    icon?: React.ReactElement;
    /** Card variant */
    variant?: 'compact' | 'detailed';
    /** Breakdown items (for detailed variant) */
    breakdown?: MetricBreakdown[];
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
}

/**
 * MetricCard Component
 * 
 * A card component for displaying dashboard metrics.
 * Supports 3 visual variants:
 * - Compact with icon
 * - Compact without icon
 * - Detailed with breakdown
 * 
 * @example
 * <MetricCard value="2,420" label="Metric Name" icon={<PersonIcon />} />
 * <MetricCard value="230" label="Failed" />
 * <MetricCard 
 *   value="7,271" 
 *   label="Total Tasks" 
 *   variant="detailed"
 *   breakdown={[
 *     { label: 'Delivery Subtasks', value: '253' },
 *     { label: 'Pickup Subtasks', value: '1,727' }
 *   ]}
 * />
 */
export const MetricCard = ({
    value,
    label,
    icon,
    variant = 'compact',
    breakdown,
    className,
    style,
}: MetricCardProps) => {

    const cardStyle: React.CSSProperties = {
        backgroundColor: designTokens.colors.white,
        borderRadius: designTokens.borderRadius.xl,
        padding: '24px',
        boxShadow: designTokens.shadows.sm,
        border: `1px solid ${designTokens.colors.neutral20}`,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        ...style,
    };

    const iconContainerStyle: React.CSSProperties = {
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: designTokens.colors.tertiary10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: designTokens.colors.primary50,
        fontSize: 28,
        flexShrink: 0,
    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const valueStyle: React.CSSProperties = {
        fontSize: variant === 'compact' ? designTokens.fontSize['3xl'] : '48px',
        fontWeight: designTokens.fontWeight.bold,
        color: designTokens.colors.neutral60,
        lineHeight: 1.2,
    };

    const labelStyle: React.CSSProperties = {
        fontSize: designTokens.fontSize.sm,
        color: designTokens.colors.neutral50,
        fontWeight: designTokens.fontWeight.regular,
    };

    const breakdownContainerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    };

    const dividerStyle: React.CSSProperties = {
        width: 1,
        height: 80,
        backgroundColor: designTokens.colors.neutral20,
    };

    const breakdownListStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    };

    const breakdownItemStyle: React.CSSProperties = {
        fontSize: designTokens.fontSize.sm,
        color: designTokens.colors.neutral60,
        fontWeight: designTokens.fontWeight.regular,
    };

    if (variant === 'detailed' && breakdown) {
        // ... detailed view implementation (kept largely same but with updated styles if needed)
        // For detailed view, layout might differ. User request implied general layout or compact?
        // "Numbers and Icon should be horizontally lined" usually refers to the main view.
        // Detailed view has breakdown content. 
        // I will focus updates on non-detailed (compact) first as per generic request, 
        // but ensure values/labels use new tokens everywhere given "Subtitle font size..." requirement.

        // Updating detailed view styles too for consistency
        return (
            <div style={{ ...cardStyle, display: 'block', padding: '32px' }} className={`ds-metric-card ds-metric-card--detailed ${className || ''}`}>
                <div style={breakdownContainerStyle}>
                    <div style={{ marginRight: 'auto' }}>
                        <div style={valueStyle}>{value}</div>
                        <div style={labelStyle}>{label}</div>
                    </div>
                    <div style={dividerStyle} />
                    <div style={breakdownListStyle}>
                        {breakdown.map((item, index) => (
                            <div key={index} style={breakdownItemStyle}>
                                {item.label} ({item.value})
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={cardStyle} className={`ds-metric-card ds-metric-card--compact ${className || ''}`}>
            {icon && (
                <div style={iconContainerStyle}>
                    {icon}
                </div>
            )}
            <div style={contentStyle}>
                <div style={valueStyle}>{value}</div>
                <div style={labelStyle}>{label}</div>
            </div>
        </div>
    );
};

MetricCard.displayName = 'MetricCard';
