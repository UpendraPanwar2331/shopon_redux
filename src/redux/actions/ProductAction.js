import { ActionTypes } from "../constants/action_types";
export const setproducts = (products) => ({
    type:ActionTypes.SET_PRODUCTS,
    payload:products
});
export const setSelectedProducts = (product) => ({
    type:ActionTypes.SET_SELECTED_PRODUCTS,
    payload:product
});
