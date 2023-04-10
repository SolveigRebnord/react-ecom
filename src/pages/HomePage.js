import {BeigeBtnS, LinedLink} from '../styles/Buttons'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/modules/ProductsSlice';
import { Link } from 'react-router-dom';
import StyleList from '../styles/StyleList';



const HomePage = () => {

    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const firstThree = products.slice(0, 3);
    const firstProduct = products.slice(0, 1);

    return (
        <>
        <section className="mx-8 md:mx-14 md:flex flex-row-reverse justify-between items-center md:mb-20 lg:mx-80 lg:mt-12">
            <div className="relative">
                <div className='hidden lg:z-0 lg:inline-block absolute right-5 bottom-5 lg:h-[450px] lg:w-[370px] border-2 border-solid border-mainYellow'></div>
                <img className="w-full max-h-80 object-cover object-bottom md:max-h-[450px] md:w-[370px] z-30" src="/header_img.jpg" />
                <p className="absolute bottom-4 left-1/3 text-sm lg:text-base lg:bottom-7 lg:right-12 flex flex-row justify-center gap-4 items-baseline" >
                    <span className='text-lg'>Tablet Holder</span>
                    <span className='text-sm'>549 NOK</span> 
                </p>
            </div>
            <div className="mt-4">
                <div className='flex flex-col'>
                    <h1 className='h1Desktop leading-tight'>Random</h1>
                    <p className="font-normal text-[18px] lowercase">Good quality, easy accessible</p>
                    <h2 className="text-mainGreen lowercase mt-4">Stuff</h2>
                </div>
                <div className='my-6'>
                    <BeigeBtnS className='w-full lg:w-fit lg:mt-8'>All products</BeigeBtnS>
                </div>
            </div>
        </section>
        <section className='bg-mainBrown text-white py-14 flex flex-col gap-10 mt-14 md:flex-row md:justify-evenly'>
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <img src='/airplane.svg'></img>
                <p>Free shipping over 49$ <br/>Always free returns</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <img src='/headset.svg'></img>
                <p>Get in touch, we want you <br/> to have the best experience</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <img src='/recycle.svg'></img>
                <p>Our main goal is eco system <br/> Bapetti bappeti woop woop</p>
            </div>
        </section>
        <section className='my-20 lg:mx-32'>
            <h2 className='text-center mb-16'>New arrivals</h2>
            <StyleList>
            {firstThree.map((product) => (
                <div key={product.id} className="relative flex flex-col gap-y-4 w-full p-4 m-4 border border-solid rounded-md border-white hover:shadow-md hover:border-gray-50 hover:cursor-pointer transition ease-in delay-50 hover:scale-105">
                    <div className="min-h-40">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="h-96 w-full object-cover object-center"
                            loading='lazy'/>
                    </div>
                    <div className="mt-2 w-max md:w-fit">
                        <div>
                            <h3 className="pTitle relative">
                                <Link to={`/product/${product.id}`}>
                                    <span aria-hidden="true" className="absolute inset-0"/>{product.title}
                                </Link>
                            </h3>
                            <p className="mt-1 text-gray-500 w-full">{product.description}</p>
                            </div>
                                <p className="pPrize text-md flex justify-end mt-4">{product.price} NOK</p>
                            </div>
                        </div>
                    ))}
                    </StyleList>
                    <div className='text-center my-20'>
                    <Link className='' to={'/products'}>
                        <LinedLink>
                            See all
                        </LinedLink>
                        </Link>
                    </div>
        </section>
        <section className='bg-mainYellow p-8 leading-tight flex flex-col gap-10 md:flex-row md:p-14 lg:justify-center lg:gap-32 lg:p-8 lg:px-32'>
            <div className='flex flex-col gap-2 lg:pt-10'>
                <h2 className='text-white mb-4'>Text about us <br/> as a company</h2>
                <p className='font-semibold max-w-sm'>Something more about us cool cool shit and stuff you know that makes us look good and stuff</p>
                <p className='max-w-sm'>More stuff about us but in light so it's not that important, maybe you read it maybe you dont</p>
            </div>
            <img src='/clothing_rack.jpg' alt='Clothing racks in an old, vintage style store' className='md:w-1/2 lg:max-w-md'/>
        </section>
        </>
    )
}
 
export default HomePage;