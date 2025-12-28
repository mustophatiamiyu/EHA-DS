// src/components/Sidenav/Sidenav.tsx
import React from 'react';
import { Sidenav as RSuiteSidenav, Nav, SidenavProps as RSuiteSidenavProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'; import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import EhaIcon from '../../stories/assets/EHA-ICON.svg';

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
    /** Height of the logo in pixels */
    logoHeight?: number;
    /** Color of the menu text */
    menuTextColor?: string;
    /** Font size of main menu items */
    menuFontSize?: number | string;
    /** Font size of sub-menu items */
    subMenuFontSize?: number | string;
    /** Size of icons */
    iconSize?: number | string;
    /** List of navigation items (optional, can use children instead) */
    items?: SidenavItem[];
}


export const SidenavComponent = ({
    expanded = true,
    onToggle,
    activeKey,
    onSelect,
    logo,
    logoHeight = 60,
    menuTextColor = designTokens.colors.white,
    menuFontSize = designTokens.fontSize.sm,
    subMenuFontSize = designTokens.fontSize.sm,
    iconSize = 18,
    items,
    style,
    className,
    children,
    ...props
}: SidenavProps) => {

    const sidenavStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: designTokens.colors.primary40,
        color: designTokens.colors.white,
        width: expanded ? 260 : 56,
        transition: `width ${designTokens.transitionDuration.normal} ${designTokens.transitionTiming.easeInOut}`,
        ...style,
    };

    const headerStyle: React.CSSProperties = {
        padding: expanded ? '16px 24px' : '0 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: expanded ? 'flex-start' : 'center',
        height: 80,
    };

    const logoStyle: React.CSSProperties = {
        height: logoHeight,
        maxWidth: '100%',
        objectFit: 'contain',
        display: expanded ? 'block' : 'none',
    };

    const smallLogoStyle: React.CSSProperties = {
        height: 32,
        width: 32,
        display: expanded ? 'none' : 'block',
        objectFit: 'contain',
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
                        title={expanded ? item.title : ''}
                        icon={item.icon}
                        style={{ color: 'white' }}
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
                    {expanded ? item.title : ''}
                </Nav.Item>
            );
        });
    };

    return (
        <div style={sidenavStyle} className={`ds-sidenav ${!expanded ? 'collapsed' : ''} ${className || ''}`}>
            {/* Header / Logo */}
            <div style={headerStyle}>
                {logo && expanded && <img src={logo} alt="Logo" style={logoStyle} />}
                {!expanded && <img src={EhaIcon} alt="Small Logo" style={smallLogoStyle} />}
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
            <div style={footerStyle} className="ds-sidenav-footer">
                <Nav vertical>
                    <Nav.Item
                        eventKey="help"
                        icon={<HelpOutlineOutlinedIcon />}
                        style={{ color: designTokens.colors.white }}
                    >
                        {expanded ? 'Help & Support' : ''}
                    </Nav.Item>
                </Nav>
                <div
                    style={{
                        padding: expanded ? '10px 20px' : '10px 0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: expanded ? 'flex-end' : 'center',
                        color: 'white',
                    }}
                    onClick={() => onToggle?.(!expanded)}
                >
                    {expanded ? <KeyboardArrowLeftOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                </div>
            </div>

            {/* Global overrides for this component instance to force white text and custom sizing */}
            <style>{`
        .ds-sidenav .rs-sidenav-item,
        .ds-sidenav .rs-sidenav-toggle-button,
        .ds-sidenav .rs-nav-item {
            color: ${menuTextColor} !important;
            font-size: ${typeof menuFontSize === 'number' ? `${menuFontSize}px` : menuFontSize} !important;
            display: flex !important;
            align-items: center !important;
            padding-left: 24px !important;
            gap: 18px !important;
        }
        .ds-sidenav .rs-nav-item-icon {
            margin-right: 0 !important;
        }
        .ds-sidenav .rs-dropdown-item {
            color: ${designTokens.colors.white} !important;
            background-color: transparent !important;
            padding-left: 65px !important;
            display: flex !important;
            align-items: center !important;
            gap: 18px !important;
        }
        .ds-sidenav .rs-dropdown-item-content {
            color: ${designTokens.colors.white} !important;
            font-size: ${typeof subMenuFontSize === 'number' ? `${subMenuFontSize}px` : subMenuFontSize} !important;
            display: flex !important;
            align-items: center !important;
            gap: 18px !important;
        }
        .ds-sidenav .rs-nav-sub,
        .ds-sidenav .rs-dropdown-menu {
            background-color: ${designTokens.colors.primary50} !important;
        }
        /* Hover and Active states */
        .ds-sidenav .rs-sidenav-item:hover,
        .ds-sidenav .rs-dropdown-item:hover,
        .ds-sidenav .rs-dropdown-item:hover > .rs-dropdown-item-content,
        .ds-sidenav .rs-sidenav-item-active,
        .ds-sidenav .rs-nav-item-active > .rs-sidenav-item-content,
        .ds-sidenav .rs-dropdown-item-active,
        .ds-sidenav .rs-dropdown-item-active > .rs-dropdown-item-content {
            color: ${designTokens.colors.white} !important;
            background-color: ${designTokens.colors.primary50} !important;
            opacity: 1 !important;
        }
        .ds-sidenav.collapsed .rs-sidenav-item,
        .ds-sidenav.collapsed .rs-sidenav-toggle-button,
        .ds-sidenav.collapsed .rs-nav-item {
            padding: 0 !important;
            justify-content: center !important;
            gap: 0 !important;
        }
        .ds-sidenav.collapsed .rs-icon,
        .ds-sidenav.collapsed svg {
            margin: 0 !important;
        }
        .ds-sidenav.collapsed .rs-dropdown-item {
            padding: 0 !important;
            justify-content: center !important;
        }
        /* Footer refinements */
        .ds-sidenav-footer .rs-nav-item {
            background-color: transparent !important;
        }
        .ds-sidenav-footer .rs-nav-item:hover {
            background-color: ${designTokens.colors.primary50} !important;
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
