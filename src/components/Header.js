
import tw from "tailwind-styled-components"
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { useState, useEffect } from "react";

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


    const [showMenu, setMenu] = useState(false);

    const {pathname} = useLocation();
    useEffect(()=>{
        setMenu(false)
    },[pathname])

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
                         
                <div className='relative md:hidden'>
                <button className=' flex justify-center'
                    onClick={() => setMenu(!showMenu)}>
                    <img src="/menu.svg" alt="Hamburger menu icon" className=""></img>
                </button>
                {showMenu && (
                 <div className='burger whitespace-nowrap bg-mainGrey border-2 flex justify-center border-mainBeige absolute top-12 -right-2 w-52 h-80 rounded-md z-20 shadow-lg transition ease-in-out delay-500 duration-2000' > 
                    <nav className="flex flex-col gap-14 justify-center items-center w-full text-center">
                    <NavLink to={'/products'} >All products</NavLink>
                    <NavLink to={'/contact'} >Contact Us</NavLink>
                </nav>
                </div>)}
                </div>
            </div>
        </StyleHeader>
        </>
     );
}
 
export default Header;