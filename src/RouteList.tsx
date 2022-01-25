import { useRoutes } from "react-router-dom";

import { Home } from './pages/Home'
import { Album } from "./pages/Album";
import { Photo } from "./pages/Photo";
import { NotFound } from "./pages/NotFound";

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:slug', element: <Album /> },
        { path: '/photo', element: <Photo /> },
        { path: '*', element: <NotFound />}
    ]);
}