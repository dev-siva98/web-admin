import React from 'react'
import './ProductDetails.css'
import { Backdrop } from '@mui/material'
import { Button } from '@mui/material'
function ProductDetails({ data, handleShow }) {
    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className="admin-product-details">
                <Button
                    onClick={handleShow}
                    className='admin-product-details-button'
                >
                    Close</Button>
                <div className='admin-product-details-container'>
                    <div className="admin-product-details-item">
                        <span>Product Id </span><span>{data.proId}</span>
                    </div>
                    <div className="admin-product-details-item">
                        <span>Product Name</span><span>{data.pname}</span>
                    </div>
                    <div className="admin-product-details-item">
                        <span>Weight</span><span>{data.weight}</span>
                    </div>
                    <div className="admin-product-details-item">
                        <span>Price</span><span>&#8377; {data.price}</span>
                    </div>
                    <div className="admin-product-details-item">
                        <span>Created At</span><span>{createdAt}</span>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}

export default ProductDetails