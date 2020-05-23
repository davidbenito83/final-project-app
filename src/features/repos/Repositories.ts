import { RepoGetApi } from './RepoGetApi'
import { Product } from "../product";

const axios = require('axios');

export class Repositories {

  async findAll(): Promise<RepoGetApi[]> {

    const response = await axios.get('/cars/all')

    return response.data.data.map((x: any) => {
      return {
        id: x.id,
        symbol: x.symbol,
        name: x.name,
      }
    })
  }

  async findAllUsers(): Promise<RepoGetApi[]> {

    const response = await axios.get('/users/getall')

    return response.data.userDB.map((x: any) => {
      return {
        state: x.state,
        role: x.role,
        name: x.name,
        email: x.email,
        id: x._id
      }
    })
  }

  async deleteUsers(id: Object): Promise<RepoGetApi[]> {

    const response = await axios.delete('/users/delete/'+id)

    return response.status;

  }

  async updateUsers(id: Object): Promise<RepoGetApi[]> {

    const response = await axios.delete('/users/update/'+id)

    return response.status;

  }

  async findAllProducts(): Promise<Product[]> {

    const response = await axios.get('/products/getall')

    return response.data.productDB.map((x: any) => {
      return {
        state: x.state,
        image: x.image,
        name: x.name,
        description: x.description,
        quantity: x.quantity,
        userAssoc: x.userAssoc,
        date: x.date,
        id: x._id
      }
    })
  }

  async deleteProducts(id: Object): Promise<RepoGetApi[]> {

    const response = await axios.delete('/products/delete/'+id)

    return response.status;

  }
}
