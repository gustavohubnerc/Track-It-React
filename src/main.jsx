import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { TokenProvider } from './contexts/TokenContext.jsx'
import { ProgressProvider } from './contexts/ProgressContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <ProgressProvider>
        <UserProvider>
            <TokenProvider>
              <App />
            </TokenProvider>         
        </UserProvider>
      </ProgressProvider>  
  </React.StrictMode>
)
