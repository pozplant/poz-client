import React, { useEffect, useRef } from "react";
import { ActivityIndicator, View } from "react-native";

type Props = {
  isOpen: boolean;
  unmount: () => void;
};

function LoadingOverlay({ isOpen, unmount }: Props) {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      mountedRef.current = true;
    }

    if (!isOpen && mountedRef.current) unmount();
  }, [isOpen, mountedRef]);

  return (
    <View className="z-50 absolute inset-0 items-center justify-center bg-text60">
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
}

export default LoadingOverlay;
