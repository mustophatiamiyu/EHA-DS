// src/components/Steps/Steps.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Steps } from './Steps';
import { Button } from '../Button';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Steps> = {
    title: 'Components/Steps',
    component: Steps,
    subcomponents: { 'Steps.Item': (Steps as any).Item },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A navigation component that guides users through a process.',
            },
        },
    },
    argTypes: {
        current: {
            control: 'number',
            description: 'Current step index',
        },
        status: {
            control: 'select',
            options: ['wait', 'process', 'finish', 'error'],
            description: 'Status of current step',
        },
        vertical: {
            control: 'boolean',
            description: 'Vertical layout',
        },
        small: {
            control: 'boolean',
            description: 'Small size',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Steps>;

// Default
export const Default: Story = {
    args: {
        current: 1,
        style: { width: 600 },
    },
    render: (args) => (
        <Steps {...args}>
            <Steps.Item title="Finished" description="Description" />
            <Steps.Item title="In Progress" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
        </Steps>
    ),
};

// Vertical
export const Vertical: Story = {
    args: {
        current: 1,
        vertical: true,
        style: { width: 200 },
    },
    render: (args) => (
        <Steps {...args}>
            <Steps.Item title="Finished" description="Description" />
            <Steps.Item title="In Progress" description="Description" />
            <Steps.Item title="Waiting" description="Description" />
        </Steps>
    ),
};

// Error Status
export const ErrorStatus: Story = {
    args: {
        current: 1,
        status: 'error',
        style: { width: 600 },
    },
    render: (args) => (
        <Steps {...args}>
            <Steps.Item title="Finished" />
            <Steps.Item title="Error" description="Something went wrong" />
            <Steps.Item title="Waiting" />
        </Steps>
    ),
};

// Interactive
export const Interactive: Story = {
    render: () => {
        const [step, setStep] = React.useState(0);
        const onChange = (nextStep: number) => {
            setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
        };

        return (
            <div style={{ width: 600 }}>
                <Steps current={step}>
                    <Steps.Item title="First" />
                    <Steps.Item title="Second" />
                    <Steps.Item title="Third" />
                    <Steps.Item title="Fourth" />
                </Steps>
                <hr style={{ margin: `${designTokens.spacing.lg} 0`, border: 'none', borderTop: `1px solid ${designTokens.semanticColors.border.default}` }} />
                <div style={{ display: 'flex', gap: designTokens.spacing.sm, justifyContent: 'flex-end' }}>
                    <Button onClick={() => onChange(step - 1)} disabled={step === 0}>
                        Previous
                    </Button>
                    <Button onClick={() => onChange(step + 1)} disabled={step === 3} variant="primary">
                        Next
                    </Button>
                </div>
            </div>
        );
    },
};
