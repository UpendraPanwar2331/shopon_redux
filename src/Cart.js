import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CSS/art.css';

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartList);

  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <table className="table table-success table-striped cart-table">
            <tbody>
              {cartData &&
                cartData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}&nbsp;&nbsp;</td>
                    <td>{item.title}&nbsp;&nbsp;</td>
                    <td>{item.price}&nbsp;&nbsp;</td>
                    <td>Quantity-{1}-</td>
                    <td style={{ width: '320px' }}>
                      <img src={item.image} alt="cartpic" className='img-fluid cart-image' />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className='text-center'>
            <Link to='/checkout'>
              <button className='btn btn-primary'>Proceed to CheckOut</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
