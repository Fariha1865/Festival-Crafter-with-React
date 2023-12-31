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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateContactRoute from "./PrivateContactRoute";
import PrivateGalleryRoute from "./PrivateGalleryRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

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
            element: <PrivateContactRoute><Contact></Contact></PrivateContactRoute>
         },
         {
            path:"/gallery",
            element: <PrivateGalleryRoute><Gallery></Gallery></PrivateGalleryRoute>
         },
         {
            path:"/about",
            element: <AboutUs></AboutUs>
         }
    ]
  },
]);


export default router;