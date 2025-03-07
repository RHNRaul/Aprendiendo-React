const API_REGISTER = import.meta.env.VITE_API_REGISTER_URL;
const API_LOGIN = import.meta.env.VITE_API_LOGIN_URL;


async function Registro(data) {
    try {
        const response = await fetch(API_REGISTER, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Respuesta ${response.status}: ${response.statusText} : ${errorText}`);
        }
        return await response.json();
    } catch (error) {
        console.log('Error capturado:', error);
        throw new Error(error.message);
    }
}

async function Login(data) {
    try {
        const response = await fetch(API_LOGIN, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Respuesta ${response.status}: ${response.statusText} : ${errorText}`);
        }
        return await response.text();
    } catch (error) {
        console.log('Error capturado:', error);
        throw new Error(error.message);
    }
}

export {Registro,Login}




