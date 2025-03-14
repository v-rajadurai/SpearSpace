import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Cart from './components/products/Product1'
import { Route, Routes } from 'react-router-dom'
import Service from './components/service/Service'
import About from './components/about/About'
import AddtoCart from './components/addtocart/AddtoCart'
import Login from './components/login/Login'
import Checkout from './components/checkout/Checkout'
import Product1 from './components/products/Product1'
import Product2 from './components/products/Product2'
import Product3 from './components/products/Product3'
import Product4 from './components/products/Product4'
const App = () => {
  return (
    <div>
      <Navbar/>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/cart' element={<Cart/>}/> */}
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart1' element={<Product1/>}/>
            {/* <Route path='/cart2' element={<Product2/>}/>
            <Route path='/cart3' element={<Product3/>}/>
            <Route path='/cart4' element={<Product4/>}/> */}
            <Route path='/addtocart' element={<AddtoCart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
               
        </Routes>
        {/* <Footer/>  */}
    </div>
  )
}

export default App