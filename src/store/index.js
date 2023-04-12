import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import ProductsSlice from "./modules/ProductsSlice";
import cartSlice from "./modules/CartSlice";
const reducer = combineReducers({
  products: ProductsSlice,
  cart: cartSlice,
});
const index = configureStore({
  reducer,
});
export default index;
