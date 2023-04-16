import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assest/carousel2.jpg'

const Menubar = () => {
  return (
    <div >
      <div className='row'>
        <div className='col-12'>
        <img src={image} alt="img" style={{ display: "block", width: "100%" }} />
      
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#ffe6e6" }}>

  <div className="container-fluid">
    <Link className="navbar-brand" to='/home'>Home</Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" to='/category/electronics' style={{fontSize: '20px', fontWeight: 'bold'}}>Electronics</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to='/category/jewelery' style={{fontSize: '20px', fontWeight: 'bold'}}>Jewelry</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/category/men's clothing" style={{fontSize: '20px', fontWeight: 'bold'}}>Mens' Clothing</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/category/women's clothing" style={{fontSize: '20px', fontWeight: 'bold'}}>Womens's Clothing</Link>
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
