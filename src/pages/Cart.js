import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteProductFromCart, minusQuantity, plusQuantity } from "../store/modules/CartSlice";
import {GreenBtnL, PlainBtn} from '../styles/Buttons'

const CartPage = () => {

    const dispatch = useDispatch();
    const {cartProducts} = useSelector(state => state.cart)

    let productTotal;
    let totalProducts = 0;

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    return (
        <>
        <section className="mx-24 lg:w-1/2 lg:m-auto">
            <h1 className="pl-10 mb-12 md:pl-0">Cart</h1>
            {cartProducts && cartProducts.length > 0 && 
            <>
            <div className="flex flex-col ">
                        {cartProducts.map((product) => {
                            productTotal = (product.product.price)*(product.amount);
                            totalProducts += productTotal
                            console.log(round(totalProducts, 2))
                            return (
                            <div key={product.id} className=" flex flex-col border-t border-gray-200 py-8 px-8 last-of-type:border-b md:px-0">
                                <div className="flex flex-row justify-between">
                                    <div>
                                        <Link to={`/product/${product.product.id}`}>
                                            <span className=""/>
                                            {product.product.title}
                                        </Link>
                                    </div>
                                    <div>
                                        <img src={product.product.imageUrl} alt={product.title} className="w-24 h-24 object-cover object-center rounded-md"/>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-end">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-row items-center gap-6">
                                            <button onClick={() => dispatch(plusQuantity(product.product.id))}>
                                            <img src="/plus.svg" className="w-8"/>
                                            </button>
                                            <p className="flex flex-row items-baseline gap-1">x <span className="text-xl">{product.amount}</span></p>
                                            <button onClick={() => dispatch(minusQuantity(product.product.id))}>
                                            <img src="/minus.svg" className="w-8"/>
                                            </button>                                        </div>
                                        
                                            <PlainBtn className="flex flex-row items-center gap-2" onClick={() => dispatch(DeleteProductFromCart(product.product.id))} ><img src="/x.svg" className="w-4" />Remove</PlainBtn>
                                        
                                    </div>
                                    <div className="">
                                    <p className="pPrize">{round((product.product.price)*(product.amount), 2)} NOK</p>
                                </div>
                                </div>
                            </div>
                       )}) }
                    </div>
                    <section className="mx-10 mt-8 md:mt-12">
                        <div className="flex flex-row items-end justify-between text-mainOffBlack ">
                            <p className="text-base font-light">Current total</p>
                            <p className="text-lg">{round(totalProducts, 2)} NOK</p>
                        </div>
                        <div className="flex flex-row items-end justify-between text-mainGreen ">
                            <p className="text-base font-light">Discount</p>
                            <p className="text-lg">- 0 NOK</p>
                        </div>
                        <hr className="my-8"></hr>
                        <div className="flex flex-row items-end justify-between">
                            <p className="text-xl">Subtotal</p>
                            <p className="text-xl">{round(totalProducts, 2)} NOK</p>
                        </div>

                    </section>
                    <div className="text-center my-20">
                        <Link to={'/checkout'}>
                        <GreenBtnL className=''>
                        Check Out
                    </GreenBtnL>
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

