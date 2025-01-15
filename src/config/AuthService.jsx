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
    try {
        console.log(userData);
        const response = await axios.post(`${API_URL}/usuario/login`, userData, {
            headers: {"Content-Type": "application/json"}
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error durante el login");
    }
};
