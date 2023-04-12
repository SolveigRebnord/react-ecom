import { Link } from "react-router-dom";
import { UnderlineLink } from "../styles/Buttons";

const Checkout = () => {
  return (
    <>
      <section className="mx-8 md:mx-0 flex flex-col justify-between items-center gap-20 lg:gap-16 my-32 lg:my-16">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <img src="/check.svg" className="w-20" />
          <h1 className="text-center">Thank you for your purchase!</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-base">
            Order Number: <span className="font-semibold">004043338632</span>
          </p>
          <p>You should recieve an email shortly with all your order details</p>
        </div>
        <hr className="text-black h-2 w-full"></hr>
        <div className="flex flex-col justify-center items-center gap-8 ">
          <p className="text-base">Not feeling done yet?</p>
          <Link to={"/products"}>
            <UnderlineLink className="text-sm text-mainYellow font-semibold">
              Find more products
            </UnderlineLink>{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Checkout;
