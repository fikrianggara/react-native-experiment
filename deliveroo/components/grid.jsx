import React from "react";
import { View, Image, FlatList, ScrollView, Text } from "react-native";

const styles = {
  flex: 4, // the number of columns you want to devide the screen into
  marginHorizontal: "auto",
  //   item: {
  //     flex: 1,
  //     maxWidth: "25%", // 100% devided by the number of rows you want
  //     alignItems: "center",

  //     // my visual styles; not important for the grid
  //     padding: 10,
  //     backgroundColor: "rgba(249, 180, 45, 0.25)",
  //     borderWidth: 1.5,
  //     borderColor: "#fff",
  //   },
};

// RN Code
const Item = ({ item }) => {
  return (
    <View className="space-y-2 flex-1 flex-col items-center aspect-square p-3">
      <View className="p-2 rounded-xl border-[1px] border-gray-300 h-16 aspect-square"></View>
      <Text className="text-gray-700 text-xs">{item.title}</Text>
    </View>
  );
};

// Sample Data
const itemData = [
  {
    title: "Terdekat",
  },
  {
    title: "Promosi",
  },
  {
    title: "Populer",
  },
  {
    title: "Makan malam",
  },
  {
    title: "Paling laku",
  },
  {
    title: "Vegan",
  },
  {
    title: "Seafood",
  },
  {
    title: "Lainnya",
  },
];

function Container({ props }) {
  return (
    <ScrollView
      style={styles.apps}
      {...props}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={itemData}
        numColumns={4}
        renderItem={Item}
        keyExtractor={() => "" + Math.random()}
      />
    </ScrollView>
  );
}

export default Container;
