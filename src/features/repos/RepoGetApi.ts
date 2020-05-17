import { Id } from '../id'

export interface RepoGetApi {
  id: Id
  symbol: string,
  state: boolean,
  role: string,
  name: string,
  email: string
}