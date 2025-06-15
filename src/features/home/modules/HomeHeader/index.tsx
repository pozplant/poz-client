import Icon from "@/src/components/Icon";
import Logotypo from "@/src/components/Logotypo";
import React from "react";
import { TouchableOpacity, View } from "react-native";

function HomeHeader() {
  return (
    <View className="h-[64px] flex flex-row items-center justify-between px-[20px]">
      <Logotypo />

      <TouchableOpacity hitSlop={16}>
        <Icon name="menu" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeHeader;
