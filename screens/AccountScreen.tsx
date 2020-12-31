import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../AppContext";
import { AppStackParamList } from "./ScreensParamList";

type AccountNavigationProps = StackNavigationProp<AppStackParamList, "AppTab">;
type Props = {
    navigation: undefined;
};
const AccountScreen: React.FC<Props> = ({ navigation }) => {
    const { setAuthenticated } = useContext(AppContext);
    const { colors } = useTheme();
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text
                style={[{ color: colors.text }]}
                onPress={() => setAuthenticated(false)}
            >
                Cerrar sesion
            </Text>
        </View>
    );
};

export default AccountScreen;
