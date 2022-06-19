import React, { useContext, useEffect } from 'react'
import { customersCard } from '../../../Data/Data'
import Card from '../Card/Card'
import './Customers.css'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import { TableContext } from '../../../AppContext'
import CustomerDetails from '../../DetailsModal/CustomerDetails/CustomerDetails'


function Customers() {

    const { setTableRouterData } = useContext(TableContext)

    useEffect(() => {
        setTableRouterData({
            selectionIndex: 2,
            route: 'customers',
            component: CustomerDetails
        })
    }, [])

    const handleClick = () => {
        alert('add')
    }

    return (
        <div className='admin-customers'>
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
    )
}

export default Customers