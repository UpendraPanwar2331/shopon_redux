import React from 'react'
import { useSelector } from 'react-redux';

const Order = () => {
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const { name, mobile, address, products, paymentStatus, orderid } = orderDetails;
  console.log(orderDetails);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Your order is successfully placed.</h2>
        </div>
        <div>
          <h3>Order Details</h3>
          <div>Order ID - {orderid}</div>
          <div>Name - {name}</div>
          <div>Mobile - {mobile}</div>
          <div>Address - {address}</div>
          <div>Payment Status - {paymentStatus}</div>
          <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{backgroundColor: '#f1f1f1'}}>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Title</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Quantity</th>
                <th style={{ textAlign: 'left', padding: '10px', width: '50px', borderBottom: '1px solid #ddd' }}>Image</th>
              </tr>

            </thead>
            <tbody>
              {products && products.map((item, index) => (
                <tr key={item.id}>
                  <td style={{ textAlign: 'left', padding: '10px' }}>{index + 1}</td>
                  <td style={{ textAlign: 'left', padding: '10px' }}>{item.title}</td>
                  <td style={{ textAlign: 'left', padding: '10px' }}>{item.price}</td>
                  <td style={{ textAlign: 'left', padding: '10px' }}>1</td>
                  <td style={{ textAlign: 'left', padding: '10px', width: '50px', height: '100px', backgroundColor: '#f1f1f1' }}>
                    <img src={item.image} style={{ maxWidth: '100%', height: 'auto' }} alt="Product Pic" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default Order


// name: "",
// mobile: "",
// address: "",
// products: cartData,
// paymentStatus: 'cod'
// }