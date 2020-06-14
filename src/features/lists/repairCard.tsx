import React, { useState } from "react";
import { Repair } from "../repair";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Modal } from "../../core/components/modal/modal";
import { Repositories } from "../repos/Repositories";
import { Product } from "../product";

interface Props {
  repair: Repair
  products: Product[]
}
export const RepairCard: React.FunctionComponent<Props> = ({ repair , products}) => {

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

  function productsExtract(productsAssoc: object, products:object) {

    if ((products != null && typeof products != "undefined") && (productsAssoc != null && typeof productsAssoc != "undefined")) {
      let productID = ''
      let productName = ''
      if(typeof productsAssoc == "string"){
        return(
          Object.values(products).map(x => {
            productID = x.id
            productName = x.name
            if (productsAssoc == productID){
              return(<span className="related-products">{productName}</span>);
            }
          })
        )
      }
      else {
        return (
          <ul className="productsAssoc-list">
            {
              Object.values(repair.productsAssoc).map((item, i) => (
                <li key={i}>
                  {
                    Object.values(products).map(x => {
                      productID = x.id
                      productName = x.name
                      if (item == productID){
                        return(<span className="related-products">{productName}</span>);
                      }
                    })
                  }
                </li>
              ))
            }
          </ul>
        )
      }
    } else {
      return(
        <span className="related-products">NO EXISTEN PRODUCTOS ASOCIADOS</span>
      );
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
  const [repairContactNumber, setrepairContactNumber] = useState<any>('')
  const [repairTime, setrepairTime] = useState<any>(repair.time)
  const [repairUserAssoc, setrepairUserAssoc] = useState<string>(repair.userAssoc)
  const [repairProductsAssoc, setrepairProductsAssoc] = useState<object>(repair.productsAssoc)
  const [repairCarRegistration, setCarRegistration] = useState(repair.carRegistration)

  async function modifyrepair(id: Object, name: string, carRegistration:string, contactNumber:number, image: string, description: string, time:number, state:boolean, userAssoc: string, productsAssoc:object ) {
    const updateRepair: Repair = { id: repair.id, name: name,  description: description, carRegistration: carRegistration, contactNumber:contactNumber, image: image, time: time, state: state, userAssoc: userAssoc, productsAssoc:productsAssoc}
    setUpdateRepairs([...updateRepairs, updateRepair])
    editRepair(updateRepair)
  }

return (
  <>
    <div className="box-product">
      <img src={repair.image} className="img-box-product" alt={repair.name}/>
      <h4>{repair.name}</h4>
      <p>{repair.description}</p>
      <h5>Productos relacionados</h5>
      {productsExtract(repair.productsAssoc, products)}
      <table className="box-product-controls">
        <tbody>
        <tr>
          <td className="cell-table cell-state"><Icon className={repair.state ? "onboard-repair" : "finish-repair"}>info</Icon> {repair.state ? "En curso" : "Terminada"}</td>
          <td className="cell-table"><Icon>directions_car</Icon> {repair.carRegistration}</td>
          <td className="cell-table f-right"><Icon>phone</Icon> {repair.contactNumber}</td>
        </tr>
        <tr>
          <td className="cell-table"><Icon>person</Icon> {repair.userAssoc}</td>
          <td className="cell-table"><Icon>query_builder</Icon> {repair.time}</td>
          <td className="cell-table f-right padding-b-0"><Button className="f-right" onClick={() => repairDelete(repair.id)}><Icon>delete</Icon></Button>
            <Button className="f-right" onClick={() => modalEdit(repair)}><Icon>edit</Icon></Button> <Button className="f-right" onClick={() => repairFinished(repair)}><Icon>pending_actions</Icon></Button> </td>
        </tr>
        <tr id="modal-repair">
          <Modal show={state.show} handleClose={hideModal}>
            <div className={modalHeader}>
              <h3>Editando reparación</h3>
              <Button onClick={hideModal}><Icon>close</Icon></Button>
            </div>
            <div>
              <form className="form-type-post">
                <label htmlFor="nombre">Nombre de la reparación</label><br/>
                <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
                       value={repairName}
                       onChange={(event) => setrepairName(event.target.value)}></input><br/>
                <label htmlFor="carRegistration">Matrícula del vehículo</label><br />
                <input type="text" name="carRegistration" className="form-control" id="carRegistration" placeholder="Matrícula"
                       value={repairCarRegistration} onChange={(event) => setCarRegistration(event.target.value)} required></input><br />
                <label htmlFor="contactNumber">Número de contacto del vehículo</label><br />
                <input type="number" name="contactNumber" className="form-control" id="contactNumber" placeholder="Número de contacto"
                       value={repairContactNumber} onChange={(event) => setrepairContactNumber(event.target.value)} required></input><br />
                <label htmlFor="quantity">Tiempo de ejecución de la reparación</label><br/>
                <input type="number" name="quantity" className="form-control" id="quantity" placeholder="Tiempo de ejecución"
                       value={repairTime}
                       onChange={(event) => setrepairTime(event.target.value)}></input><br/>
                <label htmlFor="userAssoc">Usuario asociado de la reparación</label><br/>
                <input type="text" name="userAssoc" className="form-control" id="userAssoc" placeholder="Descripción"
                       value={repairUserAssoc}
                       onChange={(event) => setrepairUserAssoc(event.target.value)}></input><br/>
                <label htmlFor="description">Descripción del producto</label><br/>
                <textarea name="description" className="form-control" id="description" placeholder="Descripción" value={repairDescription} onChange={(event) => setrepairDescription(event.target.value)}></textarea><br/>
                <input type="hidden" name="id" className="form-control" value={repair.id}></input>
                <input type="hidden" name="state" className="form-control" value="true"></input><br/>
                <Button
                  onClick={() => modifyrepair(repair.id, repairName, repairCarRegistration, repairContactNumber, repairImage, repairDescription, repairTime, repair.state, repairUserAssoc, repairProductsAssoc)}>Modificar
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
