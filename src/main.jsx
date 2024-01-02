import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import ContextProviter from './ContextProviter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    
    <ContextProviter>

        <App />
    </ContextProviter>

  

   
  
)
