import { database } from "@/libs/AppWriteClient"

async function useDeleteComment (id: string) {

    try {
        await database.deleteDocument(
            "65392e6ccb70d171fa4e",
            "653930c8771adff2319f",
            id,
            )
            
    } catch (error) {
        throw error
    }
}

export default useDeleteComment