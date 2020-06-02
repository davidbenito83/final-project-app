import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { UsersList } from "../features/lists/users-list";
import { Repositories } from "../features/repos/Repositories";
import { UserCreate } from "../features/user/user-create";
import { User } from "../features/user";

export const Users: React.FC = () => {

  const [role, setRole] = useState<Role>('user')
  const [users, setUsers] = useState<User[]>([])
  const [newUsers, setNewUsers] = useState<User[]>([])

  async function createUser(name: string, email: string, password: string, role:string, state:boolean ) {
    const newUser: User = { id: Math.random() * 1000, name:name,  email:email, password:password, role:role, state:state}
    setNewUsers([...newUsers, newUser])
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const usersRepository = new Repositories()
    const users = await usersRepository.findAllUsers()
    setUsers(users)
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <h2 className="title-section">Listado de usuarios</h2>
        <UsersList users={users}></UsersList>
        <h2 className="title-section">Creación de usuario</h2>
        <div className="wrapper">
          <div>
            <UserCreate onCreate={createUser} users={newUsers} />
          </div>
        </div>
      </>
    </RoleContext.Provider>
  )
}