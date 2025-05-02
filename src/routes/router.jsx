import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element: <Home></Home>
                },
                {
                    path:'/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=>fetch('/news.json'),
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    element:<LoginPage></LoginPage>
                },
                {
                    path:'/auth/register',
                    element:<RegisterPage></RegisterPage>
                }
            ]
            
        },
        {
            path: "/news",
            element: <h2>News layout</h2>
        },
        {
            path: "/*",
            element: <h2>Error404</h2>
        },




    ]
);
export default router;