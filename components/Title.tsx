import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = {
    color?: string;
};

const Title: React.FC<TitleProps> = ({ children, color }) => {
    const { colors } = useTheme();
    return (
        <Text style={[styles.text, { color: color ? color : colors.text }]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontFamily: 'courgette',
        textAlign: 'center'
    },
});

export default Title;
