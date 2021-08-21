import React from 'react'
import { Navigation } from './Navigation/Navigation'
import { NavigationMobile } from './NavigationMobile/NavigationMobile'

const Menu = ({open, setOpen}) => {
        return (
            <>
                <Navigation/>
                <NavigationMobile/>
            </>   
        ) 
}

export default Menu;

