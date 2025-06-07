import React from "react";
import * as Icons from "./icons";

type IconName = keyof typeof Icons;

type Props = {
  name: IconName;
  color?: string;
  size?: number;
};

function Icon({ name, color = "black", size = 24 }: Props) {
  const Comp = Icons[name];

  return <Comp color={color} width={size} height={size} />;
}

export default Icon;
