// src/components/Table/Table.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, Pagination } from './Table';
import { designTokens } from '../../theme/design-tokens';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    subcomponents: {
        'Table.Column': (Table as any).Column,
        'Table.HeaderCell': (Table as any).HeaderCell,
        'Table.Cell': (Table as any).Cell,
        'Table.Pagination': Pagination,
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A table component for displaying data in rows and columns.',
            },
        },
    },
    argTypes: {
        height: {
            control: 'number',
            description: 'Table height',
        },
        autoHeight: {
            control: 'boolean',
            description: 'Auto height',
        },
        bordered: {
            control: 'boolean',
            description: 'Bordered table',
        },
        cellBordered: {
            control: 'boolean',
            description: 'Bordered cells',
        },
        hover: {
            control: 'boolean',
            description: 'Hover effect',
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

const data = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    firstName: `First Name ${index + 1}`,
    lastName: `Last Name ${index + 1}`,
    gender: index % 2 === 0 ? 'Male' : 'Female',
    age: 20 + (index % 30),
    email: `email${index + 1}@example.com`,
}));

// Default
export const Default: Story = {
    args: {
        data,
        autoHeight: true,
        style: { width: '100%' },
    },
    render: (args) => (
        <Table {...args}>
            <Table.Column width={70} align="center" fixed>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.Cell dataKey="id" />
            </Table.Column>

            <Table.Column width={130}>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.Cell dataKey="firstName" />
            </Table.Column>

            <Table.Column width={130}>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.Cell dataKey="lastName" />
            </Table.Column>

            <Table.Column width={100}>
                <Table.HeaderCell>Gender</Table.HeaderCell>
                <Table.Cell dataKey="gender" />
            </Table.Column>

            <Table.Column width={100}>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.Cell dataKey="age" />
            </Table.Column>

            <Table.Column width={200} flexGrow={1}>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.Cell dataKey="email" />
            </Table.Column>
        </Table>
    ),
};

// With Pagination
export const WithPagination: Story = {
    render: () => {
        const [limit, setLimit] = React.useState(10);
        const [page, setPage] = React.useState(1);

        const handleChangeLimit = (dataKey: number) => {
            setPage(1);
            setLimit(dataKey);
        };

        const dataSlice = data.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        });

        return (
            <div>
                <Table autoHeight data={dataSlice}>
                    <Table.Column width={70} align="center" fixed>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.Cell dataKey="id" />
                    </Table.Column>
                    <Table.Column width={200} flexGrow={1}>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.Cell dataKey="email" />
                    </Table.Column>
                </Table>
                <div style={{ padding: 20 }}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                        total={data.length}
                        limitOptions={[10, 30, 50]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>
        );
    },
};

// Virtualized
export const Virtualized: Story = {
    args: {
        virtualized: true,
        height: 400,
        data: Array.from({ length: 1000 }).map((_, index) => ({
            id: index + 1,
            email: `email${index + 1}@example.com`,
        })),
    },
    render: (args) => (
        <Table {...args}>
            <Table.Column width={70} align="center" fixed>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.Cell dataKey="id" />
            </Table.Column>
            <Table.Column width={200} flexGrow={1}>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.Cell dataKey="email" />
            </Table.Column>
        </Table>
    ),
};
