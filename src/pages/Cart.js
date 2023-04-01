import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProductFromCart } from "../store/modules/CartSlice";

const CartPage = () => {

    const dispatch = useDispatch();
    const {cartProducts} = useSelector(state => state.cart)

    return (
        <>
        <section className="mx-6 mb-52">
            <h1 className="text-center text-3xl mb-12">Cart</h1>
            {cartProducts && cartProducts.length > 0 && 
            <>
            <div className="mt-6 grid gap-y-10 gap-x-6 grid-cols-1 grid-rows-1 justify-items-center rounded-md border border-gray-100 w-fit m-auto p-4 ">
                        {cartProducts.map((product) => {
                            return (
                            <div key={product.id} className="group relative flex flex-col gap-y-3 lg:max-w-sm shadow-md rounded-md border border-gray-100 p-4">
                                <div
                                    className="  overflow-hidden rounded-md group-hover:opacity-75 ">
                                    <img
                                        src={product.product.imageUrl}
                                        alt={product.title}
                                        className="w-60 h-60 object-contain object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div>
                                    {product.amount}
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-md text-gray-700 relative">
                                            <Link to={`/product/${product.id}`}>
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.product.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">NOK{product.price}</p>
                                </div>
                                <div>
                                    <button className="my-4 flex flex-row gap-2 items-center leading-tight border border-gray-100 rounded-sm py-2 px-4 shadow-md hover:border-gray-200 hover:shadow-lg" onClick={() => dispatch(DeleteProductFromCart(product.id))}>
                                        <img className="w-5" src="/x-circle-thin.svg" />
                                        Remove</button>
                                </div>
                            </div>
                       )})}
                    </div>
                    <div className="text-center my-20">
                        <Link to={'/checkout'}>
                        <button className='w-1/2 bg-indigo-600 text-white h-16 font-semibold rounded-md'>
                        Check Out
                    </button>
                        </Link>
                    
                </div></>
                }
                {cartProducts.length < 1 &&
                    <div className="text-center flex flex-col gap-6 border border-gray-100 rounded-md p-8 w-1/2 m-auto shadow-md">
                        <p>Ups, empty</p>
                        <Link to={'/'} className="underline">Return to shopping</Link>
                    </div>
                }
        </section>  
        </>
    );
};

export default CartPage;

