import React from 'react'

import './counter.scss'

export const Counter = ({title, amount, type, setAmount}) => {
    const currentAmount = amount.ticket[type];
    const handleClick = (operation) => {
        if (operation === 'minus') {
            if (currentAmount-1 < 0) {
                return;
            }

            setAmount(prevState => ({
                ticket: {
                    ...prevState.ticket, 
                    [type]: currentAmount - 1
                }
            }))
        }

        if (operation === 'plus') {
            setAmount(prevState => ({
                ticket: {
                    ...prevState.ticket, 
                    [type]: currentAmount + 1
                }
            }))
        }
    }

    return (
        <div className="form-amount__counter">
            <div className="form-amount__title left">{title}</div>
            <div className="amount__input">
                <div className="amount__text sign" onClick={() => {handleClick('minus')}}>-</div>
                <div className="amount__text numbers">{currentAmount}</div>
                <div className="amount__text sign" onClick={() => {handleClick('plus')}}>+</div>
            </div>
        </div>
    )
}