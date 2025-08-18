import React from "react";
import { View } from "react-native";
import Character from "../components/Character";
import Screen from "../components/Screen";
import CharacterStats from "../features/home/modules/CharacterStats";
import CurrentTaskBanner from "../features/home/modules/CurrentTaskBanner";
import HomeHeader from "../features/home/modules/HomeHeader";
import HomeNavigator from "../features/home/modules/HomeNavigator";

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