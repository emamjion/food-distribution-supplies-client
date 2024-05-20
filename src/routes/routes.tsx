import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import SuppliesPage from "../pages/Home/SuppliesPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/supplies',
                element: <SuppliesPage/>
            }
        ]
    }
]);

export default router;