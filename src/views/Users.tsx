import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
// import { Link } from "react-router-dom";
import { UsersList } from "../features/lists/users-list";
import { Repositories } from "../features/repos/Repositories";
import { UserCreate } from "../features/user/user-create";
import { UserModify } from "../features/user/user-modify";
import { User } from "../features/user";
import { RepoGetApi } from "../features/repos/RepoGetApi";
import { Id } from "../features/id";

export const Users: React.FC = () => {

  const [role, setRole] = useState<Role>('user')
  const [users, setUsers] = useState<RepoGetApi[]>([])
  const [newUsers, setNewUsers] = useState<User[]>([])
  const [updateUsers, setUpdateUsers] = useState<User[]>([])

  async function createUser(name: string, email: string, password: string, role:string, state:boolean ) {
    const newUser: User = { id: Math.random() * 1000, name:name,  email:email, password:password, role:role, state:state}
    setNewUsers([...newUsers, newUser])
  }

  async function modifyUser(id: Id, name: string, email: string, password: string, role:string, state:boolean ) {
    const updateUser: User = { id: id, name:name,  email:email, password:password, role:role, state:state}
    setUpdateUsers([...updateUsers, updateUser])
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
        <h2 className="title-section">Listado de users</h2>
        <UsersList users={users}></UsersList>
        <div className="wrapper">
          <div>
            <UserCreate onCreate={createUser} users={newUsers} />
          </div>
          <div>
            <UserModify onCreate={modifyUser} users={updateUsers} />
          </div>
        </div>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/user/1">Link a User 1 Detail</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/user/2">Link a User 2 Detail</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/user/3">Link a User 3 Detail</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </>
    </RoleContext.Provider>
  )
}