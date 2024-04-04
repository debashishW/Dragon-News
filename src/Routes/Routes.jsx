import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Account/Login";
import Register from "../Account/Register";
import NewsDetails from "../Pages/NewsDetail/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                 path:'/news/:id',
                 element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;