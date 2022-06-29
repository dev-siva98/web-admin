import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Card/Card'
import './Customers.css'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import Table from '../../Table/Table'
import CustomerDetails from '../../DetailsModal/CustomerDetails/CustomerDetails'
import { SelectMenuContext } from '../../../../AppContext'
import axios from '../../../../axios'

function Customers() {

    const { setSelected } = useContext(SelectMenuContext)
    const [newCustomers, setNewCustomers] = useState(0)
    const [allCustomers, setAllCustomers] = useState(0)

    useEffect(() => {
        setSelected(2)
        let newCustomers = 0
        axios.get('customers')
            .then(res => {
                res.data.forEach(data => {
                    let date = new Date
                    if (new Date(data.createdAt) > date.setMonth(date.getMonth() - 1)) newCustomers++
                })
                setNewCustomers(newCustomers)
                setAllCustomers(res.data.length)
            }).catch(err => {
                alert("" + err)
            })
    }, [])

    const customersCard = [
        {
            title: "All Customers",
            backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
            boxShadow: "0px 10px 20px 0px #b0d4f5",
            barValue: 70,
            value: allCustomers,
            png: UilClipboardAlt,

        },
        {
            title: "New Customers",
            backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
            boxShadow: "0px 10px 20px 0px #8aff92",
            barValue: 70,
            value: newCustomers,
            png: UilClipboardAlt,

        }
    ]

    const handleClick = () => {
        alert('add')
    }

    return (
        <div className='admin-customers'>
            <div className="admin-customers-container">
                <h1>Customers</h1>
                <div className="admin-customers-card-container">
                    {
                        customersCard.map((card, index) => {
                            return (
                                <Card card={card} key={index} />
                            )
                        })
                    }
                    <div className="admin-component-card customer-support"
                        onClick={handleClick}>
                        <span>Customer Support</span>
                        <UilClipboardAlt className='admin-component-card-png' />
                        <span>*</span>
                    </div>
                    <div className="admin-component-card add-customer"
                        onClick={handleClick}>
                        <span>Add Customer</span>
                        <UilClipboardAlt className='admin-component-card-png' />
                        <span>+</span>
                    </div>
                </div>
            </div>
            <Table route='customers' component={CustomerDetails} />
        </div>
    )
}

export default Customers