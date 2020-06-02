import React, { useState } from 'react'
import { Button } from '../../core/components/button/button'
import { Repair } from '../repair'

interface Props {
  onCreate(
    repairName: string,
    repairDescription: string,
    repairImage: string,
    repairTime: number,
    userAssoc: string,
    state: boolean
  ): void
  repairs: Repair[]
  isUser: boolean
  userEmail: string|undefined
}

export const RepairCreate: React.FunctionComponent<Props> = ({ onCreate, repairs, isUser, userEmail }) => {
  const [repairName, setrepairName] = useState('')
  const [repairDescription, setrepairDescription] = useState('')
  const [repairImage, setrepairImage] = useState('')
  const [repairTime, setrepairTime] = useState('')
  const [userAssoc, setuserAssoc] = useState('')

  return (
    <>
      <form action="/repairs/new" method="POST" className="form-type-post">
        <label htmlFor="nombre">Nombre de la reparación</label><br />
        <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
               value={repairName} onChange={(event) => setrepairName(event.target.value)} required></input><br />
        <label htmlFor="time">Tiempo estimado de ejecución</label><br />
        <input type="number" name="time" className="form-control" id="time" placeholder="Tiempo de ejecución"
               value={repairTime} onChange={(event) => setrepairTime(event.target.value)} required></input><br />
        <label htmlFor="urlimagen">Icono de reparación</label><br />
        <input type="text" name="image" className="form-control" id="urlimagen" placeholder="URL de la imagen"
               value={repairImage} onChange={(event) => setrepairImage(event.target.value)} required></input><br />
        <label htmlFor="descripcion">Descripción</label><br />
        <textarea name="description" className="form-control" id="descripcion" placeholder="Descripción"
               value={repairDescription} onChange={(event) => setrepairDescription(event.target.value)} required></textarea><br />
        <label htmlFor="user" className={isUser ? "display-none" : "display-block"}>Usuario asignado para la reparación</label><br className={isUser ? "display-none" : "display-block"} />
        <input type={isUser ? "hidden" : "text"} name="userAssoc" className="form-control" id="user" placeholder="Usuario asignado"
               value={isUser ? userEmail : userAssoc} onChange={(event) => setuserAssoc(event.target.value)} required></input><br className={isUser ? "display-none" : "display-block"} />
        <input type="hidden" name="state" className="form-control" id="validationDefault01"
               value="true"></input><br className={isUser ? "display-none" : "display-block"} />
        <Button submit>Crear Reparación</Button>
      </form>
    </>
  )
}
