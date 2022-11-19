import { defineStore } from 'pinia'
import { reqFindAllFiles } from '@/api/studyApi'
import to from 'await-to-js'
import type { Datum } from '@/api/studyApi/types'
import type { StudyState, StudyGetters, StudyActions } from './study.type'
export const useStudyStore = defineStore<string, StudyState, StudyGetters, StudyActions>({
  id: 'study', // id必填，且需要唯一
  persist: true,//开启数据持久化
  state: () => {
    return {
      study_catalogue: [],

    }
  },
  getters: {
    getterStudy: (state) => {
      let getStudy = [] as Array<Datum>
      state.study_catalogue.forEach((item) => {
        let obj = {
          id: item.id,
          study_name: item.study_name.split('.')[0],
          study_url:'../../../blog_server/src/app/static/'+item.study_name +'?raw'
        }
        getStudy.push(obj)
      })
      return getStudy
    },
   
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
