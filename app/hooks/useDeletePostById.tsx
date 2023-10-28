import { database, storage } from "@/libs/AppWriteClient"
import useGetLikesByPostId from "./useGetLikesByPostId"
import useDeleteLike from "./useDeleteLike"
import useGetCommentsByPostId from "./useGetCommentsByPostId"
import useDeleteComment from "./useDeleteComment"

async function useDeletePostByID (postId: string, currentImage: string) {

    try {
        const likes = await useGetLikesByPostId(postId)
        likes.forEach(async like => { await useDeleteLike(like?.id) })

        const comments = await useGetCommentsByPostId(postId)
        comments.forEach(async comment => { await useDeleteComment(comment?.id) })

        await database.deleteDocument(
            "65392e6ccb70d171fa4e",
            "6539302a6c4d9c36ab32",
            postId
        )

        await storage.deleteFile(
            "653931b2dd59ca2a7d7c",
            currentImage
        )
            
    } catch (error) {
        throw error
    }
}

export default useDeletePostByID