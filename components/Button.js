import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ...SHADOWS.light,
        elevation: 5,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        resizeMode="contain"
        source={imgUrl}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
