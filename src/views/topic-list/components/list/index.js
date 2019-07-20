import React from 'react';
import { List as AntdList } from 'antd';

import ListItem from '../list-item/';

export default ({topics}) => (
  <AntdList
    itemLayout="horizontal"
    dataSource={topics}
    pagination={{
      pageSize: 10,
    }}
    renderItem={item => <ListItem topic={item}/>}
  />
);
