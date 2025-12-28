// src/components/Avatar/Avatar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    subcomponents: { 'Avatar.Group': (Avatar as any).Group },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'An avatar component for displaying user profile images or initials.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm', 'xs'],
            description: 'Avatar size',
        },
        circle: {
            control: 'boolean',
            description: 'Circle shape',
        },
        src: {
            control: 'text',
            description: 'Image source',
        },
        icon: {
            control: false,
            description: 'Custom icon to render',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default (Initials)
export const Default: Story = {
    args: {
        children: 'US',
        circle: true,
        size: 'md',
    },
};


// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Avatar size="lg">LG</Avatar>
            <Avatar size="md">MD</Avatar>
            <Avatar size="sm">SM</Avatar>
            <Avatar size="xs">XS</Avatar>
        </div>
    ),
};

// Group
export const Group: Story = {
    render: () => (
        <Avatar.Group stack>
            <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" />
            <Avatar circle>AB</Avatar>
            <Avatar circle>CD</Avatar>
            <Avatar circle>+2</Avatar>
        </Avatar.Group>
    ),
};
