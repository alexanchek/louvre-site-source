import React from 'react';
import { MenuLink } from './MenuLink'
import MenuLinks from './MenuLinks.json'

export const NavLinks = ({isMobile, closeMobileMenu, openClass}) => {
    return (
        <nav className={`header__nav ${openClass}`}>
            <ul className="header__list">
                {
                    MenuLinks.map(({link, label, id}) => {
                        return (
                            <li className="header__item" key={id}>
                                <MenuLink classStyle={'header__link'} 
                                link={link} 
                                label={label} 
                                isMobile={isMobile} 
                                closeMobileMenu={closeMobileMenu}/></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}