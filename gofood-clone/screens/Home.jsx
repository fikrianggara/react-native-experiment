import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  StarIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import {
  Atc,
  Category,
  Promo as PromoCard,
  Walktrough as WalktroughCard,
} from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import sanityClient, { urlFor } from "../sanity";
import { promos } from "./Promo";

const atcData = [
  {
    title: "Gofood belum tersedia di tempat anda",
    color: "#f87171",
    source: require("../assets/order-food-online-1.png"),
  },
  {
    title: "Nantikan kehadiran kami",
    color: "#f97316",
    source: require("../assets/order-food-online-3.png"),
  },
  {
    title: "Kami tidak sabar bertemu anda",
    color: "#f59e0b",
    source: require("../assets/sharing-pizza.png"),
  },
  {
    title: "Segera!",
    color: "#65a30d",
    source: require("../assets/coffee-tea-3.png"),
  },
];

const Screen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=='featured']{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type->
  },
}`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <View className="pt-2 bg-white space-y-2 flex-1">
      {/* header */}
      <View className="pt-6">
        <View className="bg-white flex-row items-center space-x-2 p-2">
          <XMarkIcon size={24} color="gray" fontWeight={40} />
          <View className="flex-1">
            <View className="flex-row items-center">
              <Text className="font-bold text-lg text-gray-700">
                Tidak tersedia
              </Text>
              <ChevronDownIcon size={20} color="#22d3ee" />
            </View>
            <Text className="font-bold text-gray-300 text-xs">Lokasi anda</Text>
          </View>
          <HeartIcon size={24} color="gray" />
        </View>
        {/* Search Input */}
        <View className="flex-row bg-white p-2 px-4 items-center space-x-2">
          <View className="rounded-full bg-gray-100 flex-1 py-1 px-2 flex-row space-x-2 items-center">
            <MagnifyingGlassIcon size={16} color="gray" />
            <TextInput placeholder="Restoran terdekat" keyboardType="default" />
          </View>
        </View>
      </View>

      <ScrollView
        showVerticalScrollIndicator={false}
        className="border-b-[0.5px] border-gray-400"
      >
        {/* atc */}

        <Carousel>
          {atcData.map((atc, idx) => (
            <Atc key={idx} atc={atc} />
          ))}
        </Carousel>

        {/* promo */}

        <PromoCard promos={promos} />

        {/* categories */}
        <View className="space-x-2">
          <Grid
            nRow={featuredCategories.length >= 6 ? 2 : 1}
            Component={Category}
            itemData={featuredCategories}
          />
        </View>

        {/* Walktrough */}
        <WalktroughCard />

        {/* {featured} */}
        {featuredCategories.length > 0 &&
          featuredCategories.map((featured) => {
            return (
              // featured header
              <View key={featured._id}>
                <View className="p-4 ">
                  <Text className="font-medium w-[75%] text-lg leading-normal">
                    {featured.name}
                  </Text>
                  <Text className="text-gray-400">
                    {featured.short_description}
                  </Text>
                </View>
                <ScrollView
                  className="flex-row space-x-4 px-4 min-h-[50px]"
                  horizontal={true}
                  style="none"
                  showsHorizontalScrollIndicator={false}
                >
                  {featured.restaurants.map((restaurant) => (
                    <TouchableOpacity
                      key={restaurant._id}
                      onPress={() => {
                        navigation.navigate("Restaurant", {
                          id: restaurant._id,
                          name: restaurant.name,
                          rating: restaurant.rating,
                          short_description: restaurant.rating,
                          address: restaurant.address,
                          dishes: restaurant.dishes,
                          lat: restaurant.lat,
                          long: restaurant.long,
                          image: restaurant.image,
                          category: restaurant.type.name,
                        });
                      }}
                      className="w-48 h-56 bg-white rounded-xl mb-2 shadow shadow-gray-400"
                    >
                      <Image
                        source={{ uri: urlFor(restaurant.image).url() }}
                        className="bg-slate-600 h-36 rounded-xl"
                      ></Image>
                      <View className="p-2">
                        <Text className="font-bold text-gray-600">
                          {restaurant.name}
                        </Text>
                        <View className="flex-row items-center">
                          <StarIcon size={16} color="#4b5563" />
                          <Text className="text-">{restaurant.rating}</Text>
                        </View>
                        <View className="flex-row items-center space-x-2">
                          <MapPinIcon size={16} color="#9ca3af" />
                          <Text className="text-xs text-gray-400">
                            {restaurant.address}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            );
          })}

        {/* choose from cuisine */}

        {/* <View className="p-4 flex-row items-center">
          <Text className="font-medium flex-1">Pilih dari jenis masakan</Text>
          <View className="bg-green-300 rounded-full p-2 px-4">
            <Text className="text-green-700 font-medium">Mulai</Text>
          </View>
        </View>
        <SafeAreaView>
          <View className="py-4 pr-0 space-y-2">
            <ScrollView
              className="flex-row space-x-4 px-4"
              horizontal={true}
              style="none"
              showsHorizontalScrollIndicator={false}
            >
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-yellow-400 p-2"></View>
                <Text className="font-medium">Seafood</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-red-500 p-2"></View>
                <Text className="font-medium">Snack</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-sky-800 p-2"></View>
                <Text className="font-medium">Manis</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-lime-400 p-2"></View>
                <Text className="font-medium">Nasi</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-emerald-800 p-2"></View>
                <Text className="font-medium">Ayam</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-cyan-400 p-2"></View>
                <Text className="font-medium">Fast food</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-rose-800 p-2"></View>
                <Text className="font-medium">Roti</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView> */}

        {/* best rating */}
        {/* <View className="p-4">
          <Text className="font-medium w-[75%]">Makan malam terjangkau</Text>
          <Text className="text-gray-400">Dijamin kenyang</Text>
        </View>
        <SafeAreaView>
          <View className="py-4 pr-0 space-y-2">
            <ScrollView
              className="flex-row space-x-4 px-4"
              horizontal={true}
              style="none"
              showsHorizontalScrollIndicator={false}
            >
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Bebek Goreng</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Geprek</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Kwetiau Goreng</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Sate Ayam</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Tongseng Kambing</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Mie Goreng</Text>
              </View>
              <View className="space-y-2 items-center">
                <View className="h-20 w-20 rounded-full bg-amber-600 p-2"></View>
                <Text className="">Roti</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView> */}

        {/* populer di kawasan anda */}

        {/* <View className="p-4">
          <Text className="font-medium w-[75%]">Populer di sekitar anda</Text>
          <Text className="text-gray-400">sering dikunjungi orang</Text>
        </View>
        <ScrollView
          className="flex-row space-x-4 px-4"
          horizontal={true}
          style="none"
          showsHorizontalScrollIndicator={false}
        >
          <View className="w-36 bg-white rounded-xl mb-2 ">
            <View className="h-36 rounded-xl shadow-sm">
              <View className="h-24 aspect-square bg-red-600 flex m-auto rounded-lg"></View>
            </View>
            <View className="flex items-center p-2">
              <Text className="font-bold ">McDonald's</Text>
            </View>
          </View>
          <View className="w-36 bg-white rounded-xl mb-2 ">
            <View className="h-36 rounded-xl shadow-sm">
              <View className="h-24 aspect-square bg-fuchsia-800 flex m-auto rounded-lg"></View>
            </View>
            <View className="flex items-center p-2">
              <Text className="font-bold ">Solaria</Text>
            </View>
          </View>

          <View className="w-36 bg-white rounded-xl mb-2">
            <View className="h-36 rounded-xl shadow-sm">
              <View className="h-24 aspect-square bg-amber-500 flex m-auto rounded-lg"></View>
            </View>
            <View className="flex items-center p-2">
              <Text className="font-bold ">Hokben</Text>
            </View>
          </View>
          <View className="w-36 bg-white rounded-xl mb-2 ">
            <View className="h-36 rounded-xl shadow-sm">
              <View className="h-24 aspect-square bg-red-600 flex m-auto rounded-lg"></View>
            </View>
            <View className="flex items-center p-2">
              <Text className="font-bold ">KFC</Text>
            </View>
          </View>
          <View className="w-36 bg-white rounded-xl mb-2 ">
            <View className="h-36 rounded-xl shadow-sm">
              <View className="h-24 aspect-square bg-red-600 flex m-auto rounded-lg"></View>
            </View>
            <View className="flex items-center p-2">
              <Text className="font-bold ">Pizza Hut</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <Text
            className="text-sky-700 font-medium text-xs"
            onPress={() => navigation.navigate("About")}
          >
            About
          </Text>
        </TouchableOpacity>
        


        <View className="p-4 flex-row">
          <Text className="flex-1 font-medium">Rekomendasi</Text>
          <View className="bg-green-300 rounded-full p-2 px-4">
            <Text className="text-green-700 font-medium">Lihat semua</Text>
          </View>
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
        </View> */}

        <View className="px-4 bg-white py-4 mt-2 ">
          <View className="border-t-[0.5px] border-gray-400"></View>
        </View>
      </ScrollView>
      {/* footer */}
      <Footer />
    </View>
  );
};

export default Screen;
