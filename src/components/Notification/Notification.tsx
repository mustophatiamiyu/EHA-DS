// src/components/Notification/Notification.tsx
import React from 'react';
import { Notification as RSuiteNotification, NotificationProps as RSuiteNotificationProps, useToaster } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface NotificationProps extends RSuiteNotificationProps {
    /** Notification type */
    type?: 'success' | 'error' | 'warning' | 'info';
    /** Notification title */
    header?: React.ReactNode;
    /** Notification content */
    children?: React.ReactNode;
}

/**
 * Custom Notification Component
 * 
 * A design system-ready notification that wraps RSuite Notification.
 * Typically used with the `useToaster` hook or as a static component.
 * 
 * @example
 * <Notification type="success" header="Success">
 *   Operation completed successfully.
 * </Notification>
 */
export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(({
    type = 'info',
    header,
    children,
    style,
    className,
    ...props
}, ref) => {

    // Map type to design token colors if needed, though RSuite handles this well.
    // We can enforce specific border radii or shadows here.

    const customStyle: React.CSSProperties = {
        ...style,
        borderRadius: designTokens.borderRadius.md,
        // We could override background colors here based on type if the theme doesn't cover it fully
    };

    return (
        <RSuiteNotification
            ref={ref}
            type={type}
            header={header}
            style={customStyle}
            className={`ds-notification ds-notification--${type} ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteNotification>
    );
});

Notification.displayName = 'Notification';

/**
 * Hook to trigger notifications
 * Re-exporting RSuite's useToaster for convenience
 */
export { useToaster };
