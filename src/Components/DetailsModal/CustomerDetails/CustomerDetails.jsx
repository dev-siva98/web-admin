import React from 'react'
import './CustomerDetails.css'

function CustomerDetails({ data }) {

    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    return (
        <div className='admin-customer-details'>
            <div className="admin-customer-details-item">
                <span>User Id </span><span>{data.id}</span>
            </div>
            
            <div className="admin-customer-details-item">
                <span>User Name</span><span>{data.name}</span>
            </div>
            <div className="admin-customer-details-item">
                <span>Contact</span><span>{data.mobile}</span>
            </div>
            <div className="admin-customer-details-item">
                <span>Created At</span><span>{createdAt}</span>
            </div>
            
        </div>
    )
}

export default CustomerDetails