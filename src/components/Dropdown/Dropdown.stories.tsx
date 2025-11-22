// src/components/Dropdown/Dropdown.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    subcomponents: { 'Dropdown.Item': (Dropdown as any).Item },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A dropdown menu for displaying a list of actions or options.',
            },
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Dropdown button text',
        },
        trigger: {
            control: 'select',
            options: ['click', 'hover', 'contextMenu'],
            description: 'Trigger behavior',
            table: {
                defaultValue: { summary: 'click' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Default
export const Default: Story = {
    args: {
        title: 'Actions',
    },
    render: (args) => (
        <Dropdown {...args}>
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>New Folder</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item>Save</Dropdown.Item>
            <Dropdown.Item>Save As...</Dropdown.Item>
        </Dropdown>
    ),
};

// With Icons
export const WithIcons: Story = {
    render: () => (
        <Dropdown title="User Menu">
            <Dropdown.Item icon={<span style={{ marginRight: 8 }}>👤</span>}>Profile</Dropdown.Item>
            <Dropdown.Item icon={<span style={{ marginRight: 8 }}>⚙️</span>}>Settings</Dropdown.Item>
            <Dropdown.Item divider />
            <Dropdown.Item icon={<span style={{ marginRight: 8 }}>🚪</span>}>Logout</Dropdown.Item>
        </Dropdown>
    ),
};

// Hover Trigger
export const HoverTrigger: Story = {
    args: {
        title: 'Hover Me',
        trigger: 'hover',
    },
    render: (args) => (
        <Dropdown {...args}>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown>
    ),
};

// Disabled
export const Disabled: Story = {
    args: {
        title: 'Disabled',
        disabled: true,
    },
    render: (args) => (
        <Dropdown {...args}>
            <Dropdown.Item>Option 1</Dropdown.Item>
        </Dropdown>
    ),
};
