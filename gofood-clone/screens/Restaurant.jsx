import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  ExclamationCircleIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

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
      category,
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
    category,
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
      <View className="pt-6">
        <View className="bg-white flex-row items-center space-x-2 p-2 justify-between px-4">
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
          <View className="flex-row space-x-2 justify-between">
            <TouchableOpacity>
              <MagnifyingGlassIcon
                size={20}
                color="gray"
                fontWeight={50}
                className="font-medium"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ShareIcon
                size={20}
                color="gray"
                fontWeight={50}
                className="font-medium"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ExclamationCircleIcon
                size={20}
                color="gray"
                fontWeight={50}
                className="font-medium"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* summary */}
      <View className="flex-row justify-between space-x-4 p-4 bg-white">
        <View className="space-y-2 ">
          <Text className="font-medium text-xl">{name}</Text>
          <View className="flex-row space-x-2 ">
            <Text className="px-2 rounded-full text-white bg-orange-600 text-xs">
              Super Partner
            </Text>
            <Text className="text-xs text-gray-500">{category}</Text>
          </View>
        </View>
        <Image
          source={{ uri: urlFor(image).url() }}
          className="h-14 aspect-square rounded-xl border-[1px] border-gray-300"
        ></Image>
      </View>
      {/* rating */}
      <View className="p-4 flex-row divide-x space-x-4 divide-gray-400">
        <View className="flex-row items-center">
          <StarIcon size={16} color="#ea580c" />
          <Text className="text-">{rating}</Text>
        </View>
        <View className="flex-row items-center space-x-2 ">
          <MapPinIcon size={16} color="#ea580c" />
          <Text className="text-xs text-gray-700">{address}</Text>
        </View>
      </View>
      <Text>Screen</Text>
    </ScrollView>
  );
};

export default Screen;
