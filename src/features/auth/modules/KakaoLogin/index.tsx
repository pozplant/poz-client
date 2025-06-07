import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import { getProfile, login } from "@react-native-seoul/kakao-login";
import React from "react";
import { TouchableOpacity } from "react-native";
import useAuthenticate from "../../hooks/useAuthenticate";

function KakaoLogin() {
  const authenticate = useAuthenticate();

  const handlePress = async () => {
    try {
      await login();
      const { id } = await getProfile();

      await authenticate({ provider: "kakao", id: id.toString() });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-[60px] flex flex-row items-center justify-center gap-3 rounded-xl bg-[#FFE812]"
    >
      <Icon name="kakao" />

      <Typo variant="Label">카카오로 시작하기</Typo>
    </TouchableOpacity>
  );
}

export default KakaoLogin;
