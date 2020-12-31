import React, { useContext } from "react";
import ExploreScreen from "../screens/ExploreScreen";
import AccountScreen from "../screens/AccountScreen";
import SearchScreen from "../screens/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreIcon from "../components/icons/ExploreIcon";
import SearchIcon from "../components/icons/SearchIcon";
import AccountIcon from "../components/icons/AccountIcon";
import { AppContext } from "../AppContext";
import { useTheme } from "@react-navigation/native";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import SettingsIcon from "../components/icons/SettingsIcon";
import AccountSettingScreen from "../screens/account/AccountSettingScreen";
import {
    AccountStackParamList,
    AppStackParamList,
    AppTabType,
    ExploreStackParamList,
    SearchStackParamList,
} from "../screens/ScreensParamList";

const AppStack = createStackNavigator<AppStackParamList>();
const AppTab = createBottomTabNavigator<AppTabType>();
const ExploreStack = createStackNavigator<ExploreStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();
const AccountStack = createStackNavigator<AccountStackParamList>();

const ExploreStackScreen: React.FC = () => {
    return (
        <ExploreStack.Navigator
            screenOptions={{
                headerTitleStyle: { fontFamily: "source-sans-pro-bold" },
            }}
        >
            <ExploreStack.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{ title: "Explore" }}
            />
        </ExploreStack.Navigator>
    );
};

const SearchStackScreen: React.FC = () => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerTitleStyle: { fontFamily: "source-sans-pro-bold" },
            }}
        >
            <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
        </SearchStack.Navigator>
    );
};

type AccountStackNavigationProp = StackNavigationProp<
    AppStackParamList,
    "AppTab"
>;
type AccountStackProps = {
    navigation: AccountStackNavigationProp;
};
const AccountStackScreen: React.FC<AccountStackProps> = ({ navigation }) => {
    const { dark } = useTheme();
    return (
        <AccountStack.Navigator
            screenOptions={{
                headerTitleStyle: { fontFamily: "source-sans-pro-bold" },
            }}
        >
            <AccountStack.Screen
                name="ProfileScreen"
                component={AccountScreen}
                options={{
                    title: "Account",
                    headerRight: () => (
                        <SettingsIcon
                            dark={dark}
                            size={25}
                            onPress={() =>
                                navigation.navigate("AccountSettingScreen")
                            }
                        />
                    ),
                }}
            />
        </AccountStack.Navigator>
    );
};

const AppTabNavigator: React.FC = () => {
    const { dark } = useTheme();
    const { authenticated } = useContext(AppContext);
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    if (route.name === "ExploreStackScreen")
                        return (
                            <ExploreIcon
                                focused={focused}
                                size={size}
                                dark={dark}
                            />
                        );
                    else if (route.name === "SearchStackScreen")
                        return (
                            <SearchIcon
                                focused={focused}
                                size={size}
                                dark={dark}
                            />
                        );
                    else if (route.name === "AccountDrawerScreen")
                        return (
                            <AccountIcon
                                focused={focused}
                                size={size}
                                dark={dark}
                            />
                        );
                },
            })}
            tabBarOptions={{
                showLabel: false,
                style:{borderTopWidth: 0}
            }}
        >
            <AppTab.Screen
                name="ExploreStackScreen"
                component={ExploreStackScreen}
                options={{ title: "Explore" }}
            />
            <AppTab.Screen
                name="SearchStackScreen"
                component={SearchStackScreen}
                options={{ title: "Search" }}
            />
            {authenticated ? (
                <AppTab.Screen
                    name="AccountDrawerScreen"
                    component={AccountStackScreen}
                    options={{ title: "Account" }}
                />
            ) : (
                <></>
            )}
        </AppTab.Navigator>
    );
};

const AppNavigator: React.FC = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="AppTab"
                component={AppTabNavigator}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="AccountSettingScreen"
                component={AccountSettingScreen}
                options={{ title: "Settings" }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigator;
