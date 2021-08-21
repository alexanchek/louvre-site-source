import React, {useState, useEffect} from 'react';
import { NavLinks } from '../NavLinks';
import { HiMenu } from 'react-icons/hi';
import {CgClose} from 'react-icons/cg'
import './navigationMobile.scss';


export const NavigationMobile = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    })

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