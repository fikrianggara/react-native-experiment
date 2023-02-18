import { StatusBar } from "expo-status-bar";
import { Image, Linking, Pressable, Text, View } from "react-native";

const profile_url = "https://www.linkedin.com/in/fikri-septrian-anggara/";

const Screen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-gray-100">
      <View className="rounded-xl shadow-sm h-fit w-48 justify-center items-center space-y-2 p-4 duration-200 ease-in-out bg-white">
        <Image
          className="rounded-full h-24 aspect-square bg-gray-600"
          source={require("../assets/profile.jpeg")}
          alt="developer"
        />
        <Text className="text-lg">Hi, I'm fikri</Text>
        <Text className="text-xs text-gray-400 text-center">
          22 years old IT guy at Government Organization
        </Text>
        <Text className="text-xs text-gray-600 text-center">
          I love learning IT stuff, esp on full-stack web dev, data engineering,
          Tasks automation, system design and machine learning
        </Text>
        <Pressable
          onPress={() =>
            Linking.openURL(profile_url).catch((e) => console.log(e))
          }
        >
          <View className="bg-sky-700 p-2 rounded mt-4">
            <Text className="text-white text-xs">Connect with me :)</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text className="text-sky-700 font-medium text-xs focus:text-green-500">
            Home
          </Text>
        </Pressable>
      </View>
      <StatusBar translucent backgroundColor="transparent" />
    </View>
  );
};

export default Screen;
