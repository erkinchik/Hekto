import axios from "axios";

import {
  CategoryAction,
  CategoryActionTypes,
} from "../../types/storeTypes/categoryTypes";
import { Dispatch } from "redux";
import { ICategory } from "../../types/categoryTypes";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORY });
      const { data } = await axios.get<ICategory[]>(
        "http://localhost:5000/category"
      );
      console.log(data);
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (e) {
      const msg = (e as Error).message;
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_ERROR,
        payload: msg,
      });
    }
  };
};
