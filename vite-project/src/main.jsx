import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //Import
import './index.css'

//récupérer le #root dans la div de l'index et généré le React dans cette div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
