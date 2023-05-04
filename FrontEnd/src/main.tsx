import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('div')! ).render(
  <React.StrictMode>
    <App name={ "Emanuel odii" } age={ 16 } />
  </React.StrictMode>,
)
