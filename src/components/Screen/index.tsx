import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

function Screen({ children, className }: Props) {
  return (
    <SafeAreaView className={`flex-1 bg-white ${className}`}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;
