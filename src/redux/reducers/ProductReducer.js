import { ActionTypes } from "../constants/action_types";

const initialState = {
    //pure product bhej raha hai
    listproduct : [],
    // only selected product bhej raha
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