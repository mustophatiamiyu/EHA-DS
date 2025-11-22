// src/components/Table/Table.tsx
import React from 'react';
import { Table as RSuiteTable, TableProps as RSuiteTableProps, Pagination as RSuitePagination } from 'rsuite';
import { designTokens } from '../../theme/design-tokens';

// RSuite Table is a bit different as it has many subcomponents.
// We will export the main Table and re-export subcomponents.

export interface TableProps extends RSuiteTableProps {
    // Add any custom props here
}

/**
 * Custom Table Component
 * 
 * A design system-ready table that wraps RSuite Table.
 * 
 * @example
 * <Table data={data}>
 *   <Table.Column>
 *     <Table.HeaderCell>Name</Table.HeaderCell>
 *     <Table.Cell dataKey="name" />
 *   </Table.Column>
 * </Table>
 */
const TableComponent = ({
    style,
    className,
    children,
    ...props
}: TableProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        // RSuite Table styles are mostly CSS-based
    };

    return (
        <RSuiteTable
            style={customStyle}
            className={`ds-table ${className || ''}`}
            {...props}
        >
            {children}
        </RSuiteTable>
    );
};

// Extract subcomponents from RSuiteTable (casting to any to avoid TS errors if types are missing)
const { Column, HeaderCell, Cell, ColumnGroup } = RSuiteTable as any;

// Export subcomponents
export { Column, HeaderCell, Cell, ColumnGroup };
export const Pagination = RSuitePagination;

// Attach to Table for dot notation
(TableComponent as any).Column = Column;
(TableComponent as any).HeaderCell = HeaderCell;
(TableComponent as any).Cell = Cell;
(TableComponent as any).ColumnGroup = ColumnGroup;
(TableComponent as any).Pagination = Pagination;

TableComponent.displayName = 'Table';

export const Table = TableComponent as typeof TableComponent & {
    Column: typeof Column;
    HeaderCell: typeof HeaderCell;
    Cell: typeof Cell;
    ColumnGroup: typeof ColumnGroup;
    Pagination: typeof Pagination;
};
