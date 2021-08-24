import React from 'react';
import Title from '../Title/Title';
import './buyTickets.scss';
import { BuyTicketsLeft } from './BuyTicketsLeft/BuyTicketsLeft';
import { BuyTicketsRight } from './BuyTicketsRight/BuyTicketsRight';

export const BuyTickets = () => {
    return (
        <div className="buy-tickets" id="buy-tickets">
            <div id="buy-tickets-link" className="scroll-link buy-tickets"></div>
            <div className="wrapper">
            <Title 
                label={"Buy Tickets"} 
                color={"#9D8665"}
                underlined={true}/>

                <div className="buy-tickets__wrapper">
                    <div className="buy-tickets__blocks">
                        <BuyTicketsLeft/>
                        <BuyTicketsRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}