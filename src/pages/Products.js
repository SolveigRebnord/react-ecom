import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/modules/ProductsSlice';
import { Link } from 'react-router-dom';
import {QuickBtn} from '../styles/Buttons'
import Overlay from '../components/Overlay';
import OverlayReducer from '../components/OverlayReducer';




const Products = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

  
    return (
        <>
        <section className='mx-10 md:mx-16 lg:mx-52 relative'>
        <input type={'text'} id={'search'} className="h-12 border-b border-mainOffBlack w-full rounded-sm my-4 mb-14 md:w-1/2 mx-auto block" ></input>
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
                  
                    <div className="mt-4 flex flex-col justify-end items-center">
                        <div>
                            <p className="pTitle text-md text-gray-700 relative">
                            <Link to={`/product/${product.id}`}>{product.title}  </Link>
                            </p>
                        </div>
                        <p className="pPrize">{product.price} $</p>
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