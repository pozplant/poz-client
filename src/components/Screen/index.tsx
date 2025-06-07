import React from "react";
import { Edges, SafeAreaView } from "react-native-safe-area-context";

type Props = React.PropsWithChildren<{
  edges?: Edges;
  className?: string;
}>;

function Screen({ edges, children, className }: Props) {
  return (
    <SafeAreaView edges={edges} className={`flex-1 bg-white ${className}`}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;
