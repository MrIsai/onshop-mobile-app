import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Switch, SwitchProps, View, Text } from "react-native";

interface NormalSwitchProps extends SwitchProps {
    text: string;
}

const NormalSwitch: React.FC<NormalSwitchProps> = (props) => {
    const {colors} = useTheme();
    return (
        <View style={styles.base}>
            <View style={styles.switchContainer}>
                <View style={{ flex: 4 }}>
                    <Text style={[styles.text, {color: colors.text}]}>{props.text}</Text>
                </View>
                <View style={{ flex: 2, paddingRight: 5 }}>
                    <Switch
                        value={props.value}
                        onValueChange={props.onValueChange}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        width: "100%",
        padding: 3,
        height: 50,
        marginVertical: 10
    },

    switchContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily: 'martel-sans-bold',
        fontSize: 18
    }
});

export default NormalSwitch;
