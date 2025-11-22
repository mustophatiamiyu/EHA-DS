// src/components/MetricCard/MetricCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MetricCard } from './MetricCard';
import PeoplesIcon from '@rsuite/icons/Peoples';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';

const meta: Meta<typeof MetricCard> = {
    title: 'Components/MetricCard',
    component: MetricCard,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A card component for displaying dashboard metrics with multiple variants.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['compact', 'detailed'],
            description: 'Card variant',
        },
        value: {
            control: 'text',
            description: 'Main metric value',
        },
        label: {
            control: 'text',
            description: 'Metric label',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

// Compact with Icon
export const CompactWithIcon: Story = {
    args: {
        value: '2,420',
        label: 'Metric Name',
        icon: <PeoplesIcon />,
        variant: 'compact',
    },
};

// Compact without Icon
export const CompactWithoutIcon: Story = {
    args: {
        value: '230',
        label: 'Failed',
        variant: 'compact',
    },
};

// Detailed with Breakdown
export const Detailed: Story = {
    args: {
        value: '7,271',
        label: 'Total Tasks',
        variant: 'detailed',
        breakdown: [
            { label: 'Delivery Subtasks', value: '253' },
            { label: 'Pickup Subtasks', value: '1,727' },
            { label: 'Return Subtasks', value: '20' },
        ],
    },
};

// Grid Layout Example
export const GridLayout: Story = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            maxWidth: '1200px'
        }}>
            <MetricCard
                value="2,420"
                label="Total Users"
                icon={<PeoplesIcon />}
            />
            <MetricCard
                value="230"
                label="Failed"
            />
            <MetricCard
                value="1,890"
                label="Completed"
                icon={<CheckRoundIcon />}
            />
            <MetricCard
                value="300"
                label="Pending"
                icon={<CloseOutlineIcon />}
            />
        </div>
    ),
};

// Detailed Card Standalone
export const DetailedStandalone: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <MetricCard
                value="7,271"
                label="Total Tasks"
                variant="detailed"
                breakdown={[
                    { label: 'Delivery Subtasks', value: '253' },
                    { label: 'Pickup Subtasks', value: '1,727' },
                    { label: 'Return Subtasks', value: '20' },
                ]}
            />
        </div>
    ),
};
