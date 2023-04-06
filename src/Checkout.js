import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlaceOrder } from './redux/actions/checkoutAction';

const Checkout = () => {
    const cartData = useSelector((state) => state.cart.cartList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialFormData = {
        name: "",
        mobile: "",
        address: "",

    }
    const [formData, setFormData] = useState(initialFormData);

    const placeorder = () => {
        const orderObj = {
            ...formData,
            products: cartData,
            paymentStatus: 'cod'
        }
        dispatch(PlaceOrder(orderObj));
        navigate('/order')

    }

    const updateData = (e) => {
        let tempobj = {};
        tempobj[e.target.id] = e.target.value;
        setFormData({
            ...formData, ...tempobj
        });
    }
    return (
        <div>
 <div className='row'>
  <div className='col-12'>
    <label htmlFor="name" style={{marginRight: '10px'}}>Name:</label>
    <input type='text' id="name" style={{marginRight: '10px', padding: '5px', border: '1px solid #ccc', marginBottom: '10px'}} onChange={updateData} value={formData.name} />
  </div>
  <div className='col-12'>
    <label htmlFor="mobile" style={{marginRight: '10px'}}>Mobile:</label>
    <input type='number' id="mobile" style={{marginRight: '10px', padding: '5px', border: '1px solid #ccc', marginBottom: '10px'}} onChange={updateData} value={formData.mobile} />
  </div>
  <div className='col-12'>
    <label htmlFor="address" style={{marginRight: '10px'}}>Address:</label>
    <input type='text' id="address" style={{marginRight: '10px', padding: '5px', border: '1px solid #ccc', marginBottom: '10px'}} onChange={updateData} value={formData.address} />
  </div>
</div>
            <div className='row'>
                <div className='col-4'>
                </div>

                <div className='col-4 text-center' >

                    <button className='btn btn-warning' onClick={placeorder}>Place order</button>
                </div>

                <div className='col-4'>
                </div>

            </div>


        </div>
    )
}

export default Checkout
