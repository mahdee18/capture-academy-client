import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Register from "../Pages/Registrater/Register";
import Login from "../Pages/Login/Login";
import Instructor from "../Pages/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import SelectClass from "../Pages/Dashboard/SelectClass/SelectClass";
import Feedback from "../Pages/Dashboard/ManageClasses/feedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/instructor',
                element:<Instructor></Instructor>
            },
            {
                path:'/allclasses',
                element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
              path: 'admin-home',
              element:<AdminHome></AdminHome>
            },
            {
              path: 'manage-user',
              element:<ManageUser></ManageUser>,
            },
            {
              path: 'manage-class',
              element:<ManageClasses></ManageClasses> 
            },
            {
              path: 'feedback',
              element:<Feedback></Feedback> 
            },
            {
              path: 'add-class',
              element:<AddClass></AddClass>
            },
            {
              path: 'my-class',
              element:<MyClasses></MyClasses>
            },
            {
              path: 'enrolled-class',
              element:<EnrolledClass></EnrolledClass>
            },
            {
              path: 'selected-class',
              element:<SelectClass></SelectClass>
            },
        ]
    }
]);
export default router ;