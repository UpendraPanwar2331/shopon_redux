import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { MyContext } from './template/Header';

import Home from './Home';
import Notfound from './Notfound';
import Product from './Product';
import Category from './Category';
import Header from './template/Header';
import Footer from './template/Footer';
import Menubar from './template/Menubar';
import Cart from './Cart';
import Checkout from './Checkout';
import Order from './Order';
import { Provider } from 'react-redux';
import { FilterProvider } from './Context';
;



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <FilterProvider>
      <Header/>
      <Menubar/>
      <div className='row content-area'>
        <div className='col'>
      <Routes>

      <Route path='/home' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/category/:category' element={<Category/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/order' element={<Order/>} />




        <Route path='/' element={<Home/>} />
        <Route path='/*'   element={<Notfound/>}  />
      </Routes>
      </div>
      </div>
      <Footer/>
      </FilterProvider>
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
