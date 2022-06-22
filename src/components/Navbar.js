
import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header id='header'>
      
      <Link to= '/About'>About</Link>
      
      <Link to= '/'>Home</Link>

      <Link to= '/details'>Details</Link>
    </header>
  )
}

export default Navbar