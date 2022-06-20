import React from 'react'
import './CustomerDetails.css'
import { Backdrop, Button } from '@mui/material'
import { Close } from '@mui/icons-material'

function CustomerDetails({ data, handleShow }) {

    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className='admin-customer-details'>
                <Close
                    onClick={handleShow}
                    className='admin-customer-details-button'
                />
                <div className="admin-customer-details-container">
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
            </div>
        </Backdrop>
    )
}

export default CustomerDetails