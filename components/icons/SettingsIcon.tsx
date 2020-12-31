import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { IconProps } from "../props";

const SettingsIcon: React.FC<IconProps> = ({ size, dark, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Image
                style={{ width: size, height: size, marginHorizontal: 25 }}
                fadeDuration={0}
                source={
                    dark
                        ? require("../../assets/icons/icons8-settings-100-white.png")
                        : require("../../assets/icons/icons8-settings-100-black.png")
                }
            />
        </TouchableWithoutFeedback>
    );
};

export default SettingsIcon;
