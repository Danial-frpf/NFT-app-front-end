import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParams } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    DetailsBid,
    DetailsDesc,
    FocusedStatusBar,
    RectButton,
    SubInfo,
} from "../../components";
import { View, Text } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";
import { FlatList } from "react-native-gesture-handler";
import DetailsHeader from "./DetailsHeader";

const Details: React.FC<StackScreenProps<StackParams, "Details">> = ({
    route,
    navigation,
}) => {
    const { data } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.whiteTransparent,
                    zIndex: 1,
                }}
            >
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    padding={SIZES.font}
                    {...SHADOWS.dark}
                />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.semiBold,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Current Bids
                                </Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default Details;
