import { About } from "../components/About/About";
import { Cart } from "../components/Cart/Cart";
import { Login } from "../components/Login/Login";
import { Main } from "../components/Main/Main";
import { ProductPage } from "../components/ProductPage/ProductPage";

interface RoutesType {
    path: string,
    element: JSX.Element
}

export const privateRoutes: Array<RoutesType> = [
    {path: '/about', element: <About />},
    {path: '/products', element: <Main />},
    {path: '/products/:id', element: <ProductPage />},
    {path: '/cart', element: <Cart />},
    {path: '/login', element: <Login />},
    {path: '/', element: <About />},
]

export const publicRoutes: Array<RoutesType> = [
    {path: '/about', element: <About />},
    {path: '/products', element: <Main />},
    {path: '/products/:id', element: <ProductPage />},
    {path: '/login', element: <Login />},
    {path: '/', element: <About />},
    {path: '/cart', element: <Login />},
]