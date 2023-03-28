import { Link } from "react-router-dom";


const Products = () => {
    return (
        <>
        <h1>Products</h1>
        <Link to={'/oneproduct'}>Single Product</Link>
        </>
    )
}
 
export default Products;