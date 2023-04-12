import tw from "tailwind-styled-components";
import { NavLink } from "react-router-dom";
import { UnderlineLink } from "../styles/Buttons";

const StyleFooter = tw.footer`
    bg-mainBrown
    text-white
    w-full
    h-64
    mt-12
    p-8
    pt-14
    md:pt-20
    flex
    flex-col
    justify-between
    items-center
   
`;

const Footer = () => {
  return (
    <StyleFooter>
      <div className="">
        <nav>
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-20">
            <li>
              <NavLink to={"/products"}>
                <UnderlineLink>All products</UnderlineLink>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                <UnderlineLink>Contact</UnderlineLink>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <p className=" ">
          © 2021 - 2023 AssortedStuff, Inc. All rights reserved
        </p>
      </div>
    </StyleFooter>
  );
};

export default Footer;
