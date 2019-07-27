import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Layout as AntdLayout,
    Menu,
    Popover,
    Avatar,
    Button
  } from 'antd';

import {
  Logo
} from './style';

import { actionCreators } from '../user/store';

import { getUserName, getUserAvatar, logout } from '../../utils/user';

const { Header, Content, Footer } = AntdLayout;

const UserCorner = ({changeLoginStatusToFalse}) => (
  <Popover
    content={<Button type="primary" onClick={changeLoginStatusToFalse}><Link to='/list'>退出</Link></Button>}
    title={getUserName()}
    trigger="hover"
    placement="bottomRight"
    style={{position: 'absolute'}}
  >
    <Link to='/user/login'><Avatar src={getUserAvatar()}/></Link>
  </Popover>
)


class Layout extends Component {

  componentDidMount() {
    logout();   // 第一次页面加载，清除 local storage
  }

  render() {
    const { children, hasLoggedIn, changeLoginStatusToFalse } = this.props;
    return (
      <AntdLayout>
        <Header>
          <Logo>Share with</Logo>
          <Menu
            selectable={false}
            theme="dark"
            mode="horizontal"
            style={{float: 'right', lineHeight: '64px'}}
          >
            <Menu.Item key="home"><Link to="/list">首页</Link></Menu.Item>
            { hasLoggedIn ? <UserCorner changeLoginStatusToFalse={changeLoginStatusToFalse} /> : <Menu.Item key="login"><Link to="/user/login">登录</Link></Menu.Item>}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '16px'}}>
          { children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>秃头披风侠粉丝后援团 ©2019 Created by Kiyonami Yu</Footer>
      </AntdLayout>
    )
  }
}

const mapStateToProps = state => ({
  hasLoggedIn: state.getIn(['user', 'hasLoggedIn']),
});

const mapDispatchToProps = dispatch => ({
  changeLoginStatusToFalse() {
    dispatch(actionCreators.changeLoginStatusAction(false));
    logout();
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
