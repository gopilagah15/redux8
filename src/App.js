import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import { Route, Routes } from 'react-router-dom'
import Cart from './Component/Cart'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
