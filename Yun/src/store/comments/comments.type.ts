import type { Datum } from '@/api/commentApi/types'

export type CommentState = {
  comment_catalogue:Array<Datum>
  uid:string
}

export type CommentGetters = {
  
}

export type CommentActions = {
  findAllComments:()=>void
  uploadComment:(txtContent:string)=>void
}
