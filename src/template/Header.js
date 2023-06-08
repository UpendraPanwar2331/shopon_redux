
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FilterContext } from '../Context';
import { useContext } from 'react';



const Header = () => {
  const { searchQuery, updateSearchQuery } = useContext(FilterContext);
  const cartdata = useSelector((state) => state.cart.cartList);
  
  const handleSearch = (event) => {
    updateSearchQuery(event.target.value);
  };
;
  return (
    <div>
      <div className='row header-area'>
        <div className='col-5'>
      <Link  to='/'  >   <h3>SHOP_ON</h3>    </Link> 
        </div>

        <div className='col-3'>   <input
              type='text'
              className='form-control'
              value={searchQuery}
              onChange={handleSearch}
              placeholder='Search Your Products'
            /></div>

        <div className='col-3'>More</div>
        

       
          <div className='col-1'>
          <Link to='/cart'>
            <span>cart items-{cartdata.length}</span>
            </Link>
          </div>
   
      </div>
    </div>
  )
}

export default Header
