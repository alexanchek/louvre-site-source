import React from 'react';
import { Counter } from './Counter/Counter';
import './form.scss';

export const Form = () => {
    return (
        <form className="form-buy-ticket">
            <div className="form-ticket__left">
                <div className="form-ticket__title">Ticket Type</div>
                <p><input name="permanent" type="radio" value="Permanent exhibition"/>Permanent exhibition</p>
                <p><input name="temporary" type="radio" value="Temporary exhibition"/>Temporary exhibition</p>
                <p><input name="combined" type="radio" value="Combined exhibition"/>Combined exhibition</p>
            </div>
            <div className="form-ticket__right">
                <div className="form-ticket__title">Amount</div>
                <div className="form-amount__wrapper">
                    <div className="form-amount-inner">
                        <Counter/>
                        <Counter/>
                    </div>
                </div>
            </div>
        </form>
    )
}