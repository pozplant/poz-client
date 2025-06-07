import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import * as AppleAuthentication from "expo-apple-authentication";
import React from "react";
import { TouchableOpacity } from "react-native";
import useAuthenticate from "../../hooks/useAuthenticate";

function AppleLogin() {
  const authenticate = useAuthenticate();

  const handlePress = async () => {
    try {
      const { user } = await AppleAuthentication.signInAsync();

      await authenticate({ provider: "apple", id: user });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-[60px] flex flex-row items-center justify-center gap-3 rounded-xl bg-black"
    >
      <Icon name="apple" />

      <Typo variant="Label" className="text-white">
        Apple로 시작하기
      </Typo>
    </TouchableOpacity>
  );
}

export default AppleLogin;
