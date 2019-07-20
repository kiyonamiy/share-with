import React from 'react';
import { Spin } from 'antd';

export default () => (
  <div
    style={{
      textAlign: 'center',
      margin: '100px 0',
    }}
  >
    <Spin tip="Loading..." size="large" />
  </div>
)
