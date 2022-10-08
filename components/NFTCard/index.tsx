import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, SHADOWS, SIZES } from "../../constants";
import { CircleButton, RectButton } from "../Button";
import { EthPrice, NFTTitle, SubInfo } from "../SubInfoComponents";

interface NFTCardI {
    data: {
        id: string;
        name: string;
        creator: string;
        price: number;
        description: string;
        image: any;
        bids: {
            id: string;
            name: string;
            price: number;
            image: any;
            date: string;
        }[];
    };
}

const NFTCard: React.FC<NFTCardI> = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >
            <View style={{ width: "100%", height: 250 }}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                    source={data.image}
                    resizeMode="cover"
                />
                <CircleButton imageUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />

            <View
                style={{
                    width: "100%",
                    padding: SIZES.font,
                }}
            >
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
            </View>
            <View
                style={{
                    marginTop: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <EthPrice price={data.price} />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    padding={SIZES.small}
                    handlePress={() => {
                        navigation.navigate(
                            "Details" as never,
                            { data } as never
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default NFTCard;
