import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";
import { authReducer } from "./AuthReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
