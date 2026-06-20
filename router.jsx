
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./src/layout/Mainlayout";
import Home from "./src/pages/home/Home";
import Products from "./src/pages/products/Products";
import Register from "./src/Auth/Register";

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
            path:'Register',
            element:<Register/>
        }
    ]
  },
]);

export default router