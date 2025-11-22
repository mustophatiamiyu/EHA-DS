// src/components/SelectPicker/SelectPicker.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SelectPicker } from './SelectPicker';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof SelectPicker> = {
    title: 'Components/SelectPicker',
    component: SelectPicker,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A select picker component for selecting a value from a list of options.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Size of the picker',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        searchable: {
            control: 'boolean',
            description: 'Whether to show search input',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SelectPicker>;

const data = [
    { label: 'Eugenia', value: 'Eugenia', role: 'Master' },
    { label: 'Kariane', value: 'Kariane', role: 'Master' },
    { label: 'Louisa', value: 'Louisa', role: 'Master' },
    { label: 'Marty', value: 'Marty', role: 'Master' },
    { label: 'Kenya', value: 'Kenya', role: 'Master' },
    { label: 'Hal', value: 'Hal', role: 'Developer' },
    { label: 'Julius', value: 'Julius', role: 'Developer' },
    { label: 'Travon', value: 'Travon', role: 'Developer' },
    { label: 'Vincenza', value: 'Vincenza', role: 'Developer' },
    { label: 'Dominic', value: 'Dominic', role: 'Developer' },
    { label: 'Pearlie', value: 'Pearlie', role: 'Guest' },
    { label: 'Tyrel', value: 'Tyrel', role: 'Guest' },
    { label: 'Jaylen', value: 'Jaylen', role: 'Guest' },
    { label: 'Rrogers', value: 'Rrogers', role: 'Guest' },
];

// Default
export const Default: Story = {
    args: {
        data,
        placeholder: 'Select User',
        style: { width: 224 },
    },
};

// With Label and Helper
export const WithLabel: Story = {
    args: {
        data,
        label: 'Assignee',
        helperText: 'Select a user to assign this task to',
        placeholder: 'Select User',
        style: { width: 224 },
    },
};

// Error State
export const ErrorState: Story = {
    args: {
        data,
        label: 'Assignee',
        error: 'Please select an assignee',
        placeholder: 'Select User',
        style: { width: 224 },
    },
};

// Grouped Data
export const Grouped: Story = {
    args: {
        data,
        groupBy: 'role',
        placeholder: 'Select User by Role',
        style: { width: 224 },
    },
};

// Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.md }}>
            <SelectPicker data={data} size="xs" placeholder="Extra Small" style={{ width: 224 }} />
            <SelectPicker data={data} size="sm" placeholder="Small" style={{ width: 224 }} />
            <SelectPicker data={data} size="md" placeholder="Medium" style={{ width: 224 }} />
            <SelectPicker data={data} size="lg" placeholder="Large" style={{ width: 224 }} />
        </div>
    ),
};

// Async Data (Simulated)
export const AsyncData: Story = {
    render: () => {
        const [items, setItems] = React.useState<any[]>([]);
        const [loading, setLoading] = React.useState(false);

        const updateData = () => {
            setLoading(true);
            setTimeout(() => {
                setItems(data);
                setLoading(false);
            }, 1500);
        };

        return (
            <SelectPicker
                data={items}
                loading={loading}
                onOpen={updateData}
                onSearch={updateData}
                placeholder="Select User (Async)"
                style={{ width: 224 }}
            />
        );
    },
};
