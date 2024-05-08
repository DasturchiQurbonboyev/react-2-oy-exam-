import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/Home'
import ContacUs from './components/contactUs/ContacUs'
import Cart from './components/cart/Cart'
import Wishlist from './components/wishlist/Wishlist'
import SingleProduct from './page/single/SingleProduct'
import LogIn from './page/login/LogIn'
import Admin from './page/admin/Admin'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single' element={<SingleProduct />} />
        <Route path='/contact' element={<ContacUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<LogIn />} >
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>


      <Footer />
    </>
  )
}

export default App
