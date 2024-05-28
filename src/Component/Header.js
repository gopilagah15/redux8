import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const result = useSelector((state)=>state.cartData);
  console.log('data in header', result);
  return (
    <div className='header'>
        <div className="cart-div">
            <span>{result.length}</span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa&pid=Api&P=0&h=180" alt="" />
        </div>
    </div>
  )
}

export default Header
