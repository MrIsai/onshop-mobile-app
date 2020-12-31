import React from "react";
import { Image } from "react-native";
import { IconProps } from "./IconProps";

const ExploreIcon: React.FC<IconProps> = ({ size, focused, dark }) => {
    if (!dark) {
        return (
            <Image
                source={
                    focused
                        ? require("../../assets/icons/icons8-compass-100-filled.png")
                        : require("../../assets/icons/icons8-compass-100.png")
                }
                style={{ width: size, height: size }}
                fadeDuration={0}
            />
        );
    }else{
        return (
            <Image
                source={
                    focused
                        ? require("../../assets/icons/icons8-compass-100-white-filled.png")
                        : require("../../assets/icons/icons8-compass-100-white.png")
                }
                style={{ width: size, height: size }}
                fadeDuration={0}
            />
        );
    }
};

export default ExploreIcon;
