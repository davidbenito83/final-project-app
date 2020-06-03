import { Id } from './id'

export interface Repair {
  id: Id
  state:boolean
  name:string
  description:string
  image:string
  time:number
  userAssoc:string
  _id?: Id
}
