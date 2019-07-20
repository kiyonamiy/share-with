import React from 'react';
import { Tag } from 'antd';

import CATEGORY from '../../constants/category';

export default ({topic}) => {
  let color, tabName;
  if(topic.top) {
    color = "red";
    tabName = "置顶";
  } else if(topic.good) {
    color = CATEGORY['good'].color;
    tabName = CATEGORY['good'].name;
  } else if(topic.tab) {
    color = CATEGORY[topic.tab].color;
    tabName = CATEGORY[topic.tab].name;
  } else {
    return null;
  }
  return <Tag color={color}>{tabName}</Tag>
}
