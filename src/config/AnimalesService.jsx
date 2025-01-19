import axios from 'axios';

const API_URL = "http://localhost:3000/animales/";

export const obtenerAnimales = async (nombreUsuario) => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener animales:", error)
        return []
    }
}

export const obtenerAnimalesUsuario = async (nombreUsuario) => {
    try {
        const response = await axios.get(`${API_URL}/a/${nombreUsuario}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener animales:", error)
        return []
    }
}

export const agregarAnimal = async (animal) => {
    try {
        const response = await axios.post(API_URL, animal);
        console.log("response", response)
        return response.data;
    } catch (error) {
        console.error("Error al agregar animal:", error)
        return {}
    }
}