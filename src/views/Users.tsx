import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { Link } from "react-router-dom";
import { UsersList } from "../features/lists/users-list";
import { RepoGetApi } from "../features/repos/RepoGetApi";
import { Repositories } from "../features/repos/Repositories";

export const Users: React.FC = () => {
  const [role, setRole] = useState<Role>('user')
  const [users, setUsers] = useState<RepoGetApi[]>([])

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
        <ul>
          <li>
            <Link to="/user/1">Link a User 1 Detail</Link>
          </li>
          <li>
            <Link to="/user/2">Link a User 2 Detail</Link>
          </li>
          <li>
            <Link to="/user/3">Link a User 3 Detail</Link>
          </li>
        </ul>
      </>
    </RoleContext.Provider>
  )
}