import Accordion from "@src/components/Accordion";
import Back from "@src/components/Back";
import Btn from "@src/components/Btn";
import GuideText from "@src/components/GuideText";
import Screen from "@src/components/Screen";
import React from "react";
import { View } from "react-native";

function TermsScreen() {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Back type="arrow" />
        </View>

        <View className="w-full px-6">
          <GuideText
            variant="secondary"
            title="이용 약관에 동의해주세요!"
            desc="서비스 이용을 위해 이용약관에 모두 동의해주세요."
          />
        </View>

        <ScrollView className="flex-1 px-5 mt-4">
          <Accordion title="이용 약관 1">
            <Text>약관 내용 1...</Text>
          </Accordion>

          <Accordion title="개인정보 처리 방침">
            <Text>개인정보 약관 내용...</Text>
          </Accordion>
        </ScrollView>
  
        <View className="flex-1 items-center justify-center">
          <Btn variant="primary" onPress={handleAgree}>
            동의하기
          </Btn>
        </View>
      </Screen>
    );
  }
  
  export default TermsScreen;