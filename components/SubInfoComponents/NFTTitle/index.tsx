import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS } from "../../../constants";

interface NFTTitleI {
    title: string;
    subTitle: string;
    titleSize: number;
    subTitleSize: number;
}

const NFTTitle: React.FC<NFTTitleI> = ({
    title,
    subTitle,
    titleSize,
    subTitleSize,
}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: titleSize,
                    color: COLORS.primary,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: subTitleSize,
                    color: COLORS.primary,
                }}
            >
                {subTitle}
            </Text>
        </View>
    );
};

export default NFTTitle;
