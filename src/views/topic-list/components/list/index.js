import React from 'react';
import { Icon, List, Avatar, Tag } from 'antd';

import CATEGORY from '../../../../constants/category';
import dateDiff from '../../../../utils/date-diff';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const TopicTag = ({item}) => {
  let color, tabName;
  if(item.top) {
    color = "red";
    tabName = "置顶";
  } else if(item.good) {
    color = CATEGORY['good'].color;
    tabName = CATEGORY['good'].name;
  } else {
    color = CATEGORY[item.tab].color;
    tabName = CATEGORY[item.tab].name;
  }
  return <Tag color={color}>{tabName}</Tag>
}

export default ({topics}) => (
  <List
    itemLayout="horizontal"
    dataSource={topics}
    pagination={{
      pageSize: 6,
    }}
    renderItem={item => (
      <List.Item
        key={item.id}
        actions={[
          <IconText style={{marginBottom: 0}}type="calendar" text={dateDiff(item.create_at)} />,
          <IconText type="eye" text={item.visit_count} />,
          <IconText type="message" text={item.reply_count} />,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url} />}
          title={<a href="/">{item.title}</a>}   // TODO a
          description={
            <div>
              `${item.content.substring(0, 200)}...`
              <br />
              <br />
              <TopicTag item={item} /><strong>{item.author.loginname}</strong>
            </div>
          }  // TODO substring 应该交给后端处理
        />
        {/* <div style={{margin: '100px 0'}}>
          <TopicTag item={item} /><strong>{item.author.loginname}</strong>
        </div> */}
      </List.Item>
    )}
  />
)
