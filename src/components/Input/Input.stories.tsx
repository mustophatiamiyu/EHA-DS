// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile input component with design system tokens for consistent styling.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Input size',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        fullWidth: {
            control: 'boolean',
            description: 'Full width input',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        label: {
            control: 'text',
            description: 'Label text',
        },
        helperText: {
            control: 'text',
            description: 'Helper text',
        },
        error: {
            control: 'text',
            description: 'Error message',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default story
export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        size: 'md',
    },
};

// Sizes showcase
export const Sizes: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: designTokens.spacing.lg,
            width: '300px'
        }}>
            <Input size="xs" placeholder="Extra Small" />
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
    ),
};

// States showcase
export const States: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: designTokens.spacing.lg,
            width: '300px'
        }}>
            <Input placeholder="Normal" />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="With Label" label="Username" />
            <Input placeholder="With Helper" helperText="Enter your username" />
            <Input placeholder="Error State" error="This field is required" />
        </div>
    ),
};

// Full width
export const FullWidth: Story = {
    args: {
        placeholder: 'Full Width Input',
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};
