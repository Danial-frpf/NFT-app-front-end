import React from "react";
import { View, Text, Image } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../../../constants";

interface EthPriceI {
    price: number;
}

const EthPrice: React.FC<EthPriceI> = ({ price }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 2,
                }}
            />
            <Text
                style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                }}
            >
                {price}
            </Text>
        </View>
    );
};

export default EthPrice;
