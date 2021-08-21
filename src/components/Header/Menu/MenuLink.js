import React from 'react';
import { Link } from "react-scroll";


export const MenuLink = ({link, label, isMobile=false, closeMobileMenu, classStyle}) => {
    return (
        <Link
            onClick={() => isMobile && closeMobileMenu()}
            activeClass="active"
            className={classStyle}
            to={link}
            spy={true}
            smooth={true}
            duration={500}>{label}
        </Link>
    )
}