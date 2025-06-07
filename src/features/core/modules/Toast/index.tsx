import Typo from "@/src/components/Typo";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  isOpen: boolean;
  close: () => void;
  unmount: () => void;
  message: string;
  onPress?: () => void;
}

const Y_FROM = -150;
const Y_TO = 0;

const TOP_OFFSET = 20;
const DURATION_MS = 1000 * 3;

function Toast({ isOpen, close, unmount, message, onPress }: Props) {
  const { top } = useSafeAreaInsets();
  const mountedRef = useRef(false);

  const mount = () => {
    mountedRef.current = true;
  };
  const exit = () => {
    if (!mountedRef.current) return;
    unmount();
  };

  useEffect(() => {
    const timer = setTimeout(() => close(), DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  const y = useSharedValue(Y_FROM);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: y.value }],
  }));

  useEffect(() => {
    if (isOpen) {
      y.value = withTiming(Y_TO, undefined, (finished) => {
        if (finished) runOnJS(mount)();
      });
    } else {
      y.value = withTiming(Y_FROM, undefined, (finished) => {
        if (finished) runOnJS(exit)();
      });
    }
  }, [isOpen]);

  const handlePress = () => {
    close();
    onPress?.();
  };

  return (
    <Animated.View
      style={[animatedStyle, { top: TOP_OFFSET + top }]}
      className={"absolute inset-x-0 px-5"}
    >
      <TouchableOpacity
        onPress={handlePress}
        className="flex-1 items-center justify-center px-5 py-3 rounded-lg bg-text100"
      >
        <Typo variant="Label" className="text-center text-white">
          {message}
        </Typo>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default Toast;
