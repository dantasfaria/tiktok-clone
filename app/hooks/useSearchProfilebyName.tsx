import { database, Query } from "@/libs/AppWriteClient";

const useSearchProfilesByName = async (name: string) => {
    try {
        const profileResult = await database.listDocuments(
            "65392e6ccb70d171fa4e",
            "65392e9269e344998ca9",
            [
                Query.limit(5),
                Query.search("name", name)
            ]
        )
        const documents = profileResult.documents;
        
        const objPromises = documents.map(profile => {
            return {
                id: profile?.user_id,
                name: profile?.name,
                image: profile?.image,
            }
        })

        const result = await Promise.all(objPromises)

        return result;

    } catch (error) {
        throw error
    }
}

export default useSearchProfilesByName;