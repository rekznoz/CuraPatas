import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layouts/LayoutPublic";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home"
export const router = createBrowserRouter([
  {
    path: "/", // Ruta base de la aplicación
    element: <LayoutPublic />, // Layout público
    errorElement: <NotFound />, // Página de error en caso de ruta no encontrada
    children: [
      {
        errorElement: <NotFound />, // Página de error para las rutas secundarias
        children: [
          {
            index: true, // Página principal
            element: <Home />, // Componente Home
          }
        ],
      },
    ],
  },
]);
