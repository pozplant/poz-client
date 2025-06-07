import Typo from "@/src/components/Typo";
import React from "react";
import { View } from "react-native";

function Hero() {
  return (
    <View className="items-center justify-center gap-2">
      <Typo variant="H2" className="text-primary">
        내 손 안의 식물 통역앱
      </Typo>
      <Typo variant="Title" className="text-primary">
        POZ
      </Typo>
    </View>
  );
}

export default Hero;
