import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { AppStackParamList } from "../ScreensParamList";


type AccountSettingNavigationProp = StackNavigationProp<AppStackParamList, 'AccountSettingScreen'>;
type Props = {
    navigation: AccountSettingNavigationProp;
}
const AccountSettingScreen: React.FC<Props> = ({navigation}) => {
    const { colors } = useTheme();
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text style={{ color: colors.text }}>Settings</Text>
        </View>
    );
};

export default AccountSettingScreen;
