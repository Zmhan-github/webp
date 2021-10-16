import React from 'react'
import ReactDOM from 'react-dom'


interface AppProps {
    hello: string
}

const App: React.FC<AppProps> = ({ hello }) => {
    return <div>{hello}</div>
}

ReactDOM.render(<App hello="Hi Bro!!!" />, document.getElementById('root'))
