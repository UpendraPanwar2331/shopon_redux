import { combineReducers } from "redux";


import { ProductReducer } from "./ProductReducer";
import { cartReducer } from "./cartReducer";
import { checkoutReducer } from "./chechkoutReducer";

const reducers = combineReducers({
    products : ProductReducer,
    cart : cartReducer,
    order: checkoutReducer,
})
export default reducers;