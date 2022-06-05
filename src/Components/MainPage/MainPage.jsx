import React from 'react'
import './MainPage.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Orders from './Orders/Orders'

function MainPage() {
  return (
    <div className="admin-main-page">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default MainPage