import axios from 'axios';

const API_URL = "http://localhost:3000/usuarios/";

export const obtenerPerfilePorUsername = async ({params}) => {
    if (!params.username) {
        throw new Response('El usuario no existe', {status: 404}, {message: 'Not Found'})
    }
    try {
        const response = await axios.get(`${API_URL}/u/${params.username}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener perfil:", error)
        return {}
    }
}