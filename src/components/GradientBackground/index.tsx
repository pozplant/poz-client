import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

function GradientBackground() {
  return (
    <View className="absolute inset-0 -z-10">
      <LinearGradient colors={["#FFFFFF", "#f8f8f8"]} style={{ flex: 1 }} />
    </View>
  );
}

export default GradientBackground;
