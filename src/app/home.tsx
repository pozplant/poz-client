import Character from "@src/components/Character";
import Screen from "@src/components/Screen";
import CharacterStats from "@src/features/home/modules/CharacterStats";
import CurrentTaskBanner from "@src/features/home/modules/CurrentTaskBanner";
import HomeHeader from "@src/features/home/modules/HomeHeader";
import HomeNavigator from "@src/features/home/modules/HomeNavigator";
import React from "react";
import { View } from "react-native";

function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <HomeHeader />
      </View>

      <View className="flex-1 flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(239,239,239,1)_100%)]">
        <Character
          messages="{messages}"
          nickname="{nickname}"
        />
      </View>

      <View className="flex flex-col gap-4 p-6 pb-10 rounded-[20px_20px_0px_0px]">
        <CharacterStats />
        <CurrentTaskBanner />
        <HomeNavigator />
      </View>
    </Screen>
  );
}

export default HomeScreen;