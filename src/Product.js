import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { setCartData } from './redux/actions/cartAction';
import { setSelectedProducts } from './redux/actions/ProductAction';

const Product = () => {
  const temp = useParams();
  const { id } = temp;

  // yeh loader k liyee
  // const [load, setload] = useState(true);
  const [cartStatus, setcartStatus] = useState(false);

  const dispatch = useDispatch();
  const pro = useSelector((state) => state.products.setselectproduct);
  const cartData = useSelector((state) => state.cart.cartList)


  const callApi = async (id) => {
    // setload(true);
    setTimeout(async () => {
      const respo = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`);
      const data = await respo.json();
      dispatch(setSelectedProducts(data));
      // setload(false);
    });
  }

  useEffect(() => {
    callApi(id)
  }, [id]);


  //yaha pura product le rhe h
  const addtocartFn = (product) => {
    dispatch(setCartData(product))
  }


  //cartdata data h toh aage chechk kar rhe h items
  const checkCartStatus = () => {
    let temp = cartData && cartData.map((item) => {
      return item.id
    })


    //agr pro.id temp k andr h toh setcarStatus true h 
    if (temp.indexOf(pro.id) >= 0) {
      setcartStatus(true);
    }
    else {
      setcartStatus(false);
    }
  }

  // checkCartStatus yeh funtion compare kr raha h ki product cart m present h ya nahi
  
  useEffect(() => {
    checkCartStatus();
  })



  useEffect(() => {
    checkCartStatus();
  }, [cartData])


  return (
    <>

      {
        // ? (
        //   <div><img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' alt='gif' /></div>
        // ) : (
        pro.id && pro.id == id ? <>
          <div className='row'>
            <div className='col-6'>
              <img src={pro.image} alt='pro-pic' className='img-fluid' />
            </div>
            <div className='col-6'>
              <h1>{pro.title}</h1>
              <br></br>  <br></br>

              <h2>Price - {pro.price}</h2>
              <br></br>

              <div>{pro.description}</div>
              <br></br> <br></br> <br></br>

              <h4>Rating - {pro.rating.rate} - Liked By {pro.rating.count}</h4>
              <br></br> <br></br> <br></br> <br></br> 
              
            <Link  to='/checkout' > <button className='btn btn-primary'>Buy Now</button>   </Link> 
              {!cartStatus && <button onClick={() => addtocartFn(pro)} className='btn btn-primary'  >Add To Cart</button>}
              {cartStatus && <Link  to='/cart' >  <button  className='btn btn-warning'  >Go To Cart</button> </Link> }
            </div>
          </div>
        </> :
          <>
            <div>LOading</div>
          </>
      }
    </>
  )
}

export default Product
