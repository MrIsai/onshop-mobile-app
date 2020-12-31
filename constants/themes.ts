import { DefaultTheme, DarkTheme as DT, Theme } from "@react-navigation/native"

export const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#2ec4b6', /* blue */
        background: '#fdfffc', /* white */
        card: '#fdfffc', /* white */
        text: '#011627', /* black */
        border: '#011627', /* black */
        notification: '#011627' /* black */,
    }
}

export const DarkTheme = {
    ...DT,
    colors: {
        ...DT.colors,
        primary: '#2ec4b6',
        background: '#000',
        card: '#000',
        text: '#fdfffc',
        border: '#fdfffc',
        notification: '#fdfffc',
    }
}