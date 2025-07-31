import { FlatList, RefreshControl, View } from "react-native";
import { Text } from "@/components/Text";
import { chatRooms } from "@/utils/test";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ChatRoom } from "@/utils/types";
import { databases, appWriteConfig } from "@/utils/appwrite";
import { Query } from "react-native-appwrite";

export default function Index() {
    const [ chatRooms, setChatRooms ] = useState<ChatRoom[]>([]);
    const [ refreshing, setRefreshing ] = useState(false);
    const handleRefresh = async () => {

    }

    const fetchChatRooms = async() => {
        try {
            const { documents, total } = await databases.listDocuments(
                appWriteConfig.db,
                appWriteConfig.col.ChatRooms,
                [Query.limit(100)])
            console.log("Chat Rooms: ", documents);
        } catch (err) {
            console.log("CHAT index.tsx fetchChatRooms error: ", err);
        }
    }

    useEffect(() => {
        fetchChatRooms();
    }, []);

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
                    <View
                        style={{
                            gap: 6,
                            padding: 16,
                            width: "100%",
                            borderRadius: 16,
                            alignItems: "center",

                            flexDirection: "row",
                            backgroundColor: "#262626",
                            justifyContent: "space-between"
                        }}
                    >
                        <ItemTitleAndDescription title={item.title} description={item.description} />
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


function ItemTitle( {title} : {title: string} ) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4}}>
            <Text style={{ fontSize: 17 }}>
                {title}
            </Text>
        </View>
    )
}

function ItemTitleAndDescription( {title, description } : {title: string; description: string; } ) {
    return (
        <View style={{ gap: 4 }}>
            <ItemTitle title={title} />
            <Text style={{ fontSize: 13, color: "gray"}}>
                {description.length > 50 ? `${description.substring(0, 50)}...` : description}
            </Text>
        </View>
    )
}