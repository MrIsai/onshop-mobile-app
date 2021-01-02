import React, { useRef, useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import NormalTextInput from "../../components/inputs/NormalTextInput";
import i18n from "i18n-js";
import Button from "../../components/Button";
import NormalSwitch from "../../components/switchs/NormalSwitch";
import { RouteProp } from "@react-navigation/native";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/RootNavigator";
import { AppContext } from "../../AppContext";
import { URL } from "../../config/api";
import { responseValidation } from "../../utils/api.utils";
import { AuthResponse } from "../../utils/interfaces.utils";

type SignUpPwdScreenRouteProp = RouteProp<
    AuthStackParamList,
    "SignUpPasswordScreen"
>;
type SignUpPwdScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
    route: SignUpPwdScreenRouteProp;
    navigation: SignUpPwdScreenNavigationProp;
};

const SignUpPasswordScreen: React.FC<Props> = ({ route, navigation }) => {
    const { setAccount } = React.useContext(AppContext);
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [showPasswords, setShowPasswords] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    // variable reference to take control over the second input
    const rePasswordInputRef = useRef<TextInput>(null);

    const handlePassword = (v: string) => {
        handleInputPasswords(v, rePassword);
        setPassword(v);
    };

    const handleRePassword = (v: string) => {
        handleInputPasswords(password, v);
        setRePassword(v);
    };

    const handleInputPasswords = (pwd: string, rePwd: string) => {
        if (pwd === rePwd && pwd.length > 7 && rePwd.length > 7)
            setIsValid(true);
        else if (isValid) setIsValid(false);
    };

    const handleSignUp = async () => {
        const { email, firstname, lastname } = route.params;
        const name = { first: firstname, last: lastname };

        console.log("datos", email, name, password);

        // ** If you want avoid the sign up just uncomment this **
        //(() => navigation.navigate("SucessSignUpModal"))();

        const userInfo = { name, email, password };
        const jsondata = JSON.stringify(userInfo);

        try {
            const response = await fetch(`${URL}/auth/signup`, {
                method: "POST",
                body: jsondata,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data: AuthResponse = await responseValidation(response);
            if (data.status) {
                if (data.token && data.id) {
                    setAccount({
                        name,
                        email,
                        password,
                        token: data.token,
                        id: data.id,
                    });
                }

                (() => navigation.navigate("SucessSignUpModal"))();
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Ocurrio un problema interno", "Revisa la consola", [
                { text: "OK", onPress: () => 1 },
            ]);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.itemsContainer}>
                    <NormalTextInput
                        placeholder={i18n.t("enterPassword")}
                        value={password}
                        onChangeText={handlePassword}
                        secureTextEntry={!showPasswords}
                        autoCorrect={false}
                        textContentType="newPassword"
                        blurOnSubmit={false}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            rePasswordInputRef.current?.focus()
                        }
                    />
                    <NormalTextInput
                        placeholder={i18n.t("reEnterPassword")}
                        value={rePassword}
                        onChangeText={handleRePassword}
                        secureTextEntry={!showPasswords}
                        autoCorrect={false}
                        ref={rePasswordInputRef}
                        blurOnSubmit
                        returnKeyType="done"
                    />
                    <View>
                        <NormalSwitch
                            text={i18n.t("showPassword")}
                            value={showPasswords}
                            onValueChange={() => setShowPasswords((v) => !v)}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
                <Button
                    title="Registrar"
                    disabled={!isValid}
                    onPress={handleSignUp}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    itemsContainer: {
        flex: 6,
        padding: 15,
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SignUpPasswordScreen;
