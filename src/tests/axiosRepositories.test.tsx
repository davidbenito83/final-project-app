import React from 'react'
const axios = require('axios');
import { Repositories } from "../features/repos/Repositories";

jest.mock('axios');

describe('Repositories', () => {

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

    const userAssoc = 'd@d.com'

    axios.get.mockImplementation(() => Promise.resolve({data:{data}}));

    await expect(usersRepository.findUserDetail(userAssoc)).resolves.toEqual({ data });
  });

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


});
