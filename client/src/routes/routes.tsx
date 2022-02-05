import {BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND, REGISTRATION_ROUTE} from '../utils/paths'
// import {} from '../components/index'
import HomePage from '../pages/HomePage'
import LoginPage from "../pages/LoginPage";
import Page404 from "../pages/page404/page404";

export const routes = [
    {
        path:LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path:REGISTRATION_ROUTE,
        Component: LoginPage
    },
    {
        path:HOME_ROUTE,
        Component: HomePage
    },
    {
        path:BASKET_ROUTE,
        Component: HomePage
    },
    {
        path: NOT_FOUND,
        Component: Page404
    },
]

