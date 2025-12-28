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
        <div className={`ds-loader-wrapper ${className || ''}`} style={customStyle}>
            <style>{`
                .ds-loader .rs-loader-spin:after {
                    border-color: ${designTokens.colors.primary40} !important;
                    border-top-color: transparent !important;
                }
            `}</style>
            <RSuiteLoader
                size={size}
                className={`ds-loader ds-loader--${size}`}
                {...props}
            />
        </div>
    );
};

Loader.displayName = 'Loader';
