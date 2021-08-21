import React, { Component } from 'react';
import Cards from '../Card/cardsLG.json';
import Card from './Card';
import './allCards.scss';

export default class AllCards extends Component {
    renderCards() {
        return (
            Cards.map((card) => {
                return (
                    <li key={card.id} className="card__container"><Card card={card}/></li>
                )
            })
        )
    }

    render() {
        return (
            <ul className="cards__wrapper">
                {this.renderCards()}
            </ul>
        )
    }
}