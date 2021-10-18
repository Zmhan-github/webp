import React from 'react'
import ReactDOM from 'react-dom'

import { StarRating } from './Components/StarRating'




interface AppProps {
    hello: string
}

const App: React.FC<AppProps> = ({ hello }) => {
    return <div>{hello}<StarRating /></div>
}

ReactDOM.render(<App hello="Hi Bro!" />, document.getElementById('root'))
