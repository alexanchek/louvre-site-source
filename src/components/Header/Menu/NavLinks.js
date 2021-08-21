import React from 'react';
import { MenuLink } from './MenuLink'

export const NavLinks = ({isMobile, closeMobileMenu, openClass}) => {
    return (
        <nav className={`header__nav ${openClass}`}>
            <ul className="header__list">
                <li className="header__item"><MenuLink classStyle={'header__link'} link={"visiting"} label={"Visiting"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li>
                <li className="header__item" ><MenuLink classStyle={'header__link'} link={"picture-explore"} label={"Explore"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li>
                <li className="header__item" ><MenuLink classStyle={'header__link'} link={"video-journey"} label={"Video"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li>
                <li className="header__item" ><MenuLink classStyle={'header__link'} link={"gallery"} label={"Gallery"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li>
                <li className="header__item"><MenuLink classStyle={'header__link'} link={"buy-tickets"} label={"Tickets"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li>
                <li className="header__item"><MenuLink classStyle={'header__link'} link={"contact"} label={"Contact"} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/></li> 
            </ul>
        </nav>
    )
}