import { defineStore } from 'pinia'
import { reqFindAllImages } from '@/api/imageApi'
import to from 'await-to-js'
import type { Datum } from '@/api/imageApi/types'
import type {ImageState, ImageGetters, ImageActions } from './images.type'
export const useImageStore = defineStore<string, ImageState, ImageGetters, ImageActions>({
  id: 'Image', // id必填，且需要唯一
  persist: true,//开启数据持久化
  state: () => {
    return {
      image_catalogue: [] ,
    }
  },
  getters: {
    getterImage: (state) => {
      let getImage = [] as Array<Datum>
      state.image_catalogue.forEach((item) => {
        let obj = {
          id: item.id,
          image_name: item.image_name.split('.')[0],
          // image_url:'../../../blog_server/src/app/static/'+item.image_name,
          image_url:'/@fs/'+item.image_url,
          image_description:item.image_description
        }
        getImage.push(obj)
      })
      return getImage
    },
   
  },
  actions: {
    async findAllImages() {
      const [err, res] = await to(reqFindAllImages());
      if (err) {
        console.log(err);
      }
      this.image_catalogue = res?.data as any
    }
  }
})
