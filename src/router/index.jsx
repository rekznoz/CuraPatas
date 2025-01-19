import {createBrowserRouter} from "react-router-dom";
import LayoutPublic from "../layouts/LayoutPublic";
import Error from "../pages/Error.jsx";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";
import PerfilUsuario from "../pages/PerfilUsuario.jsx";
import Mascotas from "../pages/Mascotas.jsx";
import Mascota from "../pages/Mascota.jsx";
import {obtenerPerfilePorUsername} from "../config/PerfilService.jsx";
import {obtenerAnimal, obtenerAnimales} from "../config/AnimalesService.jsx";

export const router = createBrowserRouter([
    {
        path: "/", // Ruta base de la aplicación
        element: <LayoutPublic/>, // Layout público
        errorElement: (
            <LayoutPublic>
                <Error/>
            </LayoutPublic>
        ), // Página de error en caso de ruta no encontrada
        children: [
            {
                index: true,
                element: <Inicio/>,
            },
            {
                path: "/contacto",
                element: <Contacto/>,
            },
            {
                path: "usuario/:username",
                element: <PerfilUsuario/>,
                loader: obtenerPerfilePorUsername,
            },
            {
                path: "mascotas",
                element: <Mascotas/>,
                loader: obtenerAnimales,
            },
            {
                path: "mascota/:id",
                element: <Mascota/>,
                loader: obtenerAnimal,
            }
        ],
    },
]);
