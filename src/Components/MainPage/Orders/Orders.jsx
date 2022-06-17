import React, { useContext, useEffect } from 'react'
import './Orders.css'
import { ordersCard } from '../../../Data/Data'
import Card from '../Card/Card'
import { TableContext } from '../../../AppContext'
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'

function Orders() {

    const { setTableRouterData } = useContext(TableContext)

    useEffect(() => {
        setTableRouterData({
            route: 'orders',
            component: OrderDetails
        })
    }, [])

    return (
        <div className='admin-orders'>
            <h1>Orders</h1>
            <div className="admin-orders-card-container">
                {
                    ordersCard.map((card, index) => {
                        return (
                            <Card card={card} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Orders