import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  QuestionOutlined,
  UnorderedListOutlined,
  DashboardOutlined,
  BorderTopOutlined,
  QuestionCircleOutlined,
  WalletOutlined,
  CommentOutlined,
  LockOutlined,
  EditOutlined,
  LoginOutlined,
  LogoutOutlined,
  ChromeOutlined,
  AntDesignOutlined,
  SettingTwoTone,
  GithubFilled,
  BgColorsOutlined,
  CopyrightTwoTone,
  MessageTwoTone,
  GiftTwoTone,
  UserOutlined,
  FontSizeOutlined,
  RiseOutlined,
  BellOutlined,
  BarsOutlined,
  BarcodeOutlined,
  SettingOutlined,
  HistoryOutlined,
} from '@ant-design/icons';

import { Dropdown, Space } from 'antd';
import { Layout, Menu, Button, theme, Tabs, Tooltip, Popover, Typography, Input, Tag, Badge, Avatar, Card, Table, Divider } from 'antd';
import SamplePage from './Sample Page';
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

const MantisDesign = () => {
  const { Title, Text } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const columns = [{
    title: 'Tracking No.',
    dataIndex: 'Tracking',
    key: 'Tracking',
  }, {
    title: 'Product Name',
    dataIndex: 'Product',
    key: 'Product name',

  },
  {
    title: 'Total Order',
    dataIndex: 'Total',
    key: 'Total Order',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
  },
  {
    title: 'Total Amount',
    dataIndex: 'Totalamt',
    key: 'Total Amount'
  }]
  const data = [{
    key: '1',
    Tracking: '13256498',
    Product: 'Keyboard',
    Total: 125,
    Status: <span display="flex" ><Badge status='error' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Rejected</p></span>,
    Totalamt: '$70,999'

  },
  {
    key: '2',
    Tracking: '13286564',
    Product: 'Computer Accessories',
    Total: 100,
    Status: <span display="flex" ><Badge status='success' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Approved</p></span>,
    Totalamt: '$83,348'

  },
  {
    key: '3',
    Tracking: '84564564',
    Product: 'Camera Lens',
    Total: 40,
    Status: <span display="flex" ><Badge status='error' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Rejected</p></span>,
    Totalamt: '$40,570'

  },
  {
    key: '4',
    Tracking: '86739658',
    Product: 'TV',
    Total: 99,
    Status: <span display="flex" ><Badge status='warning' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Pending</p></span>,
    Totalamt: '$410,780'

  },
  {
    key: '5',
    Tracking: '98652366',
    Product: 'Handset',
    Total: 50,
    Status: <span display="flex" ><Badge status='success' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Approved</p></span>,
    Totalamt: '$10,239'

  },
  {
    key: '6',
    Tracking: '98753263',
    Product: 'Mouse',
    Total: 89,
    Status: <span display="flex" ><Badge status='error' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Rejected</p></span>,
    Totalamt: '$10,570'

  },
  {
    key: '7',
    Tracking: '98753275',
    Product: 'Desktop',
    Total: 185,
    Status: <span display="flex" ><Badge status='success' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Approved</p></span>,
    Totalamt: '$98,063'

  },
  {
    key: '8',
    Tracking: '98753291',
    Product: 'Chair',
    Total: 100,
    Status: <span display="flex" ><Badge status='warning' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Pending</p></span>,
    Totalamt: '$14,001'

  },
  {
    key: '9',
    Tracking: '98756325',
    Product: 'Mobile',
    Total: 355,
    Status: <span display="flex" ><Badge status='success' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Approved</p></span>,
    Totalamt: '$90,989'

  },
  {
    key: '10',
    Tracking: '98764564',
    Product: 'Laptop',
    Total: 300,
    Status: <span display="flex" ><Badge status='warning' style={{ position: 'relative', right: 10, top: 33 }}></Badge><p>Pending</p></span>,
    Totalamt: '$180,139'

  }]
  const items = [
    {
      label: <div><Title level={5} style={{ textAlign: 'center', marginTop: 0 }}>Notifications</Title></div>
    },
    {
      label: <Space style={{ marginBottom: -20 }}><div style={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
        <div><Avatar style={{ backgroundColor: '#d9f7be', position: 'relative', top: 40 }} icon={<GiftTwoTone />} /></div>
        <div>
          <p>It's <strong>Cristina danny's</strong> birthday today </p>
          <p>2 min ago</p>
        </div>
        <div>

          <p>3.00AM</p>
        </div>
      </div>

      </Space>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <Space style={{ marginBottom: -20 }}><div style={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
        <div><Avatar style={{ backgroundColor: '#bae0ff', position: 'relative', top: 40 }} icon={<MessageTwoTone />} /></div>
        <div>
          <p ><strong>Aida Burg</strong> commented on your post</p>
          <p>5 August</p>
        </div>
        <div>

          <p>6.00PM</p>
        </div>
      </div>

      </Space>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <Space style={{ marginBottom: -20 }}><div style={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
        <div><Avatar style={{ backgroundColor: '#ffccc7', position: 'relative', top: 40 }} icon={<SettingTwoTone />} /></div>
        <div style={{ position: 'relative', right: 20 }}>
          <p>Your Profile is complete <strong>60%</strong></p>
          <p>7 hours ago</p>
        </div>
        <div>

          <p>2.45PM</p>
        </div>
      </div>

      </Space>,
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: <Space style={{ marginBottom: -20 }}><div style={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
        <div><Avatar style={{ backgroundColor: '#bae0ff', position: 'relative', top: 40 }} icon={<CopyrightTwoTone />} /></div>
        <div style={{ position: 'relative', right: 0 }}>
          <p><strong>Cristina Danny</strong> invited to join <strong>Meeting</strong></p>
          <p>Daily scrum meeting time</p>
        </div>
        <div>

          <p>9.10PM</p>
        </div>
      </div>

      </Space>,
      key: '3',
    },
    {
      type: 'divider'
    }, {
      key: '4',
      label: <Button size='large' block>View All</Button>
    }
  ];

  const content = (

    <Tabs defaultActiveKey="1" style={{ marginTop: -50 }}>
      <TabPane
        tab={
          <span>
            <UserOutlined />
            Profile
          </span>
        }
        key="1"
      >
        <Menu
          theme="light"
          mode="inline"

          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <EditOutlined />,
              label: 'Edit Profile',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'View Profile',
            },
            {
              key: '3',
              icon: <BarsOutlined />,
              label: 'Social Profile',

            },
            {
              key: '4',
              icon: <WalletOutlined />,
              label: 'Billing',
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },

          ]}
        />
      </TabPane>
      <TabPane
        tab={
          <span>
            <SettingOutlined />
            Settings
          </span>
        }
        key="2"
      >
        <Menu
          theme="light"
          mode="inline"

          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <QuestionCircleOutlined />,
              label: 'Support',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Account Settings',
            },
            {
              key: '3',
              icon: <LockOutlined />,
              label: 'Privacy center',
            },
            {
              key: '4',
              icon: <CommentOutlined />,
              label: 'Feedback',
            },
            {
              key: '5',
              icon: <HistoryOutlined />,
              label: 'History',
            },

          ]}
        />
      </TabPane>
    </Tabs>


  );

  function handleClick(e) {
    const key = e.key

    if (key === '2') { navigate('/sigin') }
    else if (key == '8') {
      navigate('/samplepage')

    }
    else {
      alert('Access Denied')

    }
  }
  return (
    <Layout style={{ height: 590 }}>
      <Sider trigger={null} collapsible collapsedWidth={0} collapsed={collapsed} theme='light' >
        <div className="demo-logo-vertical" />
        <div className='sidebar_heading' style={{display:'flex'}}>
          <img src="mantislogo.png" height="30px" width="30px" className="mantis_logo" />
         <Typography style={{fontSize:20}}>Mantis</Typography>
        </div>
        <Menu
          theme="light"
          mode="inline"
          itemmargininline="0"

          onClick={handleClick}
          defaultSelectedKeys={['1']}
          items={[
           
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <LoginOutlined />,
              label: 'Login',

            },
            {
              key: '3',
              icon: <UnorderedListOutlined />,
              label: 'Register',
            },
            {
              key: '4',
              icon: <FontSizeOutlined />,
              label: 'Typography',
            },
            {
              key: '5',
              icon: <BgColorsOutlined />,
              label: 'Color',
            },
            {
              key: '6',
              icon: <BarcodeOutlined />,
              label: 'Shadow',
            },
            {
              key: '7',
              icon: <AntDesignOutlined />,
              label: 'AntDesign',
            },
            {
              key: '8',
              icon: <ChromeOutlined />,
              label: 'Sample Page',
            },
            {
              key: '9',
              icon: <QuestionOutlined />,
              label: 'Documentation',
            },
          ]}
        />

      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',

          }}
        >
          <div className='butn_search'>
            <Tag><Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 24,
                height: 24,

              }}
            /></Tag>
            <Input placeholder="Ctrl + k" style={{ width: 200, height: 30 }} prefix={<SearchOutlined />} />
            <br />
          </div>
          <div style={{ marginLeft: 500 }}>
            <a href="https://github.com/Dhivya-56"><Tag > <GithubFilled style={{ height: 30 }} /></Tag></a>
            <Dropdown
              autoAdjustOverflow={true}
              size="small"

              menu={{
                items
              }}
              trigger={['click']}

            >

              <a onClick={(e) => e.preventDefault()}>
                <Badge count={4} color='secondary'>
                  <Tag > <BellOutlined style={{ height: 30 }} /></Tag>
                </Badge>
              </a>
            </Dropdown>

            <Popover content={content} title={<div className='Profile_details' style={{ display: 'flex', justifyContent: "space-around" }}>
              <div> <img src="profile.png  " width="40" height="40" /></div>
              <div style={{ position: 'relative', bottom: 25 }}>
                <div><Title level={5}>John Doe</Title></div>
                <div><p style={{ position: 'relative', bottom: 20 }}>UI/UX designer</p></div>
              </div>
              <div><LogoutOutlined /></div>
            </div>} trigger="click" arrow={false}>
              <img src="profile.png  " width="30" height="30" style={{ marginLeft: 10, marginBottom: -9 }} />
            </Popover>


            <Title style={{ fontSize: 18, marginTop: -45, marginLeft: 120 }}>John Doe</Title>

          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,


            overflowY: 'scroll',
          }}
        >
          <div>
            <div style={{ marginTop: -50 }}>

              <Title level={4}>Dashboard</Title>
            </div>
            <div className="Card_Container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, justifyContent: 'center' }}>
              <Card
                style={{
                  width: 235,
                }}
              >
                <Title level={4} style={{ color: 'grey' }}>Total Page Views</Title>
                <Text strong style={{ fontSize: 20 }}>4,42,236
                </Text>
                <Tag icon={<RiseOutlined />} style={{ fontSize: 17, marginLeft: 10 }} color='#1677FF'>59.3%</Tag><br />
                <Text>You made an extra <span style={{ color: '#1677FF' }}>35,000</span> this year</Text>
              </Card>
              <Card
                style={{
                  width: 235,
                }}
              >
                <Title level={4} style={{ color: 'grey' }}>Total Users</Title>
                <Text strong style={{ fontSize: 20 }}>78,250
                </Text>
                <Tag icon={<RiseOutlined />} style={{ fontSize: 17, marginLeft: 10 }} color='#1677FF'>70.5%</Tag><br />
                <Text>You made an extra <span style={{ color: '#1677FF' }}> 8,900</span> this year</Text>
              </Card>
              <Card
                style={{
                  width: 235,
                }}
              >
                <Title level={4} style={{ color: 'grey' }}>Total Order</Title>
                <Text strong style={{ fontSize: 20 }}>18,800

                </Text>
                <Tag icon={<RiseOutlined />} style={{ fontSize: 17, marginLeft: 10 }} color='#f7bf5e'>27.4%</Tag><br />
                <Text>You made an extra <span style={{ color: '#f7bf5e' }}> 1,943</span> this year</Text>
              </Card>
              <Card
                style={{
                  width: 230,
                }}
              >
                <Title level={4} style={{ color: 'grey' }}>Total Sales</Title>
                <Text strong style={{ fontSize: 20 }}>$35,078

                </Text>
                <Tag icon={<RiseOutlined />} style={{ fontSize: 17, marginLeft: 10 }} color='#f7bf5e'>27.4%</Tag><br />
                <Text>You made an extra <span style={{ color: '#f7bf5e' }}>$20,395 </span> this year</Text>
              </Card>
            </div>
            <div>
              <Title level={4}>Recent Orders</Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div> <Table style={{ width: 500, marginBottom: 0 }} columns={columns} dataSource={data} pagination={false} /></div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', bottom: 65 }}>
                  <Title level={4}>Transaction History</Title>
                  <Card style={{ width: 350 }} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -30 }}>
                      <div><Avatar style={{ backgroundColor: '#d9f7be', position: 'relative', top: 40 }} icon={<GiftTwoTone />} /></div>
                      <div>
                        <Title level={5}>Order #002434</Title>
                        <p>Today,2.00AM</p>
                      </div>
                      <div>
                        <Title level={5}>+$1,430</Title>
                        <p>78%</p>
                      </div>
                    </div>
                    <Divider style={{ marginTop: 0 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -30 }}>
                      <div><Avatar style={{ backgroundColor: '#bae0ff', position: 'relative', top: 40 }} icon={<MessageTwoTone />} /></div>
                      <div>
                        <Title level={5}>Order #002434</Title>
                        <p>5 August,1.45PM</p>
                      </div>
                      <div>
                        <Title level={5}>+$302</Title>
                        <p>8%</p>
                      </div>
                    </div>
                    <Divider style={{ marginTop: 0 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -30 }}>
                      <div><Avatar style={{ backgroundColor: '#ffccc7', position: 'relative', top: 40 }} icon={<SettingTwoTone />} /></div>
                      <div style={{ marginLeft: 10 }}>
                        <Title level={5}>Order #984947</Title>
                        <p>7 hours ago</p>
                      </div>
                      <div>
                        <Title level={5}>+$682</Title>
                        <p>16%</p>
                      </div>
                    </div>

                  </Card>
                </div>
                <div style={{ position: 'relative', bottom: 50 }}>
                  <Card style={{ height: 185 }}>
                    <Title level={5} style={{ margin: 'auto' }}>Help & Support Chat</Title>
                    <p>Typical reply within 5 minutes</p>
                    <Avatar.Group>
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                      <a href="https://ant.design">
                        <Avatar
                          style={{
                            backgroundColor: '#f56a00',
                          }}
                        >
                          K
                        </Avatar>
                      </a>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{
                            backgroundColor: '#87d068',
                          }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Avatar
                        style={{
                          backgroundColor: '#1677ff',
                        }}
                        icon={<AntDesignOutlined />}
                      />
                    </Avatar.Group>
                    <Button style={{ backgroundColor: 'blue', color: 'white', position: 'relative', right: 40, top: 30, width: 200 }}>Need help?</Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>


        </Content>
      </Layout>
    </Layout>
  );
};
export default MantisDesign;