Run the following commands:


npx create-expo-app@latest chitchat

npm run reset-project

npx expo start - to run chitchat app and communicate with Expo Go app (android)

(Instead of npm install, you can also use npx add / npx expo install for expo-package projects)

npm add @clerk/clerk-expo @clerk/types @clerk/expo-passkeys

npm install expo-secure-store expo-auth-session expo-crypto expo-web-browser expo-build-properties

npm install react-native-appwrite@0.7.0 react-native-url-polyfill

npm install @legendapp/list

npm add react-native-appwrite@0.7.0

Since passkeys for Android requires SHA-256 fingerprint, you need to generate a keystore file and add it to your project.
npm install -g eas-cli
eas login - login to your Expo account
eas build:configure
- Choose android platform
npm install expo-dev-client
eas build --platform android --profile development - build the android app with development profile (can also use --platform all to build both android and ios)
- Select y to generate a new keystore file and wait
- After the build is complete, scan the QR code with Expo Go app and install the apk 
- Allow your settings to install apps from unknown sources

The following information needed for Clerk configuration:
Package name: Go to app.json and go to android key and get the package name value
SHA-256 Certificate Fingerprint: Go to Expo (https://expo.dev/), open your project, and go to Credentials to get the Build credentials
needed by Clerk