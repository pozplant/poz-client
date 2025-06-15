import Progressbar from "@/src/components/Progressbar";
import Typo from "@/src/components/Typo";
import React from "react";
import { View } from "react-native";

function CharacterStats() {
  return (
    <View className="flex flex-col gap-[4px]">
      <View className="flex flex-row items-center gap-[10px]">
        <Typo variant="Label">Lv.7</Typo>
        <Progressbar cur={10} max={100} className="rounded-2xl w-[200px]" />
      </View>
    </View>
  );
}

export default CharacterStats;
