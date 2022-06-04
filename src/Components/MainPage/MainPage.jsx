import React from 'react'
import './MainPage.css'
import {BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Orders from './Orders/Orders'

function MainPage() {
  return (
    <div className="admin-main-page">
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/orders' element={<Orders/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default MainPage