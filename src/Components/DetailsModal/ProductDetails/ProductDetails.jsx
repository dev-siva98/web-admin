import React from 'react'
import './ProductDetails.css'

function ProductDetails({ data }) {
    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    return (
        <div className='admin-product-details'>
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
    )
}

export default ProductDetails