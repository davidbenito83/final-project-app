import React, { useEffect, useState } from "react";
import { Button } from '../../core/components/button/button'
import { Repair } from '../repair'
import { User } from "../user";
import { Repositories } from "../repos/Repositories";
import { UserCard } from "../lists/userCard";
import { Product } from "../product";
import { ProductsCheckbox } from "../lists/products-checkbox";

interface Props {
  onCreate(
    repairName: string,
    repairDescription: string,
    repairImage: string,
    carRegistration: string,
    contactNumber:number,
    repairTime: number,
    userAssoc: string,
    productsAssoc: object,
    state: boolean
  ): void
  repairs: Repair[]
  isUser: boolean
  userEmail: string|undefined
}

export const RepairCreate: React.FunctionComponent<Props> = ({ onCreate, repairs, isUser, userEmail }) => {
  const [repairName, setrepairName] = useState('')
  const [repairDescription, setrepairDescription] = useState('')
  const [repairCarRegistration, setCarRegistration] = useState('')
  const [repairContactNumber, setrepairContactNumber] = useState('')
  const [repairImage, setrepairImage] = useState('')
  const [repairTime, setrepairTime] = useState('')
  const [userAssoc, setuserAssoc] = useState('')
  const [repairProductsAssoc, setrepairProductsAssoc] = useState('')

  const [users, setUsers] = useState<User[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, [])

  async function fetchUsers() {
    const usersRepository = new Repositories()
    const users = await usersRepository.findAllUsers()
    setUsers(users)
  }
  async function fetchProducts() {
    const productsRepository = new Repositories()
    const products = await productsRepository.findAllProducts()
    setProducts(products)
  }

  return (
    <>
      <form action="/repairs/new" method="POST" className="form-type-post">
        <label htmlFor="nombre">Nombre de la reparación</label><br />
        <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
               value={repairName} onChange={(event) => setrepairName(event.target.value)} required></input><br />
        <label htmlFor="time">Tiempo estimado de ejecución</label><br />
        <input type="number" name="time" className="form-control" id="time" placeholder="Tiempo de ejecución"
               value={repairTime} onChange={(event) => setrepairTime(event.target.value)} required></input><br />
        <label htmlFor="carRegistration">Matrícula del vehículo</label><br />
        <input type="text" name="carRegistration" className="form-control" id="carRegistration" placeholder="Matrícula"
               value={repairCarRegistration} onChange={(event) => setCarRegistration(event.target.value)} required></input><br />
        <label htmlFor="contactNumber">Número de contacto del vehículo</label><br />
        <input type="text" name="contactNumber" className="form-control" id="contactNumber" placeholder="Número de contacto"
               value={repairContactNumber} onChange={(event) => setrepairContactNumber(event.target.value)} required></input><br />
        <label htmlFor="urlimagen">Tipo de Reparación</label><br />
        <select name="image" className="display-block form-control" id="image" placeholder="Tipo" required onChange={(event) => setrepairImage(event.target.value)}>
          <option key="aceite" className="form-control" value="./images/cambio-aceite.png">Cambio Aceite</option>
          <option key="ruedas" className="form-control" value="./images/cambio-ruedas.png">Cambio Ruedas</option>
          <option key="amortiguadores" className="form-control" value="./images/amortiguadores.png">Cambio Amortiguadores</option>
          <option key="mecanica-general" className="form-control" value="./images/mecanica-general.png">Mecánica en General</option>
          <option key="chapa-pintura" className="form-control" value="./images/chapa-pintura.png">Chapa y pintura</option>
        </select>
        <label htmlFor="urlimagen">Productos asociados</label><br />
        <ProductsCheckbox products={products} />
        <label htmlFor="descripcion">Descripción</label><br />
        <textarea name="description" className="form-control" id="descripcion" placeholder="Descripción"
               value={repairDescription} onChange={(event) => setrepairDescription(event.target.value)} required></textarea><br />
        <label htmlFor="user" className={isUser ? "display-none" : "display-block"}>Usuario asignado para la reparación</label>
        {isUser ? <input type="hidden" name="userAssoc" value={userEmail}></input> : <select name="userAssoc" className={isUser ? "display-none" : "display-block form-control"} id="user" placeholder="Usuario asignado" required onChange={(event) => setuserAssoc(event.target.value)}>
          {users.map(user => (
            <option key={user.id} className="form-control" value={isUser ? userEmail : user.email}>{user.name}</option>
          ))}
        </select>}
        <input type="hidden" name="state" className="form-control" id="validationDefault01"
               value="true"></input><br className={isUser ? "display-none" : "display-block"} />
        <Button submit>Crear Reparación</Button>
      </form>
    </>
  )
}
