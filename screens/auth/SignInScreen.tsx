import React, { useContext, useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
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


type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignInScreen'>;
type Props = {
    navigation: SignInScreenNavigationProp;
}
const SignInScreen: React.FC<Props> = ({navigation}) => {
    const {setAuthenticated} = useContext(AppContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordInputRef = useRef<TextInput>(null);
    const { colors } = useTheme();

    useEffect(() => {
        console.log('renderizando');
    },[]);
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
                        returnKeyType='done'
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Button title={i18n.t("ready")} onPress={() => setAuthenticated(true)} />
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
