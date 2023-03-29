import { Link } from "react-router-dom"
import { BeigeBtnS, LinedLink } from "../styles/Buttons"



const Overlay = ({props}) => {
    console.log(props.product)
    const product = props.product
    return (
        <section className="relative top-0 left-0 w-full h-full bg-blue-200">
        <section className="bg-white w-[90%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-fit fixed z-50 border border-black p-4 md:p-8">
            <button>
                <img src="/x_button.svg" />
            </button>
            <div className="p-4">
            <Link className='w-full md:w-fit' to={`/product/${product.id}`}>
                <div className="relative ">
                        <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full md:w-80 h-fit max-h-[400px] m-auto object-cover rounded-md lg:w-64 lg:h-80"
                        loading='lazy'/>
                </div>
            </Link>
                <div className="mt-4 flex flex-col justify-end gap-2 md:px-20 md:my-12">
                    <p className="pTitle text-md text-gray-700 relative">{product.title}</p>
                    <p>{product.description}</p>
                    <p className="text-xl">{product.rating}</p>
                    <p className="pPrize">{product.price} $</p>
                </div>
                <BeigeBtnS className="w-full my-6 md:w-fit m-auto block md:my-12">Add to cart</BeigeBtnS>
                <LinedLink>
                    <Link className='text-center block' to={`/product/${product.id}`}>
                        Go to product
                    </Link>
                </LinedLink>
            </div>
        </section> 
        </section>
    )
}
 
export default Overlay;