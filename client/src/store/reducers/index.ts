import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";
import { authReducer } from "./authReducer";
import { basketReducer } from "./basketReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  auth: authReducer,
  basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
