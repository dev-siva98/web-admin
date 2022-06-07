import React from 'react'
import './OrderDetails.css'
import axios from '../../../axios'


function OrderDetails({ data }) {
    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    const delivery = new Date(data.delivery)
        .toLocaleDateString('en-IN',
            { dateStyle: 'medium' })
    const statusData = ['Pending', 'Placed', 'Delivered']

    const handleChange = (e) => {
        axios({
            method: 'post',
            url: 'changeorderstatus',
            data: {
                orderId: data.orderId,
                value: e.target.value
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className='admin-order-details'>
            <div className="admin-order-details-item">
                <span>Order Id </span><span>{data.orderId}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Order Date</span><span>{createdAt}</span>
            </div>
            <div className="admin-order-details-item">
                <span>User Name</span><span>{data.userName}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Cart Total</span><span>&#8377; {data.cartTotal}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Coupon Applied</span><span>{data.couponApplied}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Discount</span><span>&#8377; {data.discount}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Shipping</span><span>&#8377; {data.shipping}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Total</span><span>&#8377; {data.total}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Payment Mode</span><span>{data.paymentMode}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Order Status</span>
                <span>
                    <select name='orderStatus'
                        onChange={(e) => {
                            handleChange(e)
                        }}>
                        <option value={data.orderStatus}>{data.orderStatus}</option>
                        {
                            statusData.map((option, index) => {
                                if (option === data.orderStatus) return(null)
                                return <option value={option} key={index}>
                                    {option}
                                </option>
                            })
                        }
                    </select>
                </span>
            </div>
            <div className="admin-order-details-item">
                <span>Payment Status</span><span>{data.paymentStatus}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Delivery Date</span><span>{delivery}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Write on Cake</span><span>{data.write}</span>
            </div>
            <div className="admin-order-details-item">
                {/* <span>Delivery Address</span><span>{data.}</span> */}
            </div>
            <div className="admin-order-details-item">
                {/* <span>Products</span><span>{data.}</span> */}
            </div>
        </div>
    )
}

export default OrderDetails