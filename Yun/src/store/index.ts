//模块化pinia
import { useStudyStore } from './study'
export default function useStore(){
    return{
        useStudy:useStudyStore()
    }
}


