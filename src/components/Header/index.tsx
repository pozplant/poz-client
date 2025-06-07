import { View } from "react-native";
import Back from "../Back";
import Typo from "../Typo";

type ArrowProps = {
  title?: string;
  onBackPress?: () => void;
  right?: React.ReactNode;
};

function Arrow({ title, onBackPress, right }: ArrowProps) {
  return (
    <View className="h-[64px] flex flex-row items-center justify-between px-5">
      <Back type="arrow" onPress={onBackPress} />

      <View className="-z-10 absolute inset-0 items-center justify-center">
        <Typo variant="H2">{title}</Typo>
      </View>

      {right}
    </View>
  );
}

type CloseProps = {
  title?: string;
  onBackPress?: () => void;
  left?: React.ReactNode;
};

function Close({ title, onBackPress, left }: CloseProps) {
  return (
    <View className="h-[64px] flex flex-row-reverse items-center justify-between px-5">
      <Back type="close" onPress={onBackPress} />

      <View className="-z-10 absolute inset-0 items-center justify-center">
        <Typo variant="H2">{title}</Typo>
      </View>

      {left}
    </View>
  );
}

export default {
  Arrow,
  Close,
};
