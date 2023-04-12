import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/modules/ProductsSlice";
import { BeigeBtnS } from "../styles/Buttons";
import { AddProductToCart } from "../store/modules/CartSlice";
import PNOK from "../styles/PNOK";

const OneProduct = () => {
  let userRating;

  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {singleProduct && (
        <div className="m-auto flex flex-col gap-6 ">
          <div className="lg:flex flex-row-reverse lg:items-end lg:w-1/2 lg:mx-auto lg:gap-12">
            <div className="mx-10 md:m-auto lg:w-full lg:mx-0 md:w-2/3 md:mb-6 lg:mb-0">
              <img
                className="shadow-md m-auto max-h-72 w-fit object-cover my-10 md:max-h-fit md:w-2/3 lg:mx-auto"
                src={singleProduct.imageUrl}
              ></img>
              <ul className="flex flex-row gap-4 my-2 text-sm font-light lg:w-2/3 lg:mx-auto">
                {singleProduct.tags.map((tag) => (
                  <li key={tag}># {tag}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 mx-10 md:w-2/3 md:mx-auto md:flex-row md:justify-between lg:w-2/3  lg:flex-col lg:items-start lg:gap-20 lg:pb-16">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">
                  {singleProduct.title}
                </h1>
                <p className="md:max-w-[250px]">{singleProduct.description}</p>
              </div>
              <div className="flex flex-col gap-6">
                {singleProduct.price == singleProduct.discountedPrice ? (
                  <p className="pPrize md:text-right lg:text-left">
                    {singleProduct.price} <PNOK>NOK</PNOK>
                  </p>
                ) : (
                  <div className="flex flex-row justify-start gap-6 items-baseline w-full ">
                    <p className="line-through font-light text-sm">
                      {singleProduct.price}
                    </p>
                    <p className="pPrize">
                      {singleProduct.discountedPrice} <PNOK>NOK</PNOK>
                    </p>
                  </div>
                )}
                <BeigeBtnS
                  onClick={() => dispatch(AddProductToCart(singleProduct))}
                  className="w-full"
                >
                  Add to cart
                </BeigeBtnS>
              </div>
            </div>
          </div>
          <section className="bg-gray-100 rounded-md flex flex-col items-center gap-4 p-6 py-8 w-full mt-10 md:py-12">
            <h2 className="text-mainBrown">
              Reviews <span>({singleProduct.reviews.length})</span>
            </h2>
            <span className="flex flex-row items-end justify-center gap-4">
              <div className="text-2xl font-light leading-none pr-2">
                {singleProduct.rating == 0 ? (
                  <span>No ratings yet</span>
                ) : (
                  <>
                    <span className="flex flex-row items-end justify-center gap-4">
                      <p className="text-mainBrown">Rating</p>
                      <p className="text-2xl font-light leading-none pr-2">
                        {singleProduct.rating}{" "}
                        <span className="text-base">/ 5</span>
                      </p>
                    </span>
                  </>
                )}
              </div>
            </span>
            <div className="flex flex-col gap-10 mt-6 mb-12 md:flex-row">
              {singleProduct.reviews.map((review) => (
                <div className="bg-white shadow-md rounded-md p-6 md:py-10 md:px-14 w-full flex flex-col gap-6">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="pTitle">{review.username}</p>
                      <p>
                        <span className="text-lg">{review.rating}</span> / 5
                      </p>
                    </div>
                    <img
                      className="w-20 h-20 object-cover rounded-md shadow-md"
                      src={singleProduct.imageUrl}
                    />
                  </div>
                  <hr></hr>
                  <p className="relative pl-1 before:content-[open-quote] before:text-3xl before:font-light before:absolute before:-top-4 before:-left-1 md:max-w-xs">
                    {review.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default OneProduct;
//<span className='text-2xl font-serif'>"</span>
