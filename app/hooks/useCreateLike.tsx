import { database, ID } from "@/libs/AppWriteClient"

async function useCreateLike (userId: string, postId: string) {
    try {
        await database.createDocument(
            "65392e6ccb70d171fa4e",
            "65392fa21c9c14a7605c",
            ID.unique(),
            {
                user_id: userId,
                post_id: postId,
            }      
            )
    } catch (error) {
        throw error
    }
}

export default useCreateLike