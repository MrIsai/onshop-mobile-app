import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    TouchableOpacityProps,
    ViewProps,
} from "react-native";
import { Colors } from "../constants/colors";

const width = Dimensions.get("window").width;

interface ButtonProps extends TouchableOpacityProps, ViewProps {
    title: string;
    size?: "large" | "small";
    textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    size = "large",
    title,
    onPress,
    disabled,
    style,
    textColor,
}) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <View
                style={[
                    styles.button,
                    {
                        backgroundColor: disabled
                            ? Colors.ERROR
                            : colors.primary,
                        width: size === "small" ? width * 0.85 : width * 0.9,
                    },
                    style,
                ]}
            >
                <Text
                    style={[
                        styles.text,
                        {
                            color: textColor
                                ? textColor
                                : disabled
                                ? "#fff"
                                : colors.text,
                        },
                    ]}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        alignSelf: "center",
    },

    text: {
        fontFamily: "martel-sans-light",
        fontSize: 18,
        color: "#000",
    },
});

export default Button;
