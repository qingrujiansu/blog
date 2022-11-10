import { defineStore } from 'pinia'
import {reqFindAllFiles} from '@/api/studyapi'
export const useStudyStore = defineStore({
  id: 'study', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
      console.log(this.name);
    },
    async findAllFiles(){
      const res = await reqFindAllFiles();
      console.log('res--->',res.data.result.data[0].study_name);
      
    }
  }
})
