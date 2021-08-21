import React from 'react';
import { Logo } from './Logo/Logo';
import Menu from './Menu/Menu';
import './header.scss'

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <Logo/>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}