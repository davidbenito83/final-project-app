import React, { useState } from 'react'
import { Button } from '../../core/components/button/button'
import { User } from "../user";

interface Props {
  onCreate(
    id: Object,
    userName: string,
    userRole: string,
    userEmail: string,
    userPassword: string,
    state: boolean
  ): void
  users: User[]
}

export const UserModify: React.FunctionComponent<Props> = ({ onCreate, users }) => {
  const [userName, setuserName] = useState('')
  const [userRole, setuserRole] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userPassword, setuserPassword] = useState('')
  const [userId, setuserId] = useState('')

  return (
    <>
      <h3>Editando usuario {userName} { userId }: </h3>
      <form action="/users/update" method="POST" className="form-type-post">
        <label htmlFor="nombre">Nombre del usuario</label><br />
        <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
               value={userName} disabled={true} onChange={(event) => setuserName(event.target.value)} required></input><br />
        <label htmlFor="password">Password del usuario</label><br />
        <input type="password" name="password" className="form-control" id="password" placeholder="Password"
               value={userPassword} onChange={(event) => setuserPassword(event.target.value)} required></input><br />
        <label htmlFor="email">Email del usuario</label><br />
        <input type="text" name="email" className="form-control" id="email" placeholder="Email"
               value={userEmail} onChange={(event) => setuserEmail(event.target.value)} required></input><br />
        <label htmlFor="role">Rol de usuario</label><br />
        <input name="role" className="form-control" id="role" placeholder="Role"
               value={userRole} onChange={(event) => setuserRole(event.target.value)} required></input><br />
        <input type="hidden" name="state" className="form-control" id="validationDefault01"
               value="true"></input><br />
        <Button submit>Modificar Usuario</Button>
      </form>
    </>
  )
}
