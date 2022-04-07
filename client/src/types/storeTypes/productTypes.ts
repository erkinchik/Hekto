import {IProducts} from "../productTypes";

export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export interface ProductsState {
  products: IProducts;
  loading: boolean;
  error: null | string | object;
}
interface FetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProducts;
}

interface FetchProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}
interface FetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}
export type ProductsAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;
