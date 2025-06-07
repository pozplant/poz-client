import "@/src/common/styles/globals.css";
import { Stack } from "expo-router";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";

export default function RootLayout() {
  useTrackingScreen();

  return <Stack />;
}
