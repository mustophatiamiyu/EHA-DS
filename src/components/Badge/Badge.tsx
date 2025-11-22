// src/components/Badge/Badge.tsx
import React from 'react';
import { Badge as RSuiteBadge, BadgeProps as RSuiteBadgeProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface BadgeProps extends RSuiteBadgeProps {
    // Add any custom props here
}

/**
 * Custom Badge Component
 * 
 * A design system-ready badge that wraps RSuite Badge.
 * 
 * @example
 * <Badge content="New">
 *   <Button>Notifications</Button>
 * </Badge>
 */
export const Badge = ({
    style,
    className,
    children,
    color,
    ...props
}: BadgeProps) => {

    // Map colors if needed, or rely on RSuite's default mapping which we might have customized in theme
    // For now, we pass through.

    const customStyle: React.CSSProperties = {
        ...style,
    };

    return (
        <RSuiteBadge
            style={customStyle}
            className={`ds-badge ${className || ''}`}
            color={color}
            {...props}
        >
            {children}
        </RSuiteBadge>
    );
};

Badge.displayName = 'Badge';
