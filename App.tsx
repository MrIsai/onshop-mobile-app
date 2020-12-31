/*
 ** ONSHOP - e-commerce app
 ** Isai Pashel - isaipashel30@gmail.com
 **
 **
 */

import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { AppContext } from "./AppContext";
import RootNavigator from "./navigators/RootNavigator";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { translations } from "./constants/translations";
import { DarkTheme, LightTheme } from "./constants/themes";
import { useFonts } from "expo-font";
import LoadingScreen from "./screens/LoadingScreen";
import { enableScreens } from "react-native-screens";
import { Account } from "./utils/TypesAndIntefaces";

enableScreens();

export default function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [account, setAccount] = useState<Account | null>(null);

    const scheme = useColorScheme();
    i18n.translations = translations;
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;
    
    const [loaded, error] = useFonts({
        courgette: require("./assets/fonts/Courgette/Courgette-Regular.ttf"),
        "martel-sans-bold": require("./assets/fonts/Martel_Sans/MartelSans-Bold.ttf"),
        "martel-sans-light": require("./assets/fonts/Martel_Sans/MartelSans-Light.ttf"),
        "martel-sans-regular": require("./assets/fonts/Martel_Sans/MartelSans-Regular.ttf"),
        "source-sans-pro-bold": require("./assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf"),
        "source-sans-pro-light": require("./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf"),
        "source-sans-pro-regular": require("./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"),
    });

    if (error) {
        console.log(error);
        return <LoadingScreen />;
    }

    if (!loaded) return <LoadingScreen />;

    return (
        <AppearanceProvider>
            <AppContext.Provider
                value={{
                    authenticated,
                    setAuthenticated,
                    account,
                    setAccount,
                }}
            >
                <NavigationContainer
                    theme={scheme === "dark" ? DarkTheme : LightTheme}
                >
                    <RootNavigator />
                </NavigationContainer>
            </AppContext.Provider>
        </AppearanceProvider>
    );
}
