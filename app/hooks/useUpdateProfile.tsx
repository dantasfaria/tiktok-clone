import { database } from "@/libs/AppWriteClient";

const useUpdateProfile = async (id: string, name: string, bio: string) => {
    try {
        await database.updateDocument(
            "65392e6ccb70d171fa4e",
            "65392e9269e344998ca9",
            id,
            {
                name: name,
                bio: bio
            }
        )

    } catch (error) {
        throw error
    }
}

export default useUpdateProfile;