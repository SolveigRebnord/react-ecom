import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import ProductsSlice from './modules/ProductsSlice';


const reducer = combineReducers({
    products: ProductsSlice,

})
const index = configureStore({
    reducer,
    
})
export default index;

