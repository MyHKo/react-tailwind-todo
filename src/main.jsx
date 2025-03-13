import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ListProvider} from "./context/ListContext/ListProvider.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ListProvider>
          <App />
      </ListProvider>
  </StrictMode>,
)
