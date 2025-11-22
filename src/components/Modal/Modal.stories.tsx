// src/components/Modal/Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    subcomponents: {
        'Modal.Header': (Modal as any).Header,
        'Modal.Body': (Modal as any).Body,
        'Modal.Footer': (Modal as any).Footer,
        'Modal.Title': (Modal as any).Title,
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A modal dialog component.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'full'],
            description: 'Size of the modal',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
        backdrop: {
            control: 'select',
            options: [true, false, 'static'],
            description: 'Backdrop behavior',
        },
        overflow: {
            control: 'boolean',
            description: 'Overflow behavior',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Default
export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button onClick={handleOpen}>Open Modal</Button>
                <Modal open={open} onClose={handleClose} {...args}>
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This is the modal content. You can put anything here.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose} variant="primary">
                            Confirm
                        </Button>
                        <Button onClick={handleClose} variant="ghost">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    },
};

// Sizes
export const Sizes: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const [size, setSize] = React.useState<any>('md');
        const handleOpen = (s: string) => {
            setSize(s);
            setOpen(true);
        };
        const handleClose = () => setOpen(false);

        return (
            <div style={{ display: 'flex', gap: designTokens.spacing.sm }}>
                <Button onClick={() => handleOpen('xs')}>XS</Button>
                <Button onClick={() => handleOpen('sm')}>SM</Button>
                <Button onClick={() => handleOpen('md')}>MD</Button>
                <Button onClick={() => handleOpen('lg')}>LG</Button>
                <Button onClick={() => handleOpen('full')}>Full</Button>

                <Modal size={size} open={open} onClose={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modal Size: {size}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This modal is displayed with size: <strong>{size}</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose} variant="primary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    },
};

// Overflow
export const Overflow: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <>
                <Button onClick={handleOpen}>Open Long Modal</Button>
                <Modal open={open} onClose={handleClose} overflow>
                    <Modal.Header>
                        <Modal.Title>Long Content Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {Array.from({ length: 50 }).map((_, i) => (
                            <p key={i} style={{ marginBottom: designTokens.spacing.sm }}>
                                Line {i + 1}: This is some placeholder text to demonstrate scrolling behavior within the modal body.
                            </p>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose} variant="primary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    },
};
