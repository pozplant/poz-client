import Character from "@/src/components/Character";
import GradientBackground from "@/src/components/GradientBackground";
import Screen from "@/src/components/Screen";
import CharacterStats from "@/src/features/home/modules/CharacterStats";
import CurrentTaskBanner from "@/src/features/home/modules/CurrentTaskBanner";
import HomeControllers from "@/src/features/home/modules/HomeControllers";
import HomeHeader from "@/src/features/home/modules/HomeHeader";
import React from "react";
import { View } from "react-native";

function HomeScreen() {
  return (
    <Screen>
      <HomeHeader />

      <View className="items-center justify-center flex-1">
        <GradientBackground />

        <Character />

        <View className="absolute bottom-[20px] inset-x-[16px]">
          <CurrentTaskBanner />
        </View>
      </View>

      <View className="z-50 flex flex-col gap-[16px] p-[20px] pb-[28px] bg-white">
        <CharacterStats />

        <HomeControllers />
      </View>
    </Screen>
  );
}

export default HomeScreen;
