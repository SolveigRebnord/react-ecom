import { React } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsBySearch } from "../store/modules/ProductsSlice";
import { Link } from "react-router-dom";

function List(props) {
  const dispatch = useDispatch();
  const { searchedProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsBySearch());
  }, [dispatch]);

  const filteredData = searchedProducts.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });
  console.log(filteredData.length);
  return (
    <>
      {filteredData && filteredData.length == 0 ? (
        <div className="w-full relative md:w-1/2 mx-auto">
          <p className="absolute shadow-lg rounded-md bg-white p-4 z-20 left-0 -top-12 w-full text-sm">
            No hits..
          </p>
        </div>
      ) : (
        <div className="relative w-full md:w-1/2 mx-auto">
          <ul className="absolute shadow-lg rounded-md bg-white p-4 z-20 left-0 -top-12 w-full flex flex-col gap-8">
            {filteredData.map((item) => (
              <Link to={`/product/${item.id}`}>
                <li
                  key={item.id}
                  className="flex flex-row justify-between bg-mainGrey p-4"
                >
                  <div className="flex flex-col justify-between">
                    <p className="pTitle">{item.title}</p>
                    <p className="pPrize">{item.price} NOK</p>
                  </div>

                  <img src={item.imageUrl} className="w-20 h-20 object-cover" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default List;
