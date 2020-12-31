import React from "react";
import { Image } from "react-native";
import { IconProps } from "./IconProps";

const AccountIcon: React.FC<IconProps> = ({ size, focused, dark }) => {
    const iconStyle = { width: size, height: size };
    if (!dark) {
        return (
            <Image
                source={
                    focused
                        ? require("../../assets/icons/icons8-customer-100-filled.png")
                        : require("../../assets/icons/icons8-customer-100.png")
                }
                style={iconStyle}
                fadeDuration={0}
            />
        );
    } else {
        return (
            <Image
                source={
                    focused
                        ? require("../../assets/icons/icons8-customer-100-white-filled.png")
                        : require("../../assets/icons/icons8-customer-100-white.png")
                }
                style={iconStyle}
                fadeDuration={0}
            />
        );
    }
};

export default AccountIcon;
