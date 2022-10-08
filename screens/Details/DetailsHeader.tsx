import React from "react";
import { View, Image, StatusBar } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../App";
import { CircleButton } from "../../components";
import { assets } from "../../constants";

interface DetailsHeaderI {
    navigation: StackNavigationProp<StackParams, "Details">;
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

const DetailsHeader: React.FC<DetailsHeaderI> = ({ data, navigation }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 373,
            }}
        >
            <Image
                source={data.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            />
            <CircleButton
                imageUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={
                    StatusBar?.currentHeight ? StatusBar.currentHeight + 10 : 10
                }
            />
            <CircleButton
                imageUrl={assets.heart}
                right={15}
                top={
                    StatusBar?.currentHeight ? StatusBar.currentHeight + 10 : 10
                }
            />
        </View>
    );
};

export default DetailsHeader;
