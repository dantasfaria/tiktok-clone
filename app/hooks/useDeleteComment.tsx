import { database } from "@/libs/AppWriteClient"

async function useDeleteComment (id: string) {

    try {
        await database.deleteDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST),
            id,
            )
            
    } catch (error) {
        throw error
    }
}

export default useDeleteComment