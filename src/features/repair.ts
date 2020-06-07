import { Id } from './id'

export interface Repair {
  id: Id
  state:boolean
  name:string
  description:string
  image:string
  carRegistration:string
  contactNumber:number
  time:number
  userAssoc:string
  productsAssoc: object
  _id?: Id
}
