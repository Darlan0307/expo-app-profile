import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const User = () => {
  return (
    <View className="mx-auto -mt-16 flex gap-1 items-center justify-center">
      <Avatar>
        <AvatarImage
          source={{
            uri: "https://github.com/darlan0307.png",
          }}
        />
        <AvatarFallback textClassname="text-white">DM</AvatarFallback>
      </Avatar>
      <Text className="text-white text-3xl font-bold">Darlan Martins</Text>
      <Text className="text-gray-400">@darlan_sw</Text>
    </View>
  );
};

export default User;
