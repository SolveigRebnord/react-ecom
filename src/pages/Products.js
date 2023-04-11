import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/modules/ProductsSlice';
import { Link } from 'react-router-dom';
import {QuickBtn, BeigeBtnS} from '../styles/Buttons'
import Overlay from '../components/Overlay';
import OverlayReducer from '../components/OverlayReducer';
import { productsBySearch } from '../store/modules/ProductsSlice';
import Search from '../components/Search';
import PNOK from '../styles/PNOK';

const Products = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    

  
    return (
        <>
        <section className='mx-10 md:mx-16 lg:mx-52 relative'>

        <div>
            <Search />
        </div>
        <div className='flex flex-row justify-between items-center mb-12'>
            <h1 className=''>All Products</h1>
            <img src='/filter.svg' alt='Filter icon' />
        </div>
        <div className='flex flex-wrap justify-between lg:gap-14'>
            {products.map((product) => (
                <div key={product.id} className="mb-20 w-full md:w-fit p-4 rounded-md shadow-md border border-gray-200 md:p-0 md:border-none md:shadow-none ">
                    <div className="relative">
                        <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full md:w-80 h-96 object-cover rounded-md lg:w-64 lg:h-80 md:p-2 md:border-2 border-gray-200 "
                        loading='lazy'/>
                        <OverlayReducer props={product} />
                    </div>
                  
                    <div className="mt-4 flex flex-col justify-end items-start gap-3">
                        <div>
                            <p className="pTitle text-md text-gray-700 ">
                            <Link to={`/product/${product.id}`}>{product.title}  </Link>
                            </p>
                        </div>
                        {product.price == product.discountedPrice ?  <p className="pPrize">{product.price} <PNOK>NOK</PNOK></p> 
                        : <div className='flex flex-row justify-start gap-6 items-baseline w-full'>
                            <p className="line-through font-light text-base">{product.price}</p>
                            <p className="pPrize">{product.discountedPrice} <PNOK>NOK</PNOK></p>
                        </div>}
                       
                        
                        <Link to={`/product/${product.id}`} className='w-full mx-auto my-2 '>
                                <BeigeBtnS className='w-full bg-white text-mainBrown border-2 border-gray-100 shadow-md rounded-none py-3 px-0 md:rounded-sm md:py-2 hover:border-mainBrown hover:bg-mainBrown hover:text-white'>Go to product</BeigeBtnS>
                            </Link>
                    </div>
                  
                </div>
            ))}
        </div>
        </section>
        </>
    )

}
//{showProduct && showOverlay && <Overlay props={showProduct}/>}
//setOverlay(true) && setId({product})


 
export default Products;