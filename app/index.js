import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import '../styles/custom.scss'

// var btn = document.getElementsByTagName('button')[0];
// btn.addEventListener("click", () => {
//     import('./assets/chunk.css').then(()=>{
//         console.log("Goi khi can thoi nhe")
//     })
// });

render(
  <Root />,
  document.getElementById('root')
)
