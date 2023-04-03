import { ActionTypes } from "../constants/action_types";

const initialState = {
    cartList : []
}
export const cartReducer = (state = initialState,action) =>{
       const {type,payload} = action;
       switch(type) {
        case ActionTypes.SET_CART_DATA:
            const temp = [...state.cartList,payload]

        return {...state,cartList:temp}

        default :
        return state
       }
}