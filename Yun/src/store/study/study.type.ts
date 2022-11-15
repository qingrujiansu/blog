import type { Datum } from '@/api/studyapi/types'
export interface studyGetter {
    id: number,
    study_name: string
}
export type StudyState = {
    study_catalogue: Array<Datum>
}
export type StudyGetters = {
    getterStudy: (state: StudyState) => Array<studyGetter>
}
export type StudyActions = {
    findAllFiles: () => void
}
  // 注意：如有导入导出的依赖数据或类型，自定义test类型需要使用export导出；否则可视为全局类型即可直接使用
