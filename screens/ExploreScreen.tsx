import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../AppContext";
const HomeScreen: React.FC = () => {
    const { colors } = useTheme();
    const { account } = React.useContext(AppContext);
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text style={{ color: colors.text }}>
                {JSON.stringify(account)}
            </Text>
        </View>
    );
};

export default HomeScreen;
