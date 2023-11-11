import ActionTypes from "../contants/action-type"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) =>
{
    switch (action.type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
}
