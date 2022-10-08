import React from "react";
import {
    TouchableOpacity,
    ViewStyle,
    GestureResponderEvent,
    Image,
    ImageSourcePropType,
} from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

interface CircleButtonI extends ViewStyle {
    imageUrl: ImageSourcePropType;
    handlePress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CircleButton: React.FC<CircleButtonI> = ({
    imageUrl,
    handlePress,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image
                source={imageUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    );
};

export default CircleButton;
