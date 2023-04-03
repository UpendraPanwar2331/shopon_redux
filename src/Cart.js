import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartList);
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <table className="table table-success table-striped">
            {
              cartData && cartData.map((item, index) => (
                <tr>
                  <td>{index + 1}&nbsp;&nbsp;</td>
                  <td>{item.title}&nbsp;&nbsp;</td>
                  <td>{item.price}&nbsp;&nbsp;</td>
                  <td>Quantity-{1}-</td>
                  <td style={{ width: '320px' }}><img src={item.image} alt="cartpic" className='img-fluid' /></td>

                </tr>
              ))

            }
              <Link to='/checkout'>     <div><button className='btn btn-primary'>Proceed to CheckOut</button></div>  </Link>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart




{/* <table class="table table-success table-striped">
  ...
</table> */}