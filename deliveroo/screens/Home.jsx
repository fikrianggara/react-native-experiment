import React, { useLayoutEffect } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";

const navigationOptions = {
  headerShown: false,
};

const Screen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(navigationOptions);
  }, []);

  return (
    <View className="pt-6 bg-gray-100">
      {/* header */}
      <View className="bg-white flex-row pb-3 items-center space-x-2 p-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 aspect-square p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-300 text-xs">Deliver</Text>

          <View className="flex-row items-center">
            <Text className="font-bold text-xl text-gray-700">
              Lokasi Sekarang
            </Text>
            <ChevronDownIcon size={20} color="#22d3ee" />
          </View>
        </View>

        <UserIcon size={35} color="#22d3ee" />
      </View>

      {/* Search Input */}
      <View className="flex-row bg-white p-4">
        <View className="rounded bg-gray-200 flex-1 py-2 px-2">
          <Text>Cari</Text>
        </View>
      </View>

      <View className="flex-row space-x-2 pt-4 pl-4 w-screen overflow-x-scroll scroll">
        <View className="h-24 w-36 rounded-lg bg-cyan-400 p-2">
          <Text className="text-white font-medium">Seafood</Text>
        </View>
        <View className="h-24 w-36 rounded-lg bg-lime-500 p-2">
          <Text className="text-white font-medium">Western</Text>
        </View>
        <View className="h-24 w-36 rounded-lg bg-orange-500 p-2">
          <Text className="text-white font-medium">Eastern</Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-lg font-bold">Restoran di Dekat Anda</Text>
        <Text className="text-gray-400">restoran sesuai dengan minat anda</Text>
      </View>
      <View className="flex-row space-x-4 px-4">
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-green-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold text-gray-600">Setarbak</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.6</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">WTC, Angso duo</Text>
            </View>
          </View>
        </View>
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-red-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold text-gray-600">McDonald's</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.0</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">Sipin</Text>
            </View>
          </View>
        </View>
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-green-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold">Setarbak</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.6</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">WTC, Angso duo</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-lg font-bold">Rekomendasi</Text>
        <Text className="text-gray-400">restoran sesuai dengan minat anda</Text>
      </View>
      <View className="flex-row space-x-4 px-4">
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-green-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold">Setarbak</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.6</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">WTC, Angso duo</Text>
            </View>
          </View>
        </View>
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-red-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold">McDonald's</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.0</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">Sipin</Text>
            </View>
          </View>
        </View>
        <View className="h-fit w-48 bg-white rounded-lg">
          <View className="bg-green-600 h-24 rounded-t-lg"></View>
          <View className="p-2">
            <Text className="font-bold">Setarbak</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#4b5563" />
              <Text className="text-">4.6</Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={16} color="#9ca3af" />
              <Text className="text-xs text-gray-400">WTC, Angso duo</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableHighlight>
        <Text
          className="text-sky-700 font-medium text-xs"
          onPress={() => navigation.navigate("About")}
        >
          About
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Screen;
