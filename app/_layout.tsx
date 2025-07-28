import { Slot } from "expo-router";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { passkeys } from "@clerk/expo-passkeys";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import {DarkTheme, ThemeProvider} from "@react-navigation/native";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable");
  }
  return (
      <ClerkProvider
        publishableKey={publishableKey}
        tokenCache={tokenCache}
        __experimental_passkeys={passkeys}
      >
        <ClerkLoaded>
          <ThemeProvider
            value={DarkTheme}
          >
            <Slot />
          </ThemeProvider>
        </ClerkLoaded>
      </ClerkProvider>


  );
}
