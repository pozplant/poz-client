import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  runOnJS, useAnimatedStyle, useSharedValue, withTiming
} from "react-native-reanimated";
import Typo from "../Typo";

// 캐릭터 이미지는 재사용
const CharacterImage = React.memo(() => (
  <View className="aspect-square w-[120px] bg-neutral-500 rounded-full" />
));

interface Props {
  messages: string[];
  nickname?: string;
  interval?: number; // 메시지 변경 간격(ms)
}

function Character({
  messages,
  nickname = "NICKNAME",
  interval = 3000,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(messages[0] || "");

  // 애니메이션 값
  const translateY = useSharedValue(-10);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  const bubbleStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  const animateMessage = (newMessage: string) => {
    translateY.value = -10;
    opacity.value = 0;
    scale.value = 0.8;

    translateY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) });
    opacity.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) });
    scale.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) });

    runOnJS(setDisplayMessage)(newMessage);
  };

  // 메시지 큐 순환
  useEffect(() => {
    if (messages.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % messages.length;
      setCurrentIndex(nextIndex);
      animateMessage(messages[nextIndex]);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, messages]);

  return (
    <View className="flex flex-col items-center justify-center gap-4">
      {/* 말풍선 */}
      <Animated.View
        style={bubbleStyle}
        className="relative px-4 py-2 bg-white rounded-xl border border-gray-300"
      >
        <Typo variant="B1" className="text-black text-center">
          {displayMessage}
        </Typo>
        {/* 꼬리 */}
        <View className="absolute bottom-[-6px] left-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white -translate-x-1/2" />
      </Animated.View>

      {/* 캐릭터 이미지 */}
      <CharacterImage />

      {/* 닉네임 */}
      <View className="px-4 py-1 rounded-full bg-black/5">
        <Typo variant="H3">{nickname}</Typo>
      </View>
    </View>
  );
}

export default Character;