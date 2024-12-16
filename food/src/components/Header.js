import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    <div><header className="main_menu home_menu">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="nav-link" to='/admin'> <img src="img/logo.png" alt="logo" /> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food_menu.html">Menu</a>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/addChef'>Add Chef</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="blog.html">Blog</a>
                    <a className="dropdown-item" href="single-blog.html">Single blog</a>
                    <a className="dropdown-item" href="elements.html">Elements</a>
                  </div>
                </li>
               
              </ul>
            </div>
            <div class="button-group-area mt-40">
				
            <NavLink to='/Signup' className="genric-btn primary circle">Sign up</NavLink>
            <NavLink to='/login' className="genric-btn primary-border circle">Log in</NavLink>

            </div>
           
          </nav>
        </div>
      </div>
    </div>
  </header></div>
  )
}
