import request from '@/utils/axios';
import type { imageResponseType } from './types'


export const reqFindAllImages = () => {
    return request<imageResponseType>({
        url: '/images/findAll',
        method: 'get',
    });
};