import React from 'react'

import {
    Layout,
    Menu,
  } from 'antd';

import {
  Logo
} from './style';

  const { Header, Content, Footer } = Layout;

export default ({ children }) => (
  <Layout>
      <Header>
          <Logo>Share with</Logo>
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['home']}
              style={{float: 'right', lineHeight: '64px'}}
          >
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="register">注册</Menu.Item>
              <Menu.Item key="login">登录</Menu.Item>
          </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '16px'}}>
        { children }
      </Content>
      <Footer style={{ textAlign: 'center' }}>秃头披风侠粉丝后援团 ©2019 Created by Kiyonami Yu</Footer>
  </Layout>
)
