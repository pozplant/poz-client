import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SCALE_FROM = 0;
const SCALE_TO = 1;
const OPACITY_FROM = 0;
const OPACITY_TO = 1;
const DELAY = 300;

function CurrentTaskBanner() {
  const hasTask = true;

  const scale = useSharedValue(SCALE_FROM);
  const opacity = useSharedValue(OPACITY_FROM);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (!hasTask) return;

    scale.value = withDelay(
      DELAY,
      withSpring(SCALE_TO, {
        damping: 15,
        stiffness: 150,
      })
    );
    opacity.value = withDelay(DELAY, withTiming(OPACITY_TO));
  }, [hasTask]);

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity className="flex flex-col gap-1 px-[16px] py-[8px] border-4 bg-primary rounded-xl border-black/20">
        <View className="flex flex-row items-center justify-between">
          <Typo variant="B1" className="text-white">
            지금 할 일
          </Typo>

          <Icon name="arrowRight" size={18} color="white" />
        </View>

        <Typo variant="H2" className="text-white">
          물 주기
        </Typo>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default CurrentTaskBanner;
