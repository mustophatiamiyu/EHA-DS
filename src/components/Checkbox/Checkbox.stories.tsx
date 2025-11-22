// src/components/Checkbox/Checkbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A checkbox component for selecting one or more options from a set.',
            },
        },
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Indeterminate state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default story
export const Default: Story = {
    args: {
        children: 'Checkbox Option',
    },
};

// Checked state
export const Checked: Story = {
    args: {
        children: 'Checked Option',
        checked: true,
    },
};

// Indeterminate state
export const Indeterminate: Story = {
    args: {
        children: 'Indeterminate Option',
        indeterminate: true,
    },
};

// Disabled state
export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.sm }}>
            <Checkbox disabled>Disabled Unchecked</Checkbox>
            <Checkbox disabled checked>Disabled Checked</Checkbox>
            <Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
        </div>
    ),
};

// Checkbox Group
export const Group: Story = {
    render: () => (
        <CheckboxGroup name="roles" label="Select Roles" defaultValue={['Developer']}>
            <Checkbox value="Developer">Developer</Checkbox>
            <Checkbox value="Designer">Designer</Checkbox>
            <Checkbox value="Manager">Manager</Checkbox>
        </CheckboxGroup>
    ),
};

// Controlled Group
export const ControlledGroup: Story = {
    render: () => {
        const [value, setValue] = React.useState(['A']);
        return (
            <div>
                <CheckboxGroup
                    name="options"
                    label="Controlled Group"
                    value={value}
                    onChange={val => setValue(val as string[])}
                >
                    <Checkbox value="A">Option A</Checkbox>
                    <Checkbox value="B">Option B</Checkbox>
                    <Checkbox value="C">Option C</Checkbox>
                </CheckboxGroup>
                <div style={{ marginTop: designTokens.spacing.md, fontSize: designTokens.fontSize.sm }}>
                    Selected: {value.join(', ')}
                </div>
            </div>
        );
    },
};
