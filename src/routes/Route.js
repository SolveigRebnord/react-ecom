import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Oneproduct from "../pages/OneProduct";
import Checkout from "../pages/Checkout";
import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
        handle: { crumb: () => <Link to="/">Home</Link> },
      },
      {
        path: "/product/:id",
        element: <Oneproduct />,
        handle: {
          crumb: () => (
            <>
              <Link to="/">Home</Link>
              <Link to="/">Home</Link>
            </>
          ),
        },
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
