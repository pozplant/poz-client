import Icon from "@/src/components/Icon";
import Typo from "@/src/components/Typo";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React from "react";
import { TouchableOpacity } from "react-native";
import useAuthenticate from "../../hooks/useAuthenticate";

function GoogleLogin() {
  const authenticate = useAuthenticate();

  const handlePress = async () => {
    try {
      GoogleSignin.configure();
      const { data } = await GoogleSignin.signIn();

      if (!data) throw new Error("Cancelled");

      await authenticate({ provider: "google", id: data.user.id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-[60px] flex flex-row items-center justify-center gap-3 rounded-xl bg-text4"
    >
      <Icon name="google" />

      <Typo variant="Label">Google로 시작하기</Typo>
    </TouchableOpacity>
  );
}

export default GoogleLogin;
