import React from 'react';
import { FirstRow } from './FirstRow/FirstRow';
import './footer.scss';
import { SecondRow } from './SecondRow/SecondRow';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <FirstRow/>
            </div>

            <div className="footer__line"></div>

            <div className="wrapper">
                <SecondRow/>
            </div>
        </div>
    )
}