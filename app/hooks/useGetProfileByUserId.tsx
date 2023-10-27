import { database, Query } from "@/libs/AppWriteClient";

const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            "65392e6ccb70d171fa4e",
            "65392e9269e344998ca9",
            [
                Query.equal('user_id', userId)
            ]
        )
        const documents = response.documents;

        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            image: documents[0]?.image,
            bio: documents[0]?.bio
        }
    } catch (error) {
        throw error
    }
}

export default useGetProfileByUserId;