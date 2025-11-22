// src/components/Progress/Progress.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from './Progress';
import { Button } from '../Button';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta = {
    title: 'Components/Progress',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A progress indicator component.',
            },
        },
    },
};

export default meta;

// Line Progress
export const Line: StoryObj<typeof Progress.Line> = {
    render: (args) => (
        <div style={{ width: 300 }}>
            <Progress.Line {...args} />
        </div>
    ),
    args: {
        percent: 30,
        strokeWidth: 10,
    },
};

// Circle Progress
export const Circle: StoryObj<typeof Progress.Circle> = {
    render: (args) => (
        <div style={{ width: 120 }}>
            <Progress.Circle {...args} />
        </div>
    ),
    args: {
        percent: 30,
        strokeWidth: 6,
    },
};

// Statuses
export const Statuses: StoryObj = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.md, width: 300 }}>
            <Progress.Line percent={100} status="success" />
            <Progress.Line percent={50} status="fail" />
            <Progress.Line percent={80} status="active" />
            <div style={{ display: 'flex', gap: designTokens.spacing.md }}>
                <div style={{ width: 80 }}><Progress.Circle percent={100} status="success" /></div>
                <div style={{ width: 80 }}><Progress.Circle percent={50} status="fail" /></div>
            </div>
        </div>
    ),
};

// Dynamic Updates
export const Dynamic: StoryObj = {
    render: () => {
        const [percent, setPercent] = React.useState(30);

        const increase = () => setPercent(prev => Math.min(prev + 10, 100));
        const decrease = () => setPercent(prev => Math.max(prev - 10, 0));

        return (
            <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: designTokens.spacing.md }}>
                <Progress.Line percent={percent} status={percent === 100 ? 'success' : 'active'} />
                <div style={{ display: 'flex', gap: designTokens.spacing.sm }}>
                    <Button onClick={decrease} disabled={percent === 0}>-</Button>
                    <Button onClick={increase} disabled={percent === 100}>+</Button>
                </div>
            </div>
        );
    },
};
