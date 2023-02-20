import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Error from "../Components/Shared/Error/Error";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Layouts/Main/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: < Home />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
])