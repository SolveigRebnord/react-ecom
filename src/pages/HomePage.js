import { BeigeBtnS, LinedLink } from "../styles/Buttons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/modules/ProductsSlice";
import { Link } from "react-router-dom";
import StyleList from "../styles/StyleList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products); 

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const firstThree = products.slice(0, 3);
  const firstProduct = products.slice(0, 1);

  return (
    <>
      <section className="mx-8 my-8 mb-16 md:mx-14 md:flex flex-row-reverse justify-between items-center md:mb-20 lg:mx-80 lg:mt-12">
        <div className="relative">
          <div className="hidden lg:z-0 lg:inline-block absolute right-5 bottom-5 lg:h-[450px] lg:w-[370px] border-2 border-solid border-mainYellow"></div>
          <img
            className="rounded-md md:rounded-none w-full max-h-80 object-cover object-bottom md:max-h-[450px] md:w-[370px] z-30"
            src="/header_img.jpg"
          />
          <p className="hidden md:flex absolute bottom-4 left-1/3 text-sm lg:text-base lg:bottom-7 lg:right-12  flex-row justify-center gap-4 items-baseline">
            <span className="text-lg">Tablet Holder</span>
            <span className="text-sm">549 NOK</span>
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <h1 className="h1Desktop leading-tight">Random</h1>
            <p className="font-normal text-[18px] lowercase">
              Good quality, easy accessible
            </p>
            <h2 className="text-mainGreen lowercase mt-1">Stuff</h2>
          </div>
          <div className="my-6">
            <Link to={"/products"}>
              <BeigeBtnS className="rounded-none md:rounded-md w-full  lg:mt-8">
                All products
              </BeigeBtnS>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-mainBrown text-white py-14 flex flex-col gap-10 mt-14 md:flex-row md:justify-evenly">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <img src="/airplane.svg"></img>
          <p>
            Free shipping over 499 NOK <br />
            Always free returns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <img src="/headset.svg"></img>
          <p>
            Get in touch, we want you <br /> to have the best experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <img src="/recycle.svg"></img>
          <p>
            Our main goal is substaining <br /> an eco system for the next
            generation
          </p>
        </div>
      </section>
      <section className="my-20 lg:mx-32">
        <h2 className="text-center mb-16">New arrivals</h2>
        <StyleList>
          {firstThree.map((product) => (
            <div
              key={product.id}
              className="w-3/4 flex flex-col md:w-full md:p-4 border-2 border-mainBrown p-4 rounded-md md:border-none"
            >
              <div className="min-h-40">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-96 md:h-52 lg:h-96 w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 w-full ">
                <div>
                  <h3 className="pTitle relative">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </h3>
                  <p className="mt-1 text-gray-500 w-full line-clamp-3">
                    {product.description}
                  </p>
                </div>
                {product.price == product.discountedPrice ? (
                  <div className="h-16">
                    <p className="pPrize text-right mt-4">
                      {product.price} NOK
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-row justify-end gap-6 items-baseline w-full h-16 mt-4 md:gap-0 md:justify-between lg:justify-end lg:gap-2">
                    <p className="line-through font-light text-xs lg:text-sm">
                      {product.price}
                    </p>
                    <p className="pPrize">{product.discountedPrice} NOK</p>
                  </div>
                )}
              </div>
              <Link
                to={`/product/${product.id}`}
                className="w-full mx-auto my-2 lg:w-1/2"
              >
                <BeigeBtnS className="w-full bg-white text-mainBrown border-2 border-mainBrown rounded-none py-3 px-0 md:rounded-sm md:py-2 hover:bg-mainBrown hover:text-white">
                  Go to product
                </BeigeBtnS>
              </Link>
            </div>
          ))}
        </StyleList>
        <div className="text-center my-16">
          <Link className="" to={"/products"}>
            <LinedLink>See all</LinedLink>
          </Link>
        </div>
      </section>
      <section className="bg-mainYellow p-8 leading-tight flex flex-col gap-10 md:flex-row md:p-14 lg:justify-center lg:gap-32 lg:p-8 lg:px-32">
        <div className="flex flex-col gap-1 lg:pt-10">
          <h2 className="text-white ">
            Assorted stuff <br /> does not mean cheap
          </h2>
          <p className="font-semibold text-base mb-6">
            It means random yet <br className="lg:hidden"></br> reliable
            products for any need
          </p>
          <p className="max-w-sm">
            At Assorted Stuff, we believe there is a better way to do e-com. A
            more valuable way, where customers are earned rather than bought.
            We're obsessively passionate about it, and our mission is to help
            people achieve it
          </p>
        </div>
        <img
          src="/clothing_rack.jpg"
          alt="Clothing racks in an old, vintage style store"
          className="md:w-1/2 lg:max-w-md"
        />
      </section>
    </>
  );
};

export default HomePage;
