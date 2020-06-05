import { Id } from './id'

export interface Product {
  id: Id
  state:boolean
  name:string
  description:string
  image:string
  quantity:number
  price:number
  sellPrice:number
  userAssoc:string
}
