import React from 'react'
// import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setproducts } from './redux/actions/ProductAction'

const Home = () => {
  // const [product, setproduct] = useState([]);
  // dispatch data bhej raha hai redux par 
  const dispatch = useDispatch();
  //selector data wapis laa raha h home component par
  const product = useSelector((state) => state.products.listproduct)

  const callApi = async () => {
    const response = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
    const data = await response.json();
    // setproduct(data)
    dispatch(setproducts(data));

  }
  //ek he baar callapi chelga becoz array laga rakha h
  useEffect(() => {
    callApi();
  }, [])
  return (
    <div className='row'>
      {
        product && product.map((item, index) => (
          <div className='col-3' key={item.id}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top product-image-list" alt="..." />
              <div className="card-body">
                <h5 className="card-title product-title-list">{item.title}</h5>
                <p className="card-text product-description-list">{item.description}</p>
                <h5 className="card-title">{item.price}RS</h5>
                <Link to={`/product/${item.id}`} class="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home
