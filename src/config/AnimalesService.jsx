import axios from 'axios';

const API_URL = "http://localhost:3000/animales/";

export const obtenerAnimales = async () => {
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

export const obtenerAnimal = async ({params}) => {
    if (!params.id) return {}
    try {
        const response = await axios.get(`${API_URL}${params.id}`);
        return response.data;
    } catch (error) {
        return false
    }
}

export const agregarAnimal = async (animal) => {
    try {
        const response = await axios.post(API_URL, animal);
        return response.data;
    } catch (error) {
        console.error("Error al agregar animal:", error)
        return {}
    }
}