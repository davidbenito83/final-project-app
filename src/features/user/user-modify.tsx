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

  let innerName = '';
  let innerEmail = '';
  let innerRole = '';
  let innerPassword = '';
  let innerId = 0;

  if (typeof users !== 'undefined' && users.length > 0){
    innerName = users[0].name;
    innerEmail = users[0].email;
    innerRole = users[0].role;
    innerPassword = users[0].password;
    innerId = users[0].id;
  }

  const [userName, setuserName] = useState<string>('')
  const [userRole, setuserRole] = useState<string>('')
  const [userEmail, setuserEmail] = useState<string>('')
  const [userPassword, setuserPassword] = useState<string>('')
  const [userId, setuserId] = useState('')


  if (typeof users !== 'undefined' && users.length > 0){

    return (
      <>
        <form action="/users/update" method="POST" className="form-type-post">
          <label htmlFor="nombre">Nombre del usuario</label><br />
          <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
                 value={userName} onChange={(event) => setuserName(event.target.value)}
                 required></input><br/>
          <label htmlFor="password">Password del usuario</label><br/>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                 value={userPassword} onChange={(event) => setuserPassword(event.target.value)}
                 required></input><br/>
          <label htmlFor="email">Email del usuario</label><br/>
          <input type="text" name="email" className="form-control" id="email" placeholder="Email"
                 value={userEmail} onChange={(event) => setuserEmail(event.target.value)} required></input><br/>
          <label htmlFor="role">Rol de usuario</label><br/>
          <input name="role" className="form-control" id="role" placeholder="Role"
                 value={userRole} onChange={(event) => setuserRole(event.target.value)} required></input><br/>
          <input type="hidden" name="id" className="form-control"
                 value={users[0].id}></input>
          <input type="hidden" name="state" className="form-control"
                 value="true"></input><br/>
          <Button submit>Modificar Usuario</Button>
        </form>
      </>
    )

  } else {
    return (
      <>
        <div>
          <h3>
            error
          </h3>
        </div>
      </>
    )
  }



  // setuserName(users[0].name);
  // setuserRole(users[0].role);
  // setuserEmail(users[0].email);
  // setuserPassword(users[0].password);


}
