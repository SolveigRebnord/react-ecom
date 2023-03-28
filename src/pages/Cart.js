import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <>

        <h1>Cart</h1>
        <Link to={'/checkout'}>Checkout</Link>
        </>
    )
}
 
export default Cart;