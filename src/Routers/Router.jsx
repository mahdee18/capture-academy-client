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
import Payment from "../Pages/Dashboard/Payment/Payment";
import PymentHistory from "../Pages/Dashboard/PaymentHistory/PymentHistory";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";


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
                element:<AllClasses></AllClasses>
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
          // Admin Route
            {
              path: 'manage-user',
              element:<AdminRoute><ManageUser></ManageUser></AdminRoute>,
            },
            {
              path: 'manage-class',
              element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute> 
            },
            {
              path: 'feedback',
              element:<AdminRoute><Feedback></Feedback></AdminRoute> 
            },
            // Instructor Route
            {
              path: 'add-class',
              element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
              path: 'my-class',
              element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // Student Route
            {
              path: 'enrolled-class',
              element:<EnrolledClass></EnrolledClass>,
              loader: ()=>fetch('https://capture-academy-server-eta.vercel.app/enrolled-class')
            },
            {
              path: 'payment-history',
              element:<PymentHistory></PymentHistory>,
              loader: ()=>fetch('https://capture-academy-server-eta.vercel.app/enrolled-class')
            },
            {
              path: 'selected-class',
              element:<SelectClass></SelectClass>
            },
            {
              path:"payment",
              element:<Payment></Payment>
            }
        ]
    }
]);
export default router ;