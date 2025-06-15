import { Stack } from "expo-router";
import React from "react";

function AppLayout() {
  const isLoggedIn = false;

  //   if (!isLoggedIn) return <Redirect href={"/auth"} />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default AppLayout;
