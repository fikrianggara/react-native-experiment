import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  GlobeAltIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  TicketIcon,
  DocumentTextIcon,
} from "react-native-heroicons/solid";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between w-full pt-2 bg-white shadow shadow-black">
      <View className="p-4 bg-white space-y-2 items-center justify-between">
        <GlobeAltIcon size={20} color="gray" />
        <Text>Eksplor</Text>
      </View>
      <View className="p-4 bg-white items-center justify-between  ">
        <ShoppingBagIcon size={20} color="gray" />
        <Text>Pickup</Text>
      </View>
      <View className="p-4 bg-white items-center justify-between ">
        <MagnifyingGlassIcon size={20} color="gray" />
        <Text>Pencarian</Text>
      </View>
      <View className="p-4 bg-white items-center justify-between ">
        <TicketIcon size={20} color="gray" rotation={45} />
        <Text>Promo</Text>
      </View>
      <View className="p-4 bg-white items-center justify-between ">
        <DocumentTextIcon size={20} color="gray" />
        <Text>Histori</Text>
      </View>
    </View>
  );
};

export const RestaurantFooter = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(null);
  const screenHeight = Math.ceil(Dimensions.get("window").height);
  // const pan = useRef(new Animated.ValueXY()).current;

  if (isDrawerOpen) {
    return (
      <View
        className="absolute w-screen flex-1"
        style={{ height: screenHeight + 60 }}
      >
        <TouchableWithoutFeedback onPress={() => setIsDrawerOpen(false)}>
          <View className="flex-1 bg-black opacity-10 h-screen"></View>
        </TouchableWithoutFeedback>
        <Animated.View
          className="h-96 w-full bottom-0 rounded-3xl bg-white p-8 duration-200 absolute index-10"
          onLayout={(e) => {
            //get drawer height on layout event
            setDrawerHeight(e.nativeEvent.layout.height);
          }}
        >
          <Text className="text-white text-center p-2 px-6 bg-blue-600 ">
            Keranjang
          </Text>
        </Animated.View>
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(isDrawerOpen);
        setIsDrawerOpen((prev) => !prev);
      }}
    >
      <Text className="text-white text-center p-3 px-6 bg-red-600 absolute bottom-4 inset-x-24 rounded-full mx-auto">
        Keranjang
      </Text>
    </TouchableWithoutFeedback>
  );
};
export default Footer;
