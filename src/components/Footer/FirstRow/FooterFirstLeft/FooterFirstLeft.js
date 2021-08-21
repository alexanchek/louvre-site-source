import React, { Component } from 'react';
import { Logo } from '../../../Header/Logo/Logo';
import FooterLinks from './FooterLinks.json';
import { MenuLink } from '../../../Header/Menu/MenuLink';
import './footerFirstLeft.scss';

export default class FooterFirstLeft extends Component {
    renderColumn = (column) => {
        return (
            <div className={column[0].nameClass}>
                {column.map(({id, link, label}) => {
                    return (
                        <div key={id} className="footer-social__item"><MenuLink classStyle={"footer__link"} link={link} label={label}/></div>
                    )
            })}
            </div>
        )
    }

    render() {
        return (
            <div className="footer-first__left">
                <div className="footer-first__block">
                    <Logo/>
                </div>
                <div className="footer-first__block">
                    {this.renderColumn(FooterLinks.column1)}
                </div>
                <div className="footer-first__block">
                    {this.renderColumn(FooterLinks.column2)}
                </div>
            </div>
        )
    }

}