import { database } from "@/libs/AppWriteClient";

const useUpdateProfileImage = async (id: string, image: string) => {
    try {
        await database.updateDocument(
            "65392e6ccb70d171fa4e",
            "65392e9269e344998ca9",
            id,
            {
                image: image
            }
        )

    } catch (error) {
        throw error
    }
}

export default useUpdateProfileImage;