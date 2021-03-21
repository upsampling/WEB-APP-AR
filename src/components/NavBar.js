import React from 'react';
import {Nav, NavLink, Bars, NavMenu } from './NavBarElements';
import Logo from '../images/robot.svg'

const NavBar = () =>{

    return( 
        <>
            <Nav>
                <NavLink to="/" >
                    <img width="60" height="60" src={Logo} alt='logo' />
                </NavLink>

                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/aboutus" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/categories" activeStyle>
                        Categories
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>



            </Nav>
        </>
    )
}

export default NavBar;
