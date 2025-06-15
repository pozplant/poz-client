import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  cur: number;
  max: number;
  className?: string;
};

function Progressbar({ cur, max, className }: Props) {
  const width = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({ width: `${width.value}%` }));

  useEffect(() => {
    width.value = withTiming((cur / max) * 100);
  }, [cur, max]);

  return (
    <View
      className={`overflow-hidden h-[12px] flex-row bg-neutral-200 ${className}`}
    >
      <Animated.View style={animatedStyles} className={"h-full bg-primary"} />
    </View>
  );
}

export default Progressbar;
