// src/components/Steps/Steps.tsx
import React from 'react';
import { Steps as RSuiteSteps, StepsProps as RSuiteStepsProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface StepsProps extends RSuiteStepsProps {
    /** Current step index */
    current?: number;
    /** Status of the current step */
    status?: 'wait' | 'process' | 'finish' | 'error';
}

/**
 * Custom Steps Component
 * 
 * A design system-ready steps component that wraps RSuite Steps.
 * 
 * @example
 * <Steps current={1}>
 *   <Steps.Item title="Step 1" />
 *   <Steps.Item title="Step 2" />
 * </Steps>
 */
const StepsComponent = ({
    current = 0,
    status,
    style,
    className,
    children,
    ...props
}: StepsProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Steps styles are mostly CSS-based
    };

    return (
        <RSuiteSteps
            current={current}
            status={status}
            style={customStyle}
            className={`ds-steps ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteSteps>
    );
};

// Re-export Item for convenience
export const StepsItem = RSuiteSteps.Item;

// Attach to Steps for dot notation
type StepsComponentType = typeof StepsComponent & {
    Item: typeof RSuiteSteps.Item;
};

const Steps = StepsComponent as StepsComponentType;
Steps.Item = StepsItem;
Steps.displayName = 'Steps';

export { Steps };
