import React from "react";
import { Text, TouchableOpacity, Dimensions, View } from "react-native";

export const Atc = ({ data }) => {
  const width = Dimensions.get("window").width;
  return (
    <View className="shadow-xl">
      <TouchableOpacity
        className={`h-48 rounded-xl bg-gray-300 p-2 mr-8 relative`}
        style={{ backgroundColor: data.color, width: width - 30 }}
      >
        <Text
          className="flex-row text-white font-medium absolute bottom-4 right-[0.5] text-2xl w-[50%] text-left items-start"
          numberOfLines={3}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
