import { Query, database } from "@/libs/AppWriteClient"

async function useGetPostsByUser(userId: string) {
    try {
        const response = await database.listDocuments(
            "65392e6ccb70d171fa4e",
            "6539302a6c4d9c36ab32",
            [
                Query.equal('user_id', userId),
                Query.orderDesc("$id")
            ]
        )

        const documents = response.documents;
        const result = documents.map(doc => {
            return {
                id: doc?.$id,
                user_id: doc?.user_id,
                video_url: doc?.video_url,
                text: doc?.text,
                created_at: doc?.created_at
            }
        })

        return result;
        
    } catch (error) {
        throw error
    }
}

export default useGetPostsByUser