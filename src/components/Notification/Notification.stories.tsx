// src/components/Notification/Notification.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Notification, useToaster } from './Notification';
import { Button } from '../Button';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Notification> = {
    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A notification component for displaying global messages and feedback.',
            },
        },
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
            description: 'Notification type',
            table: {
                defaultValue: { summary: 'info' },
            },
        },
        header: {
            control: 'text',
            description: 'Notification header',
        },
        closable: {
            control: 'boolean',
            description: 'Show close button',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Notification>;

// Default (Static)
export const Default: Story = {
    args: {
        type: 'info',
        header: 'Information',
        children: 'This is a static notification message.',
        closable: true,
        style: { width: 320 },
    },
};

// Types
export const Types: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: designTokens.spacing.md, width: 320 }}>
            <Notification type="success" header="Success">
                Operation completed successfully.
            </Notification>
            <Notification type="error" header="Error">
                Something went wrong. Please try again.
            </Notification>
            <Notification type="warning" header="Warning">
                Your session is about to expire.
            </Notification>
            <Notification type="info" header="Info">
                New updates are available.
            </Notification>
        </div>
    ),
};

// Toaster Usage
export const ToasterUsage: Story = {
    render: () => {
        const toaster = useToaster();

        const showNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
            toaster.push(
                <Notification type={type} header={type.charAt(0).toUpperCase() + type.slice(1)} closable>
                    This is a {type} notification triggered via toaster.
                </Notification>,
                { placement: 'topEnd', duration: 4000 }
            );
        };

        return (
            <div style={{ display: 'flex', gap: designTokens.spacing.sm }}>
                <Button onClick={() => showNotification('success')} variant="primary">Success</Button>
                <Button onClick={() => showNotification('error')} variant="secondary">Error</Button>
                <Button onClick={() => showNotification('warning')} variant="tertiary">Warning</Button>
                <Button onClick={() => showNotification('info')} variant="ghost">Info</Button>
            </div>
        );
    },
};
