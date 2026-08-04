import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./src/layout/Mainlayout";
import Home from "./src/pages/home/Home";
import Products from "./src/pages/products/Products";
import Register from "./src/Auth/Register/Register";
import Categories from "./src/pages/Categories/Categories";
import Login from "./src/Auth/Login/Login";
import Cart from "./src/pages/cart/Cart";
import ProductDetails from "./src/pages/products/ProductDetails";
import Productedrouter from "./src/Productedrouter";
import Loginlayout from "./src/layout/Loginlayout";
import ResetPassword from "./src/Auth/resetpassword/ResetPassword";
import Forgetpassword from "./src/Auth/forgetpassword/Forgetpassword";
import VerifyCode from "./src/Auth/VerifyCode";
import Checkout from "./src/pages/Checkout/Checkout";
import Profilelayout from "./src/pages/profile/Profilelayout";
import Account from "./src/pages/profile/Account"
import Order from "./src/pages/profile/Order";
import Aboutpage from "./src/pages/about/aboutpage";
import Shoppage from "./src/pages/Shop/Shoppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
        {
        path: "shop",
        element: <Shoppage></Shoppage>,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "about",
        element: <Aboutpage/>,
      },
       

      {
        path: "Cart",
        element: (
          <Productedrouter>
            <Cart />
          </Productedrouter>
        ),
      },
       {
        path: "Profile",
        element: 
          <Productedrouter>
            <Profilelayout></Profilelayout>
          </Productedrouter>,
                   children:[
          {
            index:true,
            element:<Account></Account>
          },
          
          {
            path:"order",
            element:<Order></Order>
          }
        ],
      },
        {
        path: "Checkout",
        element: (
          <Productedrouter>
            <Checkout></Checkout>
          </Productedrouter>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Loginlayout />,
    children: [
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "ResetPassword",
        element: <ResetPassword />,
      },
      {
        path: "ForgetPassword",
        element: <Forgetpassword/>,
      },
       {
        path: "VerifyCode",
        element: <VerifyCode/>,
      },
    ],
  },
]);

export default router;
