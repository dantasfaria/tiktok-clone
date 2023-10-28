import { Query, database } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId"

async function useGetCommentsByPostId(postId: string) {
    try {
        const commentsResult = await database.listDocuments(
            "65392e6ccb70d171fa4e",
            "653930c8771adff2319f",
            [
                Query.equal('post_id', postId),
                Query.orderDesc("$id")
            ]
        )

        const objPromises = commentsResult.documents.map(async comment => {
            const profile = await useGetProfileByUserId(comment.user_id)

            return {
                id: comment?.$id,
                user_id: comment?.user_id,
                post_id: comment?.post_id,
                text: comment?.text,
                created_at: comment?.created_at,
                profile: {
                    user_id: profile?.user_id,
                    name: profile?.name,
                    image: profile?.image,
                }
            }
        })

        const result = await Promise.all(objPromises)
        return result
        
    } catch (error) {
        throw error
    }
}

export default useGetCommentsByPostId