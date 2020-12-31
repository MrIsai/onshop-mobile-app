import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type SectionProps = {
    title: string;
};

const Section: React.FC<SectionProps> = ({ title }) => {
    return (
        <View>
            <View>
                <Image
                    source={require("../assets/icons/icons8-compass-100.png")}
                    style={styles.icon}
                />
            </View>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
    },

    icon: {
        width: 25,
        height: 25,
    },
});
