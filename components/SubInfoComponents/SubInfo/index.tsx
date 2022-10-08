import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";
import People from "../People";
import EndDate from "../EndDate";

const SubInfo = () => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <People />
            <EndDate />
        </View>
    );
};

export default SubInfo;
