
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createElement } from 'react'

function MyApp (){
    return(
        <h1>My App</h1>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://googole.com" target='_blank'>Google</a>
)

const reactElement =createElement(
    'a',{href: 'https://gogle.com', target: '_black'}
    ,'Click to visite google'
)

createRoot(document.getElementById('root')).render(
    <App/>
)
