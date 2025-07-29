import { ChatRoom } from "./types"

export const chatRooms: ChatRoom[] = [
    {
        id: "1",
        title: "Creating application in AppWrite",
        description: "This is a chat room for discussing about how to utilize AppWrite's features in your application.",
        isPrivate: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        title: "Plant Care",
        description: "A chat room for plant enthusiasts to share tips and advice on taking care of plants.",
        isPrivate: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]