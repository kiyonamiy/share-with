import React from 'react';
import marked from 'marked';
import { Typography, Divider } from 'antd';

import {UserIconText, CalendarIconText, EyeIconText, MessageIconText } from '../../../../components/icon-text';
import TopicTag from '../../../../components/topic-tag';

const { Title } = Typography;

export default ({topicDetail}) => (
  <Typography>
    <header>
      <Title>{topicDetail.title}</Title>
      <TopicTag topic={topicDetail} />
      <UserIconText username={topicDetail.author.loginname} />
      <CalendarIconText timeStr={topicDetail.create_at} />
      <EyeIconText num={topicDetail.visit_count} />
      <MessageIconText num={topicDetail.reply_count} />
    </header>
    <Divider />
    <article>
      <p dangerouslySetInnerHTML={{__html: marked(topicDetail.content)}} />
    </article>
  </Typography>
)
