import React from 'react'
import './OrderDetails.css'
import axios from '../../../axios'


function OrderDetails({ order }) {
    const createdAt = new Date(order.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    const delivery = new Date(order.delivery)
        .toLocaleDateString('en-IN',
            { dateStyle: 'medium' })
    const statusData = ['Pending', 'Placed', 'Delivered']

    const handleChange = (e) => {
        axios({
            method: 'post',
            url: 'changeorderstatus',
            data: {
                orderId: order.orderId,
                value: e.target.value
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className='admin-order-details'>
            <div className="admin-order-details-item">
                <span>Order Id </span><span>{order.orderId}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Order Date</span><span>{createdAt}</span>
            </div>
            <div className="admin-order-details-item">
                <span>User Name</span><span>{order.userName}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Cart Total</span><span>&#8377; {order.cartTotal}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Coupon Applied</span><span>{order.couponApplied}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Discount</span><span>&#8377; {order.discount}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Shipping</span><span>&#8377; {order.shipping}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Total</span><span>&#8377; {order.total}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Payment Mode</span><span>{order.paymentMode}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Order Status</span>
                <span>
                    <select name='orderStatus'
                        onChange={(e) => {
                            handleChange(e)
                        }}>
                        <option value={order.orderStatus}>{order.orderStatus}</option>
                        {
                            statusData.map((option, index) => {
                                if (option === order.orderStatus) return(null)
                                return <option value={option} key={index}>
                                    {option}
                                </option>
                            })
                        }
                    </select>
                </span>
            </div>
            <div className="admin-order-details-item">
                <span>Payment Status</span><span>{order.paymentStatus}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Delivery Date</span><span>{delivery}</span>
            </div>
            <div className="admin-order-details-item">
                <span>Write on Cake</span><span>{order.write}</span>
            </div>
            <div className="admin-order-details-item">
                {/* <span>Delivery Address</span><span>{order.}</span> */}
            </div>
            <div className="admin-order-details-item">
                {/* <span>Products</span><span>{order.}</span> */}
            </div>
        </div>
    )
}

export default OrderDetails