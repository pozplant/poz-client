import React, { useState } from "react";
import { LayoutAnimation, Platform, TouchableOpacity, UIManager, View } from "react-native";
import Icon from "../Icon";
import Typo from "../Typo";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View className="mb-3 border border-gray-200 rounded-xl overflow-hidden">
      <TouchableOpacity
        onPress={toggle}
        className="flex-row justify-between items-center px-4 py-3 bg-gray-100"
      >
        <Typo variant="B1">{title}</Typo>
        <Icon name={isOpen ? "chevronUp" : "chevronDown"} />
      </TouchableOpacity>

      {isOpen && <View className="px-4 py-3 bg-white">{children}</View>}
    </View>
  );
}

export default Accordion;
