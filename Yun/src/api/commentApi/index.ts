import request from '@/utils/axios';
import type { commentsResponseType,commentUploadResponseType } from './types'


export const reqFindAllComments = () => {
    return request<commentsResponseType>({
        url: '/comments/findAll',
        method: 'get',
    });
};

export const reqUploadComment = (user_id:string,txtContent:string) => {
    return request<commentUploadResponseType>({
        url: '/comments/upload',
        method: 'post',
        data:{
            user_id,
            txtContent
        }
    });
};