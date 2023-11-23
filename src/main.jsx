import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/services'>Services</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
  </BrowserRouter>
  )
}

function Home() {
  return(
    <h1>Hello react router</h1>
  )
}
function About() {
  return(
    <h1>About page</h1>
  )
}
function Contact() {
  return (
    <>
    <h1>Email: chintan999ccp@gmail.com</h1>
    <p>At&Po: Vadali <br></br>Ta: Kapadwanj</p>
    </>
    
  )
}

function Services() {
  return(
    <h1>Our services</h1>
  ) 
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
