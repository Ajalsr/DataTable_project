import  React from 'react'
import { createRoot } from 'react-dom/client'
//import { Provider } from "@/components/ui/provider"

import App from './App.jsx'
//import { ChakraProvider } from '@chakra-ui/react'

import "./index.css"
import { BrowserRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
