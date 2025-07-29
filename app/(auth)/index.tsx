import { View } from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function Index() {
  return (
      <SafeAreaView style={{flex: 1}}>

          <View style={{ flex: 0.1 }}></View>
          <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 16
          }}>
              <View style={{ gap: 20, alignItems: "center" }}>
                  <Image
                      source={require("@/assets/images/logo.png")}
                      style={{ width: 100, height: 100 }}
                  />
                  <Text style={{ fontSize: 32, fontWeight: "bold"}}>ChitChat</Text>
                  <Text>A Multi-User Chat Application</Text>
              </View>

              <View style={{ flex: 1 }}></View>

              <Button style={{
                  marginBottom: 20
              }}>
                  Sign in with Passkey
              </Button>
              <Button
                  style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "center"
                  }}>
                  <Ionicons name={"logo-google"} size={16} color="black" />
                  <Text
                      style={{
                          color: "black",
                          fontWeight: "500"
                      }}>
                      Continue with Google
                  </Text>
              </Button>

          </View>
      </SafeAreaView>
    )
}
