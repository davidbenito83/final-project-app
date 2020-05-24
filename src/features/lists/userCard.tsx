import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Repositories } from "../repos/Repositories";
import { Modal } from "../../core/components/modal/modal";
import { UserModify } from "../user/user-modify";
import { User } from "../user";
import { Id } from "../id";

interface Props {
  user: User
}

export const UserCard: React.FunctionComponent<Props> = ({ user }) => {

  const repo = new Repositories();

  function userDelete(id: Object) {

    if(id !== 'null' && typeof id != 'undefined'){

      const removeUser = repo.deleteUsers(id)

    }else{

      return console.log('No se ha podido borrar el usuario')

    }

  }

  // function userEdit(id: Object, name: string, email: string, password: string, role:string, state:boolean) {

  function userEdit(user: User) {

    console.log(user.id);

    if(typeof user.id != 'undefined'){

      modifyUser(user.id,user.name,user.email,user.password,user.role,user.state);
      showModal();
      // return(
      //   <Modal show={state.show} handleClose={hideModal}>
      //     <Button onClick={hideModal}><Icon>close</Icon></Button>
      //     <UserModify onCreate={modifyUser} users={updateUsers}></UserModify>
      //   </Modal>
      //   );

      // const updateUser = repo.updateUsers(id)

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

  async function modifyUser(id: Object, name: string, email: string, password: string, role:string, state:boolean ) {
    const updateUser: User = { id: user.id, name: user.name,  email: user.email, password: user.password, role: user.role, state: user.state}
    setUpdateUsers([...updateUsers, updateUser])
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
        <td className="cell-table"><Button onClick={() => userEdit(user)}><Icon>edit</Icon></Button></td>
        <td className="cell-table"><Button onClick={() => userDelete(user.id)}><Icon>delete</Icon></Button></td>
      </tr>
      <tr>
        <Modal show={state.show} handleClose={hideModal}>
          <div className={modalHeader}>
            <h3>Editando usuario <span>{user.name}</span></h3>
            <Button onClick={hideModal}><Icon>close</Icon></Button>
          </div>
          <UserModify onCreate={modifyUser} users={updateUsers}></UserModify>
        </Modal>
      </tr>
    </>
  );
}

