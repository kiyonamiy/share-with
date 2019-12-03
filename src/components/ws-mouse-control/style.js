import styled from 'styled-components';

import { WS_MOUSE_CONTROL_PANEL, } from './constants';

export const WsMouseControlPanel = styled.div.attrs({
    id: WS_MOUSE_CONTROL_PANEL,
})`
    margin: 0 auto;
    top: 100px;
    position: relative;
    width: 1200px;
    height: 800px;
    background: rgb(172, 168, 168);
`;

export const MouseCircle = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #010101;
    z-index: 9999;
`;