import { Query, database } from "@/libs/AppWriteClient"

async function useGetLikesByPostId(postId: string) {
    try {
        const response = await database.listDocuments(
            "65392e6ccb70d171fa4e",
            "65392fa21c9c14a7605c",
            [
                Query.equal('post_id', postId)
            ]
        )

        const documents = response.documents;
        const result = documents.map(doc => {
            return {
                id: doc?.user_id,
                user_id: doc?.user_id,
                post_id: doc?.post_id
            }
        })

        return result;
        
    } catch (error) {
        throw error
    }
}

export default useGetLikesByPostId