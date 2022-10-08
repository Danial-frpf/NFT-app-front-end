import { View, Text } from "react-native";
import React from "react";
import { assets } from "../../../constants";
import ImageCap from "../ImageCap";

const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            {[assets.person02, assets.person03, assets.person04].map(
                (imageUrl, index) => (
                    <ImageCap imageUrl={imageUrl} index={index} key={index} />
                )
            )}
        </View>
    );
};

export default People;
