import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
