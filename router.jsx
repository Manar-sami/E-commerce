
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./src/layout/Mainlayout";
import Home from "./src/pages/home/Home";
import Products from "./src/pages/products/Products";
import Register from "./src/Auth/Register/Register";
import Categories from "./src/pages/Categories/Categories";
import Login from './src/Auth/Login/Login'
import Cart from './src/pages/cart/Cart'
import ProductDetails from "./src/pages/products/ProductDetails";
import Productedrouter from "./src/Productedrouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
        {
            index: true,
            element:<Home />
        },
        {
            path:'products',
            element:<Products/>
        },
        {
            path:'product/:id',
            element:<ProductDetails/>
        },
        {
            path:'Register',
            element:<Register/>
        },
        {
            path:'Categories',
            element:<Categories/>
        },
         {
            path:'Login',
            element:<Login/>
        },
        {
            path:'Cart',
            element:
            <Productedrouter>
                <Cart/>
            </Productedrouter>
        }
    ]
  },
]);

export default router