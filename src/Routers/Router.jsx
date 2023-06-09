import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Register from "../Pages/Registrater/Register";
import Login from "../Pages/Login/Login";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Instructor from "../Pages/Instructor/Instructor";


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
]);
export default router ;