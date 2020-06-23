import React from "react"
import "../styling/navbar.scss"
import { Link } from "gatsby"



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/contact" className='contact' >Contact</Link>
      </div>
      <div className='right'>
        <Link to="/projects" className='projects'>Projects</Link>
      </div>
    </div>
  )
}

export default Navbar