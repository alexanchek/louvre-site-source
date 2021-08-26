import React from 'react';
import Image from './buy-tickets-image.png'
import './buyTicketsLeft.scss'

export const BuyTicketsLeft = () => {
    return (
        <div className="buy-tickets__left right">
            <img className="responsive" src={Image} alt="buy-tickets"/>
        </div>
    )
}