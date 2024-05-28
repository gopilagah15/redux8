import React from 'react'
import { addToCart } from '../redux/action'
import { useDispatch } from 'react-redux'

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name:'I phone',
    type:'mobile',
    price:'10000',
    color:'red'
  }
  return (
    <div> 
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default Main



