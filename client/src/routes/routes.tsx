import {BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/paths'
import {Auth} from '../components/index'
import Home from '../pages/Home'

export const routes = [
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:HOME_ROUTE,
        Component: Home
    },
    {
        path:BASKET_ROUTE,
        Component: Home
    },

]

