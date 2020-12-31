import { Alert } from "react-native";
import { URL } from "../config/api";

interface NameI {
    first: string;
    last: string;
}

export async function signup(name: NameI, email: string, password: string): Promise<string | null> {
    const data = JSON.stringify({
        name,
        email,
        password
    });

    try {
        const response = await fetch(`${URL}/auth/signup`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await response.json();
        if (response.status === 200) {
            return parsedResponse.token;
        }

        Alert.alert(
            'Ocurrio un problema',
            parsedResponse.message,
            [{ text: 'Ok, intentare de nuevo.', onPress: () => console.log('Va a intentarlo de nuevo') }]);
    } catch (error) {
        console.log(error);
    }

    return null;
}


export async function login(email: string, password: string): Promise<string | null> {
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (response.status === 200) return (await response.json()).token;
        return (await response.json()).message;
    } catch (error) {
        console.log(error);
    }

    return null;
}