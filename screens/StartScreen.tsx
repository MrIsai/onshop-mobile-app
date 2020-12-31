import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import i18n from "i18n-js";
import Title from "../components/Title";
import ElegantDivisor from "../components/divisors/ElegantDivisor";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigators/AuthNavigator";

type StartScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    "StartScreen"
>;
type Props = {
    navigation: StartScreenNavigationProp;
};

const width = Dimensions.get("window").width;
const StartScreen: React.FC<Props> = ({ navigation }) => {
    const { colors, dark } = useTheme();
    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Title>OnShop</Title>
                </View>
                <ElegantDivisor />
                <Image
                    source={require("../assets/start_image.jpg")}
                    style={styles.image}
                />
                <View style={styles.optionsContainer}>
                    <Button
                        title={i18n.t("signup")}
                        onPress={() => navigation.navigate("SignUpNamesScreen")}
                        size="small"
                    />
                    <Button
                        title={i18n.t("signin")}
                        onPress={() => navigation.navigate("SignInScreen")}
                        size="small"
                        style={{ backgroundColor: dark ? "#fff" : "#000" }}
                        textColor={dark ? "#000" : "#fff"}
                    />
                </View>
            </View>
            <StatusBar style={dark ? "light" : "dark"} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    optionsContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "stretch",
    },

    image: {
        borderRadius: 10,
        overflow: "hidden",
        width: width * 0.85,
        height: width * 0.85,
        alignSelf: "center",
        marginTop: 25,
    },
});

export default StartScreen;
