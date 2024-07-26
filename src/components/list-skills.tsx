import { Image, Text, View } from "react-native";
import { SKILLS } from "../utils/skills";

const ListSkills = () => {
  return (
    <View className="flex-row flex-wrap gap-2 ">
      {SKILLS.map((skill, index) => (
        <View
          key={index}
          className="flex-row items-center gap-1 bg-gray-500 py-1 px-2 rounded-xl"
        >
          <Image source={skill.icon} className="w-4 h-4" />
          <Text className="text-lg text-white font-bold">{skill.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListSkills;
