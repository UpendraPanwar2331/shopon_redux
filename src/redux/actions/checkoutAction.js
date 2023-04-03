import { ActionTypes } from "../constants/action_types";
export const PlaceOrder = (orderObj) => ({
type: ActionTypes.PLACE_ORDER,
payload :orderObj
})