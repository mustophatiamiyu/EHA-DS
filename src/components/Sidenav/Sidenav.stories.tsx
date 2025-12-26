// src/components/Sidenav/Sidenav.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sidenav } from './Sidenav';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import Logo from '../../stories/assets/EHA-Logo-INV.png';

const meta: Meta<typeof Sidenav> = {
    title: 'Components/Sidenav',
    component: Sidenav,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A vertical navigation component with a specific blue theme.',
            },
        },
    },
    argTypes: {
        expanded: {
            control: 'boolean',
            description: 'Expanded state',
        },
        activeKey: {
            control: 'text',
            description: 'Active item key',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sidenav>;

const sampleItems = [
    { eventKey: '1', title: 'Dashboard', icon: <DashboardIcon /> },
    { eventKey: '2', title: 'User Group', icon: <GroupIcon /> },
    {
        eventKey: '3',
        title: 'Advanced',
        icon: <MagicIcon />,
        children: [
            { eventKey: '3-1', title: 'Geo' },
            { eventKey: '3-2', title: 'Devices' },
            { eventKey: '3-3', title: 'Brand' },
            { eventKey: '3-4', title: 'Loyalty' },
        ],
    },
    { eventKey: '4', title: 'Settings', icon: <GearCircleIcon /> },
];

// Default
export const Default: Story = {
    render: (args) => {
        const [expanded, setExpanded] = React.useState(true);
        const [activeKey, setActiveKey] = React.useState('1');

        return (
            <div style={{ height: '100vh', display: 'flex' }}>
                <Sidenav
                    {...args}
                    expanded={expanded}
                    onToggle={setExpanded}
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(String(key))}
                    logo={Logo}
                    items={sampleItems}
                />
                <div style={{ padding: 20, flex: 1, background: '#f5f5f5' }}>
                    <h1>Page Content</h1>
                    <p>Active Key: {activeKey}</p>
                    <p>Expanded: {expanded ? 'Yes' : 'No'}</p>
                </div>
            </div>
        );
    },
};

// Collapsed
export const Collapsed: Story = {
    render: (args) => {
        const [expanded, setExpanded] = React.useState(false);
        const [activeKey, setActiveKey] = React.useState('1');

        return (
            <div style={{ height: '100vh', display: 'flex' }}>
                <Sidenav
                    {...args}
                    expanded={expanded}
                    onToggle={setExpanded}
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(String(key))}
                    logo={Logo}
                    items={sampleItems}
                />
                <div style={{ padding: 20, flex: 1, background: '#f5f5f5' }}>
                    <h1>Page Content</h1>
                </div>
            </div>
        );
    },
};
