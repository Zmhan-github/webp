import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { StarRating } from './Components/StarRating'

interface AppProps {
    hello: string
}

async function requestDeviceOrientationTracking() {
    const requestPermission = (Notification as any).requestPermission as () => Promise<string> | undefined;
    if (requestPermission !== undefined) {
      const permission = await (Notification as any).requestPermission();
      if (permission === 'denied') {
        return false;
      }
    }
    return true;
  }

const App: React.FC<AppProps> = ({ hello }) => {

    const onClick = async () => {
        try {
            const trackingRequestResult = await requestDeviceOrientationTracking();
            if (trackingRequestResult == true) {
                new Notification('Ты активировал Нотификацию! Спасибо!', {
                    body: 'Твой элексир готов. +10 Энергии',
                    image: './lecsir.png',
                    vibrate: 1
                })
            }
          } catch (e) {
            console.log(e);
          }
    }

    useEffect(()=> {
        // Notification.requestPermission().then((per) => {
        //     new Notification('Ты активировал Нотификацию! Спасибо!', {
        //         body: 'Твой элексир готов. +10 Энергии',
        //         image: './lecsir.png',
        //         vibrate: 1
        //     })
        // })
    }, [])
    return (
        <div>{hello}
            <img src="./lecsir.png" style={{ width: '90px'}}/>
            {'Drink Lecsir!'}
            <StarRating />
            <button onClick={onClick}>Click</button>
        </div>
    )
}

ReactDOM.render(<App hello="Hi Bro!" />, document.getElementById('root'))
