import { Text } from "@/components/Text";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Chat() {
    // useLocalSearchParams, counterpart in Web, it is a Local Variable
    // As for the search params, its counterpart is
    const { chat: chatId } = useLocalSearchParams();

    return (
        <View>
            <Text>{chatId}</Text>
        </View>
    )
}