import type { Datum } from '@/api/imageApi/types'

export type ImageState = {
    image_catalogue: Array<Datum>
}
export type ImageGetters = {
    getterImage: (state: ImageState) => Array<Datum>
}
export type ImageActions = {
    findAllImages: () => void
}
  // 注意：如有导入导出的依赖数据或类型，自定义test类型需要使用export导出；否则可视为全局类型即可直接使用
