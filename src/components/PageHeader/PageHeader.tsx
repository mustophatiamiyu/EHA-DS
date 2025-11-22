// src/components/PageHeader/PageHeader.tsx
import React from 'react';
import { Stack, IconButton, Divider } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import RemindIcon from '@rsuite/icons/legacy/Remind';
import { designTokens } from '../../theme/design-tokens';
import { Avatar } from '../Avatar';
import { Dropdown } from '../Dropdown';

export interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Page subtitle */
    subtitle?: string;
    /** Callback for primary action button */
    onAction?: () => void;
    /** Custom icon for primary action button */
    actionIcon?: React.ReactElement;
    /** User information */
    user?: {
        name: string;
        avatar?: string;
        initials?: string;
    };
    /** Callback for notification click */
    onNotificationClick?: () => void;
    /** Callback for user dropdown selection */
    onUserSelect?: (eventKey: string | undefined, event: React.SyntheticEvent) => void;
    /** Custom className */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
}

/**
 * PageHeader Component
 * 
 * A standard header component for pages, including title, subtitle, actions, notifications, and user profile.
 */
export const PageHeader = ({
    title,
    subtitle,
    onAction,
    actionIcon = <PlusIcon />,
    user,
    onNotificationClick,
    onUserSelect,
    className,
    style,
}: PageHeaderProps) => {

    const headerStyle: React.CSSProperties = {
        backgroundColor: designTokens.colors.white,
        padding: '16px 24px',
        borderBottom: `1px solid ${designTokens.colors.neutral20}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '24px',
        fontWeight: designTokens.fontWeight.bold,
        color: designTokens.colors.neutral50,
        margin: 0,
        lineHeight: 1.2,
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: designTokens.fontSize.sm,
        color: designTokens.colors.neutral50,
        marginTop: 4,
    };

    const actionButtonStyle: React.CSSProperties = {
        backgroundColor: designTokens.colors.primary50,
        color: designTokens.colors.white,
        width: 32,
        height: 32,
        borderRadius: designTokens.borderRadius.sm,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
    };

    const dividerStyle: React.CSSProperties = {
        height: 24,
        backgroundColor: designTokens.colors.neutral20,
        margin: '0 16px',
    };

    return (
        <div style={headerStyle} className={`ds-page-header ${className || ''}`}>
            {/* Left Side: Title & Subtitle */}
            <div>
                <h2 style={titleStyle}>{title}</h2>
                {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
            </div>

            {/* Right Side: Actions & Profile */}
            <Stack spacing={16} alignItems="center" divider={<Divider vertical style={dividerStyle} />}>

                {/* Primary Action - Applicable on Some Projects
           
                {onAction && (
                    <IconButton
                        icon={actionIcon as any}
                        appearance="primary"
                        size="md"
                        onClick={onAction}
                        style={{
                            backgroundColor: designTokens.colors.primary50,
                            color: 'white'
                        }}
                    />
                )}
                */}

                {/* User Profile */}
                {user && (
                    <Stack spacing={12}>
                        <Avatar
                            circle
                            size="md"
                            src={user.avatar}
                            style={{ backgroundColor: designTokens.colors.primary20, color: designTokens.colors.primary50 }}
                        >
                            {user.initials}
                        </Avatar>
                        <Dropdown
                            title={user.name}
                            trigger="click"
                            placement="bottomEnd"
                            onSelect={onUserSelect}
                            noCaret={false}
                        >
                            <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="settings">Settings</Dropdown.Item>
                            <Dropdown.Item eventKey="logout">Logout</Dropdown.Item>
                        </Dropdown>
                    </Stack>
                )}
            </Stack>
        </div>
    );
};

PageHeader.displayName = 'PageHeader';
