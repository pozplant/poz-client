import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon";

type Props = {
  type: "arrow" | "close";
  onPress?: () => void;
};

function Back({ type, onPress }: Props) {
  const { canGoBack, back } = useRouter();

  const handlePress = () => {
    if (onPress) return onPress();

    if (canGoBack()) back();
  };

  return (
    <TouchableOpacity onPress={handlePress} hitSlop={16}>
      <Icon name={type === "close" ? "x" : "arrowLeft"} />
    </TouchableOpacity>
  );
}

export default Back;
