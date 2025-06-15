import ControllerBtn from "@/src/components/ControllerBtn";
import React from "react";
import { View } from "react-native";

function HomeControllers() {
  const handlePressChat = () => {};

  const handlePressAIAnalytics = () => {};

  const handlePressHistories = () => {};

  return (
    <View className="flex flex-row items-center justify-center gap-[40px] pt-[24px] px-[20px] pb-[20px] bg-neutral-100 rounded-2xl">
      <ControllerBtn
        icon="message"
        label="대화하기"
        variant="secondary"
        onPress={handlePressChat}
      />

      <ControllerBtn
        icon="wand"
        label="AI 진단"
        onPress={handlePressAIAnalytics}
      />

      <ControllerBtn
        icon="history"
        label="성장 기록"
        variant="secondary"
        onPress={handlePressHistories}
      />
    </View>
  );
}

export default HomeControllers;
