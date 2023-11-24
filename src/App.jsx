import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Navbar from './components/Navbar'
import "./server.js";
import VanDetail from './pages/vanDetail.jsx'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
