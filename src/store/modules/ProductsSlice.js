import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        singleProduct: null,
    },
    reducers: { 
        SET_PRODUCTS: (state, action) => {
            console.log("SET_PRODUCTS: action.payload", action.payload)
            state.products = action.payload; 

        },
        SET_SINGLE_PRODUCT: (state, action) => {
            console.log("SET_SINGLE_PRODUCT: action.payload", action.payload)
            state.singleProduct = action.payload;
            
        },
    },
});
export default productsSlice.reducer


const {SET_PRODUCTS, SET_SINGLE_PRODUCT} = productsSlice.actions






export const getProducts = () => async dispatch => {

    axios({
        method: 'get',
        url: 'https://api.noroff.dev/api/v1/online-shop?limit=100',
      })
        .then(function (response) {
            console.log(response.data)
            let data = response.data
            console.log(data)
            dispatch(SET_PRODUCTS(data));
        })
        .catch(function (error) {
            console.log(error);
          });;

}


export const getProductById = (id) => async dispatch => {

    axios({
        method: 'get',
        url: `https://api.noroff.dev/api/v1/online-shop/${id}`,
      })
        .then(function (response) {
            console.log(response.data)
            let data = response.data
            console.log("single" + data)
            dispatch(SET_SINGLE_PRODUCT(data));
        })
        .catch(function (error) {
            console.log(error);
          });;

}
