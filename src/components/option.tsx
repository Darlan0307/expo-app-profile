import { ReactNode } from "react";
import { Text, View, TextProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Option = ({ children }: { children: ReactNode }) => {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  );
};

type IconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
};

const Icon = ({ icon }: IconProps) => {
  return <MaterialIcons name={icon} size={20} color="white" />;
};

const Title = ({ ...rest }: TextProps) => {
  return <Text className="text-white text-lg flex-1" {...rest} />;
};

Option.Icon = Icon;
Option.Title = Title;

export default Option;
