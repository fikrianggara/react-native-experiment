import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// RN Code

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

function Container({ itemData, nRow, Component }) {
  return (
    <View className="p-2 ">
      <ScrollView
        horizontal
        className="flex-row"
        showsHorizontalScrollIndicator={false}
      >
        {/* {children} */}
        {makeNRowArray(itemData, nRow).map((row, index) => {
          return (
            <View key={index} className="space-x-4 flex-1">
              {row.map((item, index) => (
                <Component key={index} item={item} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Container;
