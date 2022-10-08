import {
    TouchableOpacity,
    ViewStyle,
    GestureResponderEvent,
    Text,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../../constants";

interface RectButtonI extends ViewStyle {
    fontSize: number;
    handlePress?: ((event: GestureResponderEvent) => void) | undefined;
}

const RectButton: React.FC<RectButtonI> = ({
    fontSize,
    handlePress,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}
            >
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};

export default RectButton;
