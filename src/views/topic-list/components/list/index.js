import React from 'react';
import { Icon, List, Avatar  } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
          <IconText type="eye" text={item.visit_count} />,
          <IconText type="message" text={item.reply_count} />,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url} />}
          title={<a href="/">{item.title}</a>}   // TODO a
          description={`${item.content.substring(0, 200)}...`}  // TODO substring 应该交给后端处理
        />
        <br />
        {item.tab}·{item.author.loginname}·{item.create_at}  {/** // TODO 补充列表内容*/}
      </List.Item>
    )}
  />
)
