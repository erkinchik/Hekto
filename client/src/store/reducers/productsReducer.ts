import {
  ProductsActionTypes,
  ProductsAction,
  ProductsState,
} from "../../types/storeTypes/productTypes";

const initialState: ProductsState = {
  products: {
    count: 0,
    rows: []
  },
  loading: false,
  error: null,
};

export const productReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { loading: true, error: null, products: initialState.products };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return { loading: true, error: action.payload, products: initialState.products };

    default:
      return state;
  }
};
