import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header = () => {
  const result = useSelector((state)=>state.cartData);
  const dispatch = useDispatch();
  console.log('data in header', result);
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className="logo">E-comm</h1></Link>
        <div className='search-box'>
          <input type="text" onChange={(e)=>dispatch(productSearch(e.target.value))} placeholder='search Product' />
        </div>
        <div className="cart-div">
         <Link to='cart'>
         <span>{result.length}</span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa&pid=Api&P=0&h=180" alt="" />
         </Link>
        </div>
    </div>
  )
}

export default Header
