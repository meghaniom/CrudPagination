import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Insert from './components/Insert'
import Update from './components/Update'

function App() {
  

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/insert' element= {<Insert/>} />
  <Route path='/update/:id' element= {<Update/>} />

  </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
