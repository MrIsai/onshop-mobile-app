import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { AppContext } from "../AppContext";
import { RootStackParamList } from "../navigators/RootNavigator";
import i18n from "i18n-js";

type SuccessSignUpNaviationProp = StackNavigationProp<
    RootStackParamList,
    "SucessSignUpModal"
>;
type Props = {
    navigation: SuccessSignUpNaviationProp;
};
const SuccessSignUpModal: React.FC<Props> = ({ navigation }) => {
    const { setAuthenticated } = useContext(AppContext);
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback onPress={() => setAuthenticated(true)}>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {i18n.t("successSignUp")}
                    </Text>
                </View>
                <View>
                    <Text style={[styles.buttonText, { color: colors.text }]}>
                        {i18n.t("pressToContinue")}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },

    text: {
        fontFamily: "martel-sans-regular",
        fontSize: 20,
    },

    buttonText: {
        fontFamily: "source-sans-pro-bold",
        fontSize: 22,
    },
});

export default SuccessSignUpModal;
