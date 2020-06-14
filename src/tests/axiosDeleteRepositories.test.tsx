import React from 'react'
const axios = require('axios');
import { Repositories } from "../features/repos/Repositories";
import { User } from "../features/user";
import { Product} from "../features/product";
import { Repair } from "../features/repair";

jest.mock('axios');

describe('RepositoriesDelete', () => {

  /*  USERS */
  it('deletes successfully a user data from an API', async () => {

    const usersRepository = new Repositories()

    const data: User = {
      state: true,
      role: "ADMIN_ROLE",
      name: "David",
      email: "d@d.com",
      password: "1234",
      id: 1
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: data } ));

    await expect(usersRepository.deleteUsers(data)).resolves.toEqual(data);
  });

  /*  PRODUCTS  */
  it('deletes successfully a product data from an API', async () => {

    const productsRepository = new Repositories()

    const data: Product = {

      state: true,
      name: "Producto 1",
      description: "Descripción producto 1",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      quantity: 10,
      price: 100,
      sellPrice: 150,
      userAssoc: "d@d.com",
      id: 1

    };

    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: data } ));

    await expect(productsRepository.deleteProducts(data)).resolves.toEqual(data);
  });

  /*  REPAIRS  */
  it('deletes successfully a repair data from an API', async () => {

    const repairsRepository = new Repositories()

    const data: Repair = {

      state: true,
      name: "Reparación 1",
      description: "Descripción reparación 1",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      carRegistration: "1234BCD",
      contactNumber: 100,
      time: 150,
      userAssoc: "d@d.com",
      productsAssoc: [{name: "Producto 1", description: "Descripción producto 1"},{name: "Producto 2", description: "Descripción producto 2"}],
      id: 1

    };

    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: data } ));

    await expect(repairsRepository.deleteRepairs(data)).resolves.toEqual(data);
  });

});
