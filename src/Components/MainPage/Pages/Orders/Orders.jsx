import React, { useContext, useEffect, useState } from 'react'
import './Orders.css'
import Card from '../../Card/Card'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import Table from '../../Table/Table'
import OrderDetails from '../../DetailsModal/OrderDetails/OrderDetails'
import { SelectMenuContext } from '../../../../AppContext'
import axios from '../../../../axios'


function Orders() {

    const { setSelected } = useContext(SelectMenuContext)
    const [active, setActive] = useState(0)
    const [failed, setFailed] = useState(0)
    const [completed, setCompleted] = useState(0)



    useEffect(() => {
        let active = 0
        let failed = 0
        let completed = 0
        setSelected(1)
        axios.get('orders').then(res => {
            res.data.forEach(data => {
                if (data.orderStatus === 'failed') failed++
                else if (data.orderStatus === 'delivered') completed++
                else active++
            })
            setActive(active)
            setFailed(failed)
            setCompleted(completed)
        }).catch(err => {
            alert("" + err)
        })
    }, [])

    const ordersCard = [
        {
            title: "Active Orders",
            backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
            boxShadow: "0px 10px 20px 0px #b0d4f5",
            barValue: active,
            value: active,
            png: UilClipboardAlt,
        },
        {
            title: "Completed Orders",
            backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
            boxShadow: "0px 10px 20px 0px #8aff92",
            barValue: completed,
            value: completed,
            png: UilClipboardAlt,
        },
        {
            title: "Cancelled Orders",
            backGround: "linear-gradient(180deg, #ff7a6e 0%, #f57064 100%)",
            boxShadow: "0px 10px 20px 0px #f5897f",
            barValue: failed,
            value: failed,
            png: UilClipboardAlt,
        },
        {
            title: "Total Orders",
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
            barValue: 70,
            value: active + failed + completed,
            png: UilClipboardAlt,
        },
    ]

    return (
        <div className='admin-orders'>
            <div className="admin-orders-container">
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
            <Table route='orders' component={OrderDetails} />
        </div>
    )
}

export default Orders