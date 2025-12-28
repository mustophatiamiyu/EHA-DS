// src/components/Sidenav/Sidenav.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sidenav } from './Sidenav';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'; import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

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
        logoHeight: {
            control: { type: 'range', min: 20, max: 150, step: 5 },
            description: 'Height of the logo',
        },
        menuTextColor: {
            control: 'color',
            description: 'Color of the menu text',
        },
        menuFontSize: {
            control: { type: 'range', min: 10, max: 24, step: 1 },
            description: 'Font size of main menu items',
        },
        subMenuFontSize: {
            control: { type: 'range', min: 10, max: 24, step: 1 },
            description: 'Font size of sub-menu items',
        },
        iconSize: {
            control: { type: 'range', min: 12, max: 32, step: 1 },
            description: 'Size of the icons',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sidenav>;

const sampleItems = [
    { eventKey: '1', title: 'Dashboard', icon: <HolidayVillageOutlinedIcon /> },
    { eventKey: '2', title: 'Groups', icon: <GroupOutlinedIcon /> },
    {
        eventKey: '3',
        title: 'Analytics',
        icon: <AssessmentOutlinedIcon />,
        children: [
            { eventKey: '3-1', title: 'Real-time' },
            { eventKey: '3-2', title: 'Demographics' },
            { eventKey: '3-3', title: 'Behavior' },
            { eventKey: '3-4', title: 'Conversions' },
        ],
    },
    { eventKey: '4', title: 'System Setup', icon: <SettingsOutlinedIcon /> },
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
