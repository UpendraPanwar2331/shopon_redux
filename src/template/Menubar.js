import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/menu.css';

const Menubar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg row">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-12'>
              <Link className="navbar-brand" to='/home'>&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/category/electronics'>Electronics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/category/jewelery'>Jewelry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/men's clothing">Men's Clothing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/women's clothing">Women's Clothing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
