import { Link, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {

    }
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerLargeTitle: true,
                    headerTitle: "Chat Rooms",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Link href="/profile">
                            <Ionicons name={"person-circle"} size={32} color={"white"} />
                        </Link>
                    ),
                    headerRight: () => (
                        <Link href="/new_room">
                            <Ionicons name={"add-outline"} size={32} color={"white"} />
                        </Link>
                    ),
            }}
            />
            <Stack.Screen
                name="profile"
                options={{
                    presentation: "modal",
                    headerTitle: "Profile",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Link dismissTo href="/">
                            <Ionicons name={"arrow-back-outline"} size={32} color={"white"} />
                        </Link>
                    )
                }}
            />
            <Stack.Screen
                name="new_room"
                options={{
                    presentation: "modal",
                    headerTitle: "New Chat Room",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Link dismissTo href="/">
                            <Ionicons name={"arrow-back-outline"} size={32} color={"white"} />
                        </Link>
                    )
                }}
            />
        </Stack>
    );
}
