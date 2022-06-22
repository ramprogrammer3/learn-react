import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Details from './components/Details'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element =  {<Home /> } />
        <Route path='/about' element =  {<About />} />
        <Route path='/details' element =  {<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App