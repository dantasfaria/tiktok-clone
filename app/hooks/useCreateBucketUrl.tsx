

function useCreateBucketUrl (fileId: string) {

    const url = "https://cloud.appwrite.io/v1";
    const id = "653931b2dd59ca2a7d7c";
    const endpoint = "65392c76260c11d98645";

    if (!url || !id || !endpoint || !fileId) return ''

    return `${url}/storage/buckets/${id}/files/${fileId}/view?project=${endpoint}`

}

export default useCreateBucketUrl