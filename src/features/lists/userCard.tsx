import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Repositories } from "../repos/Repositories";
import { Modal } from "../../core/components/modal/modal";
import { User } from "../user";

interface Props {
  user: User
}

export const UserCard: React.FunctionComponent<Props> = ({ user }) => {

  const repo = new Repositories();

  function userDelete(id: Object) {

    if(id !== 'null' && typeof id != 'undefined'){

      repo.deleteUsers(id)

      window.location.reload();

    }else{

      return console.log('No se ha podido borrar el usuario')

    }

  }

  function modalEdit(user: User) {

    if(typeof user.id != 'undefined'){

      showModal();
      // modifyUser(user.id,user.name,user.email,user.password,user.role,user.state);
    }else{

      return console.log('No se ha podido editar el usuario')

    }

  }

  function editUser(user: User) {

    if(typeof user.id != 'undefined'){

      repo.updateUsers(user)

      hideModal();

      window.location.reload();

    }else{

      return console.log('No se ha podido borrar el usuario')

    }

  }

  const [state, setState] = useState({ show: false });

  const showModal = () => {
    setState({ show: true })
  };
  const hideModal  = () => {
    setState({ show: false })
  };

  const [updateUsers, setUpdateUsers] = useState<User[]>([])
  const [userName, setuserName] = useState<string>(user.name)
  const [userRole, setuserRole] = useState<string>(user.role)
  const [userEmail, setuserEmail] = useState<string>(user.email)
  const [userPassword, setuserPassword] = useState<string>(user.password)

  async function modifyUser(id: Object, name: string, email: string, password: string, role:string, state:boolean ) {
    const updateUser: User = { id: user.id, name: name,  email: email, password: password, role: role, state: state}
    setUpdateUsers([...updateUsers, updateUser])
    editUser(updateUser)
  }

  const modalHeader = "modal-header";

  return (
    <>
      <tr className="row-table">
        <td className="cell-table">{user.name}</td>
        <td className="cell-table">{user.email}</td>
        <td className="cell-table">{user.role}</td>
        <td className="cell-table">{user.state ? "SI" : "NO"}</td>
        <td className="cell-table"><Link to={"/user/" + user.email}><Icon>visibility</Icon></Link></td>
        <td className="cell-table"><Button onClick={() => modalEdit(user)}><Icon>edit</Icon></Button></td>
        <td className="cell-table"><Button onClick={() => userDelete(user.id)}><Icon>delete</Icon></Button></td>
      </tr>
      <tr>
        <Modal show={state.show} handleClose={hideModal}>
          <div className={modalHeader}>
            <h3>Editando usuario <span>{user.name}</span></h3>
            <Button onClick={hideModal}><Icon>close</Icon></Button>
          </div>
          <div>
            <form className="form-type-post">
              <label htmlFor="nombre">Nombre del usuario</label><br />
              <input type="text" name="name" className="form-control" id={"nombre"+user.id} placeholder="Nombre" value={userName} onChange={(event) => setuserName(event.target.value)}></input><br/>
              <label htmlFor="password">Password del usuario</label><br/>
              <input type="text" name="password" className="form-control" id={"password"+user.id} placeholder="Password"value={userPassword} onChange={(event) => setuserPassword(event.target.value)}></input><br/>
              <label htmlFor="email">Email del usuario</label><br/>
              <input type="text" name="email" className="form-control" id={"email"+user.id} placeholder="Email" value={userEmail} onChange={(event) => setuserEmail(event.target.value)}></input><br/>
              <label htmlFor="role">Rol de usuario</label><br/>
              <input name="role" className="form-control" id={"role"+user.id} placeholder="Role" value={userRole} onChange={(event) => setuserRole(event.target.value)}></input><br/>
              <input type="hidden" name="id" className="form-control" value={user.id}></input>
              <input type="hidden" name="state" className="form-control" value="true"></input><br/>
              <Button onClick={ () => modifyUser(user.id,userName,userEmail,userPassword,userRole,user.state)}>Modificar Usuario</Button>
            </form>
          </div>
        </Modal>
      </tr>
    </>
  );
}

