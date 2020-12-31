import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";

const SubTitle: React.FC = ({ children }) => {
    const { colors } = useTheme();
    return (
        <Text style={[styles.text, { color: colors.text }]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "martel-sans-bold",
        fontSize: 26,
    },
});

export default SubTitle;
