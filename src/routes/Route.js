import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Oneproduct from '../pages/OneProduct';
import Checkout from '../pages/Checkout';


function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/product/:id" element={<Oneproduct/>}/>                
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </>
    );
}

export default Router;