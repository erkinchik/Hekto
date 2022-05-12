import {
  BasketActions,
  BasketActionTypes,
  BasketState,
} from "../../types/storeTypes/basketTypes";

const initialState: BasketState = {
  basket: [] || null,
};

export const basketReducer = (
  state = initialState,
  action: BasketActions
): BasketState => {
  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET:
      return { basket: [...state.basket, action.payload] };
    // case BasketActionTypes.REMOVE_FROM_BASKET:
    //   return { loading: false, error: null, user: action.payload };

    default:
      return state;
  }
};
