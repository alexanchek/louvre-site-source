import React from 'react'
import './counter.scss'

export const Counter = () => {
    return (
        <div className="form-amount__counter">
            <div>Basic 18+</div>
            <div className="amount__input">
                <div className="amount__text sign">-</div>
                <div className="amount__text numbers">0</div>
                <div className="amount__text sign">+</div>
            </div>
        </div>
    )
}