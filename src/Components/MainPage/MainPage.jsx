import React from 'react'
import './MainPage.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Orders from './Orders/Orders'
import Products from './Products/Products'
import Customers from './Customers/Customers'


function MainPage() {
  return (
    <div className="admin-main-page">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default MainPage