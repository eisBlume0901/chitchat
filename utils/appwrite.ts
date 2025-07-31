import { Client, Databases } from "appwrite";

if (!process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || !process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID) {
    throw new Error("Appwrite endpoint and project ID must be set in environment variables.");
}

if (!process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID || !process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID_CHATROOMS || !process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID_MESSAGES) {
    throw new Error("Appwrite database and collection IDs must be set in environment variables.");
}

const appWriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    db: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    col: {
        ChatRooms: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID_CHATROOMS,
        Messages: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID_MESSAGES,
    }
}

const client = new Client()
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.project)

const databases = new Databases(client);

export { databases, appWriteConfig, client };