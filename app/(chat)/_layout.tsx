import { Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function RootLayout() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
        return <Redirect href={"/(auth)"} />
    }
    return (
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    );
}
