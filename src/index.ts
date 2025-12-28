/**
 * EHA Design System
 * 
 * Central export file for all design system components and utilities
 * 
 * @example
 * ```tsx
 * import { Button, Checkbox, Breadcrumb, Dropdown } from '@EHA/design-system';
 * ```
 */

// Accordion Components
export { Accordion, AccordionPanel } from './components/Accordion';
export type { AccordionProps } from './components/Accordion';

// Avatar Component
export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';

// Badge Component
export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';


// Button Component
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

// Checkbox Components
export { Checkbox, CheckboxGroup } from './components/Checkbox';
export type { CheckboxProps, CheckboxGroupProps } from './components/Checkbox';

// DatePicker Component
export { DatePicker } from './components/DatePicker';
export type { DatePickerProps } from './components/DatePicker';

// Dropdown Component
export { Dropdown, DropdownItem, DropdownMenu } from './components/Dropdown';
export type { DropdownProps } from './components/Dropdown';

// Input Component
export { Input } from './components/Input';
export type { InputProps } from './components/Input';

// Loader Component
export { Loader } from './components/Loader';
export type { LoaderProps } from './components/Loader';

// MetricCard Component
export { MetricCard } from './components/MetricCard';
export type { MetricCardProps } from './components/MetricCard';

// Modal Component
export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

// Notification Component
export { Notification } from './components/Notification';
export type { NotificationProps } from './components/Notification';

// PageHeader Component
export { PageHeader } from './components/PageHeader';
export type { PageHeaderProps } from './components/PageHeader';

// Progress Component
export { Progress } from './components/Progress';
export type { ProgressLineProps, ProgressCircleProps } from './components/Progress';

// SelectPicker Component
export { SelectPicker } from './components/SelectPicker';
export type { SelectPickerProps } from './components/SelectPicker';

// Sidenav Component
export { Sidenav } from './components/Sidenav';
export type { SidenavProps } from './components/Sidenav';

// Steps Component
export { Steps } from './components/Steps';
export type { StepsProps } from './components/Steps';

// Table Component
export { Table } from './components/Table';
export type { TableProps } from './components/Table';

// Tabs Component
export { Tabs } from './components/Tabs';
export type { TabsProps } from './components/Tabs';

// Tag Component
export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

// Re-export RSuite utilities that developers might need
export { CustomProvider } from 'rsuite';

// Theme Utilities
export { ThemeProvider, applyRSuiteTheme } from './theme/rsuite-theme';
export { designTokens } from './theme/design-tokens';