import {Redirect, Stack} from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function RootLayout() {
    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <Redirect href={"/(chat)"} />
    }
    return (
        <Stack>
            <Stack.Screen name="index" />
        </Stack>
    );
}
