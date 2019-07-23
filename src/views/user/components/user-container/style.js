import styled from 'styled-components';

import userBg from '../../../../static/user-bg.jpg';

export const UserContainer = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 3px 15px 3px rgba(51, 51, 51, 0.5);
  margin-bottom: 50px;
  padding-bottom: 50px;
`;

export const AvatarBg = styled.div`
  padding-top: 30px;
  height: 200px;
  width: 100%;
  background: url(${userBg});
  background-size: cover;
  text-align: center;
  margin-bottom: 50px;
`;

export const UserNameSpan = styled.span`
  color: white;
`

