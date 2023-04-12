import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: null,
    searchedProducts: [],
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
    SET_SEARCHED_PRODUCTS: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
});

export default productsSlice.reducer;

const { SET_PRODUCTS, SET_SINGLE_PRODUCT, SET_SEARCHED_PRODUCTS } =
  productsSlice.actions;

export const getProducts = () => async (dispatch) => {
  axios({
    method: "get",
    url: "https://api.noroff.dev/api/v1/online-shop?limit=100",
  })
    .then(function (response) {
      let data = response.data;

      dispatch(SET_PRODUCTS(data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchProductById = (id) => async (dispatch) => {
  axios({
    method: "get",
    url: `https://api.noroff.dev/api/v1/online-shop/${id}`,
  })
    .then(function (response) {
      let data = response.data;

      dispatch(SET_SINGLE_PRODUCT(data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const productsBySearch = () => (dispatch) => {
  axios({
    method: "get",
    url: "https://api.noroff.dev/api/v1/online-shop?limit=100",
  })
    .then(function (response) {
      let data = response.data;

      dispatch(SET_SEARCHED_PRODUCTS(data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

