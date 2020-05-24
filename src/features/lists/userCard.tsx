import React, { useState } from "react";
import { RepoGetApi } from "../repos/RepoGetApi";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Repositories } from "../repos/Repositories";
import { Modal } from "../../core/components/modal/modal";
import { UserModify } from "../user/user-modify";

interface Props {
  user: RepoGetApi
}

const repo = new Repositories();

function userDelete(id: Object) {

  if(id !== 'null' && typeof id != 'undefined'){

    const removeUser = repo.deleteUsers(id)

  }else{

    return console.log('No se ha podido borrar el usuario')

  }

}

function userEdit(id: Object) {

  if(id !== 'null' && typeof id != 'undefined'){

    console.log(id);
    // const updateUser = repo.updateUsers(id)

  }else{

    return console.log('No se ha podido borrar el usuario')

  }

}
export const UserCard: React.FunctionComponent<Props> = ({ user }) => {

  const [state, setState] = useState({ show: false });

  const showModal = () => {
    setState({ show: true })
  };
  const hideModal  = () => {
    setState({ show: false })
  };

  return (
    <>
      <tr className="row-table">
        <td className="cell-table">{user.name}</td>
        <td className="cell-table">{user.email}</td>
        <td className="cell-table">{user.role}</td>
        <td className="cell-table">{user.state ? "SI" : "NO"}</td>
        <td className="cell-table"><Link to={"/user/" + user.email}><Icon>visibility</Icon></Link></td>
        <td className="cell-table"><Button onClick={showModal}><Icon>edit</Icon></Button></td>
        <td className="cell-table"><Button onClick={() => userDelete(user.id)}><Icon>delete</Icon></Button></td>
      </tr>
      <tr>
        <Modal show={state.show} handleClose={hideModal}>
          <Button onClick={hideModal}><Icon>close</Icon></Button>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </tr>
    </>
  );
}

