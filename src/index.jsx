import React from 'react'
import './Theme/theme.css'
import ReactDOM from 'react-dom'
import App from './Router/router'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);