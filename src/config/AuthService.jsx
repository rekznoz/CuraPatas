const API_URL ="";

export const register = async (userData) => {
    const response = await fetch('${API_URL}/users/register', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Error durante el registro");
    return data;
}

export const login = async (userData) => {
    const response = await fetch('${API_URL}/users/login', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Error durante el login");
    return data;
};