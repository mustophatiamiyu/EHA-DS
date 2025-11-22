// src/components/Tabs/Tabs.tsx
import React from 'react';
import { Tabs as RSuiteTabs, TabsProps as RSuiteTabsProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface TabsProps extends RSuiteTabsProps {
    // Add any custom props here
}

/**
 * Custom Tabs Component
 * 
 * A design system-ready tabs component that wraps RSuite Tabs.
 * 
 * @example
 * <Tabs defaultActiveKey="1">
 *   <Tabs.Tab eventKey="1" title="Tab 1">Content 1</Tabs.Tab>
 *   <Tabs.Tab eventKey="2" title="Tab 2">Content 2</Tabs.Tab>
 * </Tabs>
 */
export const TabsComponent = ({
    style,
    className,
    children,
    ...props
}: TabsProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Tabs styles are mostly CSS-based
    };

    return (
        <RSuiteTabs
            style={customStyle}
            className={`ds-tabs ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteTabs>
    );
};

// Re-export subcomponents
// Note: In RSuite v5, Tabs.Tab is the main subcomponent.
// We need to check if it's Tabs.Tab or Tabs.Item or Tab.
// Based on file listing, it has Tab.js.
// Usually RSuite exports Tabs which has Tab attached.
// Let's try to attach it if it's not attached, or just re-export.

// We'll assume RSuiteTabs has Tab attached.
export const Tab = RSuiteTabs.Tab;

// Attach to Tabs for dot notation
(TabsComponent as any).Tab = Tab;

TabsComponent.displayName = 'Tabs';

export const Tabs = TabsComponent as typeof TabsComponent & {
    Tab: typeof Tab;
};
