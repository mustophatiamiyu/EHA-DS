// src/components/Loader/Loader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Loader } from './Loader';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A loader component for indicating loading states.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Loader size',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        center: {
            control: 'boolean',
            description: 'Center the loader',
        },
        backdrop: {
            control: 'boolean',
            description: 'Show backdrop',
        },
        vertical: {
            control: 'boolean',
            description: 'Vertical layout',
        },
        content: {
            control: 'text',
            description: 'Loading text',
        },
        speed: {
            control: 'select',
            options: ['normal', 'fast', 'slow'],
            description: 'Animation speed',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

// Default
export const Default: Story = {
    args: {
        content: 'Loading...',
    },
};

// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: designTokens.spacing.xl, alignItems: 'center' }}>
            <Loader size="xs" content="xs" />
            <Loader size="sm" content="sm" />
            <Loader size="md" content="md" />
            <Loader size="lg" content="lg" />
        </div>
    ),
};

// Center with Backdrop
export const CenterBackdrop: Story = {
    args: {
        center: true,
        backdrop: true,
        content: 'Loading...',
        size: 'md',
    },
    decorators: [
        (Story) => (
            <div style={{ height: 200, width: 400, border: `1px solid ${designTokens.semanticColors.border.default}`, position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
};

// Vertical
export const Vertical: Story = {
    args: {
        vertical: true,
        content: 'Loading...',
    },
};
