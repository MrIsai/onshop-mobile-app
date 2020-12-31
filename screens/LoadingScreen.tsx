import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useColorScheme } from "react-native-appearance";

const LoadingScreen: React.FC = () => {
    const scheme = useColorScheme();
    return (
        <View
            style={[styles.container, { backgroundColor: scheme === 'dark' ? '#000' : '#fff'}]}
        >
            <ActivityIndicator size="large" color={scheme === 'dark' ? "#fff" : "#000"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default LoadingScreen;
