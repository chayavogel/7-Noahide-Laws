//Parent Component
import App from "./App";
//Child Components - these are the pages
import Home from "./Pages/Home";
import List from "./Pages/List"
import Resources from "./Pages/Resources"
import ErrorPage from "./Pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: "/list",
                element: <List />,
                errorElement: <ErrorPage />
            },
            {
                path: "/resources",
                element: <Resources />,
                errorElement: <ErrorPage />
            }
        ]
    }
];

export default routes;
