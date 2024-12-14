import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home";
import About from "../Pages/About";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/foods',
                element: <About/>
            },
            {
                path: '/contact',
                element: "#"
            }
        ]
    },
]);

export default routes;