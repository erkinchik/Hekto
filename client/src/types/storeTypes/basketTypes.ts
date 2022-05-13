import { IProduct } from "../productTypes";

export enum BasketActionTypes {
  ADD_TO_BASKET = "ADD_TO_BASKET",
  REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET",
  GET_BASKET = "GET_BASKET",
}

export interface BasketState {
  basket: IProduct[];
}

interface BasketAddAction {
  type: BasketActionTypes.ADD_TO_BASKET;
  payload: IProduct;
}
interface BasketRemoveAction {
  type: BasketActionTypes.REMOVE_FROM_BASKET;
}
interface GetBasketAction {
  type: BasketActionTypes.GET_BASKET;
  payload: any[]
}

export type BasketActions =
  | BasketAddAction
  | BasketRemoveAction
  | GetBasketAction;
