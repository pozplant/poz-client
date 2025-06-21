import Character from "@/src/components/Character";
import GradientBackground from "@/src/components/GradientBackground";
import Screen from "@/src/components/Screen";
import CharacterStats from "@/src/features/home/modules/CharacterStats";
import HomeHeader from "@/src/features/home/modules/HomeHeader";
import HomeNavigator from "@/src/features/home/modules/HomeNavigator";
import React from "react";
import { View } from "react-native";

function HomeScreen() {
  return (
    <Screen>
      <GradientBackground />

      <HomeHeader />

      <View className="items-center justify-center flex-1">
        <Character />
      </View>

      <View className="items-center justify-center gap-5 p-[20px]">
        <CharacterStats />
        <HomeNavigator />
      </View>
    </Screen>
  );
}

export default HomeScreen;
