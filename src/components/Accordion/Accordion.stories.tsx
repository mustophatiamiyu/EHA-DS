// src/components/Accordion/Accordion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    subcomponents: { 'Accordion.Panel': (Accordion as any).Panel },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'An accordion showcases brief details that can be expanded to show content or collapsed to conceal it. It is useful for grouping or hiding intricate sections to maintain a neat and tidy page layout.',
            },
        },
    },
    argTypes: {
        bordered: {
            control: 'boolean',
            description: 'Show border',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default story
export const Default: Story = {
    render: (args) => (
        <Accordion {...args}>
            <Accordion.Panel header="Accordion Panel 1">
                <p style={{ color: designTokens.semanticColors.text.secondary }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </Accordion.Panel>
            <Accordion.Panel header="Accordion Panel 2">
                <p style={{ color: designTokens.semanticColors.text.secondary }}>
                    Nullam cursus velit ac massa ornare, ut elementum nisl egestas.
                </p>
            </Accordion.Panel>
            <Accordion.Panel header="Accordion Panel 3">
                <p style={{ color: designTokens.semanticColors.text.secondary }}>
                    Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus.
                </p>
            </Accordion.Panel>
        </Accordion>
    ),
};

// Bordered story
export const Bordered: Story = {
    args: {
        bordered: true,
    },
    render: (args) => (
        <Accordion {...args}>
            <Accordion.Panel header="Bordered Panel 1">
                <p>Content for panel 1</p>
            </Accordion.Panel>
            <Accordion.Panel header="Bordered Panel 2">
                <p>Content for panel 2</p>
            </Accordion.Panel>
        </Accordion>
    ),
};
