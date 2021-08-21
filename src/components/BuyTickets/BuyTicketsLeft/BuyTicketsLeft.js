import React from 'react';
import Image from './buy-tickets-image.png'

export const BuyTicketsLeft = () => {
    return (
        <div className="buy-tickets__left">
            <img className="responsive" src={Image} alt="buy-tickets"/>
        </div>
    )
}