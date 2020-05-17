import { Id } from './id'

export interface User {
  id: Id
  state:boolean
  name:string
  role:string
  email:string
  password:string
}
