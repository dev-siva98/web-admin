import React from 'react'
import './Products.css'
import { productsCard } from '../../../Data/Data'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import Card from '../Card/Card'

function Products() {

    const handleClick = () => {
        alert('add')
    }

    return (
        <div className='admin-products'>
            <h1>Products</h1>
            <div className="admin-products-card-container">
                {
                    productsCard.map((card, index) => {
                        return (
                            <Card card = {card} key= {index}/>
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