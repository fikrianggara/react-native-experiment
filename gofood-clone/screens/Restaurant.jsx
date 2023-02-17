import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ExclamationCircleIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import {
  CurrencyDollarIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { RestaurantFooter } from "../components/Footer";
import { Promo as PromoCard, Dish as DishCard } from "../components/Card";
import { urlFor } from "../sanity";
import { promos } from "./Promo";

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

  let minPrice = 10000000;
  let maxPrice = 0;
  dishes.forEach((dish) => {
    if (dish.price < minPrice) {
      minPrice = dish.price;
    } else if (dish.price > maxPrice) {
      maxPrice = dish.price;
    }
  });
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-gray-100 relative"
      >
        <View>
          <View className="bg-white flex-row items-center space-x-2 justify-between h-48 relative">
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-full w-full bg-gray-100"
            />
            <View className="absolute top-8 flex-row justify-between p-4 items-center w-full">
              <TouchableOpacity
                className="bg-gray-100 p-2 rounded-full"
                onPress={navigation.goBack}
              >
                <ArrowLeftIcon
                  size={20}
                  color="gray"
                  fontWeight={50}
                  className="font-medium "
                />
              </TouchableOpacity>
              <View className="flex-row space-x-2 justify-between">
                <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
                  <MagnifyingGlassIcon
                    size={20}
                    color="gray"
                    fontWeight={50}
                    className="font-medium"
                  />
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
                  <ShareIcon
                    size={20}
                    color="gray"
                    fontWeight={50}
                    className="font-medium"
                  />
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
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
        </View>
        {/* summary */}
        <View className="flex-row justify-between space-x-4 p-4 bg-white items-center">
          <View className="flex-row justify-start space-x-4 items-start">
            {/* <Image
            source={{ uri: urlFor(image).url() }}
            className="h-14 aspect-square rounded-xl border-[1px] border-gray-300"
          ></Image> */}
            <View className="space-y-2">
              <Text className="font-medium text-2xl">{name}</Text>
              <View className="flex-row space-x-2 ">
                <Text className="px-2 rounded-full text-white bg-orange-600 text-xs">
                  Super Partner
                </Text>
                <Text className="text-xs text-gray-500">{category}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <ChevronRightIcon size={20} color="gray" className="font-bold" />
          </TouchableOpacity>
        </View>
        {/* rating */}
        <View className="p-4 flex-row divide-x divide-gray-300 space-x-2 items-start">
          <View className="text-xl items-center flex-1 justify-center">
            <StarIcon size={20} color="#ea580c" />
            <Text className="font-medium">{rating}</Text>
          </View>
          <View className="text-xs text-center items-center space-x-2 flex-1 justify-center">
            <MapPinIcon size={20} color="#dc2626" />
            <Text
              className="font-medium text-gray-700 text-xs text-center"
              numberOfLines={2}
            >
              {address}
            </Text>
          </View>
          <View className="text-xs text-center items-center space-x-2 flex-1 justify-center">
            <CurrencyDollarIcon size={20} color="#dc2626" />
            <Text
              className="font-medium text-gray-700 text-xs text-center"
              numberOfLines={2}
            >
              {minPrice} - {maxPrice}
            </Text>
          </View>
        </View>
        {/* promo */}
        <PromoCard promos={promos} />
        {/* dishes */}
        <View className="bg-white p-4 space-y-4">
          {/* dishes header */}
          <Text className="text-xl font-bold">Menu</Text>
          <View className="border-t-[0.5px] border-dashed ">
            {dishes.map((dish) => {
              return (
                <DishCard
                  key={dish._id}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  imageUrl={urlFor(dish.image).url()}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>

      <RestaurantFooter />
    </View>
  );
};

export default Screen;
