import React, {useEffect, useState} from 'react';
import { Counter } from './Counter/Counter';
import Price from './price.json';
import './form.scss';

/*
    price for Seniors = usual price * 0.5
    combined price = sum of prices * 0.75
*/

export const Form = () => {
    const [sum, setSum] = useState(0);
    const [amount, setAmount] = useState(
        {
            ticket: {
                basic: 0,
                adults: 0,
                option: Price.permanent,
            }
        });
    
    const handleRadioButton = (event) => {
        const value = event.target.value;
        setAmount(prevState => ({
            ticket: {
                ...prevState.ticket,
                option: Price[value]
            }
        }))
    }

    useEffect(() => {
        const sum = (amount.ticket.basic + amount.ticket.adults * 0.5) * amount.ticket.option;
        setSum(sum);
    }, [amount.ticket.basic, amount.ticket.adults, amount.ticket.option]);

    return (
        <form className="form-buy-ticket">
            <div className="form-ticket__left" onChange={handleRadioButton}>
                <div className="form-ticket__title left">Ticket Type</div>
                <p className={"form-exhibition__button"}><input name="chooseOption" type="radio" value="permanent" defaultChecked/>Permanent exhibition</p>
                <p className={"form-exhibition__button"}><input name="chooseOption" type="radio" value="temporary"/>Temporary exhibition</p>
                <p className={"form-exhibition__button"}><input name="chooseOption" type="radio" value="combined"/>Combined exhibition</p>
            </div>
            <div className="form-ticket__right">
                <div className="form-ticket__title right">Amount</div>
                <div className="form-amount__wrapper">
                    <div className="form-amount-inner">
                        <Counter title={"Basic 18+"} amount={amount} setAmount={setAmount} type={"basic"}/>
                        <Counter title={"Senior 65+"} amount={amount} setAmount={setAmount} type={"adults"}/>
                    </div>
                </div>
                <div>Total: €{sum}</div>
            </div>
        </form>
    )
}