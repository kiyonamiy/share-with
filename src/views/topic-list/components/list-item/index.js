import React, { PureComponent } from 'react';
import { List, Avatar } from 'antd';

import IconText from '../../../../components/icon-text';
import TopicTag from '../../../../components/topic-tag';

import dateDiff from '../../../../utils/date-diff';

class ListItem extends PureComponent {
  render() {
    const { topic } = this.props;

    return (
      <List.Item
            key={topic.id}
            actions={[
              <IconText type="calendar" text={dateDiff(topic.create_at)} />,
              <IconText type="eye" text={topic.visit_count} />,
              <IconText type="message" text={topic.reply_count} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={topic.author.avatar_url} />}
              title={<a href={`/detail/${topic.id}`}>${topic.title}</a>}   // TODO a
              description={
                <div>
                  `${topic.content.substring(0, 100)}...`
                  <div style={{marginTop: 4}}>
                    <TopicTag topic={topic} /><IconText type="user" text={<strong>{topic.author.loginname}</strong>}/>
                  </div>
                </div>
              } /*TODO substring 应该交给后端处理*/
            />
          </List.Item>
    )
  }
}

export default ListItem;
