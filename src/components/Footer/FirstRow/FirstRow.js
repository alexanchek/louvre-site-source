import React from 'react';
import FooterFirstLeft from './FooterFirstLeft/FooterFirstLeft';
import FooterFirstRight from './FooterFirstRight/FooterFirstRight';
import './firstRow.scss';

export const FirstRow = () => {
    return (
        <div className="footer__first-row">
            <FooterFirstLeft/>
            <FooterFirstRight/>
        </div>
    )
}