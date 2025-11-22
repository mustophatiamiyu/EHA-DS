// src/components/Sidenav/Sidenav.tsx
import React from 'react';
import { Sidenav as RSuiteSidenav, Nav, SidenavProps as RSuiteSidenavProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';

export interface SidenavItem {
    eventKey: string;
    title: string;
    icon?: any;
    children?: SidenavItem[];
}

export interface SidenavProps extends Omit<RSuiteSidenavProps, 'onSelect'> {
    /** Whether the sidenav is expanded */
    expanded?: boolean;
    /** Callback when toggle button is clicked */
    onToggle?: (expanded: boolean) => void;
    /** Active event key */
    activeKey?: string;
    /** Callback when an item is selected */
    onSelect?: (eventKey: string | number | undefined, event: React.SyntheticEvent) => void;
    /** URL or path to the logo image */
    logo?: string;
    /** List of navigation items (optional, can use children instead) */
    items?: SidenavItem[];
}

/**
 * Custom Sidenav Component
 * 
 * A design system-ready sidenav that wraps RSuite Sidenav.
 * Matches the specific blue design with white text.
 */
export const SidenavComponent = ({
    expanded = true,
    onToggle,
    activeKey,
    onSelect,
    logo,
    items,
    style,
    className,
    children,
    ...props
}: SidenavProps) => {

    // Custom styles to match the design
    const sidenavStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: designTokens.colors.primary40, // Blue background
        color: designTokens.colors.white,
        width: expanded ? 260 : 56,
        transition: `width ${designTokens.transitionDuration.normal} ${designTokens.transitionTiming.easeInOut}`,
        ...style,
    };

    const headerStyle: React.CSSProperties = {
        padding: expanded ? '20px' : '20px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: expanded ? 'flex-start' : 'center',
        height: 80,
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        marginBottom: 10,
    };

    const logoStyle: React.CSSProperties = {
        height: 40,
        maxWidth: '100%',
        objectFit: 'contain',
        display: expanded ? 'block' : 'none',
    };

    const smallLogoStyle: React.CSSProperties = {
        height: 30,
        width: 30,
        display: expanded ? 'none' : 'block',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
    }

    const footerStyle: React.CSSProperties = {
        marginTop: 'auto',
        padding: '10px',
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    };

    // Helper to render items recursively
    const renderItems = (navItems: SidenavItem[]) => {
        return navItems.map(item => {
            if (item.children) {
                return (
                    <Nav.Menu
                        key={item.eventKey}
                        eventKey={item.eventKey}
                        title={item.title}
                        icon={item.icon}
                        style={{ color: 'white' }} // Override RSuite default
                    >
                        {renderItems(item.children)}
                    </Nav.Menu>
                );
            }
            return (
                <Nav.Item
                    key={item.eventKey}
                    eventKey={item.eventKey}
                    icon={item.icon}
                >
                    {item.title}
                </Nav.Item>
            );
        });
    };

    return (
        <div style={sidenavStyle} className={`ds-sidenav ${className || ''}`}>
            {/* Header / Logo */}
            <div style={headerStyle}>
                {logo && <img src={logo} alt="Logo" style={logoStyle} />}
                {logo && !expanded && <div style={smallLogoStyle} />}
            </div>

            {/* Body / Navigation */}
            <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
                <RSuiteSidenav
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    activeKey={activeKey}
                    onSelect={onSelect}
                    appearance="subtle" // Use subtle to avoid default RSuite background styles interfering too much
                    style={{ backgroundColor: 'transparent' }}
                    {...props}
                >
                    <RSuiteSidenav.Body>
                        <Nav>
                            {items ? renderItems(items) : children}
                        </Nav>
                    </RSuiteSidenav.Body>
                </RSuiteSidenav>
            </div>

            {/* Footer / Help & Toggle */}
            <div style={footerStyle}>
                <Nav vertical>
                    <Nav.Item
                        eventKey="help"
                        icon={<HelpOutlineIcon />}
                        style={{ color: 'white' }}
                    >
                        {expanded ? 'Help & Support' : ''}
                    </Nav.Item>
                </Nav>
                <div
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: expanded ? 'flex-end' : 'center',
                        color: 'white'
                    }}
                    onClick={() => onToggle?.(!expanded)}
                >
                    {expanded ? <AngleLeftIcon /> : <AngleRightIcon />}
                </div>
            </div>

            {/* Global overrides for this component instance to force white text */}
            <style>{`
        .ds-sidenav .rs-sidenav-item,
        .ds-sidenav .rs-dropdown-item-content,
        .ds-sidenav .rs-sidenav-toggle-button {
            color: rgba(255, 255, 255, 0.8) !important;
        }
        .ds-sidenav .rs-sidenav-item:hover,
        .ds-sidenav .rs-dropdown-item-content:hover,
        .ds-sidenav .rs-sidenav-item-active,
        .ds-sidenav .rs-dropdown-item-content-active {
            color: #fff !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
        }
        .ds-sidenav .rs-icon {
            color: inherit !important;
        }
      `}</style>
        </div>
    );
};

// Re-export subcomponents
export const SidenavHeader = RSuiteSidenav.Header;
export const SidenavBody = RSuiteSidenav.Body;
export const SidenavToggle = RSuiteSidenav.Toggle;

// Attach to Sidenav for dot notation
(SidenavComponent as any).Header = SidenavHeader;
(SidenavComponent as any).Body = SidenavBody;
(SidenavComponent as any).Toggle = SidenavToggle;

SidenavComponent.displayName = 'Sidenav';

export const Sidenav = SidenavComponent as typeof SidenavComponent & {
    Header: typeof SidenavHeader;
    Body: typeof SidenavBody;
    Toggle: typeof SidenavToggle;
};
