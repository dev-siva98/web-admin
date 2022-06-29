import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import Card from '../../Card/Card'
import AddProduct from './AddProduct/AddProduct'
import Table from '../../Table/Table'
import ProductDetails from '../../DetailsModal/ProductDetails/ProductDetails'
import { SelectMenuContext } from '../../../../AppContext'
import axios from '../../../../axios'

function Products() {

    const [show, setShow] = useState(false)
    const { setSelected } = useContext(SelectMenuContext)
    const [active, setActive] = useState(0)
    const [inActive, setInActive] = useState(0)

    useEffect(() => {
        setSelected(3)
        axios.get('products')
            .then(res => {
                setActive(res.data.length)
                setInActive(res.data.length)
            })
            .catch(err => {
                alert("" + err)
            })
    }, [])

    const productsCard = [
        {
            title: "All Products",
            backGround: "linear-gradient(180deg, #3699f5 0%, #6eb6fa 100%)",
            boxShadow: "0px 10px 20px 0px #b0d4f5",
            barValue: 70,
            value: active,
            png: UilClipboardAlt,

        },
        {
            title: "Active Products",
            backGround: "linear-gradient(180deg, #5ee851 0%, #5ddb51 100%)",
            boxShadow: "0px 10px 20px 0px #8aff92",
            barValue: 70,
            value: active,
            png: UilClipboardAlt,

        },
        {
            title: "Inactive Products",
            backGround: "linear-gradient(180deg, #ff7a6e 0%, #f57064 100%)",
            boxShadow: "0px 10px 20px 0px #f5897f",
            barValue: 70,
            value: inActive,
            png: UilClipboardAlt,

        }
    ]

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='admin-products'>
            <div className="admin-product-container">
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
            <Table route='products' component={ProductDetails} />
        </div>
    )
}

export default Products