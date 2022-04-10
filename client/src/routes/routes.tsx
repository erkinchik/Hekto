import {
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND,
  REGISTRATION_ROUTE,
  PRODUCT_DETAILS,
} from "../utils/paths";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Page404 from "../pages/page404/page404";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CartPage from "../pages/CartPage/CartPage";

export const routes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: LoginPage,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: BASKET_ROUTE,
    Component: CartPage,
  },
  {
    path: NOT_FOUND,
    Component: Page404,
  },
  {
    path: PRODUCT_DETAILS,
    Component: ProductDetailsPage,
  },
];
