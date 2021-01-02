import { Alert } from "react-native";
import { AuthResponse } from '../utils/interfaces.utils';

export async function responseValidation(response: Response): Promise<AuthResponse> {
    const res = await response.json();
    if (response.status === 200) {
        const { token, email, id, name } = res;
        return { status: true, token, email, id, name };
    }
    else if (response.status === 500) {
        const { message } = res;
        Alert.alert('Ocurrio un problema en el servidor', message, [{ text: 'Intentare de nuevo', onPress: () => 0 }]);
        return { status: false };
    } else {
        const { message } = res;
        Alert.alert('Ocurrio un problema', message, [{ text: 'Intentare nuevo', onPress: () => 0 }])
        return { status: false };
    }
}