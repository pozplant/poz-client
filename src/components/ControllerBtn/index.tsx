import * as Haptics from "expo-haptics";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon, { IconName } from "../Icon";
import Typo from "../Typo";

type Variant = "primary" | "secondary";

type Props = {
  icon: IconName;
  label: string;
  onPress: () => void;
  variant?: Variant;
};

const variantStylesMap: Record<Variant, string[]> = {
  primary: ["bg-primary/90", "bg-primary"],
  secondary: ["bg-neutral-400/90", "bg-neutral-400"],
};

function ControllerBtn({ icon, label, onPress, variant = "primary" }: Props) {
  const [downsideColor, upsideColor] = variantStylesMap[variant];

  const handlePress = () => {
    try {
      Haptics.impactAsync();
    } catch {}

    onPress();
  };

  return (
    <View className="w-[64px] flex flex-col gap-[6px]">
      <TouchableOpacity
        onPress={handlePress}
        className={`aspect-[60/62] rounded-xl ${downsideColor}`}
      >
        <View
          className={`aspect-[60/52] items-center justify-center  border-b-2 rounded-xl border-black/10 ${upsideColor}`}
        >
          <Icon name={icon} color="white" />
        </View>
      </TouchableOpacity>

      <Typo variant="B1" className="text-center">
        {label}
      </Typo>
    </View>
  );
}

export default ControllerBtn;
