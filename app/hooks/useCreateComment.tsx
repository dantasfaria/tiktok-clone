import { database, ID } from "@/libs/AppWriteClient"

async function useCreateComment (userId: string, postId: string, comment: string) {
    try {
        await database.createDocument(
            "65392e6ccb70d171fa4e",
            "653930c8771adff2319f",
            ID.unique(),
            {
                user_id: userId,
                post_id: postId,
                text: comment,
                created_at: new Date().toISOString(),
            }      
            )
    } catch (error) {
        throw error
    }
}

export default useCreateComment