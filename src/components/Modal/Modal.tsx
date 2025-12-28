// src/components/Modal/Modal.tsx
import React from 'react';
import { Modal as RSuiteModal, ModalProps as RSuiteModalProps } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

export interface ModalProps extends RSuiteModalProps {
    /** Size of the modal */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Custom Modal Component
 * 
 * A design system-ready modal that wraps RSuite Modal.
 * 
 * @example
 * <Modal open={open} onClose={handleClose}>
 *   <Modal.Header>
 *     <Modal.Title>Modal Title</Modal.Title>
 *   </Modal.Header>
 *   <Modal.Body>
 *     Modal Content
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button onClick={handleClose}>Close</Button>
 *   </Modal.Footer>
 * </Modal>
 */
const ModalBase = ({
    size = 'md',
    style,
    className,
    children,
    ...props
}: ModalProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Modal styles are mostly CSS-based
    };

    return (
        <RSuiteModal
            size={size}
            style={customStyle}
            className={`ds-modal ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteModal>
    );
};

// Re-export subcomponents for convenience
export const ModalHeader = RSuiteModal.Header;
export const ModalBody = RSuiteModal.Body;
export const ModalFooter = RSuiteModal.Footer;
export const ModalTitle = RSuiteModal.Title;

// Attach to Modal for dot notation
const ModalComponent = ModalBase as typeof ModalBase & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
    Title: typeof ModalTitle;
};

(ModalComponent as any).Header = ModalHeader;
(ModalComponent as any).Body = ModalBody;
(ModalComponent as any).Footer = ModalFooter;
(ModalComponent as any).Title = ModalTitle;

(ModalComponent as any).displayName = 'Modal';

export { ModalComponent as Modal };
