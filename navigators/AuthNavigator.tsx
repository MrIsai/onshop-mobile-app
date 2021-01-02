import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpNamesScreen from "../screens/auth/SignUpNamesScreen";
import SignUpPasswordScreen from "../screens/auth/SignUpPasswordScreen";
import StartScreen from "../screens/StartScreen";
import i18n from "i18n-js";
import SuccessSignUpModal from "../screens/SuccessSignUpModal";

export type AuthStackParamList = {
    StartScreen: undefined;
    SignInScreen: undefined;
    SignUpNamesScreen: undefined;
    SignUpPasswordScreen: {
        firstname: string;
        lastname: string;
        email: string;
    };
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                gestureEnabled: true,
                headerTitleStyle: { fontFamily: "source-sans-pro-bold" },
            }}
        >
            <AuthStack.Screen
                name="StartScreen"
                component={StartScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="SignUpNamesScreen"
                component={SignUpNamesScreen}
                options={{ title: i18n.t("signUpName") }}
            />
            <AuthStack.Screen
                name="SignUpPasswordScreen"
                component={SignUpPasswordScreen}
                options={{ title: i18n.t("signUpPassword") }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
