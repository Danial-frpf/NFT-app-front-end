import React from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { StatusBarProps } from "expo-status-bar";

interface FocusedStatusBarI extends StatusBarProps {
    barStyle?: StatusBarStyle;
}

const FocusedStatusBar: React.FC<FocusedStatusBarI> = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
