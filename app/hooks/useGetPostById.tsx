import { database } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId";

async function useGetPostById (id: string) {
    try {
        const post = await database.getDocument(
            "65392e6ccb70d171fa4e",
            "6539302a6c4d9c36ab32",
            id
        )
        
        const profile = await useGetProfileByUserId(post?.user_id)

        return {
            id: post?.$id,
            user_id: post?.user_id,
            video_url: post?.video_url,
            text: post?.text,
            created_at: post?.created_at,
            profile: {
                user_id: profile?.user_id,
                name: profile?.name,
                image: profile?.image
            }
        }

    } catch (error) {
        throw error
    }
}

export default useGetPostById