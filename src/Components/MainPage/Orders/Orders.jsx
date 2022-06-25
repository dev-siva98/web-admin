import React, { useContext, useEffect } from 'react'
import './Orders.css'
import Card from '../Card/Card'
import { TableContext } from '../../../AppContext'
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'
import { UilClipboardAlt } from '@iconscout/react-unicons'


function Orders() {

    const { setTableRouterData } = useContext(TableContext)

    const ordersCard = [
        {
            title: "Active Orders",
            backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
            boxShadow: "0px 10px 20px 0px #b0d4f5",
            barValue: 70,
            value: "12",
            png: UilClipboardAlt,

        },
        {
            title: "Completed Orders",
            backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
            boxShadow: "0px 10px 20px 0px #8aff92",
            barValue: 70,
            value: "32",
            png: UilClipboardAlt,

        },
        {
            title: "Cancelled Orders",
            backGround: "linear-gradient(180deg, #ff7a6e 0%, #f57064 100%)",
            boxShadow: "0px 10px 20px 0px #f5897f",
            barValue: 70,
            value: "8",
            png: UilClipboardAlt,

        },
        {
            title: "Total Orders",
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
            barValue: 70,
            value: "52",
            png: UilClipboardAlt,

        },
    ]


    useEffect(() => {
        setTableRouterData({
            selectionIndex: 1,
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