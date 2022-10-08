import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../../constants";

const EndDate = () => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.whiteTransparent,
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "50%",
                ...SHADOWS.light,
                elevation: 1,
            }}
        >
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.primary,
                }}
            >
                Ending in
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                }}
            >
                12h 30m
            </Text>
        </View>
    );
};

export default EndDate;
