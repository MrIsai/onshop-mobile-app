import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

const ElegantDivisor: React.FC = () => {
    const { dark } = useTheme();
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.line,
                    { backgroundColor: dark ? "#fff" : "#000" },
                ]}
            ></View>
            <View
                style={[
                    styles.square,
                    { backgroundColor: dark ? "#fff" : "#000" },
                ]}
            ></View>
            <View
                style={[
                    styles.line,
                    { backgroundColor: dark ? "#fff" : "#000" },
                ]}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    square: {
        width: 20,
        height: 20,
        transform: [{ rotate: "45deg" }],
        marginHorizontal: "5%",
    },

    line: {
        width: "35%",
        height: 2,
    },
});

export default ElegantDivisor;
