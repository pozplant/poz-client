import React from "react";
import Typo from "../Typo";

type GuideVariant = "primary" | "secondary";

type Props = {
  variant?: GuideVariant;
  title: string;
  desc?: string;
};

const variantMap: Record<
  GuideVariant,
  {
    container: string;
    titleClass: string;
    descClass: string;
    order: ("title" | "desc")[];
  }
> = {
  primary: {
    container: "w-full px-6",
    titleClass: "text-left mt-[30px] mb-[10px]",
    descClass: "text-left mt-[20px] mb-[10px]",
    order: ["title", "desc"],
  },
  secondary: {
    container: "w-full px-6 items-center",
    titleClass: "text-center mb-[10px]",
    descClass: "text-center mt-[30px] mb-[20px]",
    order: ["desc", "title"],
  },
};

function GuideText({ variant = "primary", title, desc }: Props) {
  const v = variantMap[variant];

  const elementsMap: Record<"title" | "desc", JSX.Element | null> = {
    title: <Typo key="title" variant="H1" className={v.titleClass}>{title}</Typo>,
    desc: desc ? <Typo key="desc" variant="B1" className={v.descClass}>{desc}</Typo> : null,
  };

  const elements = v.order.map((key) => elementsMap[key]).filter(Boolean);

  return <>{elements}</>;
  
}
export default GuideText;
