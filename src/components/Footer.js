
import tw from "tailwind-styled-components"

const StyleFooter = tw.footer`
    bg-mainBeige
    w-full
    h-52
    mt-8
`

const Footer = () => {
    return ( 
        <>
        <StyleFooter>
         <h3>Footer</h3>
        </StyleFooter>
        </>
     );
}
 
export default Footer;