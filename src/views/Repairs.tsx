import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { Repair } from "../features/repair";
import { Repositories } from "../features/repos/Repositories";
import { RepairsList } from "../features/lists/repairs-list";
import { RepairCreate } from "../features/repair/repair-create";

export const Repairs: React.FC = () => {
  const [role, setRole] = useState<Role>('user')
  const [repairs, setRepairs] = useState<Repair[]>([])

  async function createRepair(name: string, description: string, image: string, time:number, userAssoc:string ) {
    const newProduct: Repair = { id: Math.random() * 1000, name:name, description:description, image:image, time: time, state:true, userAssoc:userAssoc}
    setRepairs([...repairs, newProduct])
    window.location.reload();
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const repairsRepository = new Repositories()
    const repairs = await repairsRepository.findAllRepairs()
    setRepairs(repairs)
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <h2 className="title-section">Listado de reparaciones</h2>
        <RepairsList repairs={repairs}></RepairsList>
        <h2 className="title-section">Crear nueva reparación</h2>
        <div className="wrapper">
          <div>
            <RepairCreate onCreate={createRepair} repairs={repairs} isUser={false} userEmail={undefined} />
          </div>
        </div>
      </>
    </RoleContext.Provider>
  )
}