import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/home'>Home</Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
    
        <li className="nav-item">
          <Link className="nav-link" to='/category/electronics' >Electronics</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/category/jewelery' >Jewelery</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/men's clothing" >Mens' Clothing</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/women's clothing" >Womens's Clothing</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    
        </div>
      </div>
    </div>
  )
}

export default Menubar
