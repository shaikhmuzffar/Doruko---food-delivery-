import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './contentBox.css'
// components
import Home from '../../pages/home/Home'
import Products from '../../pages/category/Products'
import Support from '../../pages/support/Support'
import SideCart from '../sideCart/SideCart'
import Cart from '../../pages/cart/Cart'
import Navbar from '../../components/navbar/Navbar'
import NotificationBox from '../notificationBox/NotificationBox'
import UserMenu from '../userMenu/UserMenu'
import Orders from '../../pages/orders/Orders'
// import Checkout from '../../components/checkout/Checkout'
import ProductInfo from '../../pages/productInfo/ProductInfo'
import Footer from '../footer/Footer'
import ProductCategoryInfo from '../../components/productCategoryInfo/ProductCategoryInfo'

export default function ContentBox() {
  const [showSidecart, setshowSidecart] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <div className="contentBoxSection">
      <div className="contentBox contentBoxContainer">
        <Navbar setshowSidecart={setshowSidecart} showSidecart={showSidecart} showNotification={showNotification} setShowNotification={setShowNotification} setShowUserMenu={setShowUserMenu} showUserMenu={showUserMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:categoryInfo' element={<ProductCategoryInfo />} />
          <Route path='/category/:Name' element={<ProductInfo/>} />
          <Route path='/support' element={<Support />} />
        </Routes>
        {showSidecart && <SideCart setshowSidecart={setshowSidecart} />}
        {showNotification && <NotificationBox />}
        {showUserMenu && <UserMenu />}
        <br />
        <br />
        {/* <Checkout /> */}
        <Footer />


      </div>
    </div>
  )
}
