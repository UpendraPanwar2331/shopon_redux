import React from 'react';
import { useSelector } from 'react-redux';
import './CSS/rder.css';

const Order = () => {
  const orderDetails = useSelector((state) => state.order.orderDetails);
  const { name, mobile, address, products, paymentStatus, orderid } = orderDetails;

  function calculateGST(products) {
    const totalprice = products.reduce((total, product) => total + product.price, 0);
    const gst = (totalprice * 0.05).toFixed(2);
    return gst;
  }

  return (
    <div>
      <div className='order-header'>
        <h2>Your order is successfully placed.</h2>
      </div>
      <div>
        <h3>Order Details</h3>
        <div>Order ID - {orderid}</div>
        <div>Name - {name}</div>
        <div>Mobile - {mobile}</div>
        <div>Address - {address}</div>
        <div>Payment Status - {paymentStatus}</div>
        <table className='order-details'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>1</td>
                  <td className='product-image'>
                    <img src={item.image} alt='Product Pic' />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <p>GST (5%): {calculateGST(products)}</p>
    </div>
  );
};

export default Order;
