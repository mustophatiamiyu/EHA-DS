// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { designTokens } from '../../theme/design-tokens';
import { userEvent, expect } from "@storybook/test";

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A button triggers an event or action. The button label expresses what action will occur when the user interacts with it.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'ghost'],
            description: 'Visual style variant',
            table: {
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Button size',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        isLoading: {
            control: 'boolean',
            description: 'Show loading spinner',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        fullWidth: {
            control: 'boolean',
            description: 'Make button full width',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
        children: {
            control: 'text',
            description: 'Button label',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;


// Variants showcase
export const Variants: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            gap: designTokens.spacing.lg,
            flexWrap: 'wrap',
            alignItems: 'center',
        }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>

        </div>
    ),
};

// Sizes showcase
export const Sizes: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            gap: designTokens.spacing.lg,
            flexWrap: 'wrap',
            alignItems: 'center',
        }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

// Interactive states
export const States: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            gap: designTokens.spacing.lg,
            flexWrap: 'wrap',
            alignItems: 'center',
        }}>
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
            <Button disabled isLoading>Disabled + Loading</Button>
        </div>
    ),
};

// Full width
export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        variant: 'primary',
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

// Interaction test
export const ClickInteraction: Story = {
    args: {
        children: 'Click to test',
        variant: 'primary',
    },
    play: async ({ canvas }) => {
        const button = await canvas.findByRole('button', { name: /click to test/i });

        // Verify button exists and is clickable
        await expect(button).toBeInTheDocument();
        await expect(button).not.toBeDisabled();

        // Simulate click
        await userEvent.click(button);

        // Verify it's still in the document after click
        await expect(button).toBeInTheDocument();
    },
};
