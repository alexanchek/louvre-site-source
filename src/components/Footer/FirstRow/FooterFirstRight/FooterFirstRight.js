import React, { Component } from 'react';
import './footerFirstRight.scss';
import FooterIcons from './FooterIcons.json';

export default class FooterFirstRight extends Component {
    renderFooterIcons = () => {
        return (
            <ul className="footer-first__list">
                {
                    FooterIcons.map(({id, name, url, link}) => {
                        return (
                            <li key={id} className="footer__item">
                                <a href={link}>
                                    <img src={url}
                                        alt={name}
                                        className="footer__img"/>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="footer-first__right">
                {this.renderFooterIcons()}
            </div>
        )
    }
}