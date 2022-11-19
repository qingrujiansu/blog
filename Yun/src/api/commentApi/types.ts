export interface Datum {
    createdAt: string,
    id: number,
    user_id: string,
    txtContent: string,
    authorContent: string | null
}
export interface commentsResponseType {
    data: Datum[];
}
export interface commentUploadResponseType{
    id: number,
    user_id: string,
    txtContent: string,
}
