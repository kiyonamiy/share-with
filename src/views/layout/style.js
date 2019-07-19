import styled from 'styled-components';
import logoPic from '../../static/logo.png';

const Logo = styled.a.attrs({
  href: '/',
})`
  position: absolute;
  display: block;
  height: 64px;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 40px;
  //background: url(${logoPic});
  //background-size: contain;
`;

export {
  Logo,
}
