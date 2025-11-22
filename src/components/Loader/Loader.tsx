// src/components/Loader/Loader.tsx
import React from 'react';
import { Loader as RSuiteLoader, LoaderProps as RSuiteLoaderProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface LoaderProps extends RSuiteLoaderProps {
    /** Size of the loader */
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * Custom Loader Component
 * 
 * A design system-ready loader that wraps RSuite Loader.
 * 
 * @example
 * <Loader size="md" content="Loading..." />
 */
export const Loader = ({
    size = 'md',
    style,
    className,
    ...props
}: LoaderProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Loader styles are mostly CSS-based, but we can inject overrides here
    };

    return (
        <RSuiteLoader
            size={size}
            style={customStyle}
            className={`ds-loader ds-loader--${size} ${className || ''}`}
            {...props}
        />
    );
};

Loader.displayName = 'Loader';
