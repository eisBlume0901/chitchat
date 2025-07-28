import { View } from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
      <SafeAreaView
        style={{
            flex: 1,
        }}
      >
          <View>
              <Text style={{
                  fontSize: 32,
                  fontWeight: "bold"}}
              >ChitChat</Text>
              <Text>
                  A multi-user chat application
              </Text>
          </View>
      </SafeAreaView>

  );
}
