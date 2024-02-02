import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import foto from "./logo1.jpg"

const Nav = () => {
    return(
        <header className='sticky '>
      <span className='logo '>
        
      </span>

      <NavLink to='/' className="button rounded">
        <span className='icon-home'></span>
        Home
      </NavLink>

      <NavLink to='about' className="button rounded">
      <span className='icon-info'></span>
        About
      </NavLink>

      <NavLink to='footer' className="button rounded">
      <span className='icon-mail'></span>
        Contact
      </NavLink>
    </header>
        
    )
}

export default Nav                                                      