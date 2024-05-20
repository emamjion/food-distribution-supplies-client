import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import SuppliesPage from "../pages/Home/SuppliesPage";
import SupplyDetailsPage from "../pages/Home/SupplyDetailsPage";

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
            },
            {
                path: '/supplies/:id',
                element: <SupplyDetailsPage/>,
                loader: ({params}) => fetch(`http://localhost:5000/supplies/${params.id}`)
            }
        ]
    }
]);

export default router;