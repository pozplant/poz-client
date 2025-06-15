import React from "react";
import { View } from "react-native";
import Typo from "../Typo";

function Character() {
  const nickname = "NICKNAME";

  return (
    <View className="flex flex-col items-center justify-center gap-4">
      <View className="aspect-square w-[120px] bg-neutral-500"></View>

      <View className="px-4 py-1 rounded-full bg-black/5">
        <Typo variant="H3">{nickname}</Typo>
      </View>
    </View>
  );
}

export default Character;
