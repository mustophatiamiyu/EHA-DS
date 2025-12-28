import React, { useState } from 'react';
import {
  Sidenav,
  PageHeader,
  MetricCard,
  Table,
  Tabs,
  Button,
  Progress,
  Tag,
  Badge,
  Input,
  Checkbox,
  SelectPicker,
  DatePicker,
  Modal,
  Loader,
  Steps
} from '@eha/design-system';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Stack, Message, useToaster } from 'rsuite';

const App: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  const [showModal, setShowModal] = useState(false);
  const toaster = useToaster();

  const handleSelect = (eventKey: string | number | undefined) => {
    if (typeof eventKey === 'string') {
      setActiveKey(eventKey);
    }
  };

  const handleAction = () => {
    setShowModal(true);
  };

  const showNotification = () => {
    toaster.push(
      <Message showIcon type="success" closable>
        Success: Dashboard data updated!
      </Message>,
      { placement: 'topEnd' }
    );
  };

  const tableData = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active', progress: 85 },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Pending', progress: 45 },
    { id: 3, name: 'Bob Johnson', role: 'Viewer', status: 'Inactive', progress: 10 },
    { id: 4, name: 'Alice Brown', role: 'Admin', status: 'Active', progress: 100 },
    { id: 5, name: 'Charlie Wilson', role: 'Editor', status: 'Active', progress: 70 },
  ];

  const sidenavItems = [
    { eventKey: '1', title: 'Dashboard', icon: <DashboardIcon /> },
    { eventKey: '2', title: 'Users', icon: <GroupIcon /> },
    {
      eventKey: '3',
      title: 'Advanced',
      icon: <MagicIcon />,
      children: [
        { eventKey: '3-1', title: 'Geo' },
        { eventKey: '3-2', title: 'Devices' },
      ]
    },
    { eventKey: '4', title: 'Settings', icon: <GearCircleIcon /> },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidenav
        expanded={expanded}
        onToggle={setExpanded}
        activeKey={activeKey}
        onSelect={handleSelect}
        items={sidenavItems}
        logo="https://dummyimage.com/150x40/0090FC/ffffff&text=EHA+LOGO"
      />

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PageHeader
          title="Dashboard Overview"
          subtitle="Welcome back, Mustapha! Here's what's happening today."
          user={{
            name: 'Mustapha Tiamiyu',
            initials: 'MT',
            avatar: 'https://avatars.githubusercontent.com/u/1234567?v=4'
          }}
          onAction={handleAction}
        />

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          <Stack direction="column" spacing={24} alignItems="stretch">

            {/* Metrics Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              <MetricCard
                value="2,420"
                label="Total Users"
                icon={<GroupIcon />}
              />
              <MetricCard
                value="156"
                label="Active Sessions"
                style={{ borderLeft: '4px solid #0090FC' }}
              />
              <MetricCard
                value="7,271"
                label="Total Tasks"
                variant="detailed"
                breakdown={[
                  { label: 'Completed', value: '5,291' },
                  { label: 'Pending', value: '1,980' }
                ]}
              />
              <MetricCard
                value="98%"
                label="Success Rate"
                style={{ backgroundColor: '#EAFFE8' }}
              />
            </div>

            {/* Main Tabs Section */}
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <Tabs defaultActiveKey="overview">
                <Tabs.Tab eventKey="overview" title="Overview">
                  <div style={{ marginTop: '24px' }}>
                    <Stack justifyContent="space-between" style={{ marginBottom: '16px' }}>
                      <h3>Recent Activity</h3>
                      <Button variant="primary" size="sm" onClick={showNotification}>
                        Refresh Data
                      </Button>
                    </Stack>

                    <Table data={tableData} autoHeight>
                      <Table.Column width={70} align="center" fixed>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.Cell dataKey="id" />
                      </Table.Column>

                      <Table.Column width={200} flexGrow={1}>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                      </Table.Column>

                      <Table.Column width={120}>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                        <Table.Cell dataKey="role" />
                      </Table.Column>

                      <Table.Column width={120}>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.Cell>
                          {(rowData: any) => (
                            <Tag color={rowData.status === 'Active' ? 'green' : rowData.status === 'Pending' ? 'orange' : 'red'}>
                              {rowData.status}
                            </Tag>
                          )}
                        </Table.Cell>
                      </Table.Column>

                      <Table.Column width={200}>
                        <Table.HeaderCell>Progress</Table.HeaderCell>
                        <Table.Cell>
                          {(rowData: any) => (
                            <Progress.Line percent={rowData.progress} status={rowData.progress === 100 ? 'success' : 'active'} showInfo={false} />
                          )}
                        </Table.Cell>
                      </Table.Column>
                    </Table>

                    <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                      <Table.Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        total={100}
                        limit={10}
                        activePage={1}
                      />
                    </div>
                  </div>
                </Tabs.Tab>

                <Tabs.Tab eventKey="components" title="Component Showcase">
                  <div style={{ marginTop: '24px' }}>
                    <Stack direction="column" spacing={32} alignItems="stretch">

                      {/* Buttons Showcase */}
                      <div>
                        <h4 style={{ marginBottom: '16px' }}>Buttons</h4>
                        <Stack spacing={16}>
                          <Button variant="primary">Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="tertiary">Tertiary</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="primary" isLoading>Loading</Button>
                          <Button variant="primary" disabled>Disabled</Button>
                        </Stack>
                      </div>

                      {/* Forms Showcase */}
                      <div>
                        <h4 style={{ marginBottom: '16px' }}>Form Elements</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                          <Stack direction="column" spacing={16} alignItems="stretch">
                            <Input placeholder="Standard Input" />
                            <SelectPicker
                              data={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                              ]}
                              placeholder="Select Option"
                              style={{ width: '100%' }}
                            />
                          </Stack>
                          <Stack direction="column" spacing={16} alignItems="stretch">
                            <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
                            <Checkbox>Accept Terms & Conditions</Checkbox>
                          </Stack>
                        </div>
                      </div>

                      {/* Progress & Indicators */}
                      <div>
                        <h4 style={{ marginBottom: '16px' }}>Indicators</h4>
                        <Stack spacing={48}>
                          <Progress.Circle percent={75} status="active" />
                          <Stack direction="column" spacing={16}>
                            <Badge content="New" color="blue">
                              <div style={{ width: 40, height: 40, background: '#eee', borderRadius: 4 }} />
                            </Badge>
                            <Steps current={1} vertical style={{ width: 200 }}>
                              <Steps.Item title="Step 1" description="Completed" />
                              <Steps.Item title="Step 2" description="In Progress" />
                              <Steps.Item title="Step 3" description="Waiting" />
                            </Steps>
                          </Stack>
                          <Loader size="md" content="Loading..." />
                        </Stack>
                      </div>

                    </Stack>
                  </div>
                </Tabs.Tab>
              </Tabs>
            </div>

          </Stack>
        </div>
      </div>

      {/* Modal Demo */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="column" spacing={16} alignItems="stretch">
            <p>Fill in the details below to create a new task in the system.</p>
            <Input placeholder="Task Name" />
            <DatePicker placeholder="Due Date" style={{ width: '100%' }} />
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)} variant="ghost">
            Cancel
          </Button>
          <Button onClick={() => { setShowModal(false); showNotification(); }} variant="primary">
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default App;
