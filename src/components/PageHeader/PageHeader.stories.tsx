// src/components/PageHeader/PageHeader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
    title: 'Page/PageHeader',
    component: PageHeader,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A standard page header component.',
            },
        },
    },
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        onAction: { action: 'action clicked' },
        onNotificationClick: { action: 'notification clicked' },
        onUserSelect: { action: 'user menu selected' },
    },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

// Default
export const Default: Story = {
    args: {
        title: 'Title',
        subtitle: 'Subtitle Content',
        onAction: () => console.log('Action clicked'),
        user: {
            name: 'EHA Admin',
            initials: 'EA',
        },
    },
};
