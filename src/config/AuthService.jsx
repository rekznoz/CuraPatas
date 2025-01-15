import axios from 'axios';

const API_URL = "http://localhost:3000";

export const registrarUsuario = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/usuario`, userData, {
            headers: {"Content-Type": "application/json"}
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error durante el registro");
    }
};

export const loguearUsuario = async (userData) => {

    if (!userData || !userData.email || !userData.secreto) {
        throw new Error("Faltan datos para el login (email y/o contraseña)");
    }

    try {
        const response = await axios.post(`${API_URL}/usuario/login`, userData, {
            headers: {"Content-Type": "application/json"},
        });

        // Devuelve solo los datos relevantes
        return response.data.usuario;

    } catch (error) {
        // Manejando errores de axios o del servidor
        if (error.response) {
            // Errores del servidor (4xx, 5xx)
            throw new Error(error.response.data?.error || `Error del servidor: ${error.response.status}`);
        } else if (error.request) {
            // Problemas de conectividad (no hay respuesta del servidor)
            throw new Error("No se pudo contactar al servidor. Verifica tu conexión.");
        } else {
            // Otros errores de axios
            throw new Error(error.message || "Error inesperado durante el login.");
        }
    }
};

