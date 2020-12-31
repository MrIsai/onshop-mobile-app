import React from "react";
import { Image } from "react-native";
import { IconProps } from "./IconProps";

const SearchIcon: React.FC<IconProps> = ({ size, focused, dark}) => {
    if(!dark){
        return (
            <Image
                source={
                    focused
                        ? require("../../assets/icons/icons8-search-100-filled.png")
                        : require("../../assets/icons/icons8-search-100.png")
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
                        ? require("../../assets/icons/icons8-search-100-white-filled.png")
                        : require("../../assets/icons/icons8-search-100-white.png")
                }
                style={{ width: size, height: size }}
                fadeDuration={0}
            />
        );
    }
};


export default SearchIcon;