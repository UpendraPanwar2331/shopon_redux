import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
  const cartdata = useSelector((state) => state.cart.cartList);
  return (
    <div>
      <div className='row header-area'>
        <div className='col-6'>
          <h3>SHOP_ON</h3>
        </div>

        <div className='col-5'>
          <input type='text' />
        </div>
       
          <div className='col-1'>
          <Link to='/cart'>
            <span>cart items-{cartdata.length}</span>
            </Link>
          </div>
   
      </div>
    </div>
  )
}

export default Header
