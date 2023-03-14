import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartContextProvder from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvder>
    <App />
  </CartContextProvder>,
)
