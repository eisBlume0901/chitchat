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