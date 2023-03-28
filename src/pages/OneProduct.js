
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProductById } from '../store/modules/ProductsSlice';



const OneProduct = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const {singleProduct, isError} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let {id} = useParams();



    useEffect(() => {
        if (id) { //  id exists before calling fetchProduct is necessary to prevent errors.
            dispatch(getProductById(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {singleProduct && !isError && 
            <div className='m-auto md:w-1/2 lg:w-2/3 lg:flex lg:flex-row lg:justify-between lg:gap-12'>
                <img className='shadow-md m-auto' src={singleProduct.imageUrl}></img>
                <div className='m-8 mt-12 lg:w-full'>
                    <div className='flex flex-row justify-between items-center mb-6'>
                            <h1 className='text-2xl'>{singleProduct.title}</h1>
                            <p className='text-gray-500'>{singleProduct.brand}</p>
                    </div>
                    <p>{singleProduct.description}</p>
                    <div className='flex flex-row justify-evenly items-baseline my-6'>
                        <p className='flex flex-col items-center justify-center text-2xl gap-1'>
                            {singleProduct.rating}
                            <img className='w-5' src='/Star.png' /></p>
                        <p className='flex flex-col items-center justify-center text-2xl gap-1'>
                        {singleProduct.stock}
                        <img className='w-5' src='/Storefront.png' /></p>

                    </div>
                    <hr className='my-8'></hr>
                    <div className='flex flex-row justify-between items-center mt-12 rounded-md'>
                        <p className='text-2xl'>{singleProduct.price} NOK</p>
                    </div>
                </div>
            </div>}
            {isError && <p>Upsi</p>}
        </>
    );
};

export default OneProduct;
