import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/modules/ProductsSlice';
import { Link } from 'react-router-dom';
import {QuickBtn} from '../styles/Buttons'
import Overlay from '../components/Overlay';
import OverlayReducer from '../components/OverlayReducer';
import { productsBySearch } from '../store/modules/ProductsSlice';
import Search from '../components/Search';



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
        <div className='flex flex-wrap justify-between lg:gap-10'>
            {products.map((product) => (
                <div key={product.id} className="mb-20 w-full md:w-fit">
                    <div className="relative">
                        <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full md:w-80 h-96 object-cover rounded-md lg:w-64 lg:h-80"
                        loading='lazy'/>
                        <OverlayReducer props={product} />
                    </div>
                  
                    <div className="mt-4 flex flex-col justify-end items-center gap-4">
                        <div>
                            <p className="pTitle text-md text-gray-700 relative">
                            <Link to={`/product/${product.id}`}>{product.title}  </Link>
                            </p>
                        </div>
                        {product.price == product.discountedPrice ?  <p className="pPrize">{product.price} NOK</p> 
                        : <div className='flex flex-row justify-center gap-6 items-baseline w-full'>
                            <p className="line-through font-light text-base">{product.price}</p>
                            <p className="pPrize">{product.discountedPrice} NOK</p>
                        </div>}
                       
                        
                     
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