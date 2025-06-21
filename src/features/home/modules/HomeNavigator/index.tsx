import theme from "@/src/common/styles/theme";
import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import React from "react";
import { TouchableOpacity, View } from "react-native";

function HomeNavigator() {
  return (
    <View className="flex flex-row items-center justify-center gap-[52px] px-[40px] py-[12px] bg-white border border-neutral-200 rounded-full">
      <TouchableOpacity className="items-center justify-center gap-1">
        <Icon name="message" />
        <Typo variant="B2">대화하기</Typo>
      </TouchableOpacity>

      <TouchableOpacity className="items-center justify-center gap-1">
        <Icon name="wand" color={theme.primary} />
        <Typo variant="B2" className="text-primary">
          AI 진단
        </Typo>
      </TouchableOpacity>

      <TouchableOpacity className="items-center justify-center gap-1">
        <Icon name="history" />
        <Typo variant="B2">성장기록</Typo>
      </TouchableOpacity>
    </View>
  );
}

export default HomeNavigator;
