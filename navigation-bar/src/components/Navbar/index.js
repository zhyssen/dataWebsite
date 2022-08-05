import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/howItWorks.html' activeStyle>
                        How It Works
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        FAQ
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Mission Statement
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Advertise With Us
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Privacy Policy
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Contact Us
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
