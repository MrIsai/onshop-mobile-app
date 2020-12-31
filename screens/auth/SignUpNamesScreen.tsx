import React, { useRef, useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Button from "../../components/Button";
import NormalTextInput from "../../components/inputs/NormalTextInput";
import i18n from "i18n-js";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigators/AuthNavigator";
import { Colors } from "../../constants/colors";
import { emailRegex, namesRegex } from "../../utils/RegularExpressions";

type SignUpNamesScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    "SignUpNamesScreen"
>;

type Props = {
    navigation: SignUpNamesScreenNavigationProp;
};

const SignUpNamesScreen: React.FC<Props> = ({ navigation }) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    // variable reference to take control over the second input
    const lastNameInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);

    const [isValid, setIsValid] = useState<boolean>(false);

    const handleUserName = (fname: string) => {
        setIsValid(
            namesRegex.test(fname) &&
                namesRegex.test(lastName) &&
                emailRegex.test(email)
        );
        setFirstName(fname);
    };

    const handleLastName = (lname: string) => {
        setIsValid(
            namesRegex.test(firstName) &&
                namesRegex.test(lname) &&
                emailRegex.test(email)
        );
        setLastName(lname);
    };

    const handleEmail = (emailtext: string) => {
        setIsValid(
            namesRegex.test(firstName) &&
                namesRegex.test(lastName) &&
                emailRegex.test(emailtext)
        );
        setEmail(emailtext);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.itemsContainer}>
                    <NormalTextInput
                        placeholder={i18n.t("enterFirstName")}
                        onChangeText={handleUserName}
                        value={firstName}
                        autoCorrect={false}
                        autoCapitalize="none"
                        textContentType="name"
                        blurOnSubmit={false}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            lastNameInputRef.current?.focus()
                        }
                    />
                    <NormalTextInput
                        placeholder={i18n.t("enterLastName")}
                        autoCorrect={false}
                        autoCapitalize="none"
                        textContentType="familyName"
                        value={lastName}
                        onChangeText={handleLastName}
                        ref={lastNameInputRef}
                        blurOnSubmit={false}
                        returnKeyType="next"
                        onSubmitEditing={() => emailInputRef.current?.focus()}
                    />
                    <NormalTextInput
                        placeholder={i18n.t("enterEmail")}
                        value={email}
                        onChangeText={handleEmail}
                        keyboardType="email-address"
                        returnKeyType='done'
                        autoCorrect={false}
                        autoCompleteType="email"
                        ref={emailInputRef}
                        blurOnSubmit
                    />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
                <Button
                    title={i18n.t("next")}
                    disabled={!isValid}
                    onPress={() =>
                        navigation.navigate("SignUpPwdScreen", {
                            firstname: firstName,
                            lastname: lastName,
                            email: email,
                        })
                    }
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

export default SignUpNamesScreen;
