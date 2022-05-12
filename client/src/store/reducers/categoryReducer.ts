import {
  CategoryActionTypes,
  CategoryState,
  CategoryActions,
} from "../../types/storeTypes/categoryTypes";

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = (
  state = initialState,
  action: CategoryActions
): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY:
      return { loading: true, error: null, categories: [] };
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return { loading: false, error: null, categories: action.payload };
    case CategoryActionTypes.FETCH_CATEGORY_ERROR:
      return { loading: true, error: action.payload, categories: [] };

    default:
      return state;
  }
};
