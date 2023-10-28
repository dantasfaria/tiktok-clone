import { database } from "@/libs/AppWriteClient"

async function useDeleteLike (id: string) {

    try {
        await database.deleteDocument(
            "65392e6ccb70d171fa4e",
            "65392fa21c9c14a7605c",
            id,
            )
            
    } catch (error) {
        throw error
    }
}

export default useDeleteLike