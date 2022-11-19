import { defineStore } from 'pinia'
import { reqFindAllComments, reqUploadComment } from '@/api/commentApi'
import to from 'await-to-js'
import type { Datum } from '@/api/commentApi/types'
import type { CommentState, CommentGetters, CommentActions } from './comments.type'

export const useCommentStore = defineStore<string, CommentState, CommentGetters, CommentActions>({
    id: 'Comment',
    persist: true,
    state: () => {
        return {
            uid: '',
            comment_catalogue: [],
        }
    },
    actions: {
        async findAllComments() {
            const [err,res] = await to(reqFindAllComments())
            if(err){
                console.log(err);
            }
            this.comment_catalogue = res?.data as any
        },
        async uploadComment(txtContent) {
            const [err,res] = await to (reqUploadComment(this.uid,txtContent))
            if(err){
                console.log(err);
            }
            return res 
        }
    }
})