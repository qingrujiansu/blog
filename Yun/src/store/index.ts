//模块化pinia
import { useStudyStore } from './study'
import { useImageStore } from './imageFiles'
import {useCommentStore} from './comments'
export default function useStore() {
    return {
        useStudy: useStudyStore(),
        useImages:useImageStore(),
        useComments:useCommentStore()
    }
}


