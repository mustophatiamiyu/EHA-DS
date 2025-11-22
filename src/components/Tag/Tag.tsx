// src/components/Tag/Tag.tsx
import React from 'react';
import { Tag as RSuiteTag, TagProps as RSuiteTagProps, TagGroup as RSuiteTagGroup } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface TagProps extends RSuiteTagProps {
    // Add any custom props here
}

/**
 * Custom Tag Component
 * 
 * A design system-ready tag that wraps RSuite Tag.
 * 
 * @example
 * <Tag color="red">Error</Tag>
 * <Tag closable>Closable</Tag>
 */
const TagComponent = ({
    style,
    className,
    children,
    ...props
}: TagProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // Custom styles if needed
    };

    return (
        <RSuiteTag
            style={customStyle}
            className={`ds-tag ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteTag>
    );
};

// Re-export subcomponents
const TagGroup = RSuiteTagGroup;

// Attach to Tag for dot notation
(TagComponent as any).Group = TagGroup;

TagComponent.displayName = 'Tag';

export const Tag = TagComponent as typeof TagComponent & {
    Group: typeof TagGroup;
};
