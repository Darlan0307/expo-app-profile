import { Image, ScrollView, Text, View } from "react-native";
import User from "./user";
import ListSkills from "./list-skills";
import Option from "./option";
import { Switch } from "./Switch";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Button } from "./Button";
import { useToast } from "./Toast";

const AppProfile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();
  return (
    <ScrollView className="flex-1 bg-gray-600">
      <Image
        source={require("../assets/banner.png")}
        className="w-full h-36"
        resizeMode="cover"
      />

      <User />

      <View className="mt-6 px-6">
        <Text className="text-2xl text-white font-bold mb-3">Skills</Text>
        <ListSkills />
      </View>
      <View className="mt-10 px-6">
        <Text className="text-2xl text-white font-bold mb-3">Preferences</Text>
        <View>
          <Option>
            <Option.Icon icon="dark-mode" />
            <Option.Title>Dark Mode</Option.Title>
            <Switch onValueChange={setDarkMode} value={darkMode} />
          </Option>
          <Option>
            <Option.Icon icon="email" />
            <Option.Title>Public Email</Option.Title>
            <Checkbox />
          </Option>
        </View>
      </View>

      <View className="mt-6 px-6">
        <Input
          placeholder="Company Name"
          label="Company"
          labelClasses="text-2xl text-white font-bold mb-3"
          inputClasses="text-white text-sm placeholder:text-gray-400"
        />
      </View>

      <View className="my-6 px-6">
        <Button
          label="Save Changes"
          className=" bg-green-500"
          labelClasses="text-lg text-white font-bold"
          onPress={() => toast("Changes saved!", "success")}
        />
      </View>
    </ScrollView>
  );
};

export default AppProfile;
