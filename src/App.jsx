import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button, Flex, HStack, Input } from '@chakra-ui/react'
import { Route, Routes } from 'react-router'
import Homepage from './components/HomePage/Homepage'

function App() {

  return (
    <>
    <Routes>
      <Route  path="/" element={<Homepage/>}/>
    </Routes>
    </>
    
  )
}

export default App
