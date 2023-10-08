import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";

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
         },
         {
            path:"/contact",
            element: <PrivateRoute><Contact></Contact></PrivateRoute>
         },
         {
            path:"/gallery",
            element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
         }
    ]
  },
]);


export default router;