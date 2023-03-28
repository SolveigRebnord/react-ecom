
import tw from "tailwind-styled-components"
import { NavLink } from "react-router-dom";

const StyleHeader = tw.header`
    p-8
    py-10
    flex
    flex-row
    justify-between
    items-center
    md:p-14
    font-inter
    font-light
`

const Header = () => {
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
                    <img className="" src="/cart_icon.svg" alt="Shopping cart icon"></img> 
                </NavLink>
                <img src="/menu.svg" alt="Hamburger menu icon" className="md:hidden"></img>
            </div>
        </StyleHeader>
        </>
     );
}
 
export default Header;