import React from 'react';

import { Comment, List } from 'antd';

import dateDiff from '../../../../utils/date-diff';

export default ({replies}) => (
  <List
    className="comment-list"
    header={<span>共<strong>{replies.length}</strong>条回复</span>}
    itemLayout="horizontal"
    dataSource={replies}
    renderItem={item => (
      <li>
        <Comment
          actions={[<span>回复</span>]}
          author={item.author.loginname}
          avatar={item.author.avatar_url}
          content={item.content}
          datatime={dateDiff(item.create_at)}
        />
      </li>
    )}
  >
  </List>
)
