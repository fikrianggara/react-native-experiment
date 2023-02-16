import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [carouselIndex, setCarouselIndex] = useState(null);
  const windowWidth = Dimensions.get("window").width;
  const [totalIndex, setTotalIndex] = useState(null);
  const [carouselPointer, setCarouselPointer] = useState(null);

  const scrollViewRef = useRef();

  useEffect(() => {}, []);

  useEffect(() => {
    let data = [];
    for (let i = 0; i < totalIndex; i++) {
      data.push(i);
    }
    tempComp = (
      <View className="flex-row space-x-2 pl-4 items-center">
        {data.map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              className={`${
                idx == carouselIndex
                  ? "bg-green-500 text-green-500 h-3 w-3 "
                  : "bg-gray-400 text-gray-400 h-2 w-2"
              } rounded-full`}
              onPress={(e) => {
                setCarouselIndex(() => idx);
                scrollViewRef.current?.scrollTo({
                  x: windowWidth * idx - 56,
                });
              }}
            ></TouchableOpacity>
          );
        })}
      </View>
    );
    setCarouselPointer(tempComp);
  }, [carouselIndex]);

  const handleScroll = (e) => {
    const position = e.nativeEvent.contentOffset.x;
    const index = Math.ceil(position / windowWidth);
    setCarouselIndex(index);
  };
  return (
    <SafeAreaView>
      <View className="ml-4 py-2 space-y-2">
        <ScrollView
          className="flex-row space-x-4"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          ref={scrollViewRef}
          onContentSizeChange={(width, _) => {
            setTotalIndex(Math.ceil(width / windowWidth) || 0);
            setCarouselIndex(0);
          }}
        >
          {children}
        </ScrollView>

        {carouselPointer}
      </View>
    </SafeAreaView>
  );
};

export default Carousel;
