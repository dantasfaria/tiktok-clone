import { database, ID } from "@/libs/AppWriteClient";

const useCreateProfile = async (userId: string, name: string, image: string, bio: string) => {
    try {
        await database.createDocument(
            "65392e6ccb70d171fa4e",
            "65392e9269e344998ca9",
            ID.unique(),
            {
                user_id: userId,
                name: name,
                image: image,
                bio: bio
            }
        )
    } catch (error) {
        throw error
    }
}

export default useCreateProfile;