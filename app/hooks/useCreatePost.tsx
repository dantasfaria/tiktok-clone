import { database, storage, ID } from "@/libs/AppWriteClient"

async function useCreatePost (file: File, userId: string, caption: string) {

    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            "65392e6ccb70d171fa4e",
            "6539302a6c4d9c36ab32",
            ID.unique(),
                {
                    user_id: userId,
                    text: caption,
                    video_url: videoId,
                    created_at: new Date().toISOString()
                }      
            )

            await storage.createFile(
                "653931b2dd59ca2a7d7c",
                videoId,
                file
            )
            
    } catch (error) {
        throw error
    }
}

export default useCreatePost