import {
  BasketActions,
  BasketActionTypes,
} from "../../types/storeTypes/basketTypes";
import { Dispatch } from "redux";
import { IProduct } from "../../types/productTypes";
import { BasketApi } from "../../API/basketApi";

export const addToBasket = (product: IProduct) => {
  return (dispatch: Dispatch<BasketActions>) => {
    dispatch({
      type: BasketActionTypes.ADD_TO_BASKET,
      payload: product,
    });
    // try {
    //     dispatch({ type: CategoryActionTypes.FETCH_CATEGORY });
    //
    // } catch (e) {
    //     const msg = (e as Error).message;
    //     dispatch({
    //         type: CategoryActionTypes.FETCH_CATEGORY_ERROR,
    //         payload: msg,
    //     });
    // }
  };
};
export const getFromBasket = (id: number | string ) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      const products = await BasketApi.getBasketProducts(id);
      dispatch({
        type: BasketActionTypes.GET_BASKET,
        payload: products,
      });
    } catch (e) {
      const msg = (e as Error).message;
      console.log(msg);
      // dispatch({
      //   type: BasketActionTypes.FETCH_CATEGORY_ERROR,
      //   payload: msg,
      // });
    }
  };
};
