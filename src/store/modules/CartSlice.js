import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartAmount: 0,
    cartProducts: [],
  },
  reducers: {
    ADD_PRODUCT_TO_CART: (state, action) => {
      const isProductInCart =
        state.cartProducts &&
        state.cartProducts.some(
          (product) => product.product.id === action.payload.id
        );

      if (isProductInCart) {
        let objIndex = state.cartProducts.findIndex(
          (product) => product.product.id === action.payload.id
        );
        state.cartProducts[objIndex].amount++;
        state.cartAmount = state.cartAmount + 1;
      } else {
        state.cartProducts.push({ product: action.payload, amount: 1 });
        state.cartAmount = state.cartAmount + 1;
      }
    },
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      let leprod = state.cartProducts.findIndex(
        (product) => product.product.id === action.payload
      );
      let theones = state.cartProducts[leprod].amount;
      console.log(theones);
      state.cartProducts = state.cartProducts.filter(
        (product) => product.product.id !== action.payload
      );
      state.cartAmount = state.cartAmount - theones;
    },

    ADD_QUANTITY_TO_PRODUCT: (state, action) => {
      let leprod = state.cartProducts.findIndex(
        (product) => product.product.id === action.payload
      );
      state.cartProducts[leprod].amount++;
      state.cartAmount = state.cartAmount + 1;
    },

    REMOVE_QUANTITY_TO_PRODUCT: (state, action) => {
      let leprod = state.cartProducts.findIndex(
        (product) => product.product.id === action.payload
      );
      if (state.cartProducts[leprod].amount <= 0) {
        return;
      } else {
        state.cartProducts[leprod].amount--;
        state.cartAmount = state.cartAmount - 1;
      }
    },

    TOSS_CART: (state, action) => {
      state.cartAmount = state.initialState;
      state.cartProducts = state.initialState;
    },
  },
});

const { actions, reducer } = cartSlice;

export default reducer;

const {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_QUANTITY_TO_PRODUCT,
  REMOVE_QUANTITY_TO_PRODUCT,
  TOSS_CART,
} = actions;

export const AddProductToCart = (productData) => (dispatch) => {
  dispatch(ADD_PRODUCT_TO_CART(productData));
};

export const DeleteProductFromCart = (id) => (dispatch) => {
  dispatch(REMOVE_PRODUCT_FROM_CART(id));
};

export const plusQuantity = (id) => (dispatch) => {
  dispatch(ADD_QUANTITY_TO_PRODUCT(id));
};

export const minusQuantity = (id) => (dispatch) => {
  dispatch(REMOVE_QUANTITY_TO_PRODUCT(id));
};

export const clearCart = (e) => (dispatch) => {
  dispatch(TOSS_CART(e));
};
