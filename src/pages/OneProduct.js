
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchProductById } from '../store/modules/ProductsSlice';
import { BeigeBtnS } from '../styles/Buttons';
import { AddProductToCart } from '../store/modules/CartSlice';


const OneProduct = () => {
 
    let userRating; 
  



const dispatch = useDispatch(); 
const {singleProduct} = useSelector(state => state.products); 
let {id} = useParams();




useEffect(() => {
    if (id) { 
        dispatch(fetchProductById(id));

    }
}, [dispatch, id]);



    return (
        
        <>
            {singleProduct &&
            <div className='m-auto flex flex-col gap-4 md:mt-12'>
                <div className='lg:flex flex-row-reverse lg:justify-center lg:items-center lg:w-full lg:px-20 lg:gap-12'>
                    <div className='mx-10 md:m-auto lg:w-fit lg:mx-0 md:w-1/2 md:mb-12'>
                        <img className='shadow-md m-auto max-h-80 w-full object-cover md:max-h-fit' src={singleProduct.imageUrl}></img>
                        <ul className="flex flex-row gap-4 my-4 text-sm font-light lg:justify-end">
                            {singleProduct.tags.map((tag) => (
                            <li ># {tag}</li>
                            ))}
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-4 mx-10 md:w-2/3 md:m-auto md:flex-row lg:w-fit lg:mx-0 lg:flex-col lg:items-start lg:gap-12'>
                        <div className='flex flex-col gap-4'>
                                <h1 className='font-semibold text-2xl'>{singleProduct.title}</h1>
                                <p className='max-w-xs'>{singleProduct.description}</p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p className='pPrize place-self-end lg:place-self-start'>{singleProduct.price} $</p>
                            <BeigeBtnS onClick={() => dispatch(AddProductToCart(singleProduct))} className=''>Add to cart</BeigeBtnS>
                        </div>
                    </div>
                </div>
                <section className='bg-gray-100 rounded-md flex flex-col items-center gap-4 p-6 py-8 w-full mt-10 md:py-12'>
                    <h2 className='text-mainBrown'>Reviews <span>({singleProduct.reviews.length})</span></h2>
                    <span className='flex flex-row items-end justify-center gap-4'>
            
                        <div className='text-2xl font-light leading-none pr-2'>
                            {singleProduct.rating == 0 ? <span>No ratings yet</span> : <>
                            <span className='flex flex-row items-end justify-center gap-4'>
                            <p className='text-mainBrown'>Rating</p>
                            <p className='text-2xl font-light leading-none pr-2'>
                                {singleProduct.rating} <span className='text-base'>/ 5</span>
                            </p>
                            </span></>} 
                        </div>
                    </span>
                    <div className='flex flex-col gap-10 mt-6 md:flex-row'>
                    {singleProduct.reviews.map((review) => (
                           <div className='bg-white shadow-md rounded-md p-6 w-full flex flex-col gap-6'>
                                <div className='flex flex-row justify-between items-center'>
                                    <div>
                                        <p className='pTitle'>{review.username}</p>
                                        <p><span className='text-lg'>{review.rating}</span> / 5</p>
                                    </div>
                                    <img className='w-20 h-20 object-cover rounded-md shadow-md' src={singleProduct.imageUrl} />
                                </div>
                                <hr></hr>
                                <p className="relative pl-1 before:content-[open-quote] before:text-3xl before:font-light before:absolute before:-top-4 before:-left-1 md:max-w-xs">{review.description}</p>
                               
                            </div>
                        ))}
                        </div>
                </section>
               
            </div>
            }
             <section className='my-20 flex flex-col items-center'>
                <h2>You might like</h2>
            </section>
        </>
    );
};

export default OneProduct;
//<span className='text-2xl font-serif'>"</span>