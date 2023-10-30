import App from "./App";
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
                element: <Home />
            },
            {
                path: "/list",
                element: <List />
            },
            {
                path: "/resources",
                element: <Resources />
            }
        ]
    }
];

export default routes;
