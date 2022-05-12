import {BasketActions,BasketActionTypes} from "../../types/storeTypes/basketTypes";
import { Dispatch } from "redux";

export const addToBasket = (product) => {
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
