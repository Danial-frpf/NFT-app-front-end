import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";

interface ImageCapI {
    imageUrl: ImageSourcePropType;
    index: number;
}

const ImageCap: React.FC<ImageCapI> = ({ imageUrl, index }) => {
    return (
        <Image
            source={imageUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    );
};

export default ImageCap;
