import React from 'react';
import { Card, List, Avatar, Col, Row } from 'antd';

import dateDiff from '../../../utils/date-diff';

const RecentList = ({data}) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url} />}
          title={item.title}
          description={dateDiff(item.last_reply_at)}
        />
      </List.Item>
    )}
  />
)

const responsiveSize = { xs: 32, lg: 8 };

export default ({recentTopics, recentReplies, topicCollect}) => (
  <Row gutter={16} style={{margin: '0 50px'}}>
    <Col {...responsiveSize} style={{marginBottom: 20}} >
      <Card title="最近发布的话题" bordered>
        <RecentList data={recentTopics} />
      </Card>
    </Col>
    <Col {...responsiveSize} style={{marginBottom: 20}} >
      <Card title="最近收到的回复" bordered>
        <RecentList data={recentReplies} />
      </Card>
    </Col>
    <Col {...responsiveSize} style={{marginBottom: 20}} >
      <Card title="用户收藏的主题" bordered>
        <RecentList data={topicCollect} />
      </Card>
    </Col>
  </Row>
)
