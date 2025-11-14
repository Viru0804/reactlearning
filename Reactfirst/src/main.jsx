import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function Tea() {
  return(
    <div>
      <h3>
        Tea component chai 
      </h3>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  
   < Tea />
  
)
