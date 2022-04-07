import axios from "axios";

import {
  ProductsAction,
  ProductsActionTypes,
} from "../../types/storeTypes/productTypes";
import { Dispatch } from "redux";
import { IProducts } from "../../types/productTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const { data } = await axios.get<IProducts>(
        "http://localhost:5000/device"
      );
      console.log(data);
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      const msg = (e as Error).message;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: msg,
      });
    }
  };
};
