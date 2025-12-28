// src/components/Dropdown/Dropdown.tsx
import React from 'react';
import { Dropdown as RSuiteDropdown, DropdownProps as RSuiteDropdownProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface DropdownProps extends RSuiteDropdownProps {
    /** Dropdown title */
    title?: React.ReactNode;
    /** Trigger type */
    trigger?: 'click' | 'hover' | 'contextMenu' | Array<'click' | 'hover' | 'contextMenu'>;
}

const DropdownComponent = ({
    title,
    trigger = 'click',
    style,
    className,
    children,
    ...props
}: DropdownProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Dropdown button styles can be overridden here or via CSS
    };

    return (
        <RSuiteDropdown
            title={title}
            trigger={trigger}
            style={customStyle}
            className={`ds-dropdown ${className || ''}`}
            {...props}
        >
            <style>{`
                .ds-dropdown .rs-dropdown-toggle {
                    background-color: ${designTokens.colors.white} !important;
                    color: ${designTokens.colors.neutral50} !important;
                    border: 1px solid ${designTokens.colors.neutral20};
                }
                .ds-dropdown .rs-dropdown-toggle:hover {
                   background-color: ${designTokens.colors.neutral10} !important;
                }
            `}</style>
            {children}
        </RSuiteDropdown>
    );
};

DropdownComponent.displayName = 'Dropdown';

// Re-export Item and Menu for convenience
export const DropdownItem = RSuiteDropdown.Item;
export const DropdownMenu = RSuiteDropdown.Menu;

/**
 * Custom Dropdown Component
 * 
 * A design system-ready dropdown that wraps RSuite Dropdown.
 * 
 * @example
 * <Dropdown title="Actions">
 *   <Dropdown.Item>Action 1</Dropdown.Item>
 *   <Dropdown.Item>Action 2</Dropdown.Item>
 * </Dropdown>
 */
export const Dropdown = Object.assign(DropdownComponent, {
    Item: DropdownItem,
    Menu: DropdownMenu
});
