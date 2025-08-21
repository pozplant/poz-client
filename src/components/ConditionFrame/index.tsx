import React from 'react';
import { View } from "react-native";
import Typo from "../Typo";

type Variant = "greenText" | "redText";

type Props = {
    condition: string;
    title: string;
    label: string;
    variant?: Variant;
};

const variantStylesMap: Record<Variant, string[]> = {
    greenText: ["bg-primary"],
    redText: ["text-red-500"],
};

function ConditionFrame({ condition, title, label, variant = "greenText" }: Props) {
  const [pointColor] = variantStylesMap[variant];

  return (
    <View className="flex flex-col gap-[9px] bg-text4 rounded-xl">

      <Typo variant="DNF" className={`${pointColor}`}>
        {condition}
      </Typo>

      <View className="flex flex-col gap-[4px] rounded-xl">
        <Typo variant="Label">
            {title}
        </Typo>
        <Typo variant="B1">
            {label}
        </Typo>
      </View>

    </View>
  );
}

export default ConditionFrame;