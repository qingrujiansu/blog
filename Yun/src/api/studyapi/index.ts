import request from '@/utils/axios';
import type {studyResponseType} from './types'


export const reqFindAllFiles = () => {
    return request<studyResponseType>({
        url: '/studies/findAll',
        method: 'get',
    });
};