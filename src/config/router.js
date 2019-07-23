import React from 'react';
import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { Empty, Card } from 'antd';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';
import UserLogin from '../views/user/login';
import UserInfo from '../views/user/info';

import { hasLoggedIn } from '../utils/user';

const Page404 = () => (
  <Card>
    <Empty
      description={
        <span>
          未知链接
        </span>
      }
    />
  </Card>
)

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {
        props => (
          hasLoggedIn() ?
          <Component {...props} /> :
          <Redirect
            to={{
              pathname: '/user/login',
              search: `?from=${rest.path}`,
            }}
          />
        )
      }
    />
  )
}

export default () => (
  <Switch>
    <Route path="/" render={()=><Redirect to="/list"/>} exact key="home" />
    <Route path="/list" component={TopicList} key="list" />
    <Route path="/detail/:id" component={TopicDetail} key="detail" />
    <Route path="/user/login" exact component={UserLogin} key="user-login" />
    <PrivateRoute path="/user/info" exact component={UserInfo} key="user-info" />
    <Route path="*" component={Page404} key="other"/>
  </Switch>
);
