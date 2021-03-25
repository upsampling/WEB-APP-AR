import React from 'react';
import {Nav, NavLink, Bars, NavMenu } from '../Styles/NavBarElements';


const NavBar = () =>{

    return( 
        <>
            <Nav>
                <NavLink to="/" >
                    <a>AR</a>
                </NavLink>

                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        INICIO
                    </NavLink>
                    <NavLink to="/aboutus" activeStyle>
                        ACERCA DE NOSOTROS
                    </NavLink>
                    <NavLink to="/categories" activeStyle>
                        CATEGORIAS
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        CONTACTO
                    </NavLink>
                </NavMenu>



            </Nav>
        </>
    )
}

export default NavBar;
