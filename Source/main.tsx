import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { StarRating } from './Components/StarRating'

interface AppProps {
    hello: string
}

const App: React.FC<AppProps> = ({ hello }) => {

    useEffect(()=> {
        Notification.requestPermission().then((per) => {
            new Notification('Ты активировал Нотификацию! Спасибо!', {
                body: 'Твой элексир готов. +10 Энергии',
                image: './lecsir.png',
                vibrate: 1
            })
        })
    }, [])
    return <div>{hello}<StarRating /></div>
}

ReactDOM.render(<App hello="Hi Bro!" />, document.getElementById('root'))
