import React from 'react';
import { Icon, Typography } from 'antd';

import dateDiff from '../../utils/date-diff';

const { Text } = Typography;

const IconText = ({ type, text }) => (
  <span style={{margin: '2px 8px'}}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export const UserIconText = ({username}) => (
  <IconText type="user" text={<Text strong>{username}</Text>} />
)

export const CalendarIconText = ({timeStr}) => (
  <IconText type="calendar" text={dateDiff(timeStr)} />
)

export const EyeIconText = ({num}) => (
  <IconText type="eye" text={num} />
)

export const MessageIconText = ({num}) => (
  <IconText type="message" text={num} />
)

export default IconText;

