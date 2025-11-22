// src/components/Accordion/Accordion.tsx
import React from 'react';
import { Accordion as RSuiteAccordion, AccordionProps as RSuiteAccordionProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface AccordionProps extends RSuiteAccordionProps {
    /** Whether to show a border around the accordion */
    bordered?: boolean;
}

export interface AccordionProps extends RSuiteAccordionProps {
    /** Whether to show a border around the accordion */
    bordered?: boolean;
}

const AccordionComponent = ({
    bordered = false,
    style,
    className,
    ...props
}: AccordionProps) => {
    const customStyle: React.CSSProperties = {
        ...style,
        borderRadius: designTokens.borderRadius.md,
        border: bordered ? `1px solid ${designTokens.semanticColors.border.default}` : 'none',
        backgroundColor: designTokens.semanticColors.background.primary,
    };

    return (
        <RSuiteAccordion
            bordered={bordered}
            style={customStyle}
            className={`ds-accordion ${className || ''}`}
            {...props}
        />
    );
};

AccordionComponent.displayName = 'Accordion';

// Re-export Panel for convenience and potential future styling overrides
export const AccordionPanel = RSuiteAccordion.Panel;

/**
 * Custom Accordion Component
 * 
 * A design system-ready accordion that wraps RSuite Accordion.
 * 
 * @example
 * <Accordion>
 *   <Accordion.Panel header="Header 1">
 *     Content 1
 *   </Accordion.Panel>
 *   <Accordion.Panel header="Header 2">
 *     Content 2
 *   </Accordion.Panel>
 * </Accordion>
 */
export const Accordion = Object.assign(AccordionComponent, {
    Panel: AccordionPanel
});
