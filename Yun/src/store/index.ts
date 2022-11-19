//模块化pinia
import { useStudyStore } from './study'
import { useImageStore } from './imageFiles'
export default function useStore() {
    return {
        useStudy: useStudyStore(),
        useImages:useImageStore()
    }
}


