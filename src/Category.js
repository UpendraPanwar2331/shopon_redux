import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'


const Category = () => {
  const [cate, setcategory] = useState([]);
  // yeh method se deal krte h hum adr id,category chahiye toh
  const temp = useParams();
  const { category } = temp;
  console.log("category", category)

    //only category de raha h yeh api
  const callApi = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    setcategory(data)

  }
  // only category k time api chlega.....
  useEffect(() => {
    callApi(category);
  }, [category])

  return (

    <div className='row'>
      {
        cate && cate.map((item, index) => (
          <div className='col-3' key={item.id}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top product-image-list" alt="..." />
              <div className="card-body">
                <h5 className="card-title product-title-list">{item.title}</h5>
                <p className="card-text product-description-list">{item.description}</p>
                <h5 className="card-title">{item.price}RS</h5>
                <Link to={`/product/${item.id}`} className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default Category
