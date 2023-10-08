import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
         {
            path:"/",
            element:<Home></Home>
         },
         {
            path:"/login",
            element:<Login></Login>
         },
         {
            path:"/register",
            element: <Register></Register>
         },
         {
            path:"/serviceDetails/:id",
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
         }
    ]
  },
]);


export default router;