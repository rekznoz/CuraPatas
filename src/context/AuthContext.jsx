import {createContext, useState} from "react";
import {loguearUsuario} from "../config/AuthService";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); // Estado del usuario autenticado

    const login = async (credentials) => {
        try {
            // Supongamos que "loguearUsuario" es una función que valida al usuario en el backend
            const usuario = await loguearUsuario(credentials);
            setUser(usuario); // Guardar la información del usuario
            return true;
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            return false;
        }
    };

    const logout = () => {
        setUser(null); // Eliminar la información del usuario
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export default AuthProvider;
