
import tw from "tailwind-styled-components"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const StyleHeader = tw.header`
    p-8
    py-10
    flex
    flex-row
    justify-between
    items-center
    md:p-12
    font-inter
    font-light
`



const Header = () => {

    const {cartAmount} = useSelector(state => state.cart);

    let cartA = cartAmount

    if (cartA == 0) {
        cartA = ''
    }

    return ( 
        <>
        <StyleHeader>
            <NavLink to={'/'}>
                <img src="/assorted_stuff_logo.svg" alt="Assorted stuff logo"></img>
            </NavLink>
            <div className="flex flex-row gap-8 justify-center items-center">
                <nav className="hidden md:flex flex-row gap-10 mr-10 lg:mr-14">
                    <NavLink to={'/products'} >All products</NavLink>
                    <NavLink to={'/contact'} >Contact Us</NavLink>
                </nav>
                <NavLink to={'/cart'} >
                    <div className="flex flex-row items-center gap-4">
                        <img className="" src="/cart_icon.svg" alt="Shopping cart icon"></img>
                        <span className="text-lg">{cartA}</span> 
                    </div>
                </NavLink>
                <img src="/menu.svg" alt="Hamburger menu icon" className="md:hidden"></img>
            </div>
        </StyleHeader>
        </>
     );
}
 
export default Header;