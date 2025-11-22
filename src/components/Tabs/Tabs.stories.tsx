// src/components/Tabs/Tabs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';
import { designTokens } from '../../theme/design-tokens';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    subcomponents: { 'Tabs.Tab': (Tabs as any).Tab },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A tabs component for switching between different views.',
            },
        },
    },
    argTypes: {
        appearance: {
            control: 'select',
            options: ['default', 'subtle', 'tabs'],
            description: 'Tabs appearance',
        },
        vertical: {
            control: 'boolean',
            description: 'Vertical tabs',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Default
export const Default: Story = {
    args: {
        defaultActiveKey: '1',
    },
    render: (args) => (
        <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Tab 1">
                <div style={{ padding: 20 }}>Content of Tab 1</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Tab 2">
                <div style={{ padding: 20 }}>Content of Tab 2</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Tab 3">
                <div style={{ padding: 20 }}>Content of Tab 3</div>
            </Tabs.Tab>
        </Tabs>
    ),
};

// With Icons
export const WithIcons: Story = {
    args: {
        defaultActiveKey: '1',
        appearance: 'subtle',
    },
    render: (args) => (
        <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Dashboard" icon={<DashboardIcon />}>
                <div style={{ padding: 20 }}>Dashboard Content</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Groups" icon={<GroupIcon />}>
                <div style={{ padding: 20 }}>Groups Content</div>
            </Tabs.Tab>
        </Tabs>
    ),
};

// Vertical
export const Vertical: Story = {
    args: {
        defaultActiveKey: '1',
        vertical: true,
        style: { height: 200 },
    },
    render: (args) => (
        <Tabs {...args}>
            <Tabs.Tab eventKey="1" title="Tab 1">
                <div style={{ padding: 10 }}>Content of Tab 1</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Tab 2">
                <div style={{ padding: 10 }}>Content of Tab 2</div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Tab 3">
                <div style={{ padding: 10 }}>Content of Tab 3</div>
            </Tabs.Tab>
        </Tabs>
    ),
};
