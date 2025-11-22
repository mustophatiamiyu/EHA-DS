// src/components/Tag/Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    subcomponents: { 'Tag.Group': (Tag as any).Group },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tag component for labeling or categorization.',
            },
        },
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'],
            description: 'Tag color',
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm'],
            description: 'Tag size',
        },
        closable: {
            control: 'boolean',
            description: 'Closable tag',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// Default
export const Default: Story = {
    args: {
        children: 'Tag',
    },
};

// Colors
export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 10 }}>
            <Tag color="red">Red</Tag>
            <Tag color="orange">Orange</Tag>
            <Tag color="yellow">Yellow</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="cyan">Cyan</Tag>
            <Tag color="blue">Blue</Tag>
            <Tag color="violet">Violet</Tag>
        </div>
    ),
};

// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Tag size="lg">Large</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="sm">Small</Tag>
        </div>
    ),
};

// Closable
export const Closable: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 10 }}>
            <Tag closable>Closable</Tag>
            <Tag closable color="red">Closable Red</Tag>
        </div>
    ),
};

// Group
export const Group: Story = {
    render: () => (
        <Tag.Group>
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 3</Tag>
        </Tag.Group>
    ),
};
