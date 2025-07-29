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
1. npm install -g eas-cli 
2. eas login - login to your Expo account
3. eas build:configure 
4. Choose android platform 
5. npm install expo-dev-client 
6. eas build --platform android --profile development - build the android app with development profile (can also use --platform all to build both android and ios)
7. Select y to generate a new keystore file and wait 
8. After the build is complete, scan the QR code with Expo Go app and install the apk 
9. Allow your settings to install apps from unknown sources

The following information needed for Clerk configuration:

Package name: Go to app.json and go to android key and get the package name value

SHA-256 Certificate Fingerprint: Go to Expo (https://expo.dev/), open your project, and go to Credentials to get the Build credentials
needed by Clerk

Dynamic Routes

[template_name.extension] - use square brackets
(group_folder_name) - use parenthesis to group routes