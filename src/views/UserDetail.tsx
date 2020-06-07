import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { Repositories } from "../features/repos/Repositories";
import { RepairsList} from "../features/lists/repairs-list";
import { Repair } from "../features/repair";
import { RepairCreate } from "../features/repair/repair-create";

export const  UserDetail: React.FC = () => {

  let { id } = useParams();

  const [repairs, setRepairs] = useState<Repair[]>([]);

  async function createRepair(name: string, description: string, image: string, carRegistration:string, contactNumber:number, time: number, userAssoc: string) {
    const newRepair: Repair = {
      id: Math.random() * 1000,
      name: name,
      description: description,
      image: image,
      carRegistration: carRegistration,
      contactNumber: contactNumber,
      time: time,
      userAssoc: userAssoc,
      state: true
    };
    setRepairs([...repairs, newRepair]);
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  async function fetchUserDetail() {
    const userRepository = new Repositories();
    const repairs = await userRepository.findUserDetail(id);
    setRepairs(repairs);
  }

  const [role, setRole] = useState<Role>("user");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div className="view-content">
          <h2 className="title-section">Reparaciones asociadas al usuario: {id}</h2>
          <RepairsList repairs={repairs}></RepairsList>
        </div>
        <div className="right-sidebar-content">
          <h2 className="title-section">Crear reparación</h2>
          <RepairCreate onCreate={createRepair} repairs={repairs} isUser={true} userEmail={id}/>
        </div>
      </>
    </RoleContext.Provider>
  )
}