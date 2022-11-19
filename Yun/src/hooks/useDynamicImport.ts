// import pinia from '@/store/store' 
// import { storeToRefs } from 'pinia';
// import {useStudyStore} from '@/store/study/index'
// const useStore = useStudyStore(pinia)
// const { study_catalogue } = storeToRefs(useStore)
// import useStore from '@/store'
// import { storeToRefs } from 'pinia';

// export default async function useDynamicImport(index:number) {
//     const { useStudy } = useStore()
//     const {getterStudy} = storeToRefs(useStudy)               
//     console.log('1111', ''+getterStudy.value[index].study_url);
//     return await import('../../../blog_server/src/app/static/test.md?raw')

// } 
export async function useDynamicImportMarkdown() {
    const studyArrString: Array<string> = []
    const modules = import.meta.glob('../../../blog_server/src/app/static/*.md', { as: 'raw' });
    for (const path in modules) {
        await modules[path]().then((mod) => {
            studyArrString.push(mod)
        })
    }
    return studyArrString
}
export async function useDynamicImportImage() {
    const modules = import.meta.glob(['../../../blog_server/src/app/static/*', '!**/*.md'])
    for (const path in modules) {
        modules[path]().then((mod) => {
            console.log(mod.default)
        })
    }

} 
