import React from 'react'
import './Orders.css'
import { ordersCard } from '../../../Data/Data'

function Orders() {
    return (
        <div className='admin-orders'>
            <h1>Orders</h1>
            <div className="admin-orders-card-container">
                {
                    ordersCard.map((card, index) => {
                        const Png = card.png
                        return (
                            <div className="admin-orders-card"
                                key={index}
                                style={{ background: card.backGround, boxShadow: card.boxShadow }}>
                                <span>{card.title}</span>
                                <Png className='admin-orders-card-png' />
                                <span>{card.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Orders