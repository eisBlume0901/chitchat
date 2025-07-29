import { View } from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
      <SafeAreaView style={{flex: 1}}>
          <View
            style={{
                gap: 20,
                alignItems: "center",
            }}
          >
              <Text style={{
                  fontSize: 32,
                  fontWeight: "bold"}}
              >ChitChat</Text>
              <Text>
                  A multi-user chat application
              </Text>
              <Button style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center"}}>
                  <Ionicons name={"logo-google"} size={16} color="black" />
                  <Text style={{ color: "black", fontWeight: "500" }}>Continue with Google</Text>
              </Button>
              <Button>
                  Sign in with passkey
              </Button>
          </View>
      </SafeAreaView>
    )
}
