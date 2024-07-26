import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { cn } from "../lib/utils";

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <View
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            "w-8 h-8 border border-green-500 rounded bg-gray-800 flex justify-center items-center",
            {
              "bg-green-500": isChecked,
            },
            checkboxClasses
          )}
        >
          {isChecked && <Text className="text-white text-xl">✓</Text>}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn("text-primary", labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export { Checkbox };
