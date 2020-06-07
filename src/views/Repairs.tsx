import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { Repair } from "../features/repair";
import { Product } from "../features/product";
import { Repositories } from "../features/repos/Repositories";
import { RepairsList } from "../features/lists/repairs-list";
import { RepairCreate } from "../features/repair/repair-create";

export const Repairs: React.FC = () => {
  const [role, setRole] = useState<Role>('user')
  const [repairs, setRepairs] = useState<Repair[]>([])
  const [products, setProducts] = useState<Product[]>([])

  async function createRepair(name: string, description: string, image: string, carRegistration:string, contactNumber:number, time:number, userAssoc:string, productsAssoc:object ) {
    const newRepair: Repair = { id: Math.random() * 1000, name:name, description:description, carRegistration:carRegistration, contactNumber:contactNumber, image:image, time: time, state:true, userAssoc:userAssoc, productsAssoc:productsAssoc}
    setRepairs([...repairs, newRepair])
    window.location.reload();
  }

  useEffect(() => {
    fetchRepairs();
    fetchProducts();
  }, [])

  async function fetchRepairs() {
    const repairsRepository = new Repositories()
    const repairs = await repairsRepository.findAllRepairs()
    setRepairs(repairs)
  }

  async function fetchProducts() {
    const productsRepository = new Repositories()
    const products = await productsRepository.findAllProducts()
    setProducts(products)
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div className="view-content">
          <h2 className="title-section">Listado de reparaciones</h2>
          <RepairsList repairs={repairs} products={products}></RepairsList>
        </div>
        <div className="right-sidebar-content">
          <h2 className="title-section">Crear nueva reparación</h2>
          <RepairCreate onCreate={createRepair} repairs={repairs} isUser={false} userEmail={undefined}/>
        </div>
      </>
    </RoleContext.Provider>
  )
}