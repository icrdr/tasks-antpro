import { Tooltip, Space, Avatar, Dropdown, Menu, Spin, Input } from 'antd';
import { QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { history, SelectLang, useModel } from 'umi';

import { logout } from '@/service';

const menu = (
  <Menu>
    <Menu.Item key="logout">
      <LogoutOutlined />
      退出登录
    </Menu.Item>
  </Menu>
);

const HeaderAvatar: React.FC<{}> = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState!;

  return (
    <Dropdown overlay={menu}>
      <Space>
        <Avatar size="small" src={currentUser?.avatar} alt="avatar" />
        <span>{currentUser?.name}</span>
      </Space>
    </Dropdown>
  );
};

const RightContent: React.FC<{}> = () => {
  const handleSearch = () => {};
  return (
    <Space size="middle">
      <Input.Search
        size='small'
        className='v-a:m'
        placeholder="input search text"
        onSearch={handleSearch}
        style={{ width: 200 }}
      />
      <Tooltip title="使用文档">
        <span onClick={() => history.push('https://pro.ant.design/docs/getting-started')}>
          <QuestionCircleOutlined />
        </span>
      </Tooltip>
      <HeaderAvatar />
      <SelectLang />
    </Space>
  );
};
export default RightContent;
