import React, { useState } from "react";
import { Repair } from "../repair";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Modal } from "../../core/components/modal/modal";
import { Repositories } from "../repos/Repositories";

interface Props {
  repair: Repair
}
export const RepairCard: React.FunctionComponent<Props> = ({ repair }) => {

  const repo = new Repositories();

  function repairDelete(id: Object) {

    if (id !== "null" && typeof id != "undefined") {

      repo.deleteRepairs(id);

      window.location.reload();

    } else {

      return console.log("No se ha podido borrar la reparación");

    }

  }

  function modalEdit(repair: Repair) {
    if (typeof repair.id != "undefined") {
      showModal();
    } else {

      return console.log("No se ha podido editar la reparación");

    }
  }

  function editRepair(repair: Repair) {

    if (typeof repair.id != "undefined") {

      repo.updateRepairs(repair);

      hideModal();

      window.location.reload();

    } else {

      return console.log("No se ha podido modificar la reparación");

    }

  }

  function repairFinished(repair: Repair) {

    if (typeof repair.id != "undefined" || typeof repair._id != "undefined") {

      repo.finishRepairs(repair);

      window.location.reload();

    } else {

      return console.log("No se ha podido terminar la reparación");

    }

  }

const [state, setState] = useState({ show: false });

const showModal = () => {
  setState({ show: true })
};
const hideModal  = () => {
  setState({ show: false })
};

const modalHeader = "modal-header";

  const [updateRepairs, setUpdateRepairs] = useState<Repair[]>([])
  const [repairName, setrepairName] = useState<string>(repair.name)
  const [repairDescription, setrepairDescription] = useState<string>(repair.description)
  const [repairImage, setrepairImage] = useState<string>(repair.image)
  const [repairTime, setrepairTime] = useState<any>(repair.time)
  const [repairUserAssoc, setrepairUserAssoc] = useState<string>(repair.userAssoc)

  async function modifyrepair(id: Object, name: string, image: string, description: string, time:number, state:boolean, userAssoc: string ) {
    const updateRepair: Repair = { id: repair.id, name: name,  description: description, image: image, time: time, state: state, userAssoc: userAssoc}
    setUpdateRepairs([...updateRepairs, updateRepair])
    editRepair(updateRepair)
  }

return (
  <>
    <div className="box-product">
      <img src={repair.image} className="img-box-product" alt={repair.name}/>
      <h4>{repair.name}</h4>
      <p>{repair.description}</p>
      <table className="box-product-controls">
        <tbody>
        <tr>
          <td className="cell-table cell-state"><Icon className={repair.state ? "onboard-repair" : "finish-repair"}>info</Icon> {repair.state ? "En curso" : "Terminada"}</td>
        </tr>
        <tr>
          <td className="cell-table"><Icon>person</Icon> {repair.userAssoc}</td>
          <td className="cell-table"><Icon>query_builder</Icon> {repair.time}</td>
          <td className="cell-table"><Button className="f-right mx-1" onClick={() => repairDelete(repair.id)}><Icon>delete</Icon></Button>
            <Button className="f-right mx-1" onClick={() => modalEdit(repair)}><Icon>edit</Icon></Button> <Button className="f-right mx-1" onClick={() => repairFinished(repair)}><Icon>pending_actions</Icon></Button> </td>
        </tr>
        <tr>
          <Modal show={state.show} handleClose={hideModal}>
            <div className={modalHeader}>
              <h3>Editando <span>{repair.name}</span></h3>
              <Button onClick={hideModal}><Icon>close</Icon></Button>
            </div>
            <div>
              <form className="form-type-post">
                <label htmlFor="nombre">Nombre de la reparación</label><br/>
                <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
                       value={repairName}
                       onChange={(event) => setrepairName(event.target.value)}></input><br/>
                <label htmlFor="image">Imagen de la reparación (url)</label><br/>
                <input type="text" name="image" className="form-control" id="image" placeholder="Imagen de la reparación"
                       value={repairImage} onChange={(event) => setrepairImage(event.target.value)}></input><br/>
                <label htmlFor="quantity">Tiempo de ejecución de la reparación</label><br/>
                <input type="number" name="quantity" className="form-control" id="quantity" placeholder="Tiempo de ejecución"
                       value={repairTime}
                       onChange={(event) => setrepairTime(event.target.value)}></input><br/>
                <label htmlFor="userAssoc">Usuario asociado de la reparación</label><br/>
                <input type="text" name="userAssoc" className="form-control" id="userAssoc" placeholder="Descripción"
                       value={repairUserAssoc}
                       onChange={(event) => setrepairUserAssoc(event.target.value)}></input><br/>
                <label htmlFor="description">Descripción del producto</label><br/>
                <input type="text" name="description" className="form-control" id="description"
                       placeholder="Descripción"
                       value={repairDescription}
                       onChange={(event) => setrepairDescription(event.target.value)}></input><br/>
                <input type="hidden" name="id" className="form-control" value={repair.id}></input>
                <input type="hidden" name="state" className="form-control" value="true"></input><br/>
                <Button
                  onClick={() => modifyrepair(repair.id, repairName, repairImage, repairDescription, repairTime, repair.state, repairUserAssoc)}>Modificar
                  Reparación</Button>
              </form>
            </div>
          </Modal>
        </tr>
        </tbody>
      </table>
    </div>
    </>
);
}
