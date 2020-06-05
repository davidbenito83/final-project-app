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

  async function createRepair(name: string, description: string, image: string, carRegistration:string, time:number, userAssoc:string ) {
    const newRepair: Repair = { id: Math.random() * 1000, name:name, description:description, carRegistration:carRegistration, image:image, time: time, state:true, userAssoc:userAssoc}
    setRepairs([...repairs, newRepair])
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
        <div className="view-content">
          <h2 className="title-section">Listado de reparaciones</h2>
          <RepairsList repairs={repairs}></RepairsList>
        </div>
        <div className="right-sidebar-content">
          <h2 className="title-section">Crear nueva reparación</h2>
          <RepairCreate onCreate={createRepair} repairs={repairs} isUser={false} userEmail={undefined}/>
        </div>
      </>
    </RoleContext.Provider>
  )
}