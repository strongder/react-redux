import { type } from "@testing-library/user-event/dist/type";
import { ActionTypes } from "../constants/action-types";

const setProducts = (products)=>
{
   return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};



const selectedProduct= (product)=>
{
    return {
        type:ActionTypes.SELECTED_PRODUCT ,
        payload : product
      };
}

export default {setProducts, selectedProduct}
