import React from 'react';
import { Logo } from './Logo/Logo';
import Menu from './Menu/Menu';
import './header.scss'

export const Header = ({open, setOpen}) => {
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