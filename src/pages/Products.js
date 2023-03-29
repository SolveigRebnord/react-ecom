import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/modules/ProductsSlice';
import { Link } from 'react-router-dom';
import {QuickBtn} from '../styles/Buttons'
import Overlay from '../components/Overlay';


const Products = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

   

    const [showProduct, setId] = useState('')
    const [showOverlay, setOverlay] = useState(false)
  
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
                <div key={product.id} className="mb-20">
                    <div className="relative">
                        <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full md:w-80 h-96 object-cover rounded-md lg:w-64 lg:h-80"
                        loading='lazy'/>
                 
                        <QuickBtn onClick={() => setOverlay(true) && setId({product})} className='absolute bottom-6 left-1/2 -translate-x-1/2 z-40'>Quick View</QuickBtn>
                    </div>
                    <Link className='w-full md:w-fit' to={`/product/${product.id}`}>
                    <div className="mt-4 flex flex-col justify-end items-center">
                        <div>
                            <p className="pTitle text-md text-gray-700 relative">
                                {product.title}
                            </p>
                        </div>
                        <p className="pPrize">{product.price} $</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
        
        {showProduct && showOverlay && <Overlay props={showProduct}/>}
        </section>
        </>
    )

}


 
export default Products;