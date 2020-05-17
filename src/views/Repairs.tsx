import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";

export const Repair: React.FC = () => {

  let { id, task } = useParams()
  const [role, setRole] = useState<Role>('user')
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div>
          <h3>Detalles de la Tarea: {task} para el usuario {id}</h3>
          hola
        </div>
      </>
    </RoleContext.Provider>
  )
}