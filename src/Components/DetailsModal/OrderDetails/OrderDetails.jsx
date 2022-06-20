import React, { useEffect } from 'react'
import './OrderDetails.css'
import axios from '../../../axios'
import { Backdrop, Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import Switch from "react-switch";
import { useState } from 'react'




function OrderDetails({ data, handleShow }) {

    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState('Placed')

    const createdAt = new Date(data.createdAt)
        .toLocaleString('en-IN',
            { dateStyle: 'medium', timeStyle: 'short' })

    const delivery = new Date(data.delivery)
        .toLocaleDateString('en-IN',
            { dateStyle: 'medium' })

    const statusData = ['Placed', 'Pending', 'Failed']

    const handleToggle = () => {
        setChecked(!checked)
    }

    useEffect(() => {
        if (data.orderStatus === 'Delivered') setChecked(true)
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSave = () => { //set default incase options didn't change
        console.log(input)
        axios({
            method: 'post',
            url: 'changeorderstatus',
            data: {
                orderId: data.orderId,
                value: checked ? 'Delivered' : input,
                checked: checked
            }
        })
            .then(handleShow)
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className='admin-order-details'>
                <Button
                    onClick={handleSave}
                    className='admin-order-details-save'
                >
                    Save
                </Button>
                <Close
                    onClick={handleShow}
                    className='admin-order-details-button' />
                <div className="admin-order-details-container">
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
                        <span>Deilvery Status</span>
                        <span>
                            <Switch
                                checked={checked}
                                onChange={handleToggle}
                                height={20}
                                width={45}
                                offColor='#FF0000'
                                handleDiameter={22}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                className='admin-order-details-switch'
                            />
                        </span>
                    </div>
                    <div className="admin-order-details-item">
                        <span>Order Status</span>
                        {
                            checked ? <span>Delivered</span> :
                                <span>
                                    <select name='orderStatus'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}>
                                        {
                                            data.orderStatus !== 'Delivered' && <option value={data.orderStatus}>
                                                {data.orderStatus}
                                            </option>
                                        }

                                        {
                                            statusData.map((option, index) => {
                                                if (option === data.orderStatus) return (null)
                                                return <option value={option} key={index}>
                                                    {option}
                                                </option>
                                            })
                                        }
                                    </select>
                                </span>
                        }
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
                </div>

            </div>
        </Backdrop>
    )
}

export default OrderDetails