import { ActionTypes } from "../constants/action_types";

const initialState = {
    listproduct : [],
    setselectproduct : {
        category: '',
        title: '',
        price: '',
        id: '',
        image: '',
        rating: {}
    }
}
export const ProductReducer = (state=initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case  ActionTypes.SET_PRODUCTS:
        return {...state, listproduct: payload};
    
        case ActionTypes.SET_SELECTED_PRODUCTS:
            return {...state,setselectproduct:payload};

        default:
        return state
    }
}