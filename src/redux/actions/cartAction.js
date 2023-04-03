import { ActionTypes } from "../constants/action_types";

export const setCartData = (product) => ({
      type:ActionTypes.SET_CART_DATA,
      payload:product
})