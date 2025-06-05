import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Asegúrate de que NO haya un BrowserRouter aquí
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* Solo el componente App, sin Router aquí */}
  </React.StrictMode>
)