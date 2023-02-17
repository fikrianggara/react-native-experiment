import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
};

export const RestaurantFooter = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text className="text-white text-center p-2 px-6 bg-red-600 absolute bottom-4 inset-x-24 rounded-full mx-auto">
        Menu
      </Text>
    </TouchableOpacity>
  );
};
export default Footer;
