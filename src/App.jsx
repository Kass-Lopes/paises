import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ContryInfo from './Pages/ContryInfo/ContryInfo'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='moreInfo/:name' element={<ContryInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
