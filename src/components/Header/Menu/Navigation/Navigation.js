import React from 'react';
import { NavLinks } from '../NavLinks';
import './navigation.scss';

export const Navigation = () => {
    return (
        <div className="nav-full">
            <NavLinks isMobile={false}/>
        </div>
    )
}