import React from "react";
import {
  View,
  Image,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  },
  // flex: 3, // the number of columns you want to devide the screen into
  // marginHorizontal: "auto",
  // item: {
  //   flex: 1,
  //   maxWidth: "33.3%", // 100% devided by the number of rows you want
  //   alignItems: "center",
  // },
};

// RN Code
const Item = ({ item }) => {
  return (
    <View className="space-y-2 items-center w-24 my-2">
      <TouchableOpacity className="p-2 rounded-xl border-[1px] border-gray-300 w-20 h-20"></TouchableOpacity>
      <Text className="text-gray-700 text-xs" numberOfLines={1}>
        {item.id}-{item.title}
      </Text>
    </View>
  );
};

// Sample Data
const itemData = [
  {
    id: 1,
    title: "Terdekat",
  },
  {
    id: 2,
    title: "Promosi",
  },
  {
    id: 3,
    title: "Populer",
  },
  {
    id: 4,
    title: "Makan malam fvdsa vfdsa vfdsav fdsva fdsav",
  },
  {
    id: 5,
    title: "Paling laku",
  },
  {
    id: 6,
    title: "Vegan",
  },
  {
    id: 7,
    title: "Seafood",
  },
  {
    id: 8,
    title: "Lainnya",
  },
  {
    id: 9,
    title: "Seafood",
  },
  {
    id: 10,
    title: "Lainnya",
  },
  {
    id: 11,
    title: "Lainnya",
  },
];

const makeNRowArray = (arr, nRow) => {
  nCol = Math.ceil(arr.length / nRow);
  result = [];

  for (let tempCol = 0; tempCol < nCol; tempCol++) {
    tempRow = arr.slice(tempCol * nRow, (tempCol + 1) * nRow);
    result.push(tempRow);
  }

  return result;
};

function Container(props) {
  return (
    <View className="p-2 ">
      {/* <FlatList
        data={itemData}
        // numColumns={3}
        renderItem={Item}
        horizontal={true}
        keyExtractor={() => "" + Math.random()}
      /> */}
      <ScrollView
        horizontal
        className="flex-row"
        showsHorizontalScrollIndicator={false}
      >
        {makeNRowArray(itemData, props.nRow).map((row, index) => {
          return (
            <View key={index} className="space-x-4 flex-1">
              {row.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Container;
