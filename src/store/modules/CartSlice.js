import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartAmount: 0,
        cartProducts: []
    },
    reducers: {
        ADD_PRODUCT_TO_CART: (state, action) => {
            const isProductInCart = state.cartProducts && state.cartProducts.some(product => product.product.id === action.payload.id);

            if (isProductInCart) {

                let objIndex = state.cartProducts.findIndex((product => product.product.id === action.payload.id));
                state.cartProducts[objIndex].amount++
                state.cartAmount = state.cartAmount+1
            } else {
                state.cartProducts.push({product: action.payload, amount: 1})
                state.cartAmount = state.cartAmount+1
            }
                
            
            
        },
        REMOVE_PRODUCT_FROM_CART: (state, action) => {
            state.cartProducts = state.cartProducts.filter(function(product) {
                return product.id !== action.payload;
            })
            state.cartAmount = state.cartAmount-1
        }

    }
});

const {actions, reducer} = cartSlice;
 
export default reducer;

const {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} = actions;

export const AddProductToCart = (productData) => (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART(productData));
}

export const DeleteProductFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART(id));
}
