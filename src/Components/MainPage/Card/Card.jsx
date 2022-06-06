import React from 'react'
import './Card.css'

function Card({card}) {
    const Png = card.png
    return (
        <div className="admin-component-card"
            style={{ background: card.backGround, boxShadow: card.boxShadow }}>
            <span>{card.title}</span>
            <Png className='admin-component-card-png' />
            <span>{card.value}</span>
        </div>
    )
}

export default Card