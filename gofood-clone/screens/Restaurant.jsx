import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const Screen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      name,
      rating,
      short_description,
      address,
      dishes,
      lat,
      long,
      image,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  console.log({
    id,
    name,
    rating,
    short_description,
    address,
    dishes,
    lat,
    long,
    image,
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      <View className="pt-6">
        <View className="bg-white flex-row items-center space-x-2 p-2">
          <TouchableOpacity
            className="bg-gray-100 p-2 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon
              size={20}
              color="gray"
              fontWeight={50}
              className="font-medium"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
      <Text>Screen</Text>
    </ScrollView>
  );
};

export default Screen;
