import React from 'react'
import './MainPage.css'
import {BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

function MainPage() {
  return (
    <div className="admin-main-page">
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default MainPage