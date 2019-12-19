import React, { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';

import * as constants from './constants.js';
import { WsMouseControlPanel, MouseCircle } from './style';
const updateMouses = (mouses, {id, x, y}, setMouses) => {
    const newMouses = [];
    let flag = false;

    for(let mouse of mouses) {
        if(mouse.id === id) {
            flag = true;
            mouse.x = x;
            mouse.y = y;
        }
        newMouses.push(mouse);
    }
    if(!flag) {
        let color = '#' + Array(6).fill().map(idx=>{
            return parseInt(Math.random() * 15).toString(16); 
        }).join('');
       
        newMouses.push({id, x, y, color});
    }

    setMouses(newMouses);
}


const mouseClick = (panelX, panelY, x, y) => {
    const element = document.elementsFromPoint(panelX + x, panelY + y)[1];
    clickElement(element);
}

const clickElement = (ele) => {
    if(ele == null) {
        return;
    }
    if(ele.click != null) {
        ele.click();
    }
    let children = ele.children;
    for(let i = 0; i < children.length; i ++) {
        clickElement(children[i]);
    }
}


export default function(props) {
    const { children } = props;

    const [ nowMouse, setNowMouse ] = useState({});
    const [ mouses, setMouses ] = useState([]);

    console.log(mouses);

    useEffect(() => {
        const panel = document.getElementById(constants.WS_MOUSE_CONTROL_PANEL);
        const panelX = panel.offsetLeft;
        const panelY = panel.offsetTop;

        const client = new w3cwebsocket(constants.WEBSOCKET_SITE);
        client.onopen = () => {
            console.log('client connect server success!');
        }

        client.onmessage = ({data}) => {
            const mouseData = JSON.parse(data);     // {"id":"3","type":"0","x":"1113","y":"156"}
            const { type, x, y } = mouseData;

            switch(type) {
                case constants.MOUSE_MOVE:
                    setNowMouse(mouseData)
                    break;
                case constants.MOUSE_CLICK:
                    mouseClick(panelX, panelY, x, y)
                    break;
                default:
                    break;
            }
        }

        return () => {
            try {
                client.close()
            } catch(e) {
            }
        }
        
    }, []);

    useEffect(() => {
        updateMouses(mouses, nowMouse, setMouses)
    }, [nowMouse])

 
    return (
        <WsMouseControlPanel>
            {children}
            {
                mouses.map((item, idx) => {
        
                    return <MouseCircle x={item.x} y={item.y} key={item.id} color={item.color}/>
                })
            }
        </WsMouseControlPanel>
           
    )
}