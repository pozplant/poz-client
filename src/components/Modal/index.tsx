import React, { useEffect, useRef } from "react";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = React.PropsWithChildren<{
  isOpen: boolean;
  close: () => void;
  unmount: () => void;
  className?: string;
}>;

const BACKDROP_OPACITY_FROM = 0;
const BACKDROP_OPACITY_TO = 1;

const BODY_OPACITY_FROM = 0;
const BODY_OPACITY_TO = 1;
const BODY_Y_FROM = 50;
const BODY_Y_TO = 0;

function Modal({ isOpen, close, unmount, className, children }: Props) {
  const opacity = useSharedValue(BODY_OPACITY_FROM);
  const y = useSharedValue(BODY_Y_FROM);

  const mountedRef = useRef(false);

  const mount = () => {
    mountedRef.current = true;
  };
  const exit = () => {
    if (!mountedRef.current) return;
    unmount();
  };

  const backdropAnimatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(isOpen ? BACKDROP_OPACITY_TO : BACKDROP_OPACITY_FROM),
  }));

  const bodyAnimatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: y.value }],
  }));

  useEffect(() => {
    if (isOpen) {
      opacity.value = withTiming(BODY_OPACITY_TO, undefined, () =>
        runOnJS(mount)()
      );
      y.value = withTiming(BODY_Y_TO);
    } else {
      opacity.value = withTiming(BODY_OPACITY_FROM, undefined, () =>
        runOnJS(exit)()
      );
      y.value = withTiming(BODY_Y_FROM);
    }
  }, [isOpen]);

  const handleBackdropPress = () => close();

  return (
    <Animated.View
      onTouchEnd={handleBackdropPress}
      style={backdropAnimatedStyles}
      className={"absolute inset-0 justify-center z-50 bg-text60"}
    >
      <Animated.View
        onTouchEnd={(e) => e.stopPropagation()}
        style={bodyAnimatedStyles}
        className={`${className}`}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
}

export default Modal;
