import { RepoGetApi } from './RepoGetApi'
import { Product } from "../product";
import { User } from "../user";
import { Repair } from "../repair";

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

  async findAllUsers(): Promise<User[]> {

    const response = await axios.get('/users/getall')

    return response.data.userDB.map((x: any) => {
      return {
        state: x.state,
        role: x.role,
        name: x.name,
        email: x.email,
        password: x.password,
        id: x._id
      }
    })
  }

  async deleteUsers(id: Object): Promise<User[]> {

    const response = await axios.delete('/users/delete/'+id)

    return response.status;

  }

  async updateUsers(user: User): Promise<User[]> {

    const response = await axios.post('/users/update/'+user.id,user)

    return response.status;
  }

  async findUserDetail(userAssoc: string|undefined): Promise<Product[]> {

    const response = await axios.get('/products/getbyuser/'+userAssoc)

    if (response.data !== 'undefined'){

      return response.data
    }
    else{
      return response.status;
    }

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

  async updateProducts(product: Product): Promise<Product[]>{

    const response = await axios.post('/products/update/'+product.id,product)

    return response.status;
  }

  async findAllRepairs(): Promise<Repair[]> {

    const response = await axios.get('/repairs/getall')

    return response.data.repairDB.map((x: any) => {
      return {
        state: x.state,
        image: x.image,
        name: x.name,
        description: x.description,
        time: x.time,
        userAssoc: x.userAssoc,
        date: x.date,
        id: x._id
      }
    })
  }

  async deleteRepairs(id: Object): Promise<Repair[]> {

    const response = await axios.delete('/repairs/delete/'+id)

    return response.status;

  }

  async updateRepairs(repair: Repair): Promise<Repair[]>{

    const response = await axios.post('/repairs/update/'+repair.id,repair)

    return response.status;
  }
}
