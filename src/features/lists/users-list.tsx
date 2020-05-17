import React from 'react'
import { RepoGetApi } from "../repos/RepoGetApi";
import { UserCard } from "./userCard";

export const UsersList: React.FunctionComponent<{
  users: RepoGetApi[]
}> = ({ users }) => {
  return (
    <div className="table-container">
      <table className="table-data">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Activo</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <UserCard key={user.name} user={user} />
        ))}
        </tbody>
      </table>
    </div>
  )
}
