import React, { useMemo } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ASSETS } from "./Images";

export const Atc = ({ data }) => {
  const width = Dimensions.get("window").width;

  const imageSource = useMemo(
    () => ASSETS.filter((item) => item.name == data.source)[0]
  );

  return (
    <SafeAreaView>
      <TouchableOpacity
        className={`flex-1 h-48 rounded-xl mr-8 flex-row justify-evenly items-end space-x-2 p-4`}
        style={{ backgroundColor: data.color, width: width - 30 }}
      >
        {imageSource?.image && (
          <Image
            source={imageSource.image}
            className="h-36 w-36 rounded-lg bg-white"
          />
        )}

        <Text
          className="flex-row text-white font-medium text-xl flex-1 text-left items-start"
          numberOfLines={4}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const Category = ({ item }) => {
  // console.log(item[]);
  return (
    <View className="space-y-2 items-center w-24 my-2 ">
      <TouchableOpacity className="p-2 rounded-xl border-[1px] drop-shadow-md border-gray-300 w-20 h-20 "></TouchableOpacity>
      <Text className="text-gray-700 text-xs" numberOfLines={1}>
        {item["name"]}
      </Text>
    </View>
  );
};
