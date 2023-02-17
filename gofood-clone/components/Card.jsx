import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon, HeartIcon } from "react-native-heroicons/outline";
import { ClockIcon, TicketIcon } from "react-native-heroicons/solid";

export const Atc = ({ atc }) => {
  const width = Dimensions.get("window").width;

  return (
    <View className="h-48">
      <TouchableOpacity
        className="flex-1 rounded-xl mr-4 flex-row justify-evenly items-end space-x-2 p-4 bg-gray-100"
        style={{ backgroundColor: atc.color, width: width - 56 }}
      >
        <Image
          source={
            atc.source
              ? atc.source
              : require("../assets/order-food-online-1.png")
          }
          className="h-36 w-36 rounded-lg bg-white"
        />
        {/* <Image
          source={require("../assets/order-food-online-1.png")}
          className="h-36 w-36 rounded-lg bg-white"
        /> */}

        <Text
          className="flex-row text-white font-medium text-xl flex-1 text-left items-start"
          numberOfLines={4}
        >
          {atc.title}
        </Text>
      </TouchableOpacity>
    </View>
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

export const Dish = ({ name, price, description, imageUrl }) => {
  return (
    <View className="flex-row justify-between items-center h-36 border-b-[0.5px] border-gray-400 py-2 space-x-4">
      <View className="space-y-2 flex-[75%]">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="font-thin text-sm" numberOfLines={2}>
          {description}
        </Text>
        <Text className="font-medium">{price}</Text>
        <View className="flex-row justify-between">
          <HeartIcon
            size={20}
            color="gray"
            fontWeight={50}
            className="font-medium "
          />
        </View>
      </View>
      <View className="justify-between items-center space-y-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-20 aspect-square rounded-xl border-[1px] border-gray-300"
        />
        <TouchableOpacity className="border-[0.5px] border-gray-700 rounded-full py-1 px-4">
          <Text>Tambah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Walktrough = () => {
  return (
    <View className="p-2 px-4">
      <View className="border-[1px] rounded-2xl border-gray-200 p-3 flex-row space-x-2 items-center drop-shadow">
        <View className="flex-1">
          <Text className="font-bold ">Baru di GoFood?</Text>
          <Text className="text-md font-light">kenalin fitur baru kami</Text>
        </View>
        <View className="bg-green-300 rounded-full p-2 px-4">
          <Text className="text-green-700 font-medium">Mulai</Text>
        </View>
      </View>
    </View>
  );
};

export const Promo = ({ promos }) => {
  const navigation = useNavigation();

  const promoCount = promos.length;

  return (
    <View className="p-4 px-4 bg-white">
      <View className="border-[1px] rounded-2xl border-gray-200 p-3 flex-row space-x-2 items-center">
        <View className="flex-row flex-1 space-x-2 items-center">
          <View className="bg-yellow-200 h-8 aspect-square flex-row justify-center items-center rounded-full p-2">
            <TicketIcon color="red" size={20} rotation={45} />
          </View>
          <Text>Tersedia {promoCount} Promo</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("pressd");
            navigation.navigate("Promo", { promos: promos });
          }}
        >
          <View className="bg-red-600 h-6 aspect-square rounded-full flex-row items-center p-1">
            <ArrowRightIcon size={16} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const PromoItem = ({ title, perks, isPermanent, supportedPayment }) => {
  return (
    <View className="m-2 bg-gray-100 shadow shadow-gray-400 rounded-2xl spacep-y-2 border-[0.5px] border-gray-300">
      <View className="p-4 bg-white shadow shadow-gray-400 rounded-2xl mb-2 border-[0.5px] border-gray-300">
        <View className="space-y-2 border-b-[0.5px] border-dashed border-gray-400 pb-2">
          <Text className="text-lg fonr-bold">{title}</Text>
          <View className="space-y">
            {perks.map((perk, idx) => {
              return (
                <Text key={idx} className="font-thin">
                  - {perk}
                </Text>
              );
            })}
          </View>
        </View>
        <View className="flex-row space-x-2 items-center pt-2">
          <ClockIcon size={20} color="gray" />
          {isPermanent ? <Text>permanen</Text> : <Text>Waktu Terbatas</Text>}
        </View>
      </View>
      <View className="bg-gray-100 p-4 pt-2 rounded-b-2xl ">
        {supportedPayment && supportedPayment?.length < 1 ? (
          <Text className="text-gray-600">belum support pembayaran</Text>
        ) : (
          <View className="flex-row space-x-2 flex-wrap justify-start space-y-2 items-center">
            {supportedPayment.map((payment, idx) => (
              <Text
                key={idx}
                className="px-4 py-1 bg-sky-500 text-white rounded-full"
              >
                {payment}
              </Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
