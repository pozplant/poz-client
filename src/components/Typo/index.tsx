import React from "react";
import { Text, TextProps } from "react-native";

type TypoVariant =
  | "Title"
  | "H1"
  | "H2"
  | "H3"
  | "Label"
  | "B1"
  | "B2"
  | "Caption"
  | "DNF";

type Props = TextProps & {
  variant: TypoVariant;
};

const variantStylesMap: Record<TypoVariant, string> = {
  Title: "font-PB text-4xl",
  H1: "font-primary text-3xl",
  H2: "font-primary text-2xl",
  H3: "font-primary text-xl",
  Label: "font-PB text-lg",
  B1: "font-PM text-base",
  B2: "font-PM text-sm",
  Caption: "font-PR text-xs",
  DNF: "font-DNF text-xs"
};

function Typo({ variant, className, children, ...rest }: Props) {
  const styles = variantStylesMap[variant];
  return (
    <Text className={`${styles} ${className}`} {...rest}>
      {children}
    </Text>
  );
}

export default Typo;
