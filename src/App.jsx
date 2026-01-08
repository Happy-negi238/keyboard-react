import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Index } from '../templates/Index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Keyboard } from '../templates/Keyboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='key' element={<Keyboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
