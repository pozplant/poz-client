import React from "react";
import { View } from "react-native";
import Screen from "../components/Screen";
import AppleLogin from "../features/auth/modules/AppleLogin";
import GoogleLogin from "../features/auth/modules/GoogleLogin";
import Hero from "../features/auth/modules/Hero";
import KakaoLogin from "../features/auth/modules/KakaoLogin";

function AuthScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Hero />
      </View>

      <View className="flex flex-col gap-3 p-5 pb-10">
        <KakaoLogin />
        <GoogleLogin />
        <AppleLogin />
      </View>
    </Screen>
  );
}

export default AuthScreen;
