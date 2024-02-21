import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Auth/Login";
import { Home } from "../containers/Home";
import App from "../App";

export const APPRouter = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Navigate to="login" replace />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "/app",
                element: <App />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="home" replace />,
                    },
                    {
                        path: "home",
                        element: <Home />,
                    },
                    {
                        path: "sales",
                        element: <h1>Sales Page</h1>,
                    },
                ],
            },
        ],
    },
]);
