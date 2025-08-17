import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React from "react";
import { TouchableOpacity } from "react-native";
import useAuthenticate from "../../hooks/useAuthenticate";

function GoogleLogin() {
  const { authenticate } = useAuthenticate();

  const handlePress = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      const token = (await GoogleSignin.getTokens()).idToken;
      if (!token) throw new Error("Google 토큰 없음");

      await authenticate("google", token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-[60px] flex flex-row items-center justify-center gap-3 rounded-xl bg-black"
    >
      <Icon name="google" />
      <Typo variant="Label" className="text-white">
        Google로 시작하기
      </Typo>
    </TouchableOpacity>
  );
}

export default GoogleLogin;
