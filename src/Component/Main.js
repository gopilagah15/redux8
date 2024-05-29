import React from 'react'
import { addToCart, emptyCart, removeToCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction';

const Main = () => {
  
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.log('data in Main component', data)
  const product = {
    name:'I phone',
    type:'mobile',
    price:'10000',
    color:'red'
  }
  return (
    <div> 
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeToCart(product.name))}>Remove From Cart</button>
      <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={()=>dispatch(productList())}>Call Product List</button>
    </div>
  )
}

export default Main



