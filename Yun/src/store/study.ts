import { defineStore } from 'pinia'
import { reqFindAllFiles } from '@/api/studyapi'
import to from 'await-to-js'
import type { Datum } from '@/api/studyapi/types'
interface studyState {
  study_catalogue: Datum[]
}
interface studyGetters{
  id:number,
  study_name:string
}
export const useStudyStore = defineStore({
  id: 'study', // id必填，且需要唯一
  persist: true,//开启数据持久化
  state: (): studyState => {
    return {
      study_catalogue: [],
      
    }
  },
  getters:{
    getterStudy:(state):Array<studyGetters>=>{
      let getStudy = [] as Array<studyGetters>
      state.study_catalogue.forEach((item)=>{        
        let obj = {
          id:item.id,
          study_name:item.study_name.split('.')[0]
        }
        getStudy.push(obj)
      })
      return getStudy
    }
  },
  actions: {
    async findAllFiles() {
      const [err, res] = await to(reqFindAllFiles());
      if (err) {
        console.log(err);
      }

      this.study_catalogue = res?.data as any
    }
  }
})
