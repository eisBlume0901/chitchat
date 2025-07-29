import {FlatList, RefreshControl, View} from "react-native";
import { Text } from "@/components/Text";
import { chatRooms } from "@/utils/test";
import { Link } from "expo-router";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

export default function Index() {
    const [ refreshing, setRefreshing ] = useState(false);

    const handleRefresh = async () => {

    }

    return (
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} />}
        renderItem={({item }) => {
            return (
                <Link
                    href={{
                        pathname: "/[chat]",
                        params: { chat: item.id }
                    }}
                >
                    <Text>{item.title}</Text>
                    <View>
                        <Ionicons name={"chevron-forward-outline"} size={16} color={"gray"} />
                    </View>
                </Link>
            )
        }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
            padding: 16,
            gap: 16,
        }}
      />

    );
}


