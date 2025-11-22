// src/components/Badge/Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';
import { Button } from '../Button'; // Assuming Button exists from previous tasks

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A badge component for displaying notifications or status.',
            },
        },
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'],
            description: 'Badge color',
        },
        content: {
            control: 'text',
            description: 'Badge content',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default (Independent)
export const Default: Story = {
    args: {
        content: 'New',
    },
};

// With Content (Button)
export const WithContent: Story = {
    args: {
        content: '99+',
    },
    render: (args) => (
        <Badge {...args}>
            <Button>Notifications</Button>
        </Badge>
    ),
};

// Colors
export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 20 }}>
            <Badge content="Red" color="red" />
            <Badge content="Orange" color="orange" />
            <Badge content="Green" color="green" />
            <Badge content="Blue" color="blue" />
            <Badge content="Violet" color="violet" />
        </div>
    ),
};

// Dot
export const Dot: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 20 }}>
            <Badge />
            <Badge color="green" />
            <Badge>
                <div style={{ width: 40, height: 40, background: '#f0f0f0', borderRadius: 4 }} />
            </Badge>
        </div>
    ),
};
