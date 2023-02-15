import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export const Atc = ({ data }) => {
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView>
      <TouchableOpacity
        className="flex-1 h-48 rounded-xl mr-4 flex-row justify-evenly items-end space-x-2 p-4"
        style={{ backgroundColor: data.color, width: width - 30 }}
      >
        <Image
          source={
            data.source
              ? data.source
              : require("../assets/order-food-online-1.png")
          }
          className="h-36 w-36 rounded-lg bg-white"
        />

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

export const Category1 = ({ item }) => {
  return (
    <View className="space-y-2 items-center w-24 my-2 ">
      <TouchableOpacity className="p-2 rounded-xl border-[1px] drop-shadow-md border-gray-300 w-20 h-20 ">
        {/* <Image
          source={{ uri: imageUrl }}
          className="h-16 aspec-square rounded-lg"
        /> */}
      </TouchableOpacity>
      {/* <TouchableOpacity className="h-20 flex-row items-center p-2 border-gray-300 border-[1px] rounded-xl"> */}
      <Text className="text-gray-700 text-xs text-center" numberOfLines={2}>
        {item.name}
      </Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export const Category = ({ item }) => {
  return (
    <TouchableOpacity className="space-y-2 m-2 bg-white h-16 w-24 flex-row items-center border-gray-400 p-2  rounded-xl justify-center shadow-lg shadow-gray-400">
      <TouchableOpacity>
        <Text
          className="text-gray-700 text-center font-medium"
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
