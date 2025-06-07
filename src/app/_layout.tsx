import "@/src/common/styles/globals.css";
import { Slot } from "expo-router";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";

export default function RootLayout() {
  useTrackingScreen();

  return <Slot />;
}
