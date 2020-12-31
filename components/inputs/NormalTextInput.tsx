import { useTheme } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    TextInput,
    TextInputProps,
} from "react-native";

interface NormalTextInputProps extends TextInputProps {
    title?: string;
}

type Ref = TextInput;
const NormalTextInput = React.forwardRef<Ref, NormalTextInputProps>(
    (props, ref) => {
        const { colors, dark } = useTheme();
        return (
            <TextInput
                ref={ref}
                {...props}
                placeholderTextColor={dark ? "#999999" : "#666666"}
                style={[
                    props.style,
                    styles.textinput,
                    {
                        borderColor: colors.border,
                        color: colors.text,
                        backgroundColor: colors.background,
                    },
                ]}
            />
        );
    }
);

const styles = StyleSheet.create({
    textinput: {
        fontFamily: "source-sans-pro-regular",
        fontSize: 18,

        width: Dimensions.get("window").width * 0.9,
        alignSelf: "center",
        marginVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,

        elevation: 5,
    },
});

export default NormalTextInput;
