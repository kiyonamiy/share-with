import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';

export default () => [
    <Route path="/" render={()=><Redirect to="/list"/>} exact key="home" />,        // url 只输入 / 跳转到 /list，只在 /list 显示 TopicList
    <Route path="/list" component={TopicList} key="list" />,
    <Route path="/detail" component={TopicDetail} key="detail" />
];