import React from 'react';
import { Avatar } from 'antd';

import {UserContainer, AvatarBg, UserNameSpan } from './style';

export default ({username='未登录', avatarSrc, children}) => (
  <UserContainer>
    <AvatarBg>
      <Avatar size={90} icon="user" src={avatarSrc} style={{display: 'block', margin: '0px auto'}}/>
      <br />
      <UserNameSpan>{username}</UserNameSpan>
    </AvatarBg>
    {children}
</UserContainer>
)
