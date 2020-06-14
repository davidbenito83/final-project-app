import React from 'react'
const axios = require('axios');
import { Repositories } from "../features/repos/Repositories";

jest.mock('axios');

describe('RepositoriesGet', () => {

  /*  USERS */
  it('fetches successfully users data from an API', async () => {

    const usersRepository = new Repositories()

    const data = [
      {
        state: true,
        role: "ADMIN_ROLE",
        name: "David",
        email: "d@d.com",
        password: "1234"
      }
    ];

    axios.get.mockImplementation(() => Promise.resolve({ data: { userDB: data } }));

    await expect(usersRepository.findAllUsers()).resolves.toEqual(data);
  });

  it('fetches successfully user from an API', async () => {

    const usersRepository = new Repositories()

    const data = {
      data:
        {
          state: true,
          role: "ADMIN_ROLE",
          name: "David",
          email: "d@d.com",
          password: "1234"
        }
    };

    const userAssoc = data.data.email

    axios.get.mockImplementation(() => Promise.resolve({data:{data}}));

    await expect(usersRepository.findUserDetail(userAssoc)).resolves.toEqual({ data });
  });

  /*  PRODUCTS */
  it('fetches successfully products data from an API', async () => {

    const productsRepository = new Repositories()

    const data = [
      {
        state:true,
        name:"Producto 1",
        description:"Descripción 1",
        image:"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        quantity:10,
        price:100,
        sellPrice:150,
        userAssoc:"d@d.com"
      }
    ];

    axios.get.mockImplementation(() => Promise.resolve({ data: { productDB: data } }));

    await expect(productsRepository.findAllProducts()).resolves.toEqual(data);
  });

  /*  REPAIRS */
  it('fetches successfully repairs data from an API', async () => {

    const repairsRepository = new Repositories()

    const data = [
      {
        state:true,
        name:"Producto 1",
        description:"Descripción 1",
        image:"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        carRegistration:"1234BBC",
        contactNumber:666666666,
        time:1,
        userAssoc:"d@d.com",
        productsAssoc: [{ name: "Frenos", description: "Brembo frenos" },{ name: "Amortiguadores", description: "Monroe" }]
      }
    ];

    axios.get.mockImplementation(() => Promise.resolve({ data: { repairDB: data } }));

    await expect(repairsRepository.findAllRepairs()).resolves.toEqual(data);
  });
});
