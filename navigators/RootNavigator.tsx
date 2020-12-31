import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { AppContext } from "../AppContext";
import SuccessSignUpModal from "../screens/SuccessSignUpModal";

export type RootStackParamList = {
    AuthNavigator: undefined;
    AppNavigator: undefined;
    SucessSignUpModal: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    const { authenticated } = useContext(AppContext);
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} mode='modal'>
            {authenticated ? (
                <RootStack.Screen
                    name="AppNavigator"
                    component={AppNavigator}
                />
            ) : (
                <>
                    <RootStack.Screen
                        name="AuthNavigator"
                        component={AuthNavigator}
                        options={{
                            animationEnabled: false
                        }}
                    />
                    <RootStack.Screen
                        name="SucessSignUpModal"
                        component={SuccessSignUpModal}
                    />
                </>
            )}
        </RootStack.Navigator>
    );
};

export default RootNavigator;
