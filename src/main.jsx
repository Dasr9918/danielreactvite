import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value={8} /> 
  </React.StrictMode>
)
//En el campo <FirstApp />  va el valor del componente cuando se invoca