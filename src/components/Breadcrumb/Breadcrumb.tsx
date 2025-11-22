// src/components/Breadcrumb/Breadcrumb.tsx
import React from 'react';
import { Breadcrumb as RSuiteBreadcrumb, BreadcrumbProps as RSuiteBreadcrumbProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface BreadcrumbProps extends RSuiteBreadcrumbProps {
    // Add any custom props here
}

/**
 * Custom Breadcrumb Component
 * 
 * A design system-ready breadcrumb that wraps RSuite Breadcrumb.
 * 
 * @example
 * <Breadcrumb>
 *   <Breadcrumb.Item>Home</Breadcrumb.Item>
 *   <Breadcrumb.Item>Components</Breadcrumb.Item>
 *   <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
 * </Breadcrumb>
 */
const BreadcrumbComponent = ({
    style,
    className,
    children,
    ...props
}: BreadcrumbProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // Custom styles if needed
    };

    return (
        <RSuiteBreadcrumb
            style={customStyle}
            className={`ds-breadcrumb ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteBreadcrumb>
    );
};

// Re-export subcomponents
const BreadcrumbItem = RSuiteBreadcrumb.Item;

// Attach to Breadcrumb for dot notation
(BreadcrumbComponent as any).Item = BreadcrumbItem;

BreadcrumbComponent.displayName = 'Breadcrumb';

export const Breadcrumb = BreadcrumbComponent as typeof BreadcrumbComponent & {
    Item: typeof BreadcrumbItem;
};
