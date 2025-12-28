// src/components/Avatar/Avatar.tsx
import React from 'react';
import { Avatar as RSuiteAvatar, AvatarProps as RSuiteAvatarProps, AvatarGroup as RSuiteAvatarGroup } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface AvatarProps extends RSuiteAvatarProps {
    /** Custom icon to render */
    icon?: React.ReactNode;
}

/**
 * Custom Avatar Component
 * 
 * A design system-ready avatar that wraps RSuite Avatar.
 * 
 * @example
 * <Avatar src="https://example.com/user.jpg" />
 * <Avatar circle>U</Avatar>
 * <Avatar icon={<UserIcon />} />
 */
const AvatarComponent = ({
    style,
    className,
    children,
    icon,
    ...props
}: AvatarProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        backgroundColor: designTokens.colors.primary20,
        color: designTokens.colors.primary60,
    };

    return (
        <RSuiteAvatar
            style={customStyle}
            className={`ds-avatar ${className || ''}`}
            {...props}
        >
            {icon || children}
        </RSuiteAvatar>
    );
};

// Re-export subcomponents
const AvatarGroup = RSuiteAvatarGroup;

// Attach to Avatar for dot notation
(AvatarComponent as any).Group = AvatarGroup;

AvatarComponent.displayName = 'Avatar';

export const Avatar = AvatarComponent as typeof AvatarComponent & {
    Group: typeof AvatarGroup;
};
