import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Typo from "../Typo";

type BtnVariant = "primary" | "secondary";

type Props = TouchableOpacityProps & {
  variant?: BtnVariant;
};

const variantStylesMap: Record<BtnVariant, { btn: string; text: string }> = {
  primary: { btn: "bg-primary", text: "text-white" },
  secondary: { btn: "bg-text4", text: "text-text80" },
};

function Btn({ variant = "primary", children, ...rest }: Props) {
  const styles = variantStylesMap[variant];

  return (
    <TouchableOpacity
      className={`${styles.btn} h-[60px] flex flex-row items-center justify-center px-5 rounded-full`}
      {...rest}
    >
      <Typo variant="H2" className={`${styles.text}`}>
        {children}
      </Typo>
    </TouchableOpacity>
  );
}

export default Btn;
