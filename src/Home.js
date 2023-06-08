import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setproducts } from './redux/actions/ProductAction';
import { FilterContext } from './Context';
import './CSS/hom.css';

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.listproduct);
  const { searchQuery, setSearchQuery } = useContext(FilterContext);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
      const data = await response.json();
      dispatch(setproducts(data));
    };

    callApi();
  }, []);

  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt='im' />
          <br />
          Gifts
        </div>

        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' alt='im' />
          <br />
          Grocery
        </div>

        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt='im' />
          <br />
          Mobiles
        </div>

        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt='im' />
          <br />
          Electronics
        </div>

        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' alt='im' />
          <br />
          Travel
        </div>

        <div className='col-2'>
          <img src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt='im' />
          <br />
          Appliance
        </div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <div className='input-group'>
            {/* <input
              type='text'
              className='form-control'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search Your Products'
            /> */}
            <div className='input-group-append'>
              <span className='input-group-text'>
                <i className='fas fa-search'></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        {filteredProducts.map((item, index) => (
          <div className='col-3' key={item.id}>
            <div className='card'>
              <img src={item.image} className='card-img-top product-image-list' alt='...' />
              <div className='card-body'>
                <h5 className='card-title product-title-list'>{item.title}</h5>
                <p className='card-text product-description-list'>{item.description}</p>
                <h5 className='card-title'>{item.price}RS</h5>
                <Link to={`/product/${item.id}`} className='btn btn-primary'>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
