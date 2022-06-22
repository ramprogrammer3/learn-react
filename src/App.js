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
        {/* <Route path='/' element = { <h1>Home component</h1> } />
        <Route path='/about' element = { <h1>About component</h1> } />
        <Route path='/details' element = { <h1>details component</h1> } /> */}

        {/* <Route path='/' element =  {<Home />} />
        <Route path='/about' element =  {<About />} />
        <Route path='/details' element =  {<Details />} /> */}
        

        
        <Route path='/' element =  {<Home />} />
        <Route path='/about' element =  {<About />} />
        <Route path='/details' element =  {<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App