import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { PromoItem as PromoItemCard } from "../components/Card";

export const promos = [
  {
    _id: 1,
    title: "Cashback 50% koin Gopay hingga 70k",
    perks: ["Extra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: false,
    supported_payment: ["alfamart"],
  },
  {
    _id: 2,
    title: "Cashback 50% koin Gopay hingga 70k",
    perks: ["Ekstra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: false,
    supported_payment: ["indomaret"],
  },
  {
    _id: 3,
    title: "Diskon Ongkir 2k",
    perks: ["Diskon ekstra 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: true,
    supported_payment: ["cash", "gopay", "m-banking", "indomaret", "alfamart"],
  },
  {
    _id: 4,
    title: "Diskon Ongkir 2k",
    perks: ["Diskon ekstra 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: true,
    supported_payment: [],
  },
  {
    _id: 5,
    title: "Cashback 50% koin Gopay hingga 70k",
    perks: ["Extra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: false,
    supported_payment: [],
  },
  {
    _id: 6,
    title: "Cashback 50% koin Gopay hingga 70k",
    perks: ["Extra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: false,
    supported_payment: ["alfamart"],
  },
  {
    _id: 7,
    title: "Cashback 50% koin Gopay hingga 70k",
    perks: ["Ekstra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
    isPermanent: false,
    supported_payment: ["indomaret"],
  },
  //   {
  //     _id: 8,
  //     title: "Diskon Ongkir 2k",
  //     perks: ["Diskon ekstra 2k ongkir", "Minimum pemesanan 105k"],
  //     isPermanent: true,
  //     supported_payment: ["cash", "gopay"],
  //   },
  //   {
  //     _id: 9,
  //     title: "Diskon Ongkir 2k",
  //     perks: ["Diskon ekstra 2k ongkir", "Minimum pemesanan 105k"],
  //     isPermanent: true,
  //     supported_payment: [],
  //   },
  //   {
  //     _id: 10,
  //     title: "Cashback 50% koin Gopay hingga 70k",
  //     perks: ["Extra 30k makanan + 2k ongkir", "Minimum pemesanan 105k"],
  //     isPermanent: false,
  //     supported_payment: [],
  //   },
];

const Screen = () => {
  const navigation = useNavigation();

  const {
    params: { promos },
  } = useRoute();
  //   let promosComp;
  //   useEffect(() => {
  //     promosComp = promos.map((promo) => {
  //       return (
  //         <PromoItemCard
  //           key={promo._id}
  //           title={promo.title}
  //           perks={promo.perks}
  //           isPermanent={promo.isPermanent}
  //         />
  //       );
  //     });
  //     console.log(promosComp);
  //   }, []);
  console.log(promos);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View className="space-y-2 bg-white pt-6 h-screen">
      <View className="bg-white p-4 space-x-4 flex-row justify-start">
        <TouchableOpacity
          className="bg-gray-100 p-2 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="gray" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Promo</Text>
      </View>
      <Text className="bg-white text-center">
        anda memiliki {promos.length} promo
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 flex-1">
        {promos &&
          promos.map((promo) => {
            return (
              <PromoItemCard
                key={promo._id}
                title={promo.title}
                perks={promo.perks}
                isPermanent={promo.isPermanent}
                supportedPayment={promo.supported_payment}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Screen;
