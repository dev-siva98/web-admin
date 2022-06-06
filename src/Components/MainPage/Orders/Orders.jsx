import React from 'react'
import './Orders.css'
import { ordersCard } from '../../../Data/Data'
import Card from '../Card/Card'

function Orders() {
    return (
        <div className='admin-orders'>
            <h1>Orders</h1>
            <div className="admin-orders-card-container">
                {
                    ordersCard.map((card, index) => {
                        return (
                            <Card card={card} key = {index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Orders