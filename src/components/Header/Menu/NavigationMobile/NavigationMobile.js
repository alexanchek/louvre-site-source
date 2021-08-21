import React, {useState} from 'react';
import { NavLinks } from '../NavLinks';
import { HiMenu } from 'react-icons/hi';
import {CgClose} from 'react-icons/cg'
import './navigationMobile.scss';


export const NavigationMobile = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiMenu className="hamburger"
    size="40px" color="white" onClick={() => setOpen(!open)}/>

    const closeIcon = <CgClose className="hamburger"
    size="40px" color="white" onClick={() => setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);

    return (
        <div className="nav-mobile">
            {open ? closeIcon : hamburgerIcon}
            {open ? <NavLinks openClass={'open'} isMobile={true} closeMobileMenu={closeMobileMenu}/> : <NavLinks openClass={''}/>}
        </div>
    )
}