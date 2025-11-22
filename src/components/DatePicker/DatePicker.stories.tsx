// src/components/DatePicker/DatePicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatePicker } from './DatePicker';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A date picker component for selecting dates.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Size of the input',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        oneTap: {
            control: 'boolean',
            description: 'One tap selection',
        },
        format: {
            control: 'text',
            description: 'Date format string',
            table: {
                defaultValue: { summary: 'yyyy-MM-dd' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default story
export const Default: Story = {
    args: {
        placeholder: 'Select Date',
    },
};

// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.md }}>
            <DatePicker size="sm" placeholder="Small" />
            <DatePicker size="md" placeholder="Medium" />
            <DatePicker size="lg" placeholder="Large" />
        </div>
    ),
};

// With Label and Helper
export const WithLabel: Story = {
    args: {
        label: 'Appointment Date',
        helperText: 'Please select a weekday',
        placeholder: 'Select Date',
        style: { width: 300 },
    },
};

// Error State
export const ErrorState: Story = {
    args: {
        label: 'Birth Date',
        error: 'Date is required',
        placeholder: 'Select Date',
        style: { width: 300 },
    },
};

// One Tap
export const OneTap: Story = {
    args: {
        oneTap: true,
        placeholder: 'One Tap Select',
    },
};

// Date Time
export const DateTime: Story = {
    args: {
        format: 'yyyy-MM-dd HH:mm:ss',
        placeholder: 'Select Date & Time',
        style: { width: 300 },
    },
};
