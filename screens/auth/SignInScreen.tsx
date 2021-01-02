import React, { useContext, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import NormalTextInput from "../../components/inputs/NormalTextInput";
import i18n from "i18n-js";
import SubTitle from "../../components/SubTitle";
import { useTheme } from "@react-navigation/native";
import ElegantDivisor from "../../components/divisors/ElegantDivisor";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { AppContext } from "../../AppContext";
import { URL } from "../../config/api";
import { responseValidation } from "../../utils/api.utils";

type SignInScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    "SignInScreen"
>;
type Props = {
    navigation: SignInScreenNavigationProp;
};
const SignInScreen: React.FC<Props> = ({ navigation }) => {
    const { setAuthenticated, setAccount } = useContext(AppContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordInputRef = useRef<TextInput>(null);
    const { colors } = useTheme();

    const handleSignIn = async () => {
        //const response = await login(email, password);

        try {
            const response = await fetch(`${URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await responseValidation(response);
            if (!data.status) return;

            if (data.id && data.token && data.name && data.email) {
                setAccount({
                    name: data.name,
                    email: data.email,
                    id: data.id,
                    token: data.token,
                    password,
                });

                setAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un problema interno", "Revisa la consola", [
                { text: "OK", onPress: () => 1 },
            ]);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <SubTitle>Iniciar Sesion</SubTitle>
                    <Text style={[{ color: colors.text }, styles.text]}>
                        en{" "}
                        <Text
                            style={{
                                fontFamily: "courgette",
                                fontSize: 20,
                            }}
                        >
                            OnShop
                        </Text>
                    </Text>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <ElegantDivisor />
                </View>
                <View>
                    <NormalTextInput
                        placeholder={i18n.t("email")}
                        value={email}
                        onChangeText={(v) => setEmail(v)}
                        blurOnSubmit={false}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordInputRef.current?.focus()
                        }
                    />
                    <NormalTextInput
                        ref={passwordInputRef}
                        placeholder={i18n.t("password")}
                        value={password}
                        onChangeText={(v) => setPassword(v)}
                        secureTextEntry={true}
                        returnKeyType="done"
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Button title={i18n.t("ready")} onPress={handleSignIn} />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: 15,
    },

    titleContainer: {
        alignItems: "center",
        marginVertical: 30,
    },

    text: {
        fontFamily: "martel-sans-regular",
        fontSize: 18,
    },
});

export default SignInScreen;
