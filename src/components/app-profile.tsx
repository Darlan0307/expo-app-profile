import { Image, View } from "react-native";
import User from "./user";

const AppProfile = () => {
  return (
    <View className="flex-1 bg-gray-600">
      <Image
        source={require("../assets/banner.png")}
        className="w-full h-56"
        resizeMode="cover"
      />

      <User />
    </View>
  );
};

export default AppProfile;
