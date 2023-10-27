import { database } from "@/libs/AppWriteClient"

async function useDeleteComment (id: string) {

    try {
        await database.deleteDocument(
            "65392e6ccb70d171fa4e",
            "6539302a6c4d9c36ab32",
            id,
            )
            
    } catch (error) {
        throw error
    }
}

export default useDeleteComment