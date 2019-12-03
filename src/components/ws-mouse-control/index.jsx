import React, { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';

import * as constants from './constants.js';
import { WsMouseControlPanel, MouseCircle } from './style';

const mouseMove = (id, x, y, mouses, setMouses, count, setCount) => {
    // const newMouses = [];
    // let flag = false;
    // console.log(1.1, mouses);
    console.log(1.2, count);


    // for(let mouse of mouses) {
    //     if(mouse.id === id) {
    //         flag = true;
    //         mouse.x = x;
    //         mouse.y = y;
    //     }
    //     newMouses.push(mouse);
    // }
    // if(!flag) {
    //     newMouses.push({id, x, y});
    // }

    // console.log(2.1, newMouses);
    console.log(2.2, count);
    
    setCount(count + 1);
    // setMouses(newMouses);
}

const test = (count, setCount) => {
    setCount(count + 1);
    console.log(count)
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

    const [ mouses, setMouses ] = useState([{id: -1, x: 2, y: 3}]);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const panel = document.getElementById(constants.WS_MOUSE_CONTROL_PANEL);
        const panelX = panel.offsetLeft;
        const panelY = panel.offsetTop;

        const client = new w3cwebsocket(constants.WEBSOCKET_SITE);
        client.onopen = () => {
            console.log('client connect server success!');
        }

        client.onmessage = (messageEvent) => {
            const mouseData = JSON.parse(messageEvent.data);     // {"id":"3","type":"0","x":"1113","y":"156"}
            const { id, type, x, y } = mouseData;

            setCount(count + 1);

            switch(type) {
                case constants.MOUSE_MOVE:

                    mouseMove(id, x, y, mouses, setMouses, count, setCount);
                    break;
                case constants.MOUSE_CLICK:
                    mouseClick(panelX, panelY, x, y);
                    break;
                default:
                    break;
            }
        }
        
    }, []);

 
    return (
        <WsMouseControlPanel>
            {children}
            <button onClick={() => {
                console.log('here')
                // console.log(count)
                // setCount(count + 1);
                test(count, setCount)
            }}>CLICL</button>
            {
                mouses.map((item) => (
                    <MouseCircle x={item.x} y={item.y} key={item.id} />
                ))
            }
        </WsMouseControlPanel>
           
    )
}