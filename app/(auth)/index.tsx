import { View } from "react-native";
import { Text } from "@/components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import {isClerkAPIResponseError, useSignIn, useSSO} from "@clerk/clerk-expo";
import {useState} from "react";
import {ClerkAPIError} from "@clerk/types";

// Since Google is a third-party app, we need to access and revoke the WebBrowser
// https://clerk.com/docs/custom-flows/enterprise-connections
WebBrowser.maybeCompleteAuthSession();

export default function Index() {
    const {startSSOFlow } = useSSO();
    const [errors, setErrors] = useState<ClerkAPIError[]>([]);
    const { signIn, setActive } = useSignIn();

    const handleSignInWithGoogle = async () => {

        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: "oauth_google",
                redirectUrl: AuthSession.makeRedirectUri()
            });

            if (createdSessionId) {
                setActive!({ session: createdSessionId})
            } else {
                // There is no session
            }

        } catch (err) {
            if(isClerkAPIResponseError(err)) {
                setErrors(err.errors)
            } else {
                console.error("AUTH (index.tsx, handleSignInWithGoogle): ", err);
            }
        }
    }

    const handleSignInWithPasskey = async() => {

        try {
            const signInAttempt = await signIn?.authenticateWithPasskey({
                flow: "discoverable"
            })

            if (signInAttempt?.status === "complete") {
                await setActive!({ session: signInAttempt.createdSessionId })
            } else {
                // There is no session
            }
        } catch (err) {
            if(isClerkAPIResponseError(err)) {
                setErrors(err.errors)
            } else {
                console.error("AUTH (index.tsx, handleSignInWithPasskey): ", err);
            }
        }
    }

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

                  {errors.map((error) => (
                      <Text key={error.code}>{error.code}</Text>
                  ))}
              </View>

              <View style={{ flex: 1 }}></View>

              <Button style={{
                  marginBottom: 20
              }}
                onPress={handleSignInWithPasskey}
              >
                  Sign in with Passkey
              </Button>
              <Button
                  style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "center"
                  }}
                  onPress={handleSignInWithGoogle}
              >
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
