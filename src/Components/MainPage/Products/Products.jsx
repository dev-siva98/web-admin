import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import { productsCard } from '../../../Data/Data'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import Card from '../Card/Card'
import AddProduct from './AddProduct/AddProduct'
import { TableContext } from '../../../AppContext'
import ProductDetails from '../../DetailsModal/ProductDetails/ProductDetails'

function Products() {

    const [show, setShow] = useState(false)
    const { setTableRouterData } = useContext(TableContext)

    useEffect(() => {
        setTableRouterData({
            route: 'products',
            component: ProductDetails
        })
    }, [])

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='admin-products'>
            {
                show && <AddProduct
                    handleClick={handleClick} />
            }
            <h1>Products</h1>
            <div className="admin-products-card-container">
                {
                    productsCard.map((card, index) => {
                        return (
                            <Card card={card} key={index} />
                        )
                    })
                }
                <div className="admin-component-card add-product"
                    onClick={handleClick}>
                    <span>Add Product</span>
                    <UilClipboardAlt className='admin-component-card-png' />
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}

export default Products