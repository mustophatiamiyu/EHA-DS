// src/components/Breadcrumb/Breadcrumb.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    subcomponents: { 'Breadcrumb.Item': (Breadcrumb as any).Item },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A breadcrumb component for navigation.',
            },
        },
    },
    argTypes: {
        separator: {
            control: 'text',
            description: 'Custom separator',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Default
export const Default: Story = {
    render: (args) => (
        <Breadcrumb {...args}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/components">Components</Breadcrumb.Item>
            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
    ),
};

