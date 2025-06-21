import Character from "@/src/components/Character";
import GradientBackground from "@/src/components/GradientBackground";
import Screen from "@/src/components/Screen";
import CharacterStats from "@/src/features/home/modules/CharacterStats";
import CurrentTaskBanner from "@/src/features/home/modules/CurrentTaskBanner";
import HomeHeader from "@/src/features/home/modules/HomeHeader";
import HomeNavigator from "@/src/features/home/modules/HomeNavigator";
import React from "react";
import { View } from "react-native";

function HomeScreen() {
  return (
    <Screen className="justify-between">
      <GradientBackground />
      <HomeHeader />

      <View className="absolute inset-0 items-center justify-center pb-[40px]">
        <Character />
      </View>

      <View className="items-center justify-center gap-6 p-5">
        <CurrentTaskBanner />
        <CharacterStats />
        <HomeNavigator />
      </View>
    </Screen>
  );
}

export default HomeScreen;
