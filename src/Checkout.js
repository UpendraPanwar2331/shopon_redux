import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlaceOrder } from './redux/actions/checkoutAction';
import './CSS/out.css';

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    mobile: '',
    address: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const placeOrder = () => {
    const orderObj = {
      ...formData,
      products: cartData,
      paymentStatus: 'cod',
    };
    dispatch(PlaceOrder(orderObj));
    navigate('/order');
  };

  const updateData = (e) => {
    let tempobj = {};
    tempobj[e.target.id] = e.target.value;
    setFormData({
      ...formData,
      ...tempobj,
    });
  };

  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            className='checkout-input'
            onChange={updateData}
            value={formData.name}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='mobile'>Mobile:</label>
          <input
            type='number'
            id='mobile'
            className='checkout-input'
            onChange={updateData}
            value={formData.mobile}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            className='checkout-input'
            onChange={updateData}
            value={formData.address}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
          <button className='btn btn-warning checkout-button' onClick={placeOrder}>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
