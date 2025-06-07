import "@/src/common/styles/globals.css";
import { Slot } from "expo-router";
import { OverlayProvider } from "overlay-kit";
import useTrackingScreen from "../features/core/hooks/useTrackingScreen";

export default function RootLayout() {
  useTrackingScreen();

  return (
    <OverlayProvider>
      <Slot />
    </OverlayProvider>
  );
}
